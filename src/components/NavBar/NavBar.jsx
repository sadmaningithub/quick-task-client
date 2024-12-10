import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = e => {
        e.preventDefault();
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
                // An error happened.
            });
    }

    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li><Link to='' className="btn"> Watch Demo </Link></li>
                            <li><Link to='login' className="btn"> Login</Link></li>
                            <li><Link to='registration' className="btn"> Register</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-bold">QuickTask</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <Link className="btn"> Watch Demo </Link>

                    {
                        user ? <Link onClick={handleLogOut} className="btn"> Log Out </Link> : <> <Link to='login' className="btn"> Login</Link>
                            <Link to='registration' className="btn"> Register</Link> </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;