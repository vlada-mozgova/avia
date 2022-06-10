import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Неправильный адрес почты")
    .required("Обязательное поле"),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, "Неправильно введен номер телефона")
    .required("Обязательное поле"),
  firstname: Yup.string()
    .min(2, "Имя должно иметь хотя бы два символа")
    .required("Обязательное поле"),
  lastname: Yup.string()
    .min(2, "Фамилия должна иметь хотя бы два символа")
    .required("Обязательное поле"),
  passport: Yup.string()
    .matches(/^\d{5,10}$/, "Неправильно введен номер паспорта")
    .required("Обязательное поле"),
});