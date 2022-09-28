import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    if (user?.currentUser?._id) {
        return (
            <Redirect to='/' />
        );
    }

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <input
                style={{
                    padding: 10,
                    marginBottom: 20,
                }}
                type='text'
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                style={{
                    padding: 10,
                    marginBottom: 20,
                }}
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                style={{
                    padding: 10,
                    width: 100,
                }}
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    );
};

export default Login;