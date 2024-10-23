import { useState } from "react";

export default function FormComponent({onSubmit}) {
    const [inputData, setInputData] = useState({
        name : "",
        email : "",
        age : "",
    });

    function handleInputChange(e) {
        e.preventDefault();
        if(e.target.name === "name") {
            console.log("name : ",e.target.value);

            setInputData({
                ...inputData,
                name : e.target.value,
            });
        }
        if(e.target.name === "email") {
            console.log("email : ",e.target.value);

            setInputData({
                ...inputData,
                email : e.target.value,
            })
        }
        if(e.target.name === "age") {
            console.log("age : ",e.target.value);

            setInputData({
                ...inputData,
                age : e.target.value,
            })
        }
    }
    function handleClick(e) {
        e.preventDefault();
        onSubmit(inputData);
    }

    return (
        <>
        <div className="container p-5">
            <form onSubmit={handleClick} className="d-flex flex-column justify-content-center align-items-center gap-3">
                <input type="text" name="name" placeholder="Enter your name" className="rounded-pill p-2" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Enter your email" className="rounded-pill p-2" onChange={handleInputChange} />
                <input type="number" name="age" placeholder="Enter your age" className="rounded-pill p-2" onChange={handleInputChange} />
                <input type="submit" value="submit" className="rounded-pill p-2" />
            </form>
        </div>
        </>
    )
}