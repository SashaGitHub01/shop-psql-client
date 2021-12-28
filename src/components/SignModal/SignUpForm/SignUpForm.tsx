import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import s from './SignUpForm.module.scss';
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyInput from "../../../UI/MyInput/MyInput";
import { fetchSignUp } from "../../../store/actionCreators/userAC";
import { IRegBody } from "../../../API/types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface ISignUpForm {
   handleToggle: () => void,
   handleClose: () => void
}

const SignUpForm: React.FC<ISignUpForm> = ({ handleToggle, handleClose }) => {
   const dispatch = useAppDispatch();

   const isAuth = useTypedSelector(state => state.user.isAuth)

   useEffect(() => {
      if (isAuth) {
         handleClose()
      }
   }, [isAuth])


   const validataion = Yup.object().shape({
      email: Yup.string()
         .email('Неверный формат электроной почты')
         .min(6, 'E-mail должен содержать от 6 до 30 символов')
         .max(30, 'E-mail должен содержать от 6 до 30 символов')
         .required('Обязательное поле'),

      password: Yup.string()
         .min(6, 'Пароль должен содержать от 6 до 30 символов')
         .max(30, 'Пароль должен содержать от 6 до 30 символов')
         .required('Обязательное поле'),

      password2: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
         .required('Обязательное поле')
   })

   const formik = useFormik({
      validationSchema: validataion,

      initialValues: {
         password: '',
         password2: '',
         email: '',
         role: 'USER'
      },

      onSubmit: async (values) => {
         await dispatch(fetchSignUp(values as IRegBody));
      }
   })

   return (
      <form className={s.form} onSubmit={formik.handleSubmit}>
         <MyInput
            onBlur={formik.handleBlur}
            name='email'
            value={formik.values.email}
            type='text'
            onChange={formik.handleChange}
            placeholder="E-mail"
            error={formik.touched.email
               ? formik.errors.email
               : undefined}
         />
         <MyInput
            onBlur={formik.handleBlur}
            name='password'
            value={formik.values.password}
            type='password'
            onChange={formik.handleChange}
            placeholder="Пароль"
            error={formik.touched.password
               ? formik.errors.password
               : undefined}
         />
         <MyInput
            onBlur={formik.handleBlur}
            name='password2'
            value={formik.values.password2}
            type='password'
            onChange={formik.handleChange}
            placeholder="Подтверждение пароля"
            error={formik.touched.password2
               ? formik.errors.password2
               : undefined}
         />
         <select
            name="role"
            className={s.select}
            defaultValue={'USER'}
            onChange={formik.handleChange}
         >
            <option value="USER">
               Пользователь
            </option>
            <option value="ADMIN">
               Админитстратор
            </option>
         </select>
         <div className={s.msg}>
            Уже есть учетная запись?
            <span onClick={handleToggle}>
               Войти
            </span>
         </div>
         <button
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            type='submit'
            className={s.submit}
         >
            <span>Создать</span>
         </button>
      </form>
   )
}

export default SignUpForm
