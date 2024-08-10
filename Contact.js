import React from "react";
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 text-blue-500
                 
                 
                 font-bold align-center max-w-5xl mx-auto p-3"
                 style={{textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",
                    border: "5px solid white", borderRadius: "10px", boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",}}
                 >
            <h2 className="text-5xl font-bold text-blue-500 text-center"
            style={{
                textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",
                
            }}
            >
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.linkedin.com/in/dhanuresh-a-16a005280/">
                    Linkedin :
                    <span className="font-bold text-blue-500">
                       Linkedin
                    </span>
                    <p>Email:dhanuresh2001@gmail.com</p>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://github.com/Dhanuresh">
                    Github :
                    <span className="font-bold">
                        Github
                    </span>
                    <p>Phone No: 82xx890xxx</p>
                </a>
            </div>

            <video className="h-full w-full rounded-lg" controls autoPlay>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

        </section>
    );
}
