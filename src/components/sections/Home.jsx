


export const Home = () => {



return(
    <section
    id="home"
    className="min-h-screen flex items-center justify-center relative"
    >
<div className="text-center z-10 px-4">
<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text  text-transparent loading-right">
    heyy iam mota
</h1>

<p className="text-gray-400  text-lg mb-8 max-w-lg mx-auto">

I’m a front-end developer with a background in IT engineering 
and educational technology. I enjoy building responsive, user-friendly web apps 
with React and exploring the intersection of AI and education.
</p>
<div className=" flex justify-center space-x-4">

  <a href="#projects"
  
  className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition  relative overflow-hidden
  hover:shadow-[0-0-15px-rgba(59,130,246,0.4)]"
  >

View Projects
  </a>


  <a href="#contact"
  
  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded 
  font-medium transition-all duration-200:-translate-y-0.5 hover:shadow-[0-0-15px-rgba(59,130,246,0.2)] hover:big-blue-500/10 "
  >

Contact
  </a>

</div>
</div>

    </section>
);
};