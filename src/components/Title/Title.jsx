

const Title = ({Heading, subHeading}) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-5">{Heading}</h1>
            <h3 className="text-xl mb-5">{subHeading}</h3>
        </div>
    );
};

export default Title;