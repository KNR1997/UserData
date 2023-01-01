const UserList = (props) => {

    console.log(props.users);

    return (
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
            <h2>Hello</h2>
        </ul>
    );
};

export default UserList;