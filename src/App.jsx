import { useState } from "react";
import './App.css'
const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); // Provide an initial value
  const [password, setPassword] = useState('');
  const [confpass,setConfPass]=useState('');
  const [email, setEmail] = useState('');

  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getConfPassword = (e) => {
    setConfPass(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, password, email };
    console.log("🚀 ~ createUser ~ newUser:", newUser);
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfPass('');
    setEmail('');
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div className="firstname">
          <label htmlFor="firstName">Firstname:</label>
          <input type="text" placeholder="Firstname" onChange={getFirstName} value={firstName} />
        </div>

        <div className="lastname">
          <label htmlFor="lastname">LastName:</label>
          <input type="text" placeholder="Lastname" onChange={getLastName} value={lastName} />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" onChange={getEmail} value={email} />
        </div>

        <div className="password">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            onChange={getPassword}
            value={password}
          />
        </div>

        <div className="pass-conf">
          <label htmlFor="passconf">Confirm Password:</label>
          <input
            type="password"
            placeholder="Password"
            onChange={getConfPassword}
            value={confpass}
          />
        </div>
        
       
       <div className="display_details">
        <h1>Your Form Data</h1>
        <div>
          <p> FirstName:{firstName}</p>
        <p> Lastname:{lastName}</p>  
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirm Password:{confpass}</p>
        </div>
       </div>


      </form>
    </>
  );
};

export default App;
