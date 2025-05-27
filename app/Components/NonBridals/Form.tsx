'use client'

import React,{ useRef, FormEvent, useState} from 'react'
import emailjs from '@emailjs/browser'
// import { Key } from 'lucide-react';


const Form : React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const sendEmail = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null)



  if (form.current){
    // Log the form data to debug what's being sent 
    const formData = new FormData(form.current);
    console.log('Form data being sent:')

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`)
    }) 

    emailjs
      .sendForm(
        'service_dgbz3al',
        'template_ttjp83r', 
        form.current, {
        publicKey: 'D9xm9cd9VBmlpU7QL'
      })
       .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus({
            success: true,
            message: 'Your message has been sent successfully '
          })

        },
        (error) => {
          console.log('FAILED...', error.text)
        }
       )
       .finally(() => {
          setIsSubmitting(false)
       })
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-full md:w-4/5 p-5 text-[13px] md:text-[1rem]'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='font-bold'>Name<span className='text-red-600'>*</span></label>
            <input type='text' name="name" placeholder='Adigwe Flora'  className='border p-2'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='font-bold'>Email <span className='text-red-600'>*</span></label>
            <input type='email' name="email" placeholder='user@example.com' className='border p-2' />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="phone" className='font-bold'>Your Whatsapp number. (this will be your primary contact detail with us, please enter correctly or we may not be able to reach you) <span className='text-red-500'>*</span></label>
            <input type="tel" name="phone" placeholder='+2348123567890' className='border p-2' />
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Which service are you interested in? <span className='text-red-500'>*</span></p>
          <span className='flex gap-3'>
            <input type="radio" value="Bespoke Enquiry White Wedding Dress" id="wedding" name='service'/>
            <label htmlFor="wedding">Bespoke Enquiry White Wedding Dress</label>
          </span>
          <span className='flex gap-3'>
            <input type="radio" value="Bespoke Enquiry for Other Bridal Dresses" id="other-bridal" name='service'/>
            <label htmlFor="other-bridal">Bespoke Enquiry Other bridal dresses  (e.g. tradtional, reception, after party)</label>
          </span>
          <span className='flex gap-3'>
            <input type="radio" value="Bespoke Enquiry for Non-Bridal Dresses" id="non-bridal" name='service'/>
            <label htmlFor="non-bridal">Bespoke Enquiry: Non-Bridal Dresses (e.g Wedding Guest, Birthday, Dinner Dresses E.T.C)</label>
          </span>
          <span className='flex gap-3'>
            <input type="radio" value="Shop the collection" id="shop" name='service'/>
            <label htmlFor="shop">Shop the collection</label>
          </span>
        </div>

        <div>
          <p className='font-bold'>Do you require shipping <span className='text-red-500'>*</span> </p>
          <span className='flex gap-3'>
            <input type="radio" value="yes" id="yes" name='shipping'/>
            <label htmlFor="yes">Yes</label>
          </span>
          <span className='flex gap-3'>
            <input type="radio" value="no" id="no" name='shipping'/>
            <label htmlFor="no">No, I can pick up in Abuja, Nigeria</label>
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="address" className='font-bold'>Full delivery address if shipping is required, please make sure to indicate your city and country *(Just type Abuja if you are picking up)* <span className='text-red-500'>*</span></label>
          <input type="text" id='address' name='address' className='border p-2'/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="address" className='font-bold'>Any other information you might want to add?</label>
          <textarea id='address' name='address' className='outline-none border ' rows={4}></textarea>
        </div>

        <button type='submit' className='p-2 border w-[100px] bg-[#ebe9e9]'>Submit</button>
        {isSubmitting && (
          <div className='p-4 mb-4 rounded bg-[#FFF2E3] text-[#df9744]'>
             Submitting...
          </div>
        )}

        {submitStatus && (
          <div className={`p-4 mb-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
    </form>
  )
}

export default Form