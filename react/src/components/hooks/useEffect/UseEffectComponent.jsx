import { useEffect, useState } from "react";

export default function UseEffectComponent () {
    console.log("component has been rendered...");

    const [datas, setDatas] = useState(null);

    useEffect(() => {
        function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/users').then(async (datas) => {
                console.log("datas : ",datas);
                let parsed_datas = await datas.json();
                console.log("parsed_datas : ",parsed_datas);

                setDatas(parsed_datas);
            });
        }
        fetchData();
    }, []);

    return(
        <>
        {
            datas ? 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>userName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data) => {
                        return(
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             : <h1>Loading...</h1>
        }
        </>
    )

}