import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export type ContactStatus = "idle" | "loading" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const useContactForm = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<ContactStatus>("idle");

  const messageSchema = yup.object({
    name: yup.string().required(t("contact.errors.name")),
    email: yup
      .string()
      .email(t("contact.errors.emailInvalid"))
      .required(t("contact.errors.email")),
    subject: yup.string().required(t("contact.errors.subject")),
    contact: yup.string().required(t("contact.errors.contact")),
    message: yup.string().required(t("contact.errors.message")),
    botcheck: yup.boolean().default(false),
  });

  const { handleSubmit, control, register, reset } = useForm({
    resolver: yupResolver(messageSchema),
  });

  const clearStatus = () =>
    setStatus((prev) =>
      prev === "success" || prev === "error" ? "idle" : prev
    );

  const onSubmit = handleSubmit(async (values) => {
    if (values.botcheck) {
      setStatus("success");
      reset();
      return;
    }

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Portfolio Contact Form",
          subject: values.subject,
          name: values.name,
          email: values.email,
          phone: values.contact,
          message: values.message,
          botcheck: values.botcheck,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  });

  return { control, register, onSubmit, status, clearStatus };
};
