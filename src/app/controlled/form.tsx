"use client";

import {
  ChangeEventHandler,
  FormEvent,
  useReducer,
} from "react";

const initialValue = {
  firstName: "",
  lastName: "",
};
type State = typeof initialValue;
type Action = {
  type: string;
  payload: Partial<State>;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INPUT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default function ControlledForm() {
  const [values, dispatch] = useReducer(reducer, initialValue);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Hello, ${values.firstName} ${values.lastName}!`);
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: "INPUT",
      payload: { [e.currentTarget.name]: e.currentTarget.value },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        LastName:
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
