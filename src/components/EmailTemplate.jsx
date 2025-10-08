export function EmailTemplate({ name, mobile, course, location }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>Course: {course}</h3>
      <h3>Location: {location}</h3>
    </div>
  );
}
