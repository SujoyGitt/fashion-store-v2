import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!data.user_name || !data.user_email || !data.message) {
      alert("Please fill all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_p135l8q",       // your service ID
        "template_qqn2sry",     // your template ID
        form.current,
        "6HQQnHhSWDmsQlhLM"     // your correct public key
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🎉");
          console.log(result.text);

          // Clear fields after sending
          setData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="container-fluid contact py-5">
      <h4 className="text-center mb-4 fw-bold">
        Feel Free To Contact Us
      </h4>

      {/* Map */}
      <div className="container px-0 mb-5 shadow-sm rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2460555409307!2d87.81867869999999!3d23.234131599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f83758b2c01551%3A0xdfd4298999a2d330!2sKharswar%20Pally%20United%20Club!5e0!3m2!1sen!2sin!4v1675921868701!5m2!1sen!2sin"
          title="mylocation"
          className="w-100"
          style={{ height: "330px", border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="col-12 col-md-8 col-lg-4">
          <form ref={form} onSubmit={sendEmail}>

            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="user_name"
                  value={data.user_name}
                  onChange={InputEvent}
                  className="form-control py-2"
                  placeholder="Name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input
                  type="email"
                  name="user_email"
                  value={data.user_email}
                  onChange={InputEvent}
                  className="form-control py-2"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <textarea
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  className="form-control py-3"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-12 submitbtn">
                <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
                  SEND MESSAGE
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
