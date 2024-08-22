import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Name must be 50 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .max(500, "Message must be 500 characters or less")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_ysq1gak",
          "template_wuf4xge",
          values,
          "zmGbSwBwkuwhfoTPQ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setModalVisible(true);
            resetForm();
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    },
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">{t("contact.formLabel.name")}</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <label htmlFor="email">{t("contact.formLabel.email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <label htmlFor="message">{t("contact.formLabel.message")}</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit" className="submitButton">
          {t("contact.submit")}
        </button>
      </form>
      {modalVisible && (
        <div className="modal">
          <div className="modalContent">
            <h2>{t("contact.success")}</h2>
            <p>{t("contact.successMessage")}</p>
            <button onClick={() => setModalVisible(false)}>{t("contact.closeModal")}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
