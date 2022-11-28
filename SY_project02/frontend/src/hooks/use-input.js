import { useState, useReducer } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
  isDoubleCheck: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  if (action.type === "CHECK") {
    return { isTouched: false, value: state.value, isDoubleCheck: true };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const DoubleCheckHandler = (event) => {
    dispatch({ type: "CHECK" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    DoubleCheckHandler,
    hasError,
    reset,
  };
};

export default useInput;
