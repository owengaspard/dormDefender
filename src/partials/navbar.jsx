function navbar() {
  return (
    <div className="navbar p-2 bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="/about">About</a></li>
                <li>
                <a>Housing Options</a>
                <ul className="p-2">
                    <li><a href="https://www.lsu.edu/housing/options/index.php">Contact LSU Housing</a></li>
                    <li><a href="https://www.lsu.edu/police/">LSU Police</a></li>
                </ul>
                </li>
                <li><a>Log in</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl" href="/">Tiger Dorm Defender</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href="/about">About</a></li>
            <li>
                <details>
                <summary>Resources</summary>
                <ul className="p-2">
                    <li><a href="https://www.lsu.edu/housing/options/index.php">Contact LSU Housing</a></li>
                    <li><a href="https://www.lsu.edu/police/">LSU Police</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a href="register" className="btn">Register Room</a>
        </div>
        </div>
  )
}

export default navbar