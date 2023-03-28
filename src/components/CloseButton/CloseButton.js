import "./CloseButton.scss"
import closeSvg from '../../assets/icons/close-24px.svg'

const CloseButton = ({onClick, className}) => {
    return (
        <img
            onClick={onClick}
            src={closeSvg}
            alt="close"
            className={`close-btn ${className}`}
        />
    );
};

export default CloseButton;
