import React from "react";
import Signin from "../assests/sigin.png"
function Login() {
  return (
    <div className="h-3/4 w-3/4 flex bg-white rounded-lg p-2">
      {/* first half */}
      <div className="flex flex-1 justify-center items-center text-center text-white ">
        <form className="mt-4 w-full mx-20 space-y-6 " action="#" method="POST">
          <div className=" flex flex-start mx-12">
            <p className="text-3xl mx-0 text-gray-500 font-normal">Login</p>
          </div>
          <div className="rounded-md shadow-sm ">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-80 px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mt-5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-80 px-4 py-3 mb-0 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="w-70 mr-12 flex justify-end">
            <p className="w-50 mr-3 text-orange-500 text-sm">
              Forgot your password?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-40 py-3 px-4 mt-12 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Login
            </button>
          </div>
        </form>
      
      </div>
      <div class="border-l-2 border-orange-500"></div>
      {/* Send half */}
      <div className="flex flex-1 text-center text-white justify-center items-center">
        <div className="flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={Signin} alt="sigin-logo" className="w-60 h-60 "/>
        </div>
        <div>
          <p className="text-gray-500 text-3xl">Don't have a sentune account?</p>
          <p className="text-orange-500 text-3xl">Sign up now!</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
