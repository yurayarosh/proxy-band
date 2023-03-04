import { FC, ReactNode, Dispatch, SetStateAction, MouseEvent } from 'react';

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IProps> = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return <></>;

  return (
    <div
      className="modal"
      onClick={(e: MouseEvent) => {
        if ((e.target as Element).classList.contains('modal')) setIsOpen(false);
      }}
    >
      <div className="modal__inner">
        <button type="button" className="modal__close" onClick={() => setIsOpen(false)}>
          x
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
