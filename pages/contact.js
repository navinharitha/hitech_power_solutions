import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleMapReact from "google-map-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import styles from "../styles/Contact.module.css";

function Contact() {
  const [emailSuccess, setEmailSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("please provide first name"),
      lastName: Yup.string().required("please provide last name"),
      email: Yup.string()
        .email("please provide valid email")
        .required("please provide email"),
      phone: Yup.string()
        .required("please provide phone")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setEmailSuccess(true);
          resetForm();
        }
      }).catch(err => {
        setLoading(false);
        setEmailSuccess(false);
      })
    },
  });
  return (
    <Layout title="Hitech Power Solutions | Contact Us">
      <PageBanner title="Contact Us" />
      <div className="appContainer block md:flex justify-between py-16">
        <div className="w-full md:w-1/2 px-3">
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred mb-5">
            Do You Have Any Questions?
          </h4>
          <p>
            If you are interested in working with us then please drop us a line,
            we would love to hear from you.
          </p>
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred my-5">
            Opening Hour
          </h4>
          <p>Monday – Friday: 9am to 5pm</p>
          <p>Saturday: 10.00am to 4pm</p>
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred my-5">
            Call Us Today
          </h4>
          <div className="flex items-center mb-5">
            <FaPhoneSquareAlt size={38} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnineteen  font-DMSans font-bold">
                Phone Number
              </h3>
              <p className="text-pointeighteen  font-DMSans">+61 1111 98393</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope size={38} color="red" />
            <div className="ml-3">
              <h3 className="text-pointnineteen  font-DMSans font-bold">
                Send Your Email
              </h3>
              <p className="text-pointeighteen  font-DMSans">
                info@hitechpowersolutions.com.au
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <h4 className="font-Hind font-semibold text-pointtwentyfour text-primaryred mt-5 md:mt-0 mb-5">
            Please fill the Form
          </h4>
          <div className={styles.contactformwrapper}>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.touched.firstName &&
                  formik.errors.firstName &&
                  "errorInput"
                }`}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className={styles.errorMessage}>{formik.errors.firstName}</p>
              )}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.touched.lastName &&
                  formik.errors.lastName &&
                  "errorInput"
                }`}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className={styles.errorMessage}>{formik.errors.lastName}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.touched.email && formik.errors.email && "errorInput"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={styles.errorMessage}>{formik.errors.email}</p>
              )}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${
                  formik.touched.phone && formik.errors.phone && "errorInput"
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className={styles.errorMessage}>{formik.errors.phone}</p>
              )}
              <textarea
                name="message"
                placeholder="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              <button
                className="font-Hind font-semibold text-white"
                type="submit"
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              {emailSuccess && (
                <p className={styles.emailSuccess}>Email sent Successfully</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        ></GoogleMapReact>
      </div>
    </Layout>
  );
}

export default Contact;
