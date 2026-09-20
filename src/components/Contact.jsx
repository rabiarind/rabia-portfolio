import { motion } from "framer-motion";
import {
FaEnvelope,
FaLinkedin,
FaGithub,
FaMapMarkerAlt
} from "react-icons/fa";


export default function Contact(){


return(

<section

id="contact"

className="
relative
py-24
px-6
bg-slate-950
overflow-hidden
"


>


{/* Background glow */}

<div className="
absolute
top-20
left-20
w-72
h-72
bg-indigo-600
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
max-w-5xl
mx-auto
relative
z-10
">



<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-10
md:p-14
text-center
"


>


<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
font-semibold
">

Let's Connect

</p>



<h2 className="
text-5xl
font-bold
text-white
mt-4
">

Open for Opportunities

</h2>



<p className="
mt-6
text-slate-300
text-lg
max-w-3xl
mx-auto
leading-relaxed
">

Interested in AI research collaborations,
Data Science projects, software development,
and academic opportunities.

Let's connect and build meaningful technology solutions.

</p>





<div className="
flex
flex-wrap
justify-center
gap-5
mt-10
">


<a

href="mailto:your-email@gmail.com"

className="
flex
items-center
gap-3
bg-indigo-600
hover:bg-indigo-700
text-white
px-6
py-3
rounded-xl
transition
"

>

<FaEnvelope/>

Email

</a>




<a

href="https://linkedin.com"

target="_blank"

className="
flex
items-center
gap-3
bg-white/10
border
border-white/20
text-white
px-6
py-3
rounded-xl
hover:bg-white/20
transition
"

>

<FaLinkedin/>

LinkedIn

</a>




<a

href="https://github.com"

target="_blank"

className="
flex
items-center
gap-3
bg-white/10
border
border-white/20
text-white
px-6
py-3
rounded-xl
hover:bg-white/20
transition
"

>

<FaGithub/>

GitHub

</a>



</div>





<div className="
mt-10
flex
justify-center
items-center
gap-2
text-slate-400
">


<FaMapMarkerAlt/>

Pakistan


</div>




</motion.div>



</div>


</section>


)

}