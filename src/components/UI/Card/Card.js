import './Card.css';
import Button from "../Button/Button";

const Card = (props) => {
    return <div className="card" id={props.id}>
        <h4>{props.question}</h4>
        
        <Button handler={props.attempt} disabledState={props.isDisabled} value={props.options.option1}>{props.options.option1}</Button>
        <Button handler={props.attempt} disabledState={props.isDisabled} value={props.options.option2}>{props.options.option2}</Button>
        <Button handler={props.attempt} disabledState={props.isDisabled} value={props.options.option3}>{props.options.option3}</Button>
        <Button handler={props.attempt} disabledState={props.isDisabled} value={props.options.option4}>{props.options.option4}</Button>
    </div>;
};

export default Card;