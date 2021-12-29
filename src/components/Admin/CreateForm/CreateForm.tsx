import { setIn, useFormik } from "formik";
import React, { useState } from "react";
import { IImage } from "../../../types/IImage";
import { CloseIcon, ImageIcon } from "../../../assets/icons";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import MyInput from "../../../UI/MyInput/MyInput";
import s from './CreateForm.module.scss';
import * as Yup from 'yup';
import { fetchCreateItem } from "../../../store/actionCreators/adminAC";
import { ICreateInfo } from "../../../types/ICreateInfo";

interface IFormikValues {
   image: File | '',
   price: number,
   typeId: string,
   brandId: string,
   name: string,
   info: ICreateInfo[]
}

const CreateForm: React.FC = () => {
   const [file, setFile] = useState<IImage | null>(null);
   const [info, setInfo] = useState<ICreateInfo[]>([]);

   const dispatch = useAppDispatch();

   const types = useTypedSelector(state => state.types.types)
   const brands = useTypedSelector(state => state.brands.brands)

   const validator = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
   })

   const validator2 = Yup.object().shape({
      title: Yup.string().min(2).required(),
      description: Yup.string().required(),
   })


   const formik2 = useFormik({
      initialValues: {
         title: '',
         description: ''
      },

      validationSchema: validator2,

      onSubmit: async (values, helpers) => {
         setInfo(prev => [...prev, values])

         helpers.resetForm();
      }
   })

   const formik = useFormik<IFormikValues>({
      initialValues: {
         "name": "",
         "price": 0,
         "typeId": '1',
         "brandId": '1',
         "image": '',
         "info": []
      },

      validationSchema: validator,

      onSubmit: async (values, helpers) => {
         if (!file) return;

         if (info.length) values.info = info;

         values.image = file.file;


         await dispatch(fetchCreateItem(values));

         helpers.resetForm();
         setFile(null)
      }
   })

   const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) return;

      const blob = new Blob([file]);
      const url = URL.createObjectURL(blob);

      setFile({ url, file });
   }

   const deleteInfo = (id: string) => {
      const newInfo = info.filter(({ title }) => title !== id);

      if (!newInfo) return;

      setInfo(newInfo);
   }

   return (
      <form className={s.form} onSubmit={formik.handleSubmit}>
         <div className={s.form_head}>
            <span>Основная информация:</span>
         </div>
         <div className={s.form_main_col}>
            <MyInput
               type="text"
               name="name"
               onChange={formik.handleChange}
               value={formik.values.name}
               placeholder="Название"
            />
            <MyInput
               type="text"
               name="price"
               onChange={formik.handleChange}
               value={formik.values.price as unknown as string}
               placeholder="Цена"
            />
            <select name="typeId" className={s.select} defaultValue={1}>
               {types
                  && types.map(({ id, name }) => (
                     <option value={id} key={id}>
                        {name}
                     </option>
                  ))}
            </select>
            <select name="brandId" className={s.select}>
               {brands
                  && brands.map(({ id, name }) => (
                     <option value={id} key={id}>
                        {name}
                     </option>
                  ))}
            </select>
            <input
               className={s.file}
               onChange={changeFile}
               type="file"
               name="image"
               id="image"
            />
            <div className={s.add_image}>
               <label className={s.label} htmlFor="image">
                  <ImageIcon className={s.img_icon} />
                  <span>
                     Добавить изображение
                  </span>
               </label>
               {file
                  && <div className={s.image}>
                     <img src={file.url} alt="" />
                  </div>}
            </div>
         </div>
         <div className={s.form_head}>
            <span>Характеристики:</span>
         </div>
         <div className={s.form_row}>
            <MyInput
               type="text"
               name="title"
               onChange={formik2.handleChange}
               value={formik2.values.title}
               placeholder="Название"
            />
            <MyInput
               type="text"
               name="description"
               onChange={formik2.handleChange}
               value={formik2.values.description}
               placeholder="Описание"
            />
            <div
               onClick={formik2.submitForm}
               className={
                  `${s.add_button} ${!formik2.isValid || !formik2.dirty ? s.disabled : ""}`
               }
            >
               <span>Добавить параметр</span>
               <CloseIcon className={s.plus_icon} />
            </div>
         </div>
         {info.length > 0
            && <div className={s.info_col}>
               {info.map(({ title, description }) => (
                  <div className={s.info_item} key={title}>
                     <div className={s.item_title}>
                        <span>{title}:</span>
                     </div>
                     <div className={s.info_descr}>
                        <span>{description}</span>
                     </div>
                     <div className={s.del_item} onClick={() => deleteInfo(title)}>
                        <CloseIcon className={s.del_icon} />
                     </div>
                  </div>
               ))}
            </div>}
         <button
            disabled={!formik.isValid || !formik.dirty || !file || formik.isSubmitting}
            className={s.submit}
            type="submit"
         >
            <span>Создать</span>
         </button>
      </form>
   )
}

export default CreateForm
