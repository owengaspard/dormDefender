import Navbar from "../partials/navbar";
import { useState } from 'react';

function Register() {
    const [roomNumber, setRoomNumber] = useState('');
    const [dormName, setDormName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // POST request to API with form info
            const response = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ roomNumber, dormName, idNumber, password, securityQuestion }),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                // Reset form fields
                setRoomNumber('');
                setDormName('');
                setIdNumber('');
            } else {
                console.error('Error submitting data');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="p-4">
            <Navbar />
            <p className='text-3xl font-bold'>Register a Room</p>
            <form className='mt-4' onSubmit={handleSubmit}>
                <label className='block text-xl font-bold' id='Dorm Number'>Room Number</label>
                <input
                    type='number'
                    className='border border-gray-400 rounded-lg w-full p-2 mt-1'
                    value={roomNumber}
                    onChange={(event) => setRoomNumber(event.target.value)}
                />
                <label className='block text-xl font-bold mt-4'id="Dorm Name">Dorm Name</label> {/* Update label */}
                <input
                    type='text'
                    className='border border-gray-400 rounded-lg w-full p-2 mt-1'
                    value={dormName}
                    onChange={(event) => setDormName(event.target.value)}
                />
                <label className='block text-xl font-bold mt-4' id="lsuID">LSU 89 Number</label> {/* Update label */}
                <input
                    type='number'
                    className='border border-gray-400 rounded-lg w-full p-2 mt-1'
                    value={idNumber}
                    onChange={(event) => setIdNumber(event.target.value)}
                />
                <label className='block text-xl font-bold mt-4' id='pw'>Password</label>
                <input
                    type='password'
                    className='border border-gray-400 rounded-lg w-full p-2 mt-1'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <label className='block text-xl font-bold mt-4' id='sq'>Security Question:</label>
                <label className="block text-xl my-1" id='sq'>What was the name of the first LSU game you attended?</label>
                <input
                    type='text'
                    className='border border-gray-400 rounded-lg w-full p-2 mt-1'
                    value={securityQuestion}
                    onChange={(event) => setSecurityQuestion(event.target.value)}
                />
                <button className='btn bg-yellow-500 hover:bg-yellow-700 text-black hover:text-white mt-4' type='submit'onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}

export default Register;