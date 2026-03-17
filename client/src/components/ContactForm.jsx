import { useState } from "react";

export default function ContactForm(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  function handleChange(e){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Message sent!");
  }

  return(

    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
      />

      <button type="submit">Send</button>

    </form>

  );

}