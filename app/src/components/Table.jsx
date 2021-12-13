import React, { useState } from "react";
import ItemsDND from "./ItemsDND";

function Table() {
  const [users, setUsers] = useState([
    { id: "1", name: "javad", age: '26' },
    { id: "2", name: "ali", age: '23' },
    { id: "3", name: "mohammad", age: '20' },
    { id: "4", name: "hasan", age: '20' },
    { id: "5", name: "arghun", age: '26' },
    { id: "6", name: "reza", age: '26' },
  ]);

  return (
    <ItemsDND
      items={users}
      setItems={setUsers}
    />
  );
}

export default Table;
