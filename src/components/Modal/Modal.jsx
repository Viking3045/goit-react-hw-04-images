import { useEffect } from 'react';

import css from './Modal.module.css';

export const Modal = ({ url, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', clickEsc);
  });
  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', clickEsc);
    };
  });

  const clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const clickEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={clickBackdrop}>
      <div className={css.modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};
