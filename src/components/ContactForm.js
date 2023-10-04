import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <section id="contact">
        <h1>Send a message to us!</h1>
        <div class="contactElements">
          <div class="container contact_container">
            <div class="contact_options">
              <article class="contact_option">
                <i class="fa-regular fa-envelope" ></i>
                <h4>Email</h4>
                <a href="mailto:mrprashant@gmail.com" rel="noreffer">Send a messege</a>
              </article><article class="contact_option">
                <i class="fa-brands fa-whatsapp"></i>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/+916386362203" rel="noreffer" >Send a messege</a>
              </article>
            </div>
            <form>
              <input type="text" name="name" placeholder="Your Full Name" required=" " />
              <input type="email" name="email" placeholder="Your Email" required="" />
              <textarea name="messege" rows="6" placeholder="Your Messege" required="">
              </textarea>
              <button type="submit" > Send Messege </button>
            </form>
          </div>
        </div>
      </section>
      <div class="foot">
        <div class="foot-container">
          <div class="left">
            <div class="location">
              <div>
                <i class="fa-solid fa-house"></i>
                <p>EWS 214, Manohar Nagar, Barra 2, Barra World Bank, Barra,</p>
                <p>Uttar Pradesh, India.</p>
              </div>
            </div>
            <div class="phone">
              <i class="fa-solid fa-phone"></i>
              <h4> +91 8853667396</h4>
            </div>
          </div>
          <div class="right">
            <div>
              <h4>Message</h4>
              <p>Your health is your most important asset. 
                It's what allows you to enjoy life, work, 
                and be with the people you love. 
                That's why it's so important to take care of your health.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
