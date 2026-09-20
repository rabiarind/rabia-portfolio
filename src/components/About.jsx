import { motion } from "framer-motion";
import {
FaGraduationCap,
FaBrain,
FaCode,
FaUniversity
} from "react-icons/fa";


export default function About(){


const stats=[

{
number:"MS",
title:"Data Science",
icon:<FaGraduationCap/>
},

{
number:"AI",
title:"Research Focus",
icon:<FaBrain/>
},

{
number:"Full Stack",
title:"Development",
icon:<FaCode/>
},

{
number:"TA",
title:"Mehran University",
icon:<FaUniversity/>
}

];


return(

<section
id="about"

className="
relative
py-24
px-6
bg-gradient-to-b
from-white
via-indigo-50/40
to-white
overflow-hidden
"


>


{/* Decorative circles */}

<div className="
absolute
top-20
left-10
w-40
h-40
bg-purple-200
rounded-full
blur-3xl
opacity-40
">
</div>


<div className="
absolute
bottom-10
right-10
w-52
h-52
bg-cyan-200
rounded-full
blur-3xl
opacity-30
">
</div>




<div className="
max-w-6xl
mx-auto
relative
z-10
">



{/* Heading */}

<motion.div

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="
text-center
mb-14
"

>


<p className="
text-indigo-600
font-semibold
tracking-widest
uppercase
text-sm
">

Who I Am

</p>


<h2 className="
text-5xl
font-bold
mt-3
text-slate-900
">

About Me

</h2>


<p className="
mt-5
max-w-3xl
mx-auto
text-lg
text-slate-600
leading-relaxed
">

A Computer Science graduate and MS Data Science student
passionate about Artificial Intelligence, Machine Learning,
Quantum Computing, and building intelligent software solutions.

</p>


</motion.div>





{/* Main Glass Card */}


<motion.div

initial={{opacity:0,scale:0.95}}

whileInView={{opacity:1,scale:1}}

viewport={{once:true}}

className="
bg-white/70
backdrop-blur-xl
rounded-3xl
shadow-2xl
border
border-white
p-8
md:p-12
"


>



<div className="
grid
md:grid-cols-3
gap-10
items-center
">



{/* Left */}

<div className="
md:col-span-2
">


<h3 className="
text-3xl
font-bold
text-slate-900
">

Building Intelligence Through Technology

</h3>


<p className="
mt-5
text-slate-600
text-lg
leading-relaxed
">


I am currently working as a Teaching Assistant at
Mehran University of Engineering and Technology while
pursuing my MS in Data Science.


<br/><br/>


My interests lie at the intersection of
Artificial Intelligence, Machine Learning,
Quantum Machine Learning, Variational Quantum Circuits,
Edge Computing, and Full Stack Development.


<br/><br/>


I enjoy exploring emerging technologies,
developing practical solutions, and sharing knowledge
through teaching and mentoring.


</p>



<div className="
flex
flex-wrap
gap-3
mt-8
">


<span className="
px-4 py-2
rounded-full
bg-indigo-100
text-indigo-700
">

Artificial Intelligence

</span>


<span className="
px-4 py-2
rounded-full
bg-purple-100
text-purple-700
">

Quantum ML

</span>


<span className="
px-4 py-2
rounded-full
bg-cyan-100
text-cyan-700
">

Edge AI

</span>


</div>


</div>





{/* Right Stats */}


<div className="
grid
grid-cols-2
gap-4
">


{

stats.map((item,index)=>(


<motion.div

key={index}

whileHover={{y:-8}}

className="
bg-white
rounded-2xl
p-5
shadow-md
border
border-slate-100
text-center
"


>


<div className="
text-indigo-600
text-2xl
flex
justify-center
">

{item.icon}

</div>


<h4 className="
text-2xl
font-bold
mt-3
text-slate-900
">

{item.number}

</h4>


<p className="
text-sm
text-slate-500
">

{item.title}

</p>


</motion.div>


))


}


</div>



</div>


</motion.div>



</div>


</section>


)

}