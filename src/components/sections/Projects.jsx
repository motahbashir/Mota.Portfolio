export const Projects =()=>{

return(

<section

id="projects"

className="min-h-screen flex  items-center justify-center
py-20"


>

    <div>

<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">

Featured projects

</h2>

<div className="grid frid-cols md:grid-cols-2 gap-6">

<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
hover:border-blue-500/30 hover:shadow-[0-2px-8px-rgba(59,130,246,0.2)]">
    <h3 className="text-xl font-bold mb-2"> Movie App</h3>
   
 <p className="text-gray-400 mb-4"> You can search for movies and mark them as your favorites.</p>
 <div className="flex flex-wrap gap-2 mb-4">

{   
   [ "React",
    "Vite",
   " JavaScript (ES6+)",
    "CSS Modules",
    "React Router",].map((tech , key) =>(

<span
key={key}
className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20
 hover:shadow-[0-2px-8px-rgba(59,130,246,0.1)] transition-all">

    {tech}

    
</span>


    ))}

 </div>
 <div className="flex justify-between items-conter">
    <a 
    href="https://github.com/motahbashir/MovieApp"
    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    
    >
        {""}

        View Project 

        </a>

 </div>
</div>

    
</div>


    </div>

</section>


)

}