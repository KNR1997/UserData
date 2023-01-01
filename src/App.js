import { useState } from 'react';
import AddUser from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUser) => {
      return [...prevUser, {name:uName, age:uAge, id:Math.random().toString()}
      ];
    });
  };

  console.log(usersList);

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={[usersList]}/>
    </div>
  );
}

export default App;
