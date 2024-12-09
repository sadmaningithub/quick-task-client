

const Login = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen">

                <div className="flex flex-col items-center max-w-xl w-full ">

                    <div className="text-center lg:text-left mb-5">

                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>

                    <div className="card bg-base-100 w-full shadow-2xl ">

                        <form className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;