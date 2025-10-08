export function EmailEnqTemplate({ name, mobile, requirement, message }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>message: {message}</h3>
      <h3>requirement: {requirement}</h3>
    </div>
  );
}
