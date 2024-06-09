import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navElement = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        {/* <li><NavLink to='/experience'>Experience</NavLink></li> */}
        <li><NavLink to='/education'>Education</NavLink></li>
        <li><NavLink to='/contact'>Contact Me</NavLink></li>
        <li><NavLink to='/about-me'>About Me</NavLink></li>

    </>
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-3xl px-2 py-4 bg-slate-400 dark:text-white sticky top-0 z-40 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-700">
                        {navElement}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Izaz Ahmed Emon</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navElement}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;