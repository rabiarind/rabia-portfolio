import { motion } from "framer-motion";
import {
FaGraduationCap,
FaChalkboardTeacher,
FaBrain,
FaCode
} from "react-icons/fa";


export default function Achievements(){


const achievements=[

{
icon:<FaGraduationCap/>,
title:"Academic Growth",
text:"BS Computer Science graduate pursuing MS Data Science with focus on Artificial Intelligence and intelligent systems."
},


{
icon:<FaChalkboardTeacher/>,
title:"Teaching Experience",
text:"Teaching Assistant at Mehran University supporting students through programming and technical learning."
},


{
icon:<FaBrain/>,
title:"AI Research Direction",
text:"Exploring Machine Learning, Quantum Machine Learning, VQC, and AI-based solutions."
},


{
icon:<FaCode/>,
title:"Software Development",
text:"Building applications using Python, Django, React, and database technologies."
}

];


return(

<section

className="
py-24
px-6
bg-white
"

>


<div className="
max-w-6xl
mx-auto
">


<div className="
text-center
mb-12
">


<p className="
text-purple-600
uppercase
tracking-widest
font-semibold
text-sm
">

Professional Profile

</p>


<h2 className="
text-5xl
font-bold
text-slate-900
mt-3
">

Highlights

</h2>


</div>



<div className="
grid
md:grid-cols-4
gap-6
">


{

achievements.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}

className="
bg-gradient-to-br
from-indigo-50
to-purple-50
rounded-3xl
p-6
border
border-indigo-100
"


>


<div className="
text-indigo-600
text-3xl
mb-5
">

{item.icon}

</div>


<h3 className="
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-3
text-sm
text-slate-600
leading-relaxed
">

{item.text}

</p>


</motion.div>


))


}


</div>


</div>


</section>


)

}