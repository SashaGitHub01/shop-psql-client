import React from "react";
import { CloseIcon } from "../../assets/icons";
import s from './Modal.module.scss';

interface IModal {
   setClose: () => void,
   head: string
}

const Modal: React.FC<IModal> = ({ head, setClose, children }) => {
   return (
      <div className={s.modal}>
         <div className={s.modal_window}>
            <div className={s.modal_col}>
               <div className={s.modal_head}>
                  <CloseIcon className={s.close_icon} onClick={setClose} />
                  <span>{head}</span>
               </div>
               <div className={s.modal_body}>
                  {children}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal
