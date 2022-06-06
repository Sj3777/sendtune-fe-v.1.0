import React from "react";
import { AnimatePresence } from "framer-motion";
import {Routes, Route} from 'react-router-dom';
import Login from './screens/Login'
import Register from './screens/Register'
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-screen flex justify-center items-center ">
        {/* <Navbar /> */}
        {/* <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full"> */}
           <Routes>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
           </Routes>
        {/* </main> */}
      </div>
    </AnimatePresence>
  );
}

export default App;
