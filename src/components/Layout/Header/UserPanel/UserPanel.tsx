import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CrownIcon, LogoutIcon, TriangleIcon } from "../../../../assets/icons";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { fetchLogout } from "../../../../store/actionCreators/userAC";
import s from './UserPanel.module.scss';

interface IUserPanel {
   handleOpen: () => void
}

const UserPanel: React.FC<IUserPanel> = ({ handleOpen }) => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const ref = useRef<HTMLDivElement>(null);
   const iconRef = useRef<HTMLDivElement>(null);

   const dispatch = useAppDispatch();

   const { user } = useTypedSelector(state => state.user)

   const checkClick = (e: Event) => {
      e.stopPropagation()
      if (
         isActive && ref.current && !ref.current.contains(e.target as Node)
         && !iconRef?.current?.contains(e.target as Node)
      ) {
         setIsActive(false)
      }
   }

   useEffect(() => {
      if (isActive) {
         document.documentElement.addEventListener('click', checkClick);

         return;
      } else {
         return document.documentElement.removeEventListener('click', checkClick);
      }
   }, [isActive, checkClick])

   const openPopup = () => {
      if (isActive) return setIsActive(false);

      setIsActive(true);
   }

   const logout = () => {
      setIsActive(false);

      dispatch(fetchLogout());
   }

   return (
      <>
         {user
            ? <div className={s.user_panel}>
               <div className={s.user_email}>
                  <span>
                     {user.email}
                  </span>
                  <div className={s.open_btn} ref={iconRef}>
                     <TriangleIcon
                        onClick={openPopup}
                        className={
                           `${s.tri_icon} ${isActive ? s.active : ''}`
                        }
                     />
                  </div>
               </div>
               {isActive
                  && <div className={s.popup} ref={ref}>
                     <div className={s.list}>
                        {user.role == 'ADMIN'
                           ? <Link to={'/admin'} className={s.list_item}>
                              <CrownIcon className={s.crown_icon} />
                              <span>Админ</span>
                           </Link>
                           : null}
                        <div className={s.list_item} onClick={logout}>
                           <LogoutIcon className={s.logout_icon} />
                           <span>Выйти</span>
                        </div>
                     </div>
                  </div>}
            </div>
            : <button className={s.sign_button} onClick={handleOpen}>
               <span>Войти</span>
            </button>}
      </>
   )
}

export default UserPanel
