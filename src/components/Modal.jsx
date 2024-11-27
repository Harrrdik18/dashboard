import ReactModal from 'react-modal';

const Modal = ({ isOpen, closeModal, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={closeModal}
    ariaHideApp={false}
    className="w-96 p-6 bg-white rounded-lg shadow-lg m-auto" 
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"  
  >
    {children}
  </ReactModal>
);

export default Modal;
