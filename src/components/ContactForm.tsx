import { useRef, useState, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

import { formInputFields } from "@/constants/constants";

function ContactForm() {
    const [isSent, setIsSent] = useState<boolean>(false);

    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_tjllqaa', 'template_gawpd0f', '#contact_form')
            .then(() => {
                const contactFrom = document.getElementById("contact_form") as HTMLFormElement;
                if (contactFrom) {
                    contactFrom.reset();
                }
                setIsSent(true);
                // Temp
                alert('Thank you for reaching out! I will get back to you as soon as I can.');
            })
            .catch((error) => {
                console.error('An error occurred sending your email: ', error);
                setIsSent(false);
            })
    }

    return (
        <div
            className="justify-center"
            style={{
                backgroundImage: "url(../assets/flower.png)",
                width: "100%",
                height: "95%",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
        >
            <div>
                <h2
                    className="message text-5xl bg-primary-200 p-2 rounded-xl text-primary-600 text-center rounded-br-[0%] relative shadow-2xl"
                >
                    {`LET'S CONNECT & MAKE IT HAPPEN!`}
                </h2>
            </div>
            <div className="w-full flex justify-center">
                <form
                    id="contact_form"
                    method="POST"
                    target="_blank"
                    onSubmit={sendEmail}
                    className="w-[80%] h-full flex flex-col gap-4 pt-4 text-primary-200"
                >
                    {formInputFields.map((formInput, index) => (
                        <div className="w-full flex flex-col" key={`${index} ${formInput.id}`}>
                            <label htmlFor={formInput.id} style={{ fontWeight: 'bold', fontSize: '18px' }}>{formInput.label}</label>
                            <input
                                className="p-[0.5em] rounded-xl text-primary-600 bg-primary-200"
                                placeholder={`Enter your ${formInput.label}`}
                                id={formInput.id}
                                type="text"
                                name={formInput.name}
                                required
                            />
                        </div>
                    ))}
                    <div className="w-full flex flex-col">
                    <label htmlFor="message" style={{ fontWeight: 'bold', fontSize: '18px' }}>Message</label>
                        <textarea
                            className="p-[0.5em] rounded-xl text-primary-600 bac bg-primary-200"
                            placeholder="Enter your message..."
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className="w-full flex justify-center">
                        <input
                            className="w-[100px] h-[50px] bg-primary-400 text-primary-600 rounded-xl cursor-pointer hover:bg-primary-500 mb-5"
                            type="submit"
                            value={!isSent ? 'Send' : 'Done!'}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
