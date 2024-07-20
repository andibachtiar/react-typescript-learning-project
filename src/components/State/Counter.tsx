import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  } else if (action.type === "decrement" && state.count > 0) {
    return { count: state.count - action.payload };
  } else if (action.type === "reset") {
    return { count: 0 };
  } else {
    return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
