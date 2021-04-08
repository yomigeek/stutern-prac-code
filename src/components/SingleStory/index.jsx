import React from "react";
import queryString from 'query-string';
import Text from "./../Text";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const SingleStory = ({match}) => {
  const history = useHistory();
  const storyId = parseInt(match.params.id, 10);
  const dataStore = useSelector(({info}) => info);
  const val = dataStore.stories.filter((story) => story.id === storyId);
  const qStrings = queryString.parse(history.location.search);
  
  console.log(qStrings)

  return (
    <>
      <Text text="Welcome to SingleStory" />
      <a onClick={() => history.goBack()}>Back</a>
      <br />
      <a onClick={() => history.push(qStrings.q)}>Go to url</a>
      <br />
      complexity: {val[0].complexity}
      <br />
      cost: {val[0].cost}
      <br />
      description: {val[0].description}
      <br />
      status: {val[0].status}
      <br />
      summary: {val[0].summary}
      <br />
      {/* {dataStore.loading ? <SpinnerIcon /> : ''}
      {dataStore.stories.length > 0 && dataStore.stories.map((story) => {
        return <div key={story.id} style={{
          backgroundColor: 'orange',
          color: '#fff',
          padding: '20px',
          borderBottom: '1px solid #fff'
        }}>{story.summary}
        <div style={{
          textAlign: 'right',
        }}><a href='#' >View Story</a></div>
        </div>
      })} */}
    </>
  );
};

export default SingleStory;
