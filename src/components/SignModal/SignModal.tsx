import Modal from "../../UI/Modal/Modal"
import React, { useState } from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

interface ISignModal {
   handleClose: () => void
}

const SignModal: React.FC<ISignModal> = ({ handleClose }) => {
   const [isActive1, setIsActive1] = useState<boolean>(true)
   const [isActive2, setIsActive2] = useState<boolean>(false)

   const handleOpen1 = () => {
      setIsActive2(false)
      setIsActive1(true)
   }

   const handleOpen2 = () => {
      setIsActive2(true)
      setIsActive1(false)
   }

   return (
      <Modal
         head="Войти или зарегистрироваться"
         setClose={handleClose}
      >
         {isActive1
            && <SignInForm
               handleToggle={handleOpen2}
               handleClose={handleClose}
            />}
         {isActive2 &&
            <SignUpForm
               handleToggle={handleOpen1}
               handleClose={handleClose}
            />}
      </Modal>
   )
}

export default SignModal
