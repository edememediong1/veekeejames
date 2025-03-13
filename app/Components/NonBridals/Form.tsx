import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-5'>
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
            <input type="radio" value="Bespoke Enquiry for Other Bridal Dresses" id="other-bridal" name='service'/>
            <label htmlFor="other-bridal">Bespoke Enquiry Other bridal dresses  (e.g. tradtional, reception, after party)</label>
          </span>
          <span>
            <input type="radio" value="Bespoke Enquiry for Non-Bridal Dresses" id="non-bridal" name='service'/>
            <label htmlFor="non-bridal">Bespoke Enquiry: Non-Bridal Dresses (e.g Wedding Guest, Birthday, Dinner Dresses E.T.C)</label>
          </span>
          <span>
            <input type="radio" value="Shop the collection" id="shop" name='service'/>
            <label htmlFor="shop">Shop the collection</label>
          </span>
        </div>

        <div>
          <p>Do you require shipping </p>
          <span>
            <input type="radio" value="yes" id="yes" name='shipping'/>
            <label htmlFor="yes">Yes</label>
          </span>
          <span>
            <input type="radio" value="no" id="no" name='shipping'/>
            <label htmlFor="no">No,I can pick up in Abuja, Nigeria</label>
          </span>
        </div>

        <div>
          <label htmlFor="address">Full delivery address if shipping is required, please make sure to indicate your city and country *(Just type Lagos if you are picking up)* *</label>
          <input type="text" id='address' name='address' />
        </div>

        <div>
          <label htmlFor="address"></label>
          <input type="text" id='address' name='address' />
        </div>

    </form>
  )
}

export default Form