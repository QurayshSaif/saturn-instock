import "./ActionButton.scss"

const ActionButton = ({name, className}) => {
    return (
        <button className={`action-btn ${className}`}>{name}</button>
    );
};

export default ActionButton;