import { useState } from 'react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'Kalki Business enquiry')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    await fetch('https://formsubmit.co/ajax/pritish.saha@outlook.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })

    form.reset()
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <span className="eyebrow">Let&apos;s talk trade</span>
        <h2>Good business<br /><em>starts here.</em></h2>
        <p>Tell us what you&apos;re looking for and where your team is based in Singapore. We&apos;ll come back with the right next step.</p>
        <a className="whatsapp-link" href="https://wa.me/6582090884?text=Hello%20Kalki%20Business%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.%20My%20contact%20number%20is%20%5Byour%20number%5D%20and%20my%20email%20is%20%5Byour%20email%5D." target="_blank" rel="noreferrer"><span className="whatsapp-icon">◔</span> Message us on WhatsApp <span>↗</span></a>
      </div>
      <div className="contact-form-wrap">
        {submitted ? (
          <div className="form-success"><span>✓</span><h3>Thanks, we&apos;ll be in touch.</h3><p>Your enquiry is safely with the Kalki Business team in Singapore.</p><button type="button" onClick={() => setSubmitted(false)}>Send another message</button></div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Business name<input name="business" placeholder="Your business" /></label>
            <div className="form-row"><label>Email<input name="email" type="email" required placeholder="you@business.com" /></label><label>Phone<input name="phone" type="tel" required placeholder="+65" /></label></div>
            <label>What can we help with?<textarea name="message" required placeholder="Tell us about your requirements..." rows="4" /></label>
            <button className="submit-button" type="submit">Send enquiry <span>↗</span></button>
          </form>
        )}
      </div>
    </section>
  )
}
