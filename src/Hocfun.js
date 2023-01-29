import React from "react";
import Counter from "./Counter";

const Hocfun = () => {
  return (
    <>
      <div style={{ width: "75%", margin: "10px auto" }}>
        <HocRed cmd={Counter} />
        <Hocgreen cmd={Counter} />
        <Hocyelloow cmd={Counter} />
      </div>
    </>
  );
};

export default Hocfun;

const HocRed = (props) => {
  return (
    <>
      <div style={{ width: "75%", margin: "10px auto" }}>
        <h2 style={{ backgroundColor: "red", fontSize: "35px" }}>
          <props.cmd />
        </h2>
      </div>
    </>
  );
};
const Hocgreen = (props) => {
  return (
    <>
      <div style={{ width: "75%", margin: "10px auto" }}>
        <h2 style={{ backgroundColor: "green", fontSize: "35px" }}>
          <props.cmd />
        </h2>
      </div>
    </>
  );
};

const Hocyelloow = (props) => {
  return (
    <>
      <div style={{ width: "75%", margin: "10px auto" }}>
        <h2 style={{ backgroundColor: "yellow", fontSize: "35px" }}>
          <props.cmd />
        </h2>
      </div>
    </>
  );
};
