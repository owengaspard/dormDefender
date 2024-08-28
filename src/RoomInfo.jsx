// React component to display room information and unlock room
// Uses the API to fetch room details from MongoDB
import { useState } from 'react';

let triesLeft = 3;

function RoomInfo() {
    const [idNumber, setIdNumber] = useState('');
    const [roomNumber, setRoomNumber] = useState(null);
    const [dormName, setDormName] = useState(null);
    const [password, setPassword] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [error, setError] = useState(null);

    const fetchRoomNumber = async () => {
        try {
            // Fetch room details from API
            const response = await fetch(`http://localhost:5001/api/room/${idNumber}`);

            if (triesLeft === 0) {
                console.log('You have exceeded the number of tries');
                setIdNumber('');
                setPassword('');
                setSecurityQuestion('');
                setError('You have exceeded the number of tries');
            }
            else {
                if (response.ok) {
                    const data = await response.json();
                    
                    // Check if password and security question match
                    if (data.password && data.securityQuestion) {
                        if (password.trim() === data.password.trim() && securityQuestion.trim() === data.securityQuestion.trim()) {
                            setRoomNumber(data.roomNumber);
                            setDormName(data.dormName);
                            setSecurityQuestion('');
                            setPassword('');
                            setIdNumber('');
                            setError(null);
                        } else {
                            triesLeft = triesLeft - 1;
                            console.log(triesLeft);
                            setRoomNumber(null);
                            setIdNumber('');
                            setDormName(null);
                            setError('Incorrect password or security question');
                        }
                    } else {
                        triesLeft = triesLeft - 1;
                        console.log(triesLeft);
                        setRoomNumber(null);
                        setDormName(null);
                        setIdNumber('');
                        setError('Password or security question is missing in the response');
                    }
                } else {
                    triesLeft = triesLeft - 1;
                    console.log(triesLeft);
                    console.log('Room not found');
                    setRoomNumber(null);
                    setDormName(null);
                    setError('Room not found');
                } 
            }
        } catch (error) {
            console.log('Error fetching room:', error);
            setRoomNumber(null);
            setDormName(null);
            setError('Error fetching room');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'idNumber') setIdNumber(value);
        if (name === 'password') setPassword(value);
        if (name === 'securityQuestion') setSecurityQuestion(value);
    };

    const handleSearch = () => {
        fetchRoomNumber();
    };

    return (
        <div className="p-4">
            <p className='text-3xl font-bold text-yellow-400'>Room Information</p>
            <div className="my-4">
                <input
                    type="text"
                    name="idNumber"
                    value={idNumber}
                    onChange={handleInputChange}
                    placeholder="LSU 89 Number"
                    className="input input-bordered my-0.5"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="input input-bordered my-0.5"
                />
                <input
                    type="text"
                    name="securityQuestion"
                    value={securityQuestion}
                    onChange={handleInputChange}
                    placeholder="Security Question"
                    className="input input-bordered my-0.5"
                />
                <br />
                <button onClick={handleSearch} className="btn bg-yellow-500 text-white my-0.5">
                    Unlock
                </button>
            </div>
            {error ? (
                <p className='text-red-500'>{error}<br/>Tries remaining: {triesLeft}</p>
            ) : (
                roomNumber && (
                    <div>
                        <p className='text-xl font-semibold text-yellow-400'>Room {roomNumber} in {dormName} successfully unlocked.</p>
                    </div>
                )
            )}
        </div>
    );
}

export default RoomInfo;