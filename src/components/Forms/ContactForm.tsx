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

  const onSubmit: SubmitHandler<ContactData> = (data) => {
    // Send email using entered details
    send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
    )
      .then((response) => {
        console.log("Sent");
        reset();
        // Output success message
      })
      .catch((err) => {
        console.log("Failed");
        reset();
        // Output error message
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
