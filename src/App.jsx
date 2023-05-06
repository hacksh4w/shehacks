import React, {useState, useContext, createContext, useEffect} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Landing from "./pages/landing/landing";
import Signup from "./pages/signup/Signup";
import "./App.css";
export const ThemeContext = createContext();


export default function App() {
  {
    /* initialize();  for firebase */
  }
  const [signin,setSignin] = useState(false);
  const [signup,setSignup] = useState(false);
  const [user,setUser] = useState({});
  const [auths,setAuth] = useState({
    name:'',
    email:'',
    acctype:'',
    pass:'',
    confirmpass:'',
    signedin: false
  });
  const [wrongpass,setWrongPass] = useState(false)
 {/*} const [filters, setFilters] = useState({
    sliderValue:[1000,3600],
    wifi:false,
    ac: false,
    food:false,
    kitchen:false,
    pets:false,
    abathroom:false,
    sdeposit:false,
  })  */}
  return (
    <div className="App">
      <ThemeContext.Provider value={{user,setUser,wrongpass,setWrongPass,signup,signin,setSignin,setSignup,auths,setAuth}}>
       {/*  <Navbar/>
      ------------------------------Navbar----------------------------------- */}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Protecto</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Report
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Features
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Button
            </a>
          </div>
        </div>
      </nav>

      {/* ------------------------------Landing Page----------------------------------- */}

      <div>
        <h1>SheHacks Project</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Report Abuse
        </button>
      </div>
       
  
      

      {/* ------------------------------Features--------------------------------------------- */}
      <h2>Features</h2>
      <div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Therapy Session</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #1
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #2
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #3
          </span>
        </div>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Community Help</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #1
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #2
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #3
          </span>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Safe Vault</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #1
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #2
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #3
          </span>
        </div>
        <footer />
      </div>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route></Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
