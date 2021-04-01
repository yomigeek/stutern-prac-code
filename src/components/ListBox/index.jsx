import React from "react";
import "./style.css";

const ListBox = ({list}) => {
  console.log(list, " + list");
  return (
    <div style={{display: "flex"}}>
      {list.map((item) => {
        return (
          <div className="ListBox-box" key={`list-box-`+ item.id}>
            {item.name} <br />
            (Job: {item.job})
          </div>
        );
      })}
    </div>
  );
};

export default ListBox;
