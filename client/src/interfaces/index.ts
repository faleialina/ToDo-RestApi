export interface iTask {
    _id: string;
    taitle: string;
    description: string;
    isCheck: boolean;
};

export interface ModalProps {
    setOpen: (arg: boolean) => void;
    task: iTask;
};