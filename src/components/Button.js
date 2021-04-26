const Button = ({
    onClick = null,
    children = null
}) =>
(
    <button onClick={onclick} >{children} </button>
);
   
export default Button;