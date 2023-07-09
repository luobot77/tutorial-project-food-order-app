import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
