import { motion } from "framer-motion";
import {
FaBrain,
FaAtom,
FaNetworkWired,
FaChartLine
} from "react-icons/fa";


export default function Research(){


const researchAreas=[

{
title:"Artificial Intelligence",
icon:<FaBrain/>,
color:"from-indigo-500 to-blue-500",

description:
"Exploring intelligent systems using machine learning and deep learning approaches for solving real-world problems."
},


{
title:"Quantum Machine Learning",
icon:<FaAtom/>,
color:"from-purple-500 to-pink-500",

description:
"Investigating hybrid quantum-classical models, Variational Quantum Circuits (VQC), and quantum approaches for machine learning."
},


{
title:"AI in Edge Computing",
icon:<FaNetworkWired/>,
color:"from-cyan-500 to-blue-500",

description:
"Researching efficient AI deployment on edge devices for low-latency and intelligent real-time applications."
},


{
title:"Data Science & Analytics",
icon:<FaChartLine/>,
color:"from-emerald-500 to-teal-500",

description:
"Applying data analysis, predictive modeling, and statistical approaches to extract meaningful insights from data."
}


];


return(

<section

id="research"

className="
relative
py-24
px-6
bg-slate-950
overflow-hidden
"

>


{/* Background Effects */}

<div className="
absolute
top-10
left-20
w-72
h-72
bg-purple-600
rounded-full
blur-3xl
opacity-20
">
</div>


<div className="
absolute
bottom-10
right-20
w-72
h-72
bg-cyan-500
rounded-full
blur-3xl
opacity-20
">
</div>




<div className="
max-w-7xl
mx-auto
relative
z-10
">


<div className="
text-center
mb-14
">


<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
font-semibold
">

Research Laboratory

</p>


<h2 className="
text-5xl
font-bold
text-white
mt-3
">

Research Interests

</h2>


<p className="
text-slate-400
max-w-3xl
mx-auto
mt-5
text-lg
">

Exploring emerging technologies at the intersection
of Artificial Intelligence, Quantum Computing,
and Intelligent Systems.

</p>


</div>





<div className="
grid
md:grid-cols-2
gap-8
">


{

researchAreas.map((area,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.6,
delay:index*0.1
}}


whileHover={{
y:-10
}}



className="
relative
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
overflow-hidden
"


>


{/* Gradient Glow */}

<div className={`
absolute
inset-0
bg-gradient-to-br
${area.color}
opacity-10
`}>
</div>



<div className="
relative
z-10
">


<div className="
w-16
h-16
rounded-2xl
bg-white/10
flex
items-center
justify-center
text-3xl
text-white
mb-6
">

{area.icon}

</div>



<h3 className="
text-2xl
font-bold
text-white
">

{area.title}

</h3>


<p className="
mt-4
text-slate-300
leading-relaxed
">

{area.description}

</p>



</div>


</motion.div>


))


}


</div>


</div>


</section>


)

}