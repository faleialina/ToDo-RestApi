import style from './style.module.scss';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void;
    children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.modal}>
            <div className={style.modalWrapper}>
                <div className={style.modalContent}>
                    <div className={style.wrapper}>
                        <h1>UPDATE NOTE</h1>
                        <div className={style.inputs}>
                            <input type="text" placeholder='input your note...' />
                            <input type="text" placeholder='input your description note...' />
                        </div>

                        <div className={style.buttonTag}>
                            <div className={style.cancelButton} onClick={() => onClose()}>
                                CANCEL
                            </div>
                            <div className={style.applyButton}>
                                APPLY
                            </div>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}