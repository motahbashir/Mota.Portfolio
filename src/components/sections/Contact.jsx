
import emailjs from "emailjs-com"
import { useState } from "react";


export const Contact = ()=>{

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    })

const SERVICE_ID="service_wy1hmta"
const TEMPLATE_ID="template_7rbjbq2"
const PUBLIC_KEY = "CQWlvXB05DdROCYaA"


  
const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        "service_wy1hmta", // your SERVICE_ID
        "template_7rbjbq2", // your TEMPLATE_ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "CQWlvXB05DdROCYaA" // your PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert("❌ Something went wrong. Please check console.");
      });
  }
  

return(

<section
id="contact"
className="min-h-screen flex items-center justify-center py-20"


>

    <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
        from-blue-500 to-cyan-400 bg-clip-text  text-transparent text-center"> Get In Touch</h2>

<form className="space-y-6" onSubmit={handleSubmit}>
<div className="relative">
    <input type="text" 
    id="name"
    name="name" 
    required 
    placeholder="name"
    value={formData.name}
    className="w-full bg-white/5 border border-white/5 rounded px-4 py-3
     text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
     onChange={(e)=> setFormData({...formData, name: e.target.value})}
     ></input>

</div>

<div className="relative">
    <input type="text" 
    id="email"
    name="email" 
    required 
    value={formData.email}
    placeholder="Email..."
    className="w-full bg-white/5 border border-white/5 rounded px-4 py-3
     text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
     onChange={(e)=> setFormData({...formData, email: e.target.value})}
     ></input>

</div>

<div className="relative">
    <textarea 
    id="message"
    name="message" 
    required 
    value={formData.message}
    rows={5}
    placeholder="Your Message..."
    className="w-full bg-white/5 border border-white/5 rounded px-4 py-3
     text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
     onChange={(e)=> setFormData({...formData, message: e.target.value})}
     ></textarea>

</div>

<button type="submit" 
className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">

    Send Message
     
</button>

</form>
    </div>


</section>

);


};