import React from 'react';
import contact from '../../../images/photo_2022-05-23_23-43-55.jpg';

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contact})`,
      }}
      className="bg-primary px-10 py-14 mt-10 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md bg-white"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md bg-white"
        />
        <textarea
          className="textarea w-full max-w-md bg-white"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn uppercase text-black font-bold bg-white ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
