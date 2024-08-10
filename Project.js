import React from "react";
import project1 from "./Project1.png"
import project2 from "./project2.png"
import project3 from "./project-3.jpg"
import project4 from "./project-4.jpg"
import project5 from "./project-5.jpg"
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-blue-600 font-bold text-center mb-10"
            style={{textShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}
            >
               MY DESIGNS
            </h2>
            <div className="p-10 bg-blue-400 text-slate-50  flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full" style={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}>
                <div className="w-80 rounded">
                    <a href=
"https://super-bavarois-f1bcad.netlify.app/"
                        className="w-full h-full">
                        <img src=
{project1}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"
                
                >
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
"https://super-bavarois-f1bcad.netlify.app/">
                            Fully Functional Website
                        </a>
                    </h2>
                    <p>
                        This is a project built on HTML, CSS and JavaScript which tracks your progess in a website 
                        and stores that in the local storage.
                        A website is considered fully functional when many aspects of it are considered ace. Some of these things follow below:

The design and usability of your site must be great (people don’t like to navigate sites that are hard to use and/or lack a pleasing design and layout. Your site must also be mobile friendly (render well on all mobile platforms and scale well accordingly; everything must change to be accessible on mobile if the web version is not efficient). You also need good HTML and backend structure, which would mean your HTML must validate, use the best code, not have viruses or broken links, and should run as fast as possible). Lastly, if you do have forms to fill out on your website, they must be placed well and serve users well, and your landing pages have to be informational and sleek (otherwise you’ll have high bounce rates).

There are definitely more aspects to consider when developing a fully functioning website, but these are some of the most important matters to consider. You should always receive input from test users before launching your site after all these things are considered also.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-blue-400 text-slate-50 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full "
                            style={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}
                            >
                <div className="w-80 rounded">
                    <a href=
"https://super-bavarois-f1bcad.netlify.app/"
                       className="w-full h-full">
                        <img src=
{project2}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://super-bavarois-f1bcad.netlify.app/">
                           Website Login Form
                        </a>
                    </h2>
                    <p>
                        This is to login in to your account.This Website is created using HTML,CSS.
                        Login forms are used in almost every website and Application. A login form utilizes the credentials of a user, in order to authenticate their access. It generally consists of the typical username or email and password. But more fields can be added to improve the site’s security. These can be in the form of a passcode, PIN number, or a secret phrase. So indeed that a login form is an important aspect of your site to prevent unauthorized access. A beautiful login page can also attract a lot of visitors as well.
                    </p>
                </div>

                
            </div>

            {/* project 3 */}
            <div className="p-10 bg-blue-400 text-slate-50 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full "
                            style={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}
                            >
                <div className="w-80 rounded">
                    <a href=
"https://fascinating-panda-985f4c.netlify.app/"
                       className="w-full h-full">
                        <img src=
{project3}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://fascinating-panda-985f4c.netlify.app/">
                          AI Image Generator
                        </a>
                    </h2>
                    <p>
                    An AI image generator is a tool powered by artificial intelligence and designed to produce high-quality, realistic images based on textual descriptions or prompts. AI image generators serve as a valuable resource for creators who require visual content but may lack the expertise or resources for manual creation.
                    </p>
                </div>

                
            </div>

             {/* project 4 */}

             <div className="p-10 bg-blue-400 text-slate-50 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full "
                            style={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}
                            >
                <div className="w-80 rounded">
                    <a href=
"https://66b7567e2c58d1245d23cbd4--admirable-malabi-e9da23.netlify.app/"
                       className="w-full h-full">
                        <img src=
{project4}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://66b7567e2c58d1245d23cbd4--admirable-malabi-e9da23.netlify.app/">
                          FIVER WEBSITE
                        </a>
                    </h2>
                    <p>
                    Fiverr empowers individuals to transform their talents into thriving businesses by offering freelancers a unique platform to showcase their talents and connect with a global audience of potential customer. This thriving community welcomes individuals with diverse skill sets, ranging from graphic design and programming to content writing, translation to voice-over artistry. To assist aspiring freelancers, the following section outlines valuable tips for launching a successful Fiverr journey.
                    </p>
                </div>

                
            </div>

            {/* project 5 */}

            <div className="p-10 bg-blue-400 text-slate-50 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full "
                            style={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"}}
                            >
                <div className="w-80 rounded">
                    <a href=
"https://admirable-malabi-e9da23.netlify.app/"
                       className="w-full h-full">
                        <img src=
{project5}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://fascinating-panda-985f4c.netlify.app/">
                          Youtube Clone
                        </a>
                    </h2>
                    <p>
                    The YouTube clone project is a software development project that aims to recreate the
functionality and user experience of YouTube, but with a focus on using different and new
programming languages and frameworks to build the platform.
YouTube is a popular video streaming platform that has revolutionized the way people consume
video content. It allows users to upload, view, and share videos on a wide range of topics,
including music, education, entertainment, and more. With over 2 billion monthly active users
and over a billion hours of video watched daily, YouTube has become one of the most
significant platforms for video content on the internet. The platform has also introduced features
such as live streaming, video recommendations, and a wide range of user-generated content,
making it an essential platform for content creators, businesses, and individuals looking to share
their ideas, knowledge, and creativity with a global audience. YouTube's vast library of video
content and its easy-to-use interface make it a powerful tool for entertainment, education, and
communication, making it an indispensable part of our digital lives.
                    </p>
                </div>

                
            </div>


        </section>
    );
}
