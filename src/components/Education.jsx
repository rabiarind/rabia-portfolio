import { motion } from "framer-motion";
import {
FaGraduationCap,
FaUniversity,
FaBookOpen
} from "react-icons/fa";


export default function Education(){

const timeline=[

{
year:"Present",
title:"MS Data Science",
place:"Currently Enrolled",
description:
"Advanced studies focused on Artificial Intelligence, Machine Learning, Data Science, and emerging intelligent technologies.",
icon:<FaGraduationCap/>
},


{
year:"Completed",
title:"BS Computer Science",
place:"Computer Science Graduate",
description:
"Built strong foundations in programming, software engineering, databases, algorithms, and computer systems.",
icon:<FaUniversity/>
},


{
year:"Academic Experience",
title:"Teaching Assistant",
place:"Mehran University of Engineering and Technology",
description:
"Supporting students through programming guidance, laboratory sessions, technical mentoring, and project assistance.",
icon:<FaBookOpen/>
}

];


return(

<section

className="
py-24
px-6
bg-gradient-to-b
from-white
to-indigo-50/40
"

>


<div className="
max-w-6xl
mx-auto
">


<div className="
text-center
mb-14
">


<p className="
text-indigo-600
uppercase
tracking-widest
text-sm
font-semibold
">

Academic Journey

</p>


<h2 className="
text-5xl
font-bold
mt-3
text-slate-900
">

Education & Experience

</h2>


<p className="
mt-4
text-slate-600
max-w-2xl
mx-auto
">

A journey combining computer science foundations,
data science research, and academic teaching experience.

</p>


</div>





<div className="
relative
">


{/* Timeline line */}

<div className="
hidden
md:block
absolute
left-1/2
top-0
bottom-0
w-[2px]
bg-gradient-to-b
from-indigo-500
via-purple-500
to-cyan-500
">
</div>



<div className="
space-y-12
">


{

timeline.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.6
}}

className="
relative
grid
md:grid-cols-2
gap-8
items-center
"


>



{/* Left/Right alignment */}

<div className={

index%2===0

?
"md:text-right"

:
"md:col-start-2"

}>


<div className="
bg-white/80
backdrop-blur
rounded-3xl
p-7
shadow-xl
border
border-indigo-100
hover:-translate-y-2
transition
">


<div className="
flex
items-center
gap-4
md:justify-end
">


<div className="
w-12
h-12
rounded-full
bg-gradient-to-br
from-indigo-500
to-purple-600
text-white
flex
items-center
justify-center
text-xl
">

{item.icon}

</div>


<div>

<p className="
text-indigo-600
font-semibold
">

{item.year}

</p>


<h3 className="
text-2xl
font-bold
text-slate-900
">

{item.title}

</h3>


</div>


</div>



<p className="
mt-4
text-slate-600
">

{item.place}

</p>


<p className="
mt-3
text-slate-600
leading-relaxed
">

{item.description}

</p>


</div>


</div>



</motion.div>


))


}


</div>


</div>


</div>


</section>

)

}