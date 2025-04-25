import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";
import { Image } from "../../services/types";

type Props = {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageModal({ isOpen, onClose, image }: Props) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.img}
      />
    </Modal>
  );
}
