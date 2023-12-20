import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { TFormContactSchema, formContactSchema } from "./formContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { InputContact } from "./InputContact";
import { TextAreaContact } from "./TextAreaContact";
import { PortfolioContext } from "../../../providers/PortfolioContext";

export const FormContact = () => {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const { sendContact } = useContext(PortfolioContext)

    const { register, handleSubmit, reset, formState: { errors } }= useForm<TFormContactSchema>({
        resolver: zodResolver(formContactSchema),
    })

    const submit: SubmitHandler<TFormContactSchema> = async (formData) => {
      sendContact(formData,setIsLoading);
      reset();
    }

  return (
    <form 
    onSubmit={handleSubmit(submit)}
    className={styles.formContact}
    >
      <InputContact 
      placeholder="Digite o seu nome" 
      helper={errors.name && errors.name.message}
      {...register("name")}
      />
      <InputContact 
      placeholder="Digite o seu email" 
      helper={errors.email && errors.email.message}
      {...register("email")}
      />
      <TextAreaContact 
      placeholder="Digite a sua mensagem" 
      helper={errors.message && errors.message.message}
      {...register("message")}
      />
      <button disabled={isLoading}>
        { isLoading ? "Enviando mensagem" : "Enviar mensagem"}
      </button>
    </form>
  );
};
