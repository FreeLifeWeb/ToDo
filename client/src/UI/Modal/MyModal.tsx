import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

interface IProps {
    isModalOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export const MyModal = ({ isModalOpen, onClose, children }: IProps) => {
    if (!isModalOpen) return null;

    const portalElement = document.getElementById('portal-for-modal');
    if (!portalElement) {
        return null;
    }
    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeBtn} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        portalElement
    );
};
