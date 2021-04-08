import React, {useEffect} from "react";
import NavBar from "./../NavBar";
import { Link, useHistory } from 'react-router-dom';
import Text from "./../Text";
import {ReactComponent as SpinnerIcon} from "../../assets/spinner.svg";
import {fetchAllData} from "../../redux/actions/dataAction";
import {useDispatch, useSelector} from "react-redux";

const Dashboard = () => {
  const history = useHistory();
  const dataStore = useSelector(({info}) => info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <>
      <Text text="Welcome to Dashboard" />
      {dataStore.loading ? <SpinnerIcon /> : ""}
      {dataStore.stories.length > 0 &&
        dataStore.stories.map((story) => {
          return (
            <div
              key={story.id}
              style={{
                backgroundColor: "orange",
                color: "#fff",
                padding: "20px",
                borderBottom: "1px solid #fff",
              }}
            >
              {story.summary}
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <a onClick={() => history.push(`/story/${story.id}?q=/login&v=2`)}>View Story</a>
                <br />
                <Link to={`/story/${story.id}`}>View Story Link</Link>
                
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Dashboard;
