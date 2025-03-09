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
            <label htmlFor="email"></label>
            <input type='email' name="email" placeholder='user@example.com' />
        </div>

    </form>
  )
}

export default Form