
import { FaGithub } from "react-icons/fa";


export const About = ()=>{

const frontednSkills = [
    "React", 
    "Vue",
     "TypeScript" ,
    
    ];

    const backendSkills = [
       
        "AWS",
      
        ];
    










    return(
        <section
        
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        
        >

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl  font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-withe/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    I have a background in IT engineering and a master’s in Computer Education and Instructional Technology (CEIT). My technical skills include front-end development with React and JavaScript, as well as a solid understanding of data structures and algorithms.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                   <h3> Frontend</h3>
                   <div className="flex flex-wrap gap-2">
{frontednSkills.map((tech, key)=>
<span
key={key}
className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
 hover:shadow-[0-2px-8px-rgba(59,130,2246,0.2 transition">

    {tech}

    
</span>


)}


 </div>
            

                   </div>




                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                   <h3> BackEnd</h3>
                   <div className="flex flex-wrap gap-2">
{backendSkills.map((backendSkills, key)=>
<span
key={key}
className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
 hover:shadow-[0-2px-8px-rgba(59,130,2246,0.2)] transition">

    {backendSkills}

    
</span>


)}


           </div>
            
         </div>
      </div>
   </div>

<div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 ">  Education </h3>
    <ul className="list-disc list-inside space-y-1" >
        <li>
            <strong> B.S. in IT engineering    </strong> Tehran University North Branch
        </li>
 
        <li>
            <strong> M.Sc. in Computer Education and Instructional Technology   </strong> 
            Middle East Technical University  (ODTÜ)
        </li>

    </ul>

    </div>

    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 ">  Work Experience </h3>
    <a href="https://github.com/motahbashir"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
    >
  <FaGithub className="text-xl" />
         View My GitHub Profile 
    </a>

    </div>

</div>

 </div>
      
        

        </section>
    );
};