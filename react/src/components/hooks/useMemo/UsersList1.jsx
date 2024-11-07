import { useMemo, useState } from 'react';

const users = [
    {
        id : 1,
        name : "John Doe",
        role : "Admin",
    },
    {
        id : 2,
        name : "Jane Smith",
        role : "Admin",
    },
    {
        id : 3,
        name : "Monica gasthambide",
        role : "User",
    },
    {
        id : 4,
        name : "bob darwin",
        role : "User",
    },
    {
        id : 5,
        name : "charlie lopez",
        role : "User",
    },
    {
        id : 6,
        name : "Diana Doe",
        role : "User",
    },
    
]

function UsersList1() {
    console.log("Component rendering...");

    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            console.log("filtering users...");
    
            let matchSearchTerm = user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
            // console.log("matchSearchTerm : ",matchSearchTerm);
    
            let matchRole = roleFilter === 'All' || user.role === roleFilter;
            // console.log("matchRole : ",matchRole);
    
            // console.log("matchSearchTerm && matchRole : ",matchSearchTerm && matchRole);
            return matchRole && matchSearchTerm;
        });
    },[searchTerm, roleFilter])

    const [count, setCount] = useState(0);

    return(
        <>
        <input type="text" placeholder="search name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <select value={roleFilter} onChange={(e) => {setRoleFilter(e.target.value)}}>
            <option value="All">All</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>

        <ul>
            {
                filteredUsers.map((user) => {
                    return <li key={user.id}>{user.name} : {user.role}</li>
                })
            }
        </ul>

        <h1>count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}

export default UsersList1;