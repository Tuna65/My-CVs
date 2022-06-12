import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const warning = useRef();
    const txtName = useRef();
    const txtEmail = useRef();
    const txtMessage = useRef();

    const [controlSend, setControlSend] = useState(0);

    const [nameValue, setNameValue] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    //=========================
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t1gc215', 'template_ve8x8p7', form.current, 'l5pf8i6ET1rLsrIHF').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    function check(element, value, text1, text2) {
        if (value === '') {
            element.current.innerText = `${text1}`;
        } else {
            if (text2) {
                let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!regex.test(value)) {
                    element.current.innerText = `${text2}`;
                }
            }
        }
    }

    const handleOnclick = (e) => {
        check(txtName, nameValue, 'Please tell me your name');
        check(txtMessage, content, 'what do you want to talk with me');
        check(txtEmail, email, 'Please tell me your email', 'here must enter email');

        //================================================================
        if (
            txtName.current.innerText === '' &&
            txtMessage.current.innerText === '' &&
            txtEmail.current.innerText === ''
        ) {
            warning.current.innerText = 'Thanks for your feedback';
            setControlSend(controlSend + 1);
        } else e.preventDefault();

        if (controlSend > 2) {
            e.preventDefault();
            warning.current.innerText = 'You send to many mail! Please wait after 3min';
            warning.current.style.color = 'red';
            setTimeout(() => {
                setControlSend(0);
            }, 180000);
        }

        setTimeout(() => {
            warning.current.innerText = '';
            document.querySelector('.name').value = '';
            document.querySelector('.email').value = '';
            document.querySelector('.messages').value = '';
            setContent('');
            setEmail('');
            setNameValue('');
        }, 2000);
    };

    return (
        <div className="ct-wrapper grid" id="Contact">
            <div className="row">
                <div className="ct-left col l-6 c-12">
                    <h2>Get In Touch</h2>
                    <h1>Contact me</h1>
                    <p>( Phản hồi cho tôi biết tại đây! )</p>
                </div>
                <div className="col l-6 c-12">
                    <form className="ct-form" ref={form} onSubmit={sendEmail}>
                        {/* name */}
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            onChange={(e) => {
                                setNameValue(e.target.value);
                            }}
                            onFocus={() => {
                                txtName.current.innerText = '';
                            }}
                            className="name"
                        />
                        <span className="message " ref={txtName}></span>

                        {/* email*/}
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => {
                                txtEmail.current.innerText = '';
                            }}
                            className="email"
                        />
                        <span className="message " ref={txtEmail}></span>

                        {/* content */}
                        <textarea
                            name="message"
                            placeholder="Message"
                            id=""
                            cols="30"
                            rows="10"
                            onChange={(e) => setContent(e.target.value)}
                            onFocus={() => {
                                txtMessage.current.innerText = '';
                            }}
                            className="messages"
                        ></textarea>
                        <span className="message " ref={txtMessage}></span>

                        <span ref={warning} className="warning"></span>
                        <input type="submit" value="Send" className="button ct-button" onClick={handleOnclick} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
