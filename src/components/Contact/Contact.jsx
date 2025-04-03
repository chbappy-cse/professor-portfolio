import React from 'react';
import location_icon from '../../assets/location-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import msg_icon from '../../assets/msg-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import whitw_arrow from '../../assets/white-arrow.png';
import './Contact.css';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7fc14e93-e868-47a2-a32c-bcbdfa746598");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a messge <img src={msg_icon} alt="Message Icon" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea voluptatem perferendis aut ipsum libero nemo incidunt magnam, eum autem aliquam dolor fugit voluptate hic.</p>
            <ul>
                <li> <img src={mail_icon} alt="Mail Icon" /> contact@edusity.com</li>
                <li><img src={phone_icon} alt="Mail Icon" /> +1123-456-7890</li>
                <li> <img src={location_icon} alt="Mail Icon" /> Gulshan 2, Dhaka, <br /> Bangladesh 1213</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='button dark_button'>Submit now <img src={whitw_arrow} alt="White Arrow" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact