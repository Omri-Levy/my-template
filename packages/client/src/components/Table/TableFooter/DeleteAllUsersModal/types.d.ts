type OnClose = () => void;
type DeleteAllUsers = (onClose: OnClose) => () => Promise<void>;

export { DeleteAllUsers };
