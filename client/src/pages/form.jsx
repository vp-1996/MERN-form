import React from 'react'
import { useState,useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RegistraionForm = () => {
 let initialState={
    Name:"", 
    BirthDate:"",
    Address:"",
     Gender:"",
     State:"",
     Hobby:""
     }
  //const [gender,setGender] = useState("") 
  // let [file,setFile] = useState(null)
   let fileRef = useRef()
  let [student,setStudent] = useState(initialState)
  let {Name,BirthDate,Address,State,Gender,Hobby} = student
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

let [Hobbies,setHobbies] = useState([])

   let stateData=['Maharashtra','Gujrat','Chattisgarh','Rajasthan','TamilNadu','MP','UP','Himachal Pradesh','J&k','Karnataka','Delhi','Manipur','Assam','Kerala','Jharkhand','Telangana','Bihar','Goa','Haryana','Nagaland','Tripura','Mizoram']

    // let {Sports,Singing,Travelling}=Hobbies

    
      let addStudent=()=>{
         
          Hobby=Hobbies.join(",")
      
         var studentData = new FormData()
          studentData.append('Name',Name)
          studentData.append('BirthDate',BirthDate)
          studentData.append('Address',Address)
          studentData.append('State',State)
          studentData.append('Gender',Gender)
          studentData.append('Hobbies',Hobby)
          studentData.append('Resume',fileRef.current.files[0])

         

           axios.post('http://localhost:4020/student/addstudent',studentData)
           .then((res)=>{
              console.log(res.data);
              setShow(true)
           })

           .catch((err)=>{
             console.log(err);
           })
         }

         let handleChange=(e)=>{
           const {name,value} = e.target
           setStudent({...student,[name]:value})
         }
 
         let handleFile=(e)=>{
            console.log(e.target.files[0])
        }
   
    //    const 

     let HandleCheckBox=(e)=>{
        if (e.target.checked) {
            setHobbies([...Hobbies,e.target.value])
        }
        else{
          const num = Hobbies.indexOf(e.target.value)
          Hobbies.splice(num,1);
         
        }
        
     }
        
     let handleSubmit=(e)=>{      
         e.preventDefault()
        if (Hobbies.length<2) {
            alert('Pls select atleast 2 Hobbies')
        }
        else{
            setTimeout(()=>{
                addStudent()
            },3500)
            
        }
        
     }
      
      

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This Site Says...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Form Has Been Submitted Sucessfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
    <div className='formDiv'>

     <img
     style={{marginLeft:"3%",marginTop:"2%"}}
      src='/images/img1.jpg'
      />
   
     <div className='banner'>
        <h3>Work Study Application</h3>      
     </div> <br/>

     <form 
      encType="multipart/form-data"
      style={{marginLeft:"10%"}}
      onSubmit={handleSubmit}>
 
     <label>Student name</label> <br/>
     <input
      required
      value={Name}
      className='NameInput'
      name='Name'
      type='text'
      onChange={handleChange}
      />  <br/><br/><br/>

      <label>Date Of Birth</label> <br/>
      <input
        required
        value={BirthDate}
        className='BirthDateInput'
        name='BirthDate'
        type='date'
        onChange={handleChange}
      /> 
      <br/><br/><br/>


    <label style={{marginLeft:"0px"}}>Gender:</label> <br/>
      <input
      required
      type='radio'
      id='Male'
      value= 'Male'
      name='Gender'
      onChange={handleChange}
      />
      <label htmlFor='Male'>Male</label>

      <input
      style={{marginLeft:"10px"}}
      required
      type='radio'
      id='Female'
      value= 'Female'
      name='Gender'
      onChange={handleChange}
      />
      <label htmlFor='Female'>Female</label>
       <br/><br/>

       <label>Hobbies:</label> <br/>

         <div style={{display:"flex"}}>
      
       <input
       value='Sports'
       id='Sports'
       name='Sports'
       type='checkbox'
       onChange={HandleCheckBox}
       /> 
       <label htmlFor='Sports'>Sports</label>

       <input
       value='Singing'
       style={{marginLeft:"15px"}}
       id='Singing'
       name='Singing'
       type='checkbox'
       onChange={HandleCheckBox}
       /> 
       <label htmlFor='Singing'>Singing</label> 

            
       <input
       value= 'Travelling'
       style={{marginLeft:"15px"}}
       id='Travelling'
       name='Travelling'
       type='checkbox'
       onChange={HandleCheckBox}
       />   
       <label htmlFor='Travelling'>Travelling</label>
       </div>  
        <br/><br/>

         <select 
          required
          name='State' 
          value={State} 
          onChange={handleChange}>
           <option value=''>Select State</option>
        {
            stateData.map((i,k)=>(
                <option key={k}>{i}</option>
            ))
        }
         </select> 
         <br/><br/><br/>

        <label>Address</label> <br/>
         <input
          required
          value={Address}
          className='AddressInput'
          type='text'
          name='Address'
          placeholder='Max 100 characters...'
          maxLength={100}
          onChange={handleChange}
         />
         <br/>  <br/>

         <input
         required
         accept='.docx'
         type='file'
         onChange={handleFile}
         ref={fileRef}
         name='Resume'
         /> 
         <p style={{fontSize:"12px"}}>
          (Only '.docx' file will be accepted)
          </p>
          <br/>

       <button className='submitButton' type='submit'>Submit</button>

     </form>

    </div>
    
    <br/><br/>
    
    
    
    
    
    </>
  )
}

export default RegistraionForm