import { LoadingScreen } from './components/LoadingScreen'
import './App.css'
import"./index.css"
import { useState } from 'react'
import {Navbar}  from  "./components/Navbar"
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import {Projects} from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
 
  const [isLoaded, setIsLoaded] = useState(false);
  const[menueOpen, setMenueOpen]= useState(false);

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{""}
      <div  className={ `min-h-screen transition-opacity duration-700  ${
       isLoaded ?"opacity-100" :"opacity-0" }
       bg-black text-gray-100`}>


      <Navbar menueOpen={menueOpen}  setMenueOpen={setMenueOpen}/>
      <MobileMenu menueOpen={menueOpen}  setMenueOpen={setMenueOpen}/>
      <Home/>
      <About/>
      <Projects/>
      <Contact></Contact>
      </div>
    </>
  )
}

export default App;
