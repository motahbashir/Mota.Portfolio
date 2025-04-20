import { useEffect } from "react"

export const MobileMenu= ({ menueOpen, setMenueOpen}) =>{
 

    return (

        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out 
        
        ${
menueOpen

? "h-screen opacity-100 pointer-events-auto"
:"h-0 opacity-0 pointer-events-none"

        }
        
        
        `}
        >

            <button onClick={()=> setMenueOpen(false)}
                className="absolute top-6 right-6 text-white  text-3xl focuse:outline-none cursor-pointer"
                aria-label="close menu">
                &times;
            </button>




            <a  
href="#home"

onClick={()=>setMenueOpen(false)}
className={` text-2xl font-semibold text-white 
    my-4 transform transition-transform duration-300
     ${
        menueOpen
        ?"opacity-100  translate-y-0"
        :"opacity-0 translate-y-5"
     }

`}



>

    {""}
    Home{" "}

</a>



            <a  
href="#about"
onClick={()=>setMenueOpen(false)}
className={` text-2xl font-semibold text-white 
    my-4 transform transition-transform duration-300
     ${
        menueOpen
        ?"opacity-100  translate-y-0"
        :"opacity-0 translate-y-5"
     }

`}



>

    {""}
    about{" "}

</a>

<a  
href="#projects"
onClick={()=>setMenueOpen(false)}
className={` text-2xl font-semibold text-white 
    my-4 transform transition-transform duration-300
     ${
        menueOpen
        ?"opacity-100  translate-y-0"
        :"opacity-0 translate-y-5"
     }

`}



>

    {""}
    projects{" "}

</a>


<a  
href="#Contact"
onClick={()=>setMenueOpen(false)}
className={` text-2xl font-semibold text-white 
    my-4 transform transition-transform duration-300
     ${
        menueOpen
        ?"opacity-100  translate-y-0"
        :"opacity-0 translate-y-5"
     }

`}



>

    {""}
    Contact {" "}

</a>


        </div>
    );
 
}