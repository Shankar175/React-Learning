import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const redirect = useNavigate();

    React.useEffect(() => {
        const validate_user = localStorage.getItem('v_username');
        if (!validate_user) {
            redirect('/login');        
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <h3>Home</h3>
    );
};

export default Home;