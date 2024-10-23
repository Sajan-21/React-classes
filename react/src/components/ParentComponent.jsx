import { useState } from "react";
import FormComponent from "./form-components/FormComponent";
import DisplayComponent from "./display-components/DisplayComponent";

export default function ParentComponent() {
    const [dataToDisplay, serDataToDisplay] = useState("");

    const handleSubmit = (data) => {
        serDataToDisplay(data);
    }

    return(
        <>
        <FormComponent onSubmit={handleSubmit} />
        <DisplayComponent displayData={dataToDisplay} />
        </>
    );
}