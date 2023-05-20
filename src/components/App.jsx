import { useState } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalImg, setModalImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  const getInputValue = handleValue => {
    setInputValue(handleValue);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const getLargeImg = url => {
    toggleModal();
    setModalImg(url);
  };

  const loadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar getInputValue={getInputValue} />
      <ImageGallery
        inputValue={inputValue}
        onClick={getLargeImg}
        loadMoreBtn={loadMoreBtn}
        page={page}
      />
      {showModal && <Modal url={modalImg} onClose={toggleModal} />}
    </>
  );
};
