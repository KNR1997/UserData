import { useState } from "react";
import './Button.css';
import './AddUsers.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setAge('');
        setUserName('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && 
            <ErrorModal 
                title={error.title} 
                message={error.message} 
                onConfirm={errorHandler}
            />
            }
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
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
                <button className="button">Add User</button>
            </form>
        </div>
    )
}

export default AddUser;