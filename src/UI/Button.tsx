import styles from "./styles.module.css";

export default function Button({text, color}) {

    const  handleClick = ():void => {
        let counter = 0;
        console.log(counter);
        return;
    }

    return (
       <button className={styles[color]} onClick={handleClick}> {text} - {color} </button>
    );
}
