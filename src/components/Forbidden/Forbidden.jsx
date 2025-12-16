import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/animations/forbidden.json";
import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie
        animationData={forbiddenAnimation}
        loop={true}
        autoplay={true}
        style={{ height: 200, width: 200 }}
      />
      <h1 className="text-3xl font-bold text-red-500">
        Tou Are Forbidden to Access This Page
      </h1>
      <div className="flex flex-row gap-2">
        <Link to="/" className="mt-2 text-blue-500 underline">
          Go Back Home
        </Link>
        <Link to="/" className="mt-2 text-blue-500 underline">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
