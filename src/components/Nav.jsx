const Nav = () => {
  return (
    <nav className="py-6 absolute top-0 left-0 right-0 text-white">
      <div className="container flex justify-between items-center">
        <a href="" className="logo text-3xl font-bold">
          sunnyside
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a href="" className="text-md">
              About
            </a>
          </li>
          <li>
            <a href="" className="text-md">
              Services
            </a>
          </li>
          <li>
            <a href="" className="text-md">
              Projects
            </a>
          </li>
          <li>
            <a
              className="btn bg-white rounded-full px-8 py-2 text-xl text-zinc-700"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
