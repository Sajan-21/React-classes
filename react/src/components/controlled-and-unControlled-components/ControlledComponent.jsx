import { useState } from "react";

export default function ControlledComponents() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        alert(`input value : ${inputValue}`);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <input type="submit" value="submit" />
        </form>
        </>
    )
}