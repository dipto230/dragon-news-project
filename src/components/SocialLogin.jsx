import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
          <h2 className="font-semibold">Login With</h2>
          <div className="*:w-full space-y-3">
          <button className="btn"><FaGoogle />Login with Google</button>
          <button className="btn"><FaGithub></FaGithub>Login With Github</button> 

          </div>  
        </div>
    );
};

export default SocialLogin;