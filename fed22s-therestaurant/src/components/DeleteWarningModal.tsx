import { useNavigate } from "react-router-dom";
import { IBooking } from "../models/IBooking";
import { deleteBooking } from "../services/bookingServices";
import {
  Modal,
  ModalContentWarning,
  ModalFoot,
  ModalHead,
} from "./styled/Modals";
import { H3Modal } from "./styled/Headings";
import { ModalCross } from "./styled/Paragraphs";
import { CloseModalBtn } from "./styled/Buttons";

interface DeleteWarningModalProps {
  booking: IBooking;
  closeModal: () => void;
}
export const DeleteWarningModal = (props: DeleteWarningModalProps) => {
  const navigate = useNavigate();
  //delete logic
  const handleDelete = async () => {
    const response = await deleteBooking(props.booking._id);
    if (response?.status === 204) {
      // Send mail
      navigate(`/bookingdeleted`);
    } else {
      console.error("Något gick fel vid bokningen");
    }
  };
  return (
    <>
      <Modal>
        <ModalContentWarning>
          <ModalHead>
            <H3Modal>Varning</H3Modal>
            <ModalCross onClick={props.closeModal}>&#10006;</ModalCross>
          </ModalHead>
          <p> Vill du verkligen ta bort din bokning?</p>
          <ModalFoot>
            <button onClick={handleDelete}>Ja</button>
            <CloseModalBtn onClick={props.closeModal}>Nej</CloseModalBtn>
          </ModalFoot>
        </ModalContentWarning>
      </Modal>
    </>
  );
};
