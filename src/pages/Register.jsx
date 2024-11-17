import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createNewUser,  setUser , updateUserProfile}=useContext(AuthContext);
    const Navigate =useNavigate();
    const handleSubmit =(e)=>{
e.preventDefault();
const from =new FormData(e.target);
const name =from.get("name");
const email =from.get("email");
const photo =from.get("photo");
const password =from.get("password");
console.log({name,photo,email,password});
createNewUser(email,password)
.then(result=>{
const user = result.user;
setUser(user);
updateUserProfile({ displayName: name, photoURL: photo })
.then(()=>{
  Navigate("/");

}).catch(err=>{
  console.log(err);
});

})
.catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
});
    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-10">
        <h2  className="text-2xl font-semibold text-center">Register with your account </h2>
     <form onSubmit={handleSubmit} className="card-body">
     <div className="form-control">
         <label className="label">
           <span className="label-text">Photo-Url</span>
         </label>
         <input name="photo" type="photo-url" placeholder="photo-url" className="input input-bordered" required />
       </div>
     <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input name="name" type="name" placeholder="name" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input name="email" type="email" placeholder="email" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input name="password" type="password" placeholder="password" className="input input-bordered" required />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-neutral rounded-none">Register</button>
       </div>
     </form>
     <p className="font-semibold">Already have an account? {""}<Link className="text-red-500" to="/auth/login">Login</Link></p>
   </div>
           
       </div>
    );
};

export default Register;