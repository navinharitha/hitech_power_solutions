import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageBanner from "../components/PageBanner";
import {
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "../styles/Contact.module.css";


function Contact() {
  return (
    <React.Fragment>
      <PageBanner title="Contact Us" />
      <div className="appContainer block md:flex justify-between py-16">
        <div className="w-full md:w-1/2 px-3">
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred mb-5">Do You Have Any Questions?</h4>
          <p>
            If you are interested in working with us then please drop us a line,
            we would love to hear from you.
          </p>
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred my-5">Opening Hour</h4>
          <p>Monday – Friday: 9am to 5pm</p>
          <p>Saturday: 10.00am to 4pm</p>
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred my-5">Call Us Today</h4>
          <div className="flex items-center mb-5">
            <FaPhoneSquareAlt size={38} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnineteen  font-DMSans font-bold">Phone Number</h3>
              <p className="text-pointeighteen  font-DMSans">+61 1111 98393</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope size={38} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnineteen  font-DMSans font-bold">Send Your Email</h3>
              <p className="text-pointeighteen  font-DMSans">info@hitechpowersolutions.com.au</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred mt-5 md:mt-0 mb-5">Please fill the Form</h4>
          <div className={styles.contactformwrapper}>
          <form>
            <input
              type="text"
              name="firstName" placeholder="First Name"
            />
            <input
              type="text"
              name="lastName" placeholder="Last Name"
            />
            <input
              type="email"
              name="email" placeholder="Email"
            />
            <input
              type="tel"
              name="phone" placeholder="Phone"
            />
            <textarea
              name="message" placeholder="Message"
            ></textarea>
            <button className="font-Hind font-semibold text-white" type="submit">Send Message</button>
          </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
