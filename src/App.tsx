import React, {useState} from 'react'
import './App.css'
import Modal from "./components/Modal/Modal.tsx";
import Alert from "./components/UI-Component/Alert.tsx";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <h2 className="bg-primary border border-primary">
          Для открытия полного списка товаров кликните на кнопку "Заказать"
      </h2>
      <div className="container-fluid mt-4">
        <button className="w-15 btn btn-danger mt-4" onClick={openModal}>Заказать</button>
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        title="Сайт на стадии разработки!"
      >
      </Modal>

      <Alert
        show={showAlert}
        onClick={() => setShowAlert(true)}
      >
        text
      </Alert>

    </>
  )
}

export default App
