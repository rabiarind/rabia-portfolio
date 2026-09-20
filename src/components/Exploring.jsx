import { motion } from "framer-motion";
import {
FaBrain,
FaAtom,
FaNetworkWired,
FaRobot
} from "react-icons/fa";


export default function Exploring(){


const topics=[

{
title:"Generative AI",
description:
"Exploring modern AI models, intelligent systems, and advanced machine learning approaches.",
icon:<FaRobot/>
},


{
title:"Quantum Machine Learning",
description:
"Studying Variational Quantum Circuits (VQC) and hybrid quantum-classical learning models.",
icon:<FaAtom/>
},


{
title:"Edge Intelligence",
description:
"Investigating efficient AI deployment for real-time edge computing applications.",
icon:<FaNetworkWired/>
},


{
title:"Advanced Data Science",
description:
"Building knowledge in predictive modeling, analytics, and intelligent decision systems.",
icon:<FaBrain/>
}

];



return(


<section

className="
py-24
px-6
bg-gradient-to-br
from-indigo-50
via-white
to-purple-50
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
text-indigo-600
uppercase
tracking-widest
font-semibold
text-sm
">

Continuous Learning

</p>


<h2 className="
text-5xl
font-bold
text-slate-900
mt-3
">

Currently Exploring

</h2>


<p className="
mt-5
text-slate-600
max-w-2xl
mx-auto
">

Areas I am actively learning, researching,
and experimenting with.

</p>


</div>




<div className="
grid
md:grid-cols-2
gap-8
">


{

topics.map((topic,index)=>(


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

whileHover={{
y:-8
}}


className="
bg-white/80
backdrop-blur-xl
rounded-3xl
p-8
shadow-lg
border
border-indigo-100
"

>


<div className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-purple-600
text-white
flex
items-center
justify-center
text-2xl
mb-5
">

{topic.icon}

</div>



<h3 className="
text-2xl
font-bold
text-slate-900
">

{topic.title}

</h3>



<p className="
mt-3
text-slate-600
leading-relaxed
">

{topic.description}

</p>



</motion.div>


))


}


</div>


</div>


</section>


)

}