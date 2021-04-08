import React, {useEffect, useState, useRef} from "react";
import Button from "../Button";
import {useSelector, useDispatch} from "react-redux";
import {loginData} from "./../../redux/actions/userAction";

const SimpleForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    type: "admin",
  });
  const [validateError, setValidateError] = useState(false);

  const userStore = useSelector(({user}) => user);

  const inputHandler = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setValidateError(false);
    if (inputs.username.trim() === "" || inputs.password.trim() === "") {
      console.log("error");
      setValidateError(true);
    } else {
      console.log(inputs, "inputs");
      const data = {
        type: inputs.type,
        username: inputs.username,
        password: inputs.password,
      };
      dispatch(loginData(data));
    }
  };

  const onButtonClick = (e) => {
    console.log(e.target.id + "-input", "iref");
    // document.getElementById(e.target.id + '-input').style.backgroundColor = "red";
    // document.getElementById(e.target.id + '-input').style.color = "white";
    // document.getElementById(e.target.id + '-input').disabled = false;

    inputRef.current.focus();
    // setDisabled(false);
    inputRef.current.disabled = false;
    // inputRef.current.style.color = "#fff";
  };

  useEffect(() => {
    if(userStore.loginSuccess) {
      window.location.href = '/dashboard';
    }
  }, [userStore.loginSuccess])

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "100px",
        }}
      >
        <form>
          <div className="">
            <input
              type="text"
              placeholder="Username"
              value={inputs.fullname}
              onChange={inputHandler}
              name="username"
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              value={inputs.email}
              onChange={inputHandler}
              name="password"
            />
          </div>
          <div className="">
            User Type:
            <select name="type" onChange={inputHandler}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <br />
          <Button text="submit" buttonAction={submitForm} />
          {validateError ? (
            <div
              style={{
                color: "red",
                fontSize: "12px",
              }}
            >
              Username or Password is empty!
            </div>
          ) : (
            ""
          )}
          {/* {userStore.errorMessage

          } */}
          <br />
          {userStore.loading ? 'Logging in...' : ''}
          <div
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {userStore.loginError ? userStore.errorMessage : ''}
          </div>
        </form>
        {/* <input
        type="text"
        ref={inputRef}
        disabled={disabled}
        value={"Yomi Olaoe"}
        id="3text-input"
        onChange={inputHandler}
				onClick={onButtonClick}
      />
      <button onClick={onButtonClick} id="3text">Edit</button> */}
      </div>
      {/* <input
        type="text"
        disabled={disabled}
        value={"Yomi Olaoe"}
        id="4text-input"
        onChange={inputHandler}
      />
      <button onClick={onButtonClick} id="4text">{disabled ? "Edit" : "Save Edit"}</button> */}
    </>
  );
};

export default SimpleForm;
