import { handleSubmit } from "@/lib/handleSubmit";

export default function ServerActionForm() {
  return (
    <form action={handleSubmit}>
      <label htmlFor="firstName">
        FirstName:
        <input type="text" id="firstName" name="firstName" defaultValue="" />
      </label>
      <label htmlFor="lastName">
        LastName:
        <input type="text" id="lastName" name="lastName" defaultValue="" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
