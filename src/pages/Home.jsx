import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Testimonial from "../components/Testimonial/Testimonial";
import TopEarners from "../components/TopEarners/TopEarners";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <TopEarners></TopEarners>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;