'use server'

export async function handleSubmit(form: FormData) {
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");
  console.log(`Hello, ${firstName} ${lastName}!`);
}
