"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

export default function HookForm() {
  const { handleSubmit, register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(`Hello ${data.firstName} ${data.lastName}`);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        FirstName:
        <input {...register("firstName")} />
      </label>
      <label>
        LastName:
        <input {...register("lastName")} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
