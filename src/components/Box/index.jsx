import React from "react";
import {Container, Content, Wrapper} from "./style";

const Box = ({text}) => (
  <>
    <Wrapper bgColor="#efefef" textColor>
      {text}
      <div>
          dummy text
      </div>
    </Wrapper>
    <Wrapper>
      {text}
      <div>
          dummy text
      </div>
    </Wrapper>
  </>
);

export default Box;
