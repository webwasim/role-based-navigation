import React, { useState } from 'react';

const FeedbackForm = () => {
    let [isFormSubmitted, setIsFormSubmitted] = useState(false);
    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [phone, setPhone] = useState(null);
    let [msg, setMsg] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        clearErrors();
        if (name === null || name === "") {
            document.querySelector(".nameReq").classList.add("error");
        } else if (email === null || email === "") {
            document.querySelector(".emailReq").classList.add("error");
        } else if (!emailIsValid(email)) {
            document.querySelector(".emailReq").classList.add("error");
        } else {
            clearErrors();
            setIsFormSubmitted (true);
        }
    }
    function clearErrors() {
        let errors = document.querySelectorAll(".error");
            for (var i = 0; i < errors.length; i++) {
                errors[i].classList.remove('error');
        }
    }
    function emailIsValid (emailInput) {
        return /\S+@\S+\.\S+/.test(emailInput)
    }


    if (isFormSubmitted) {
        return (
            <article className="">
                <h3>Thank you {name} for your feedback.</h3>
            </article>
        )
    } else {
        return (

            <article className="">
                <section>
                    <h1>Feedback Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row nameReq">
                            <label htmlFor="name">Full Name <span>*</span></label>
                            <input onChange={(e) => setName(e.target.value)} id="name" className="long" name="name"></input>
                            <span className="req-feedback">Full name is required.</span>
                        </div>
                        <div className="row emailReq">
                            <label htmlFor="email">Email  <span>*</span></label>
                            <input onChange={(e) => setEmail(e.target.value)} id="email" name="email"></input>
                            <span className="req-feedback">Valid email is required.</span>
                        </div>
                        <div className="row">
                            <label htmlFor="phone">phone</label>
                            <input onChange={(e) => setPhone(e.target.value)} id="phone" name="phone"></input>
                        </div>
                        <div className="row">
                            <label htmlFor="msg">Message</label>
                            <textarea onChange={(e) => setMsg(e.target.value)} id="msg" name="msg"></textarea>
                        </div>
                        <div className="row">
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </form>
                </section>
            </article>

        );
    }
}
 
export default FeedbackForm;