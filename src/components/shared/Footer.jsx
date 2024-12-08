import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>

                    <p className="text-xl font-bold">
                        QuickTask
                    </p>
                    <p >Turning your time into rewards, one task at a time.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="">
                    <h6 className="footer-title">Socials</h6>
                    <div className="flex flex-row gap-2 text-xl">
                        <Link> <FaFacebook /> </Link>
                        <Link> <FaLinkedin /> </Link>
                        <Link> <FaInstagram /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;