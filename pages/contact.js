import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PageBanner from "../components/PageBanner";

function Contact() {
  return (
    <React.Fragment>
      <PageBanner title="Contact Us" />
      <div className="appContainer flex justify-between">
        <div>
          <h4>Do You Have Any Questions?</h4>
          <p>
            If you are interested in working with us then please drop us a line,
            we would love to hear from you.
          </p>
          <h4>Opening Hour</h4>
          <p>Monday – Friday: 9am to 5pm</p>
          <p>Saturday: 10.00am to 4pm</p>
          <h4>Call Us Today</h4>
        </div>
        <div>
          <h4>Please fill the Form</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
