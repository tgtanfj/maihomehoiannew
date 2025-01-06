import React, { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
import Swal from "sweetalert2";
import axios from "axios";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hotel: "",
    date: "",
    email: "",
    option: "",
    message: "",
    participants: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = [
      "name",
      "phone",
      "hotel",
      "date",
      "email",
      "option",
      "participants",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      Swal.fire({
        title: "Required",
        text: "Please fill in the information completely.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#DCCA87",
        background: "#f5f5f5",
        customClass: {
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://maihome-backend.vercel.app/send-email",
        {
          name: formData?.name,
          email: formData?.email,
          phone: formData?.phone,
          hotelNameAndAddress: formData?.hotel,
          date: formData?.date,
          numberOfParticipants: formData?.participants,
          tour: formData?.option,
          message: formData?.message,
        }
      );
      console.log("response?.message", response)
      if (response?.data?.message === "Email sent successfully!") {
        Swal.fire({
          title: "Booking successfully!",
          text: "Your information has been sent to us.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#DCCA87",
          background: "#f5f5f5",
          customClass: {
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
        setFormData({
          name: "",
          phone: "",
          hotel: "",
          date: "",
          email: "",
          option: "",
          message: "",
          participants: "",
        });
      } else {
        Swal.fire({
          title: "Booking failed!",
          text: "Something went wrong, please try again!",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#DCCA87",
          background: "#f5f5f5",
          customClass: {
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      }
    } catch (error) {
      console.error(
        "Error calling API:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Reservation" />
        <h1 className="headtext__cormorant">BOOK A TOUR</h1>
        <p className="p__opensans">We look forward to your presence!</p>
      </div>
      <div className="app__newsletter-inputs">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="dd/mm/yyyy"
            value={formData.date}
            onChange={handleChange}
            className="date-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="hotel"
            placeholder="Your hotel & address"
            value={formData.hotel}
            onChange={handleChange}
          />
          <select name="option" value={formData.option} onChange={handleChange}>
            <option value="">Select Option</option>
            <option value="Package 6 hours class">Package 6 hours class</option>
            <option value="On site 4 hours class">On site 4 hours class</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Your message (optional)"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="input-group">
          <input
            type="number"
            name="participants"
            placeholder="Number of participants"
            value={formData.participants}
            onChange={handleChange}
          />
          <button
            type="button"
            className="custom__button"
            onClick={handleSubmit}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
