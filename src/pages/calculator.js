import Button from "@/components/button";
import Input from "@/components/search";
import styles from "@/styles/Home.module.css"
import { useState } from "react";


const Calculator = () => {

    const [result, setResult] = useState(0);
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    const handleOnChange = e => {
        setFirstValue(Number(e.target.value))
    }
    const secondHandleChange = e => {
        setSecondValue(Number(e.target.value))
    }
    const handleOnClick = e => {
        if (e == "+")
            setResult(firstValue + secondValue)
        else if(e == "-")
            setResult(firstValue - secondValue)
        else if(e == "/")    
             setResult(firstValue / secondValue)
        else if(e == "x")
              setResult(firstValue * secondValue)
    }

    return (
        <div>
            <div className={styles.home}>
                <h1>Calculator</h1>
                <Input onChange={handleOnChange} />
                <Input onChange={secondHandleChange} />
                <div className={styles.btnBox}>
                    <Button text="+" classname="button" handleClick={handleOnClick} />
                    <Button text="-" classname="button" handleClick={handleOnClick} />
                    <Button text="x" classname="button" handleClick={handleOnClick} />
                    <Button text="/" classname="button" handleClick={handleOnClick} />
                </div>
                <p>Result is {result}</p>
            </div>
        </div>
    )
}
export default Calculator;