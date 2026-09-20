import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaBrain, FaAtom, FaCode } from "react-icons/fa";


export default function Hero(){

const tags = [
"Artificial Intelligence",
"Quantum ML",
"VQC",
"Edge AI",
"Python",
"Django"
];


return(

<section className="
min-h-screen
relative
overflow-hidden
bg-gradient-to-br
from-slate-50
via-indigo-50
to-purple-50
flex
items-center
pt-20
">


{/* Background Glow */}

<div className="
absolute
top-20
right-20
w-72
h-72
bg-purple-300
rounded-full
blur-3xl
opacity-30
">
</div>


<div className="
absolute
bottom-20
left-20
w-72
h-72
bg-cyan-300
rounded-full
blur-3xl
opacity-20
">
</div>



<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
relative
z-10
">



{/* Left Content */}


<motion.div

initial={{opacity:0,x:-60}}

animate={{opacity:1,x:0}}

transition={{duration:0.8}}

>



<div className="
inline-flex
items-center
gap-2
bg-white
shadow
px-4
py-2
rounded-full
text-sm
text-indigo-700
mb-6
">


<span className="
w-2
h-2
bg-green-500
rounded-full
">
</span>


MS Data Science Student | Teaching Assistant


</div>




<h1 className="
text-5xl
md:text-6xl
font-bold
leading-tight
text-slate-900
">


Rabia Gul


</h1>



<h2 className="
mt-4
text-2xl
md:text-3xl
font-semibold
bg-gradient-to-r
from-indigo-600
to-purple-600
text-transparent
bg-clip-text
">


AI Researcher
<span className="text-slate-900">
{" "}
|
{" "}
</span>
Data Scientist


</h2>




<p className="
mt-6
text-lg
text-slate-600
leading-relaxed
max-w-xl
">


BS Computer Science graduate pursuing MS Data Science
and working as Teaching Assistant at Mehran University
of Engineering and Technology.


<br/><br/>


Exploring Artificial Intelligence, Machine Learning,
Quantum Machine Learning, Variational Quantum Circuits,
AI in Edge Computing, and Full Stack Development.


</p>




{/* Research Tags */}


<div className="
flex
flex-wrap
gap-3
mt-8
">


{

tags.map((tag,index)=>(

<span

key={index}

className="
px-4
py-2
rounded-full
bg-white
shadow-sm
border
border-indigo-100
text-sm
text-slate-700
"

>

{tag}

</span>

))

}


</div>





{/* Buttons */}


<div className="
flex
gap-4
mt-10
">


<a

href="/Rabia_Gul_CV.pdf"

className="
flex
items-center
gap-2
bg-indigo-600
hover:bg-indigo-700
text-white
px-6
py-3
rounded-xl
transition
shadow-lg
"

>

<FaDownload/>

Download CV


</a>




<a

href="#projects"

className="
flex
items-center
gap-2
border
border-indigo-600
text-indigo-600
px-6
py-3
rounded-xl
hover:bg-indigo-50
transition
"

>


View Projects

<FaArrowRight/>


</a>



</div>



</motion.div>






{/* Profile Image */}


<motion.div

initial={{opacity:0,scale:0.8}}

animate={{opacity:1,scale:1}}

transition={{duration:0.8}}

className="
flex
justify-center
"


>


<div className="
relative
">


<div className="
absolute
inset-0
bg-gradient-to-r
from-indigo-500
to-purple-500
rounded-full
blur-xl
opacity-40
">
</div>



<img

src="/profile.jpeg"

alt="Rabia Gul"

className="
relative
w-72
h-72
md:w-[420px]
md:h-[420px]
rounded-full
object-cover
border-[10px]
border-white
shadow-2xl
hover:scale-105
transition
duration-500
"


/>


</div>



</motion.div>



</div>


</section>


)

}