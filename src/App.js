import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  console.log("nksdgbfsdgfsdf", currentUser, counter);
  const dispatch = useDispatch();

  const user = { name: "Shakir" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  return (
    <div>
      {currentUser.loggedIn ? (
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            LogOut
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login
          </button>
        </>
      )}

      <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch(allActions.counterActions.increment())}>Increase</button>
      <button onClick={()=>dispatch(allActions.counterActions.decrement())}>Increase</button>
    </div>
  );
}

export default App;
