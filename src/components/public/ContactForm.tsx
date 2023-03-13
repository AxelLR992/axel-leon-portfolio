import React, { FC, useState } from "react";
import Input from "./Input";

const ContactForm: FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <form className="row">
      <div className="col-12 col-md-6">
        <Input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Name"
        />
      </div>
      <div className="col-12 col-md-6 mt-3 mt-md-0">
        <Input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Email address"
        />
      </div>
      <div className="col-12 mt-3">
        <Input
          type="text"
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          placeholder="Subject"
        />
      </div>
      <div className="col-12 mt-3">
        <Input
          type="text"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Message"
          isMultiLine
        />
      </div>
      <div className="col-12 mt-3">
        <button className="btn btn-primary px-5">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
