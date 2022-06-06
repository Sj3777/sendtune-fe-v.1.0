import React from "react";
import Signin from "../assests/sigin3.png";
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
function Register() {
  return (
    <div className="h-3/4 w-3/4 flex bg-white rounded-lg p-2">
      {/* first half */}
      <div className="flex flex-1 justify-center items-center text-center text-white ">
        <form className="mt-4 w-full mx-20 space-y-6 " action="#" method="POST">
          <div className=" flex flex-col mx-1">
            <p className="text-3xl mx-0 text-gray-500 font-normal">
              Create your account today.
            </p>
            <p className="text-3xl mx-0 text-gray-500 font-normal">
              No credit card needed.
            </p>
          </div>
          <div className="rounded-md shadow-sm ">
            <div>
              <input
                id="email-address"
                name="Username"
                type="text"
                autoComplete="username"
                required
                className="w-80 px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className="mt-5">
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
            <p className="w-50 mr-3 text-orange-500 text-sm font-semibold">
              Forgot your password?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-40 py-3 px-4 mt-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Create an account
            </button>
          </div>
          <div className="display-inline flex flex-col">
              <p className="text-gray-500 text-sm font-bold">By signing up, you are creating a Sentune account, and you agree to Sentune's
              <span className="text-orange-500 text-sm font-bold"> Terms and Use </span>
              and
              <span className="text-orange-500 text-sm font-bold"> Privacy Policy.</span>
              </p>
          </div>
        </form>
      </div>
      <div class="border-l-2 border-orange-500"></div>
      {/* Send half */}
      <div className="flex flex-1 text-center text-white justify-center items-center">
        <div className="flex-col items-center">
          <div className="flex items-center justify-center">
            <img src={Signin} alt="sigin-logo" className="w-60 h-60" />
          </div>
          <div className="flex justify-center items-center flex-col">
              <div className="flex border border-color-gray-600 rounded-lg py-3 px-8 text-gray-500 text-sm font-semibold cursor-pointer"><FcGoogle className="w-5 h-5 mr-2"/>Sign up with Google</div>
              <div className="flex mt-2 border border-color-gray-600 rounded-lg py-3 px-8 text-gray-500 text-sm font-semibold cursor-pointer"><FaApple className="w-5 h-5 mr-2"/>Sign up with Apple</div>
          </div>
          <div>
            <p className="text-gray-500 text-xl mt-5">Already have an account? <span className="text-orange-500 text-xl">Sign in now!</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
