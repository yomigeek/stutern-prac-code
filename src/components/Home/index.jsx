import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import NavBar from "./../NavBar";
import {fetchAllData} from "./../../redux/actions/dataAction";
import Spinner from "../../assets/spinner.svg";

const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // useEffect(() => {

  //   // dispatch(fetchAllData());
  // }, [dispatch]);

  // const { users, loading } = useSelector((state) => state.user);
  const { data, loading } = useSelector((state) => state.info);
  console.log(data, "store");
  return (
    <>
      <NavBar />
      <div>Welcome to the home page {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
      {loading && (
        <div>
          <img src={Spinner} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: 'wrap'
        }}
      >
        {data || [].map((user) => {
          return (
            <div key={user.id} style={{
              width: '200px',
              height: '10ppx',
              background: 'red',
              margin: '10px',
              padding: '30px'
            }}>
              {user.name} ({user.email})
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
