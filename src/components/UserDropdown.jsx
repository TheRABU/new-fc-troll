const UserDropdown = () => {
  return (
    <>
      <select
        defaultValue="Pick a language"
        className="select select-secondary"
      >
        <option disabled={true}>Pick a language</option>
        <option>Zig</option>
        <option>Go</option>
        <option>Rust</option>
      </select>
    </>
  );
};

export default UserDropdown;
