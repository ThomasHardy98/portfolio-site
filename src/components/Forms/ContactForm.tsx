import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { send } from "emailjs-com";

import styles from "components/Forms/ContactForm.module.scss";

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).required(),
  });

  type ContactData = {
    name: string;
    email: string;
    message: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactData>({ mode: "onBlur", resolver: yupResolver(schema) });

  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const delay = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const onSubmit: SubmitHandler<ContactData> = (data) => {
    setIsSending(true);
    send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
    )
      .then((response) => {
        reset();
        setEmailSent(true);
        setEmailError(false);
        setIsSending(false);
        delay(5000).then(() => setEmailSent(false));
      })
      .catch((err) => {
        reset();
        setEmailError(true);
        setEmailSent(false);
        setIsSending(false);
        delay(5000).then(() => setEmailError(false));
      });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fieldContainer}>
          <input
            className={`${styles.inputText} ${
              errors.name?.message && styles.invalidInput
            }`}
            {...register("name")}
            type="text"
            placeholder=" "
          />
          <label className={styles.floatingLabel}>Name</label>
          {errors.name?.message && (
            <p className={styles.errorText}>{errors.name?.message}</p>
          )}
        </div>
        <div className={styles.fieldContainer}>
          <input
            className={`${styles.inputText} ${
              errors.email?.message && styles.invalidInput
            }`}
            {...register("email")}
            type="email"
            placeholder=" "
            formNoValidate
          />
          <label className={styles.floatingLabel}>Email</label>
          {errors.email?.message && (
            <p className={styles.errorText}>{errors.email?.message}</p>
          )}
        </div>
        <div className={styles.fieldContainer}>
          <textarea
            className={`${styles.inputTextArea} ${
              errors.message?.message && styles.invalidInput
            }`}
            {...register("message")}
            placeholder=" "
          />
          <label className={styles.floatingLabel}>Message</label>
          {errors.message?.message && (
            <p className={styles.errorText}>{errors.message?.message}</p>
          )}
        </div>
        <button
          className={`${styles.submitButton} ${
            isSending && styles.submitButtonSending
          }`}
          type="submit"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
        {emailSent && (
          <div className={styles.successMessage}>
            Email was successfully sent
          </div>
        )}
        {emailError && (
          <div className={styles.errorMessage}>
            Email failed to send, please try again later
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
