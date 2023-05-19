import styles from "./navbar.module.css";
import Input from "./search";

const Navbar = props=>{
    return(
        <div>
            <div className={styles.navbar}>
                <span>Code Space</span>
            <div className={styles.menu}>
                <Input onChange = {props.onType} placeholder = "Search..."/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Downloads</li>
                    <li>Contact us</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Navbar;