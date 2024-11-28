(() => {
    const contactContainer = document.querySelector(".contact");
    const contactContent =
        `
        <div class="contact_wrap overflowHidden">
                <div class="contact_info">
                    <div class="contact_info-wrap">
                        <h2 class="contact__title hiddenLeft delay4">Contact Me</h2>
                        <p class="contact__description hiddenLeft delay5">
                            I'd Love to Hear From You!
                            Thank you for considering reaching out to me. Whether you have a question, 
                            feedback, or just want to say hello, 
                            I value your communication. Here are the ways you can get in touch with me:
                        </p>
                    </div> 
                    <div class="contact_info-wrap">
                        <h4 class="contact__subtitle hiddenLeft delay6">Social Media:</h4>
                        <p class="contact__description HiddenToBottom">
                            Connect with me on social media! Follow me on Facebook,
                            Twitter, Tiktok and Instagram for the latest updates 
                            and behind-the-scenes glimpses.
                        </p>
                        <div class="contact__social HiddenToBottom">
                            
                            <a href="https://www.instagram.com/stephen__designs">
                                <i class="fa-brands fa-square-instagram social"></i>
                            </a>
                            <a href="https://www.tiktok.com/@stephix_">
                                <i class="fa-brands fa-tiktok social"></i>
                            </a>
                  
                        </div>
                    </div>
                </div>
                <div class="contact_form HiddenToBottom">
                    <h2 class="contact__subtitle contact__form-title">Contact Form</h2>
                    <form method="post" action="" id="hireForm"  name="form">
                        <div class="input__fields">
                            <label class="contact__label" for="Name">Name</label>
                            <input type="text" class="contact__info_input" name="name" placeholder="Please enter your full name" required>
                        </div>
                        <div class="input__fields">
                            <label class="contact__label" for="email">Email</label>
                            <input type="email" class="contact__info_input" name="email" placeholder="Please your email" required>
                        </div>
                        <div class="input__fields">
                            <label class="contact__label" for="phone">Phone</label>
                            <input type="tel" class="contact__info_input" name="phone" placeholder="Please your phone number" required>
                        </div>
                        <div class="input__fields">
                            <label class="contact__label" for="Message" > Message</label>
                            <textarea class="msg_input" name="message" id="" cols="30" rows="10" placeholder="type here..." required>

                            </textarea>
                        </div>
                        <div class="btn_wrap">
                            <button type="submit" value="Submit" id="submit" class="btn contact_btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
    `;
    contactContainer.innerHTML = contactContent;
})();