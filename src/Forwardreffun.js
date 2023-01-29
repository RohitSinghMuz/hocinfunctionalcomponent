import React, { forwardRef, useState } from "react";

const Inputforrwardfun = forwardRef((props) => {
  return <input type="text" {...props} placeholder="Enter Text" />
});

const Forwardreffun = () => {
  const [text, settext] = useState("");
  const [data, setdata] = useState([]);

  const adddata = () => {
    let arr = {
      text,
    };
    setdata([...data, arr]);
  };
  return (
    <>
      <div style={{ width: "50%", margin: "15px auto" }}>
        <h2>Forwardref Example</h2>
        <Inputforrwardfun onChange={(e) => settext(e.target.value)} />
        <button onClick={adddata}>AddText</button>

        {data?.map((item) => {
          return (
            <>
              <h2>{item.text}</h2>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Forwardreffun;
