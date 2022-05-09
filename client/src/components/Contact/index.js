import React, { useState } from "react";
// import { validateEmail } from '../../utils/helpers';
// import React from "react";
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGE, QUERY_MESSAGES } from '../../utils/queries';

function Contact() {
    const [messageText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);


    const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE, {
        update(cache, { data: { addMessage } }) {
          try {
            // update thought array's cache
            // could potentially not exist yet, so wrap in a try/catch
            const { messages } = cache.readQuery({ query: QUERY_MESSAGES });
            
               // prepend the newest thought to the front of the array
            cache.writeQuery({
              query: QUERY_MESSAGES,
              data: { messages: [addMessage, ...messages] },
            });
          } catch (e) {
            console.error(">>>>>>>> catching error ", e, " | ", error);
          }

    // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, messages: [...me.messages, addMessage] } },
    //   });
        },
      });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 20) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);

        }
    };

    const handleSubmit = async event => {
        
        // prevent page refresh
        event.preventDefault();
        // addMessage(messageText);
        // console.log(error)
        // clear form value
        setText('');
        setCharacterCount(0);

        try {
          await addMessage();
          

        } catch (e) {
          console.error(e);
        }
    };

    return (
        <section>
            <p className={`m-0 ${characterCount === 20 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/20
                {error && <span className="ml-2"> Something went wrong...</span>}
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Here's a new thought..."
                    value={messageText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </form>
            

        </section>
    )
}

// function Contact() {
//     const [errorMessage, setErrorMessage] = useState('');

//     const [formState, setFormState] = useState('');
//     const { username, email, messageText } = formState;


//     const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
//         update(cache, { data: { addMessage } }) {
//           try {
//             // update thought array's cache
//             // could potentially not exist yet, so wrap in a try/catch
//             const { messages } = cache.readQuery({ query: QUERY_MESSAGES });
//             cache.writeQuery({
//               query: QUERY_MESSAGES,
//               data: { messages: [addMessage, ...messages] },
//             });
//           } catch (e) {
//             console.error(e);
//           }

//           // update me object's cache
//           const { me } = cache.readQuery({ query: QUERY_MESSAGE });
//           cache.writeQuery({
//             query: QUERY_MESSAGE,
//             data: { me: { ...me, messages: [...me.messages, addMessage] } },
//           });
//         },
//       });


//     function handleChange(e) {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             console.log(isValid)
//             //isvalid conditional
//             if (!isValid) {
//                 setErrorMessage('Your email is hella invalid');
//             } else {
//                 setErrorMessage('')
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`A ${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }


//         console.log('error Message bro', errorMessage);

//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value })

//         }

//     }

//   // submit form
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setFormState(event.target.value);

//     try {
//         await addMessage({
//           variables: { username, email, messageText },
//         });
//         setFormState('');

//       } catch (e) {
//         console.error(e);
//       }

//         // clear form values
//         setFormState();
//   };

//     return (
//         <section className="container form-div col-lg-6 col-md-10">

//             <h2>Contact me</h2>
//             <a href='mailto:robyn@sitereworks.com'  target='_blank' rel='noreferrer'>robyn@sitereworks.com</a>
//             <br />
//             <br />
//             <form id="contact-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Name:</label> <br />
//                     <input type="text" className="form-control" name="username" defaultValue={username} onBlur={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email address:</label><br />
//                     <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="message">Message:</label><br />
//                     <textarea name="message" className="form-control" defaultValue={messageText} onBlur={handleChange} rows="5" />
//                 </div>
//                 {errorMessage && (
//                     <div>
//                         <p className="error-text">{errorMessage}</p>
//                     </div>
//                 )}
//                 <div className="row form-group">
//                     <div className="col-10">
//                         <button  className="btn btn-success" type="submit">Submit</button>

//                     </div>


//                 </div>
//             </form>
//         </section>
//     )
// }

export default Contact;