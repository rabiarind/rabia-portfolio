import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaAtom, FaBrain, FaCode } from "react-icons/fa";


export default function Projects(){


    const projects=[

        {
        category:"Research Project",
        
        title:"Quantum Machine Learning using VQC",
        
        image:"/projects/quantum.jpg",
        
        icon:<FaAtom/>,
        
        description:
        "Exploring hybrid quantum-classical machine learning models using Variational Quantum Circuits (VQC) for classification and optimization problems.",
        
        tags:[
        "Python",
        "Qiskit",
        "Quantum ML",
        "Machine Learning"
        ],
        
        github:"https://github.com/yourusername/qml-vqc",
        
        demo:"#"
        
        },
        
        
        
        {
        category:"AI Research",
        
        title:"AI in Edge Computing",
        
        image:"/projects/edge-ai.jpg",
        
        icon:<FaBrain/>,
        
        description:
        "Research exploration of deploying intelligent AI models on edge devices to improve real-time decision making and reduce latency.",
        
        tags:[
        "Artificial Intelligence",
        "Edge AI",
        "Machine Learning",
        "IoT"
        ],
        
        github:"https://github.com/yourusername/edge-ai",
        
        demo:"#"
        
        },
        
        
        
        {
        category:"Data Science Project",
        
        title:"Machine Learning Classification System",
        
        image:"/projects/ml-project.jpg",
        
        icon:<FaBrain/>,
        
        description:
        "Developed machine learning workflows including data preprocessing, feature engineering, model training, and evaluation.",
        
        tags:[
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn"
        ],
        
        github:"https://github.com/yourusername/ml-classification",
        
        demo:"#"
        
        },
        
        
        
        {
        category:"Software Development",
        
        title:"Django Full Stack Applications",
        
        image:"/projects/django.jpg",
        
        icon:<FaCode/>,
        
        description:
        "Built database-driven web applications using Django backend, REST APIs, frontend technologies, and SQL databases.",
        
        tags:[
        "Django",
        "React",
        "REST API",
        "SQL"
        ],
        
        github:"https://github.com/yourusername/django-project",
        
        demo:"#"
        
        }
        
        ];



return(


<section

id="projects"

className="
py-24
px-6
bg-gradient-to-b
from-slate-950
to-slate-900
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

Featured Work

</p>


<h2 className="
text-5xl
font-bold
text-white
mt-3
">

Projects & Research

</h2>


<p className="
text-slate-400
max-w-3xl
mx-auto
mt-5
">

A collection of AI research projects,
machine learning experiments,
and full-stack software solutions.

</p>


</div>




<div className="
grid
md:grid-cols-2
gap-8
">


{

projects.map((project,index)=>(


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


{/* Gradient effect */}

<div className="
absolute
inset-0
bg-gradient-to-br
from-indigo-500/10
to-purple-500/10
">
</div>



<div className="
relative
z-10
">

<img

src={project.image}

alt={project.title}

className="
w-full
h-48
object-cover
rounded-2xl
mb-6
"

/>


<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-purple-600
flex
items-center
justify-center
text-white
text-3xl
mb-6
">

{project.icon}

</div>



<h3 className="
text-2xl
font-bold
text-white
">

{project.title}

</h3>



<p className="
mt-4
text-slate-300
leading-relaxed
">

{project.description}

</p>



<div className="
flex
flex-wrap
gap-3
mt-6
">


{

project.tags.map((tag,index)=>(


<span

key={index}

className="
px-4
py-2
rounded-full
bg-white/10
border
border-white/20
text-slate-200
text-sm
"

>

{tag}

</span>


))


}


</div>




<div className="
flex
gap-4
mt-8
">


<a

href="#"

className="
flex
items-center
gap-2
bg-indigo-600
hover:bg-indigo-700
text-white
px-5
py-3
rounded-xl
transition
"

>

<FaGithub/>

GitHub

</a>



<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
border
border-white/30
text-white
px-5
py-3
rounded-xl
hover:bg-white/10
transition
"

>

<FaExternalLinkAlt/>

Demo

</a>
href={project.demo}

target="_blank"


</div>


</div>


</motion.div>


))


}


</div>


</div>


</section>


)

}