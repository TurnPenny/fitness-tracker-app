const Nav = () => {
  return (
    <nav className='w-screen bg-gray-400 p-2 text-white flex justify-between'>
      {/* left */}
      <p>Name</p>
      {/* left */}
      {/* right */}
      <ul className='flex mx-1'>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Register</li>
      </ul>
      {/* right */}
    </nav>
  );
};

export default Nav;
