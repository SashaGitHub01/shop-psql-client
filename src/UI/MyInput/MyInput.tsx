import React, { ChangeEvent, useRef, useState } from "react";
import { InfoIcon } from "../../assets/icons";
import s from './MyInput.module.scss';

interface IMyInput {
   placeholder: string
   type: string,
   onChange: (e: React.ChangeEvent<any>) => void,
   onBlur?: (e: React.FocusEvent<any>) => void,
   name: string,
   value: string,
   error?: string,
   [i: string]: any
}

const MyInput: React.FC<IMyInput> = ({
   placeholder, type, onChange, onBlur, name, value, error, ...other
}) => {
   const [isActive, setIsActive] = useState<boolean>(false);
   const [isEmpty, setIsEmpty] = useState<boolean>(true);

   const ref = useRef<HTMLInputElement>(null)

   const handleFocus = () => {
      if (ref.current) {
         ref.current.focus()
         setIsActive(true)
      }
   }

   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);

      if (ref.current) {
         ref.current.blur()
         setIsActive(false)

         if (ref.current.value.length > 0) {
            setIsEmpty(false)
         } else {
            setIsEmpty(true)
         }
      }
   }

   return (
      <div
         onClick={handleFocus}
         className={
            `${s.input_cont} ${isActive || !isEmpty ? s.active : ''}`
         }
      >
         <div className={s.placeholder}>
            <span>{placeholder}</span>
         </div>
         <input
            onBlur={handleBlur}
            ref={ref}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={s.input}
            {...other}
         />
         {error
            && <div className={s.error}>
               <div className={s.error_body}>
                  <InfoIcon className={s.error_icon} />
                  <div className={s.error_msg}>
                     <div className={s.angle}></div>
                     <p>{error}</p>
                  </div>
               </div>
            </div>}
      </div>
   )
}

export default MyInput
