import React from "react";
import certificate1 from "./certificate1.png"
import certificate2 from "./certificate2.png"
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... max-w-5xl mx-auto mt-40">
            <div className="flex-1">
                <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center  
                                   text-5xl font-bold bg-gradient-to-r from-blue-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text">
                       ABOUT ME :
                    </h2>
                </div>
                <p className="bg-gradient-to-r from-blue-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text font-bold">
                   I AM DHANURESH A
                </p>
                <p className="bg-gradient-to-r from-blue-300 via-green-400 to-slate-100 inline-block text-transparent bg-clip-text font-bold">
                Enthusiastic graduate seeking to start a career as an entry-level FULL STACK DEVELOPER with a reputed firm driven by technology. Proficient in 
                <ol style={{listStyleType:"number"}}className="ml-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>ExpressJS</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>UI/UX-FIGMA & CANVA</li>
                </ol>
                Passionate about implementing and launching new projects.
                I have also completed my full stack development course from edureka and completed internship from them.
                I HAVE ATTACHED MY CERTIFICATE FOR YOUR REFERENCE!!!!
                <img src={certificate1} alt="certificate" className="w-2/3 mt-5 d-flex"/>
                <img src={certificate2} alt="certificate" className="w-2/3 mt-5 d-flex"/>
                </p>
              
            </div>
        </section>
    );
}
