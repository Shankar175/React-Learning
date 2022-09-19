import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const redirect = useNavigate();
    React.useEffect(() => {
        const validate_user = localStorage.getItem('v_username');
        if (!validate_user) {
            redirect('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}

export default About