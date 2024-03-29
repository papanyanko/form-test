'use client'

import { FormEvent } from "react";

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const firstName = form.get('firstName')
  const lastName = form.get('lastName')
  alert(`Hello ${firstName} ${lastName}`);
}

export default function UncontrolledForm() {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input type="text" name="firstName" defaultValue="" />
      </label>
      <label>
        LastName:
        <input type="text" name="lastName" defaultValue="" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
