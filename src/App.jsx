import { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (action, user) => {
    setModalData({ action, user });
    setModalOpen(true);
  };

  return (
    <div className="App">
      <UserList openModal={openModal} />
      <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
        <UserForm {...modalData} closeModal={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default App;
