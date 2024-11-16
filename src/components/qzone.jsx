import swimming from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playgroud from "../assets/playground.png";

const Qzone = () => {
    return (
        <div className="bg-gray-100-100" >
        <h2 className="font-semibold">Q-Zone</h2>
            <div>
            <img className="w-[200px] h-[200px]" src={swimming} alt=""/>

            </div>
            <div>
            <img className="w-[200px] h-[200px]" src={classroom} alt=""/>

            </div>
            <div>
            <img className="w-[200px] h-[200px]" src={playgroud} alt=""/>

            </div>

        </div>
    );
};

export default Qzone;