import React from "react";
import Modal from "../../../UI/Modal/Modal";
import CreateForm from "../CreateForm/CreateForm";
import s from './CreateModal.module.scss';

interface ICreateModal {
   handleClose: () => void
}

const CreateModal: React.FC<ICreateModal> = ({ handleClose }) => {
   return (
      <Modal
         head="Создание товара"
         setClose={handleClose}
      >
         <CreateForm />
      </Modal>
   )
}

export default CreateModal
