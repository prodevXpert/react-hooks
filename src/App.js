import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";
import MTable from "./sections/MTable";
function App() {
  // const counter = useSelector((state) => state.counter);
  // const currentUser = useSelector((state) => state.currentUser);
  // const tableSettings = useSelector((state)=>state.tableSettings)
  // const dispatch = useDispatch();

  return (
    <>
    <MTable/>
    </>
    
  );
}

export default App;
