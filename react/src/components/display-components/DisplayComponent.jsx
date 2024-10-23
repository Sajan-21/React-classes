import './displayComponents.css'
export default function DisplayComponent({displayData}) {

    return(
        <>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>datas</h1>
            <h3>name : {displayData.name}</h3>
            <h3>email : {displayData.email}</h3>
            <h3>age : {displayData.age}</h3>
        </div>
        </>
    )
}