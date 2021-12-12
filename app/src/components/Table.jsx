import React, { useState } from "react";
import ItemsDND from "./ItemsDND";

function Table() {
  const [users, setUsers] = useState([
    { id: "1", name: "javad" },
    { id: "2", name: "ali" },
    { id: "3", name: "mohammad" },
  ]);

  const itemStyle = {
    // color: "skyBlue",
    // border: "1px solid #ccc",
    // marginBottom: '1rem', // should not be here
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "yellow",
    border: "1px solid black",
    width: '400px',
    height: "300px",
  };

  return (
    <ItemsDND
      items={users}
      setItems={setUsers}
      itemStyle={itemStyle}
      boxStyle={boxStyle}
    />
  );
}

export default Table;
