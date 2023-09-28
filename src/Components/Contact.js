import React,{useState} from 'react'
import './Contact.css'
import FooterPart from './FooterPart';
import Navbar from './Navbar';
function Contact() {
  const [text,setText]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [category,setCategory]= useState("");
  const [textarea,setTextarea]= useState("");



  const Submit=(event)=>{
          event.preventDefault();
         if(text==="" || email===""|| password===""||category===""|| textarea===""){
          alert("Please fill out this field");
         }else{
          alert(`The Username is ${text} and the Email ${email}
           so the password is ${password} and category is ${category} the fill textarea in ${textarea}`);
           setText("");
           setEmail("");
           setPassword("");
           setCategory("");
           setTextarea("");
          
         }
  }
  return (
    <>
      <Navbar/>
      <div className="contact-wrap-par">
      <h1 className='msg'>Send a Message</h1>
    <div className="contact-par">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className='contact-heading'>
          <h1 >Contact us</h1>
          <p>Your question's and comments are important to us.So, the input field select <br /> and fill your information and select country so,the information together or <br /> click the submit resquest Thank you!</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="form">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="controll">
              <div className="row">
                <div className="col-6">
                  <input type="text" name="" value={text} required id="text" autoFocus onChange={(e)=>setText(e.target.value)} placeholder='Username'/>
                </div>
                <div className="col-6">
                  <input type="email" name="" value={email} required id="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                </div>
                <div className="col-6">
                <input type="Password" id="password" value={password} required name="" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' /> 
                </div>
                <div className="col-6">
                  <select name="" id="slect"  onChange={(e)=>setCategory(e.target.value)} >
                  <option >Category</option>
                    <option value="Web development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Game Development">Game Development</option>
                  </select>
                  

                  
                </div>
                <div className="area">
                  <textarea name="" id="" value={textarea} cols="118" rows="7" onChange={(e)=>setTextarea(e.target.value)} placeholder='Message if(any)'></textarea> 
                  <div className="submit">
                  <button className='sub' onClick={Submit}>Submit</button>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  <FooterPart/>
      
             
        
    
               
          
             
    </>
       
  )
}

export default Contact
