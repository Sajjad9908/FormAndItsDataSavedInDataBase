import React, { useEffect } from 'react'
import {  Form, Field, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup'


const Formik2 = () => {

    const getdata=async (values)=>{
      const fetchData=await fetch(`${import.meta.env.VITE_API_URL}/form`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
      })
      const res=await fetchData.json()
      if(!fetchData.ok){
       return alert("data not saved")
      
      }
       console.log(res)
      alert("data saved successfully")
    }


     const initialValues={
        name:"",
        email:"",
        phone:"",
        gender:"",
        country:"pakistan"

    }
    const validate=yup.object({
         name:yup.string()
         .required("the field is required"),
         email:yup.string()
         .required("field is required"),
         phone: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be at most 15 digits'),
    gender:yup.string().required('field is required'),
    country:yup.string().required('field is required')

    })
  return (
   
    <>
    <div className='main-div flex justify-center items-center bg-slate-600 w-full max-w-[400px] m-auto p-1 shadow-2xl pl-3 pr-3 rounded-sm mobile:w-[300px]'>
        <Formik initialValues={initialValues} validationSchema={validate} 
        onSubmit={(values,{resetForm})=>{
          console.log(values)
          resetForm()
          getdata(values)
        }}>
  {({handleSubmit,handleBlur,handleChange,errors,touched,values})=>(
    <Form onSubmit={handleSubmit}>
        <div className='bg-slate-600 h-9'>
          </div>
            <div className='w-[400px] h-2 bg-gray-200 mobile:w-[300px] '></div>
        
        <div className='flex flex-col  bg-white pt-3 gap-2 p-4 '><p className='font-bold '>Name:</p>
          <Field onChange={handleChange} onBlur={handleBlur} name='name' type='text' 
          className={`w-full  ${touched.name && errors.name? 'Field-form outline-none ps-3 py-2 border-2  border-red-500 placeholder:text-red-400 ':  'non-touched border-1 border-gray-200 ps-3 py-2 outline-none' } `}
          placeholder={touched.name && errors.name?"Field is required!":'Enter Your Name'} />

        </div>
         <div className=' flex flex-col bg-white pt-3 gap-2 p-4 '><p className='font-bold'>Email:</p>
          <Field onChange={handleChange} onBlur={handleBlur} name='email' type='email' 
          className={`w-full  ${touched.email && errors.email? 'Field-form  border-2  border-red-500 placeholder:text-red-400 ps-2 py-3 outline-none':  'border-1 border-gray-200 ps-3 py-2 outline-none' } `}
          placeholder={touched.email && errors.email?"Field is required!":'Enter Your Email'} />
         
        </div>
         <div className=' flex flex-col bg-white pt-3 gap-2 p-4 '><p className='font-bold'>Phone:</p>
          <Field onChange={handleChange} onBlur={handleBlur} name='phone' type='number' 
          className={`w-full  ${touched.phone && errors.phone? 'Field-form  border-2  border-red-500 placeholder:text-red-400 ps-2 py-3 outline-none ':  'non-touched  border-1  border-gray-200 ps-3 py-3 outline-none' } `}
          placeholder={touched.phone && errors.phone?"Field is required!":'Enter Your Email'} />
         
        </div>
        <div className='text-center flex flex-col bg-white pt-3 gap-2 p-4 justify-center items-center '><p className='font-bold  text-center'>Gender:</p>
        <div className='flex gap-2 justify-center items-center'>
          <label  htmlFor='Male'>Male</label>
          <Field type='radio' name='gender' value="male" />
          <label  htmlFor='Female'>Female</label>
          <Field type="radio" name="gender" value="female"/>
          <ErrorMessage name='gender' component="div" className='error'/>
          </div></div>
           <div className='text-center flex flex-col bg-white pt-3 gap-2 p-4 justify-center items-center'><p className='font-bold'>Select Country:</p>
           <Field as= 'select' name="country" className="w-[200px] border-1  border-gray-200 text-center">
               
              <option value="pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="Srilanks">Srilanka</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="China">China</option>
              </Field>
           
              <ErrorMessage name='country' component="div" className='error'/>
           
           
           </div>
      
        <button type='submit' className='block bg-[#52ab98] w-[200px] py-1  m-auto mt-4 border-1 rounded-[5px] cursor-pointer border-1-white' value="submit">Submit</button>
    </Form>
    )}
    </Formik>
    </div>
    </>
  )
}

export default Formik2