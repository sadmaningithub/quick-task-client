import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegistration = e => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const profilePicture = form.profilePicture.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, profilePicture, role, email, password }
        console.log(user);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateUser(name, profilePicture)
                    .then(() => {
                        // Profile updated!
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registration Successful!",
                            showConfirmButton: false,
                            timer: 2000
                          });

                          navigate('/')
                        // ...
                        
                    }).catch((error) => {
                        console.log(error);
                        // An error occurred
                        // ...
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            })

    }

    return (
        <div className="mb-24">
            <div className="flex flex-col justify-center items-center min-h-screen">

                <div className="flex flex-col items-center max-w-xl w-full ">

                    <div className="text-center lg:text-left mb-5">

                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>

                    <div className="card bg-base-100 w-full shadow-2xl ">

                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture Url</span>
                                </label>
                                <input type="url" placeholder="url" name="profilePicture" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select name="role" className="select select-bordered w-full">
                                    <option disabled defaultValue={'Worker'}></option>
                                    <option>Worker</option>
                                    <option>TaskCreator</option>
                                </select>
                            </div>
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
                                <input className="btn" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;