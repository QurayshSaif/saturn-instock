import './ErrorMessage.scss'
import ExclamationMark from "../../assets/icons/error-24px.svg"

const ErrorMessage = ({className, isNotError, text}) => {
        if (isNotError) {
            return
        } else {
        return (
            <div className='error'>
                <img className='error__img' src={ExclamationMark} alt="Exclamation Mark" />
                <p className={`error__text ${className}`}>{text}</p>
            </div>
        );
        }
}

export default ErrorMessage;