export interface iTask{
    _id:string;
    taitle: string;
     description: string;
     isCheck:boolean;
}
export interface ModalProps {
    isOpen: boolean,
    onClose: () => void;
    children?: React.ReactNode;
}
