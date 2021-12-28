import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './SignInForm.module.scss';
import MyInput from "../../../UI/MyInput/MyInput";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchSignIn } from "../../../store/actionCreators/userAC";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface ISignInForm {
   handleToggle: () => void,
   handleClose: () => void
}

const SignInForm: React.FC<ISignInForm> = ({ handleToggle, handleClose }) => {
   const dispatch = useAppDispatch();

   const isAuth = useTypedSelector(state => state.user.isAuth)

   useEffect(() => {
      if (isAuth) {
         handleClose()
      }
   }, [isAuth])

   const validataion = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
   })

   const formik = useFormik({
      validationSchema: validataion,

      initialValues: {
         password: '',
         username: '',
      },

      onSubmit: async (values) => {
         await dispatch(fetchSignIn(values));
      }
   })
   return (
      <form className={s.form} onSubmit={formik.handleSubmit}>
         <MyInput
            name='username'
            value={formik.values.username}
            type='text'
            onChange={formik.handleChange}
            placeholder="E-mail"
         />
         <MyInput
            name='password'
            value={formik.values.password}
            type='password'
            onChange={formik.handleChange}
            placeholder="Пароль"
         />
         <div className={s.msg}>
            Нет учетной записи?
            <span onClick={handleToggle}>
               Зарегистрироваться
            </span>
         </div>
         <button
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            type='submit'
            className={s.submit}
         >
            <span>Войти</span>
         </button>
      </form>
   )
}

export default SignInForm
