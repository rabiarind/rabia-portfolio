import { motion } from "framer-motion";
import {
FaFileAlt,
FaAtom,
FaRobot
} from "react-icons/fa";


export default function Publications(){


const research=[

{
icon:<FaAtom/>,
title:"Quantum Machine Learning using VQC",

description:
"Exploring Variational Quantum Circuits and hybrid quantum-classical approaches for machine learning applications."
},


{
icon:<FaRobot/>,
title:"Artificial Intelligence & Edge Computing",

description:
"Investigating efficient AI models for intelligent systems, edge devices, and real-time decision making."
},


{
icon:<FaFileAlt/>,
title:"Machine Learning Applications",

description:
"Developing data-driven solutions using machine learning algorithms, feature engineering, and predictive modeling."
}

];


return(

<section

className="
py-24
px-6
bg-slate-950
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
text-cyan-400
uppercase
tracking-widest
text-sm
">

Research Portfolio

</p>


<h2 className="
text-5xl
font-bold
text-white
mt-3
">

Research & Academic Work

</h2>


</div>



<div className="
grid
md:grid-cols-3
gap-8
">


{

research.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
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
text-cyan-400
text-4xl
mb-5
">

{item.icon}

</div>


<h3 className="
text-xl
font-bold
text-white
">

{item.title}

</h3>


<p className="
mt-4
text-slate-300
leading-relaxed
">

{item.description}

</p>


</motion.div>


))


}


</div>


</div>


</section>


)

}