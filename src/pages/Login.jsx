import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen">

                <div className="flex flex-col items-center max-w-xl w-full ">

                    <div className="text-center lg:text-left mb-5">

                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>

                    <div className="card bg-base-100 w-full shadow-2xl ">

                        <form onSubmit={handleLogIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn" type="submit" value="Login" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;