import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaCoins } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";


const Dashboard = () => {

    const { user, logOut  } = useContext(AuthContext)

    const [loggedUser, setLoggedUser] = useState(null)
    const navigate = useNavigate()

    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoggedUser(data)
                console.log(data.profilePicture);
            })

    }, [user])

    const handleLogOut = e => {
        e.preventDefault();
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate('/')
            }).catch((error) => {
                console.log(error);
                // An error happened.
            });
    }

    const workerNav = <>

        <li> <Link> Home </Link> </li>
        <li> <Link> Tasklist </Link> </li>
        <li> <Link> My Submissions </Link> </li>
        <li> <Link> Withdrawals </Link> </li>

    </>

    const taskCreatorNav = <>

        <li> <Link> Home</Link> </li>
        <li> <Link> Add New Task</Link> </li>
        <li> <Link> My Tasks</Link> </li>
        <li> <Link> Purchase Coin</Link> </li>
        <li> <Link> Payment History</Link> </li>

    </>

    const adminNav = <>

        <li> <Link to='adminHome'>Home </Link></li>
        <li> <Link>Manage Users </Link></li>
        <li> <Link>Manage Task </Link></li>


    </>

    return (
        <div>

            <header>

                {/* navbar */}

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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    loggedUser?.role === 'Admin' && adminNav
                                }
                                {
                                    loggedUser?.role === 'TaskCreator' && taskCreatorNav
                                }
                                {
                                    loggedUser?.role === 'Worker' && workerNav
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                loggedUser?.role === 'Admin' && adminNav
                            }
                            {
                                loggedUser?.role === 'TaskCreator' && taskCreatorNav
                            }
                            {
                                loggedUser?.role === 'Worker' && workerNav
                            }
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">

                        <span className="btn btn-ghost btn-circle flex flex-row items-center">
                            <FaCoins /> 30
                        </span>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile picture"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        
                                    </a>
                                </li>
                                <li><a>Settings</a></li> 
                                <li> <Link onClick={handleLogOut}> Logout </Link> </li>
                                
                            </ul>
                        </div>

                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
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
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                
                            </div>
                        </button>


                    </div>
                </div>
            </header>

            <Outlet></Outlet>

            <footer>

            </footer>

        </div>
    );
};

export default Dashboard;