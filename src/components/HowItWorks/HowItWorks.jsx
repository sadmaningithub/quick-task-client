import Title from "../Title/Title";
import { FaRegUser } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";


const HowItWorks = () => {
    return (
        <div>
            <div>
                <Title Heading={'How It Works'} subHeading={'Steps to earn money.'}></Title>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3">

                    <div className="text-center max-w-lg space-y-5 bg-fuchsia-50 p-10">
                        <div className="flex flex-row justify-center text-5xl">
                        <FaRegUser />
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                            <h1 className="font-bold">Register</h1>
                            <p>Sign up for free as a worker or task creator and gain instant access to opportunities. New users get bonus coins to start!</p>
                        </div>
                    </div>

                    <div className="text-center max-w-lg space-y-5 bg-fuchsia-200 p-10">
                        <div className="flex flex-row justify-center text-5xl">
                        <FaTasks />
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                            <h1 className="font-bold">Complete
                            Tasks</h1>
                            <p>Browse available tasks, follow the instructions, and submit your work. The process is quick and hassle-free.</p>
                        </div>
                    </div>

                    <div className="text-center max-w-lg space-y-5 bg-fuchsia-500 p-10">
                        <div className="flex flex-row justify-center text-5xl">
                        <FaCoins />
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                            <h1 className="font-bold">Earn Rewards</h1>
                            <p>Get rewarded instantly upon approval. Withdraw your earnings securely using your preferred method.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorks;