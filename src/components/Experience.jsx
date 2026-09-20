import { motion } from "framer-motion";
import {
FaChalkboardTeacher,
FaLaptopCode,
FaUsers,
FaFlask,
FaBrain
} from "react-icons/fa";


export default function Experience(){


const responsibilities=[

{
icon:<FaLaptopCode/>,
title:"Programming & Laboratory Support",
text:"Assisting students in programming courses, laboratory sessions, and practical software development activities."
},


{
icon:<FaUsers/>,
title:"Student Mentoring",
text:"Guiding students in technical concepts, problem solving, and academic projects."
},


{
icon:<FaBrain/>,
title:"AI & Data Science Guidance",
text:"Supporting students in understanding programming, data science concepts, and emerging AI technologies."
},


{
icon:<FaFlask/>,
title:"Academic & Technical Support",
text:"Helping design learning activities and supporting a technology-focused academic environment."
}

];


return(


<section

id="experience"

className="
relative
py-24
px-6
bg-gradient-to-b
from-indigo-50/40
to-white
overflow-hidden
"

>


<div className="
max-w-7xl
mx-auto
">


{/* Heading */}

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

Professional Experience

</p>


<h2 className="
text-5xl
font-bold
text-slate-900
mt-3
">

Teaching Experience

</h2>


<p className="
mt-5
text-slate-600
max-w-3xl
mx-auto
text-lg
">

Combining technical knowledge, research interests,
and teaching experience to support the next generation
of computer science students.

</p>


</div>




{/* Main Card */}


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="
bg-white/80
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-indigo-100
p-8
md:p-12
"


>


<div className="
grid
md:grid-cols-3
gap-10
">


{/* Role */}


<div className="
md:border-r
border-indigo-100
md:pr-8
">


<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-purple-600
text-white
flex
items-center
justify-center
text-3xl
mb-6
">

<FaChalkboardTeacher/>

</div>



<h3 className="
text-3xl
font-bold
text-slate-900
">

Teaching Assistant

</h3>



<p className="
mt-3
text-indigo-600
font-semibold
">

Mehran University of Engineering and Technology

</p>



<p className="
mt-5
text-slate-600
leading-relaxed
">

Supporting students in computer science education
through laboratory assistance, programming guidance,
technical mentoring, and academic activities.

</p>


</div>





{/* Responsibilities */}


<div className="
md:col-span-2
grid
sm:grid-cols-2
gap-5
">


{

responsibilities.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-6
}}

className="
bg-slate-50
rounded-2xl
p-5
border
border-slate-100
"


>


<div className="
text-indigo-600
text-2xl
mb-3
">

{item.icon}

</div>


<h4 className="
font-bold
text-slate-900
">

{item.title}

</h4>


<p className="
mt-2
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


</motion.div>



</div>


</section>


)

}