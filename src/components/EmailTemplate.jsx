export function EmailTemplate({ name, mobile, course, email }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>Email: {email}</h3>
      <h3>Course: {course}</h3>
    </div>
  );
}
