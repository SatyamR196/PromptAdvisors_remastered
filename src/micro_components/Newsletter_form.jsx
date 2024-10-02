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
              className="form_input w-input"
              maxLength={256}
              name="Your-email"
              data-name="Your email"
              placeholder="Enter your email"
              type="email"
              id="Your-email-2"
              required
            />
            <button
              id="w-node-_5be8f1ea-eec6-8528-46e9-517ab0bbbf8a-2f05edac"
              type="submit"
              className="button is-alternate"
            >Submit</button>
        </form>
    </div>
  )
}

export default Newsletter_form
