import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
