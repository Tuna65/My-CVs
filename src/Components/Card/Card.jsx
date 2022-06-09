import './Card.css';
function Card({ emoji, title, content }) {
    return (
        <div className="c-wrapper">
            <img src={emoji} alt="" />
            <span>{title}</span>
            <p>{content}</p>
        </div>
    );
}

export default Card;
