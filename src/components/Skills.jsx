import { motion } from "framer-motion";
import {
FaPython,
FaJava,
FaReact,
FaDatabase,
FaBrain,
FaServer
} from "react-icons/fa";

import {
SiDjango,
SiJavascript,
SiMysql,
SiPostgresql,
SiScikitlearn,
SiPandas,
SiNumpy,
SiQiskit
} from "react-icons/si";


export default function Skills(){


const skillGroups=[

{
title:"Programming Languages",
icon:<FaPython/>,
skills:[
"Python",
"Java",
"JavaScript",
"SQL"
]
},


{
title:"AI & Data Science",
icon:<FaBrain/>,
skills:[
"Machine Learning",
"Deep Learning",
"Artificial Intelligence",
"Pandas",
"NumPy",
"Scikit-learn",
"Data Analysis"
]
},


{
title:"Full Stack Development",
icon:<FaReact/>,
skills:[
"Django",
"Django REST Framework",
"React.js",
"HTML5",
"CSS3",
"REST APIs"
]
},


{
title:"Databases & Tools",
icon:<FaDatabase/>,
skills:[
"MySQL",
"PostgreSQL",
"SQLite",
"Git/GitHub",
"Jupyter Notebook"
]
},


{
title:"Quantum & Emerging Technology",
icon:<SiQiskit/>,
skills:[
"Quantum Machine Learning",
"Variational Quantum Circuits",
"Qiskit",
"Hybrid Quantum Models",
"Edge AI"
]
}


];



return(

<section

id="skills"

className="
py-24
px-6
bg-slate-950
"


>


<div className="
max-w-7xl
mx-auto
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

Technical Expertise

</p>


<h2 className="
text-5xl
font-bold
text-white
mt-3
">

Skills & Technologies

</h2>


<p className="
text-slate-400
mt-5
max-w-3xl
mx-auto
">

A combination of software engineering,
data science, artificial intelligence,
and emerging computing technologies.

</p>


</div>




<div className="
grid
md:grid-cols-2
gap-8
">


{

skillGroups.map((group,index)=>(


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
duration:0.5
}}


whileHover={{
y:-8
}}


className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
"


>


<div className="
flex
items-center
gap-4
mb-6
">


<div className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-purple-600
flex
items-center
justify-center
text-white
text-2xl
">

{group.icon}

</div>



<h3 className="
text-2xl
font-bold
text-white
">

{group.title}

</h3>


</div>




<div className="
flex
flex-wrap
gap-3
">


{

group.skills.map((skill,index)=>(


<motion.span

key={index}

whileHover={{
scale:1.08
}}

className="
px-4
py-2
rounded-full
bg-white/10
border
border-white/20
text-slate-200
text-sm
hover:bg-indigo-500
transition
"

>

{skill}

</motion.span>


))


}


</div>


</motion.div>


))


}


</div>


</div>


</section>


)

}