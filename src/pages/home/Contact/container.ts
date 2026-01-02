import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormValues, ContactFormErrors } from "./index.types";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const container = () => {
  const t = useLocalizedText("home.contact.form");

  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (values: ContactFormValues): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = t("name.error.required");
    }

    if (!values.email.trim()) {
      newErrors.email = t("email.error.required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      newErrors.email = t("email.error.format");
    }

    if (!values.subject.trim()) {
      newErrors.subject = t("subject.error.required");
    }

    if (!values.message.trim()) {
      newErrors.message = t("message.error.required");
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Submitted:", values);
      setIsSuccess(true);
      setValues(initialValues);

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
};
