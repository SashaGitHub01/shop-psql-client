import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";
import CreateModal from "../../components/Admin/CreateModal/CreateModal";
import PageHead from "../../components/PageHead/PageHead";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import s from './Admin.module.scss';

const Admin = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { isAuth, user } = useTypedSelector(state => state.user)
   const nav = useNavigate();

   useEffect(() => {
      if (!isAuth || user?.role != 'ADMIN') {
         nav('/')
      }
   }, [isAuth, user])

   const handleOpen = () => {
      setIsOpen(true)
   }

   const handleClose = () => {
      setIsOpen(false)
   }

   return (
      <div className={s.admin}>
         {isOpen
            && <CreateModal handleClose={handleClose} />}
         <div className={s.admin_col}>
            <PageHead title="Панель управления" back to="/" />
            <div className={s.create}>
               <div className={s.create_section}>
                  <button className={s.create_button} onClick={handleOpen}>
                     <CloseIcon className={s.plus_icon} />
                     <span>Создать товар</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Admin
