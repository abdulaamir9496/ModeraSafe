import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from 'path/to/authService';  // Import authService

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Make API call to register user
    try {
      const response = await authService.register({ fullName, email, password });
      if (response.success) {
        history.push('/moderation');  // Redirect to moderation page
      } else {
        setError(response.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter Password" required />
      {error && <div className="error">{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm