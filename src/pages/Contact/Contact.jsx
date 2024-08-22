import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contactContainer" id="contact">
      <div className="headers">
        <p>{t("contact.header2")}</p>
        <h1>{t("contact.header1")}</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
