import React from 'react'
import "./Contact.css";

const inputsForm=[
    {
        id: 1,
        name: "FirstName",
        labelName: "First Name",
        placeholder: "Your Name"
    },
    {
        id: 2,
        name: "Email",
        labelName: "Email",
        placeholder: "Contact Email"
    },
    {
        id: 3,
        name: "LastName",
        labelName: "Last Name",
        placeholder: "Your Last Name"
    },
    {
        id: 4,
        name: "PhoneNumber",
        labelName: "Phone Number",
        placeholder: "Your Phone Number"
    },
]

const Contact = () => {
    return (
        <div style={{ position: "relative" }}>
            <div className="contact-us-main-image">
                <h1 className="contact-us-main-head">Contact Us</h1>
            </div>

            <div className="contact-us-form-content-alignment-container">
                <div className="contact-us-form-content-container">
                    {/* 1st */}
                    <div style={{width: "50%"}}>
                        <h1 className="contact-us-content-head">Contact Us</h1>
                        <p className="contact-us-content-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        
                    </div>
                    {/* 2nd */}
                    <form className="contact-us-form">
                        <div className="contact-us-form-label">
                            {inputsForm.map(each=>(
                                <div key={each.id} className="contact-us-input-fields">
                                    <label htmlFor={each.id} className="contact-us-form-label">{each.labelName}</label>
                                    <input type="text" id={each.id} placeholder={each.placeholder} className="contact-us-form-input" />
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact