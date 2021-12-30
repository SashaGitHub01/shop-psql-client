import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../../assets/icons";
import CreateModal from "../../components/Admin/CreateModal/CreateModal";
import HistoryList from "../../components/Admin/HistoryList/HistoryList";
import PageHead from "../../components/PageHead/PageHead";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchHistory } from "../../store/actionCreators/adminAC";
import s from './Admin.module.scss';

const Admin = () => {
   const dispatch = useAppDispatch();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { isAuth, user } = useTypedSelector(state => state.user)
   const { items, isLoading } = useTypedSelector(state => state.admin)

   const nav = useNavigate();

   useEffect(() => {
      dispatch(fetchHistory());
   }, [])

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
                  <div className={s.add_row}>
                     <button className={s.create_button} onClick={handleOpen}>
                        <CloseIcon className={s.plus_icon} />
                        <span>Создать товар</span>
                     </button>
                  </div>
                  <div className={s.history}>
                     <div className={s.history_head}>
                        <span>История</span>
                     </div>
                     <HistoryList items={items} isLoading={isLoading} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Admin
