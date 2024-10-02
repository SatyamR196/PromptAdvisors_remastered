import React from 'react'
import "../Components/stylesheets/newsletter_style.css"
function Newsletter_form() {
  return (
    <div className='Newsletter_container'>
        <form
            id="Newsletter-Form"
            name="wf-form-Newsletter-Form"
            className="footer1_form"
        >
            <input
              maxLength={256}
              name="Your-email"
              data-name="Your email"
              placeholder="Enter your email"
              type="email"
              required
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Newsletter_form
