
import Title from "../Title/Title";
import { FaCoins } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";


const Features = () => {
    return (
        <div className="mb-24">
            <div className="mb-10">
                <Title Heading={"Key Features of QuickTask"} subHeading={'Everything you need to make earning simple, secure, and seamless.'}></Title>
            </div>

            <div>
                <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-10">
                    
                    <div className="text-center max-w-lg space-y-5">
                        <div className="flex flex-row justify-center text-5xl">
                            <FaCoins />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold">Earn Coins by Completing Tasks</h1>
                            <p>Take on simple micro-tasks, complete them, and earn coins that can be redeemed for real rewards. Start earning today!</p>
                        </div>
                    </div>

                    <div className="text-center max-w-lg space-y-5">
                        <div className="flex flex-row justify-center text-5xl">
                        <FaClipboard />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold">Create and Manage Tasks</h1>
                            <p>As a task creator, easily post tasks with clear instructions and reward options. Manage submissions and payments effortlessly.</p>
                        </div>
                    </div>

                    <div className="text-center max-w-lg space-y-5">
                        <div className="flex flex-row justify-center text-5xl">
                        <RiSecurePaymentLine />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold">Secure Payments</h1>
                            <p>Enjoy hassle-free, secure transactions for task rewards and coin purchases through trusted payment gateways.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Features;