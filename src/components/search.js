import styles from "./search.module.css";

const Input = props=>{
    
    return(
        <div>
            <input className={styles.inputBar} value ={props.value} type ={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}
export default Input;