import { Typography } from "@/components/typography";
import { Input } from "@/components/input";
import Button from "@/components/button";
import styles from "./index.module.css";
import { container } from "./container";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

export const ContactMe = () => {
  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = container();

  const t = useLocalizedText("home.contact");

  const getButtonLabel = () => {
    if (isSubmitting) return t("form.button.sending");
    if (isSuccess) return t("form.button.sent");
    return t("form.button.default");
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.header}>
        <Typography
          as="h2"
          size={28}
          align="center"
          weight="medium"
          className={styles.title}
        >
          {t("heading")}
        </Typography>
        <Typography
          as="p"
          size={16}
          weight="light"
          align="center"
          className={styles.description}
        >
          {t("description")}
        </Typography>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          label={t("form.name.label")}
          name="name"
          type="text"
          fullWidth
          value={values.name}
          onChange={handleChange}
          helperText={errors.name}
          error={!!errors.name}
        />

        <Input
          label={t("form.email.label")}
          name="email"
          type="email"
          fullWidth
          value={values.email}
          onChange={handleChange}
          helperText={errors.email || t("form.email.helper")}
          error={!!errors.email}
        />

        <Input
          label={t("form.subject.label")}
          name="subject"
          type="text"
          fullWidth
          value={values.subject}
          onChange={handleChange}
          helperText={errors.subject}
          error={!!errors.subject}
        />

        <Input
          label={t("form.message.label")}
          name="message"
          type="text"
          fullWidth
          value={values.message}
          onChange={handleChange}
          helperText={errors.message}
          error={!!errors.message}
        />

        <Button
          type="submit"
          variant="filled"
          label={getButtonLabel()}
          containerClassName={styles.submitButton}
          labelClassName={styles.submitButtonLabel}
          fullWidth={true}
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
};
