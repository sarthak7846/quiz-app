const Button = (props) => {
    return <button onClick={props.handler} disabled={props.disabledState} value={props.value}>{props.children}</button>;
};

export default Button;