import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = (data, e) => {
    // Perform any additional logic, such as sending the data to a server
    e.target.reset();
    console.log(form.current);
    console.log(data);
    emailjs
      .sendForm(
        "service_s4ufelh",
        "template_jc5dzxd",
        form.current,
        "Ma6BZ6CA8jirN6U7Y"
      )
      .then(
        (result) => {
          toast("Email sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
        },
        (error) => {
          toast.error("A error has occured!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(error);
        }
      );
  };

  return (
    <div className="form-container  bg-[#eef1ef] p-12 my-1" id="contact">
      <div className="bg-white shadow-md mb-12 bottom-2 border-gray-900 rounded-md w-[98%] my-[10px] mx-auto md:w-[79%]">
        <h2 className="text-center text-4xl mb-2 pt-4">Let's talk</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-4 py-8"
          ref={form}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              style={{ width: "100%", padding: "0.5rem" }}
              placeholder="Name"
              className="border-2 border-black"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span style={{ color: "red" }}>Username is required</span>
            )}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="mail"
              id="email"
              style={{ width: "100%", padding: "0.5rem" }}
              className="border-2 border-black"
              placeholder="Email"
              {...register("mail", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.mail && (
              <span style={{ color: "red" }}>Please Enter your email</span>
            )}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              style={{ width: "100%", padding: "0.5rem", minHeight: "100px" }}
              placeholder="Message"
              className="border-2 border-black"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span style={{ color: "red" }}>Please Enter Message</span>
            )}
          </div>

          <input
            className="border-2 border-black w-full py-2 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
