import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";


export default function Navbar({darkMode,setDarkMode}){


const [menuOpen,setMenuOpen]=useState(false);


const links=[

{
name:"About",
href:"#about"
},

{
name:"Research",
href:"#research"
},

{
name:"Skills",
href:"#skills"
},

{
name:"Projects",
href:"#projects"
},

{
name:"Contact",
href:"#contact"
}

];



return(

<nav className="
fixed
top-0
w-full
z-50
bg-white/70
dark:bg-slate-950/70
backdrop-blur-xl
border-b
border-white/20
">


<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
">


{/* Logo */}


<a

href="#"

className="
text-2xl
font-bold
bg-gradient-to-r
from-indigo-600
to-purple-600
text-transparent
bg-clip-text
"

>

Rabia Gul

</a>





{/* Desktop Menu */}


<div className="
hidden
md:flex
items-center
gap-8
">


{

links.map((link,index)=>(


<a

key={index}

href={link.href}

className="
text-slate-700
dark:text-slate-200
hover:text-indigo-600
transition
font-medium
"

>

{link.name}

</a>


))


}





{/* Dark Mode Button */}


<button

onClick={()=>setDarkMode(!darkMode)}

className="
text-indigo-600
text-xl
hover:scale-110
transition
"

>

{

darkMode ?

<FaSun/>

:

<FaMoon/>

}

</button>



</div>





{/* Mobile Buttons */}


<div className="
md:hidden
flex
items-center
gap-4
">


<button

onClick={()=>setDarkMode(!darkMode)}

className="
text-indigo-600
text-xl
"

>

{

darkMode ?

<FaSun/>

:

<FaMoon/>

}

</button>



<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
text-indigo-600
text-xl
"

>

{

menuOpen ?

<FaTimes/>

:

<FaBars/>

}

</button>



</div>



</div>





{/* Mobile Menu */}


{

menuOpen && (


<div className="
md:hidden
bg-white
dark:bg-slate-950
px-6
pb-6
">


<div className="
flex
flex-col
gap-5
">


{

links.map((link,index)=>(


<a

key={index}

href={link.href}

onClick={()=>setMenuOpen(false)}

className="
text-slate-700
dark:text-slate-200
hover:text-indigo-600
font-medium
"

>

{link.name}

</a>


))


}


</div>


</div>


)


}



</nav>


)

}