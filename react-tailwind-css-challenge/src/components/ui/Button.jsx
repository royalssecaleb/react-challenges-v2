import './ui.style.css';
//button element with props
const Button = ({className, handleClick, content }) => {
    return (
        <button className={className} onClick={handleClick}>{content}</button>
    )
}

export default Button;
