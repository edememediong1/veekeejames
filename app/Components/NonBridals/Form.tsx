import React from 'react'

const Form = () => {
  return (
    <form>
        <div>
            <label htmlFor="name">Name<span className='text-red-600'>*</span></label>
            <input type='text' name="name" placeholder='Flora Gadus' />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type='email' name="email" placeholder='user@example.com' />
        </div>

        <div>
            <label htmlFor="phone">Your Whatsapp number. (this will be your primary contact detail with us, please enter correctly or we may not be able to reach you) <span className='text-red-500'>*</span></label>
            <input type="tel" name="phone" placeholder='' />
        </div>

        <div>
          <p>Which service are you interested in? <span className='text-red-500'>*</span></p>
          <span>
            <input type="radio" value="Bespoke Enquiry White Wedding Dress" id="wedding" name='service'/>
            <label htmlFor="wedding">Bespoke Enquiry White Wedding Dress</label>
          </span>
          <span>
            <input type="radio" value="Bespoke Enquiry for Bridal Dresses" id="bridal" name='service'/>
            <label htmlFor="bridal">Bespoke Enquiry Other bridal dresses  &rbrack; e.g. tradtional, reception, after party &lbrack;</label>
          </span>
          
        </div>

    </form>
  )
}

export default Form