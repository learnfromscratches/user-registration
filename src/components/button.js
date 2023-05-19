import styles from "./button.module.css";
    

const Button = props =>{
    return(
        <>
        <button className={styles[props.classname]} type="Submit" onClick={props.handleClick(props.text)}>{props.text}</button>
        </>
    )
}
export default Button;