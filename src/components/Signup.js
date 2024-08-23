import "./SignUp.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { login } from "../apis/userApi"; // Đảm bảo đường dẫn đúng

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      // Chuyển hướng người dùng về trang home sau khi đăng nhập thành công
      navigate('/home');
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error.response?.data?.error);
      // Xử lý lỗi đăng nhập
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(username, password);
    } catch (error) {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <>
      <div className='form-modal__container'>
        <div className='form-modal__wrapper'>
          <div className='sign-up'>
            <img src='https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-web-template-of-computer-login-form-page-application-username-photo-image_30648922.jpg' alt='Camels in the desert'></img>
          </div>
          <div className='sign-up__container'>
            <h2>Sign Up</h2>
            <form className='sign-up__form' onSubmit={handleSubmit}>
              <label>Username</label> <br></br>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='...'></input><br></br>
              <label>Password</label> <br></br>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input><br></br>
              <button type='submit' className='btn-sign'>Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
              <p className='have-account'>Have an account? <span>Log In here </span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
