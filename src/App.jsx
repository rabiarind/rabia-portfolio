import { motion } from "framer-motion";
import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Exploring from "./components/Exploring";
import Achievements from "./components/Achievements";


function App(){

const [darkMode,setDarkMode]=useState(false);


return(

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:0.8}}

>


<div className={darkMode ? "dark" : ""}>


<div className="
min-h-screen
bg-white
dark:bg-slate-900
dark:text-white
transition
">


<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>



<Hero/>

<About/>

<Achievements/>

<Education/>

<Experience/>
<Exploring/>

<Research/>

<Publications/>



<Skills/>

<Projects/>

<Contact/>



<footer className="
bg-slate-950
text-white
text-center
py-8
">


<p>
© 2026 Rabia Gul
</p>


<p className="
text-sm
mt-2
text-slate-400
">

AI Research | Data Science | Full Stack Development

</p>


</footer>



</div>


</div>


</motion.div>


)

}


export default App;