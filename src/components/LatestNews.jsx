import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 py-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-2">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
              <Link to="/news">
                magi cudbo free free
              </Link>
              <Link to="/news">
                magi cudbo free free
              </Link>
              <Link to="/news">
                magi cudbo free free
              </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;