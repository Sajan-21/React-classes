import { useRef } from "react";

export default function UnControlledComponents() {

    const inputRef = useRef(null);

    const handleButtonClick = () => {
        alert(`input value : ${inputRef.current.value}`);
    }

    return(
        <>
        <form>
            <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>submit</button>
        </form>
        </>
    )
}