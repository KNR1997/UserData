import { useState } from "react";

const AddUser = () => {

    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
            return;
        }

        const userData = {
            username: enteredUserName,
            age: enteredAge
        }
        setAge('');
        setUserName('');
    }

    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    value={enteredUserName}
                    onChange={handleUserName}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    value={enteredAge}
                    onChange={handleAge}
                />
                <button>Add User</button>
            </form>
    )
}

export default AddUser;