import React, { useState } from "react";
// import { validateEmail } from '../../utils/helpers';

function Contact() {
//     const [errorMessage, setErrorMessage] = useState('');
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;

//     function handleChange(e) {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             console.log(isValid)
//             //isvalid conditional
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid');
//             } else {
//                 setErrorMessage('')
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }


//         console.log('errorMessage', errorMessage);

//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value })

//         }

//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//     }

    return (
        <section class="container form-div col-lg-6 col-md-10">
        
            <h2>Contact me</h2>
            <a href='mailto:robyn@sitereworks.com' target='_blank' rel='noreferrer'>robyn@sitereworks.com</a>
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label><br />
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label><br />
                    <textarea name="message" className="form-control" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="row form-group">
                    <div className="col-10">
                        <button  className="btn btn-success" type="submit">Submit</button>

                    </div>


                </div>
            </form> */}
        </section>
    )
}

export default Contact;