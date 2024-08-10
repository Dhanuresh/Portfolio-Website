import React from "react";
import Dhanuresh from "./DHANURESH A.png";
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh] "
                   style={{boxShadow:"0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #0fff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",marginTop:"150px"}}
                   >
        <div className="flex-1 flex flex-col justify-center items-center gap-5v">
          <div>
           
            <h2 className="text-center  text-5xl font-bold
            bg-gradient-to-r from-yellow-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text
            ">
            WELCOME TO MY PORTFOLIO WEBSITE
            </h2>
          </div>
          <h2 className="text-center bg-gradient-to-r from-blue-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text font-bold">
           I AM DHANURESH A ,FULL STACK DEVELOPER.
           THIS WEBSITE IS CREATED USING REACTJS AND VISUAL STUDIO CODE.
           I AM SO EXCITED TO SHARE MY PORTFOLIO WITH YOU ALL!!! 

           
          </h2>
          <br></br>
          <h1 className="text-center bg-gradient-to-r from-blue-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text font-bold">
            KINDLY VISIT MY DESIGN PAGE🙋‍♂️🙋‍♂️ WHERE MY PROJECTS ARE DISPLAYED.KINDLY CLICK ON THE IMAGE OR TEXT TO VISIT THAT PATICULAR PROJECT FOR YOUR REFERENCE!!! 
          </h1>
        </div>
        <div className="flex-1">
          <img src=
{Dhanuresh}
               alt="Hello.svg"
               className="w-100 h-100 bg-cover mt-10"/>
        </div>
      </section>
    );
  }
