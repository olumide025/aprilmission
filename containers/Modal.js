/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToggleContext } from '../context/modal';
import Modal from '../components/modal/index';
import { ModalData } from '../fixtures/Data';

export default function ModalContainer({ children }) {
  const {
    ShowModal,
    setShowModal,
    aboutModal,
    setAboutModal,
    headerModal,
    sliderModal,
    setHeaderModal,
    setsliderModal,
    projectModal,
    setprojectModal,
  } = useContext(ToggleContext);
  return (
    <Modal>
      <Modal.Content>
        <Modal.Header>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={() => {
              setShowModal(!ShowModal);
              setAboutModal(false);
              setHeaderModal(false);
              setsliderModal(false);
              setprojectModal(false);
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <ModalData
            aboutModal={aboutModal}
            headerModal={headerModal}
            sliderModal={sliderModal}
            projectModal={projectModal}
          />
        </Modal.Body>
      </Modal.Content>
      {children}
    </Modal>
  );
}
