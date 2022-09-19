import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
      <h3>Contact Us</h3>
    </div>
  )
}

export default Contact
