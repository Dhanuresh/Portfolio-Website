import React from "react";
export default function Skills() {
    const skills = ["JAVA", "HTML", "CSS", "JAVASCRIPT", "REACTJS", "NODEJS","MYSQL","FIGMA","CANVA","MONGODB","GIT","GITHUB"];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto"
            style={{textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",
                border: "5px solid white", borderRadius: "10px", boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff",}}
            >
            <h2 className="text-center text-6xl text-violet-600 font-bold">
                MY SKILLS
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 mb-10 
                                        rounded bg-blue-400 text-lg 
                                        text-gray shadow-lg shadow-violet-600 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl
                                        hover:shadow-violet-600 hover:scale-[150%] hover:text-white

                                        
                                        ">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}
