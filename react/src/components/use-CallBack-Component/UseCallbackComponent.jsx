import { useCallback, useEffect, useState } from "react"

export default function UseCallbackComponent() {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[]);

    useEffect(() => {
        console.log("increment function recreated...");
    },[increment]);

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={increment}>increment</button>
        </>
    )
}