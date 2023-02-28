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

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onSubmit: SubmitHandler<ContactData> = (data) => {
    send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
    )
      .then((response) => {
        console.log("Sent");
        reset();
        setEmailSent(true);
        setEmailError(false);
      })
      .catch((err) => {
        console.log("Failed");
        reset();
        setEmailError(true);
        setEmailSent(false);
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
        <button className={styles.submitButton} type="submit">
          Send
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
