import "./App.css";
import { useState } from "react";

function Title(){
  return (
    <div className="container-items">
      <p className="title">Registration Form</p>
    </div>
  );
}

function Placeholders({Name,Email,Password,onNameChange,onEmailChange,onPasswordChange}) {
  return (
    <>
      <form>
        <div class="form-group">
        <div class="col-sm-11">
      <input type="text" value={Name} onChange={(e) => onNameChange(e.target.value)} class="form-control" placeholder="Enter your name"/>
    </div>
    </div>
        <div class="form-group">
          <div class="col-sm-11">
          <input type="email" value={Email} onChange={(e) => onEmailChange(e.target.value)} class="form-control" placeholder="Enter your email"/>
        </div>
        </div>
        <div class="form-group">
          <div class="col-sm-11">
          <input type="password" value={Password} onChange={(e) => onPasswordChange(e.target.value)} class="form-control" placeholder="Enter Password"/>
        </div>
        </div>
      </form>
    </>
  );
}

function Button({handleClick}) {
  return (
    <div className="button">
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

function PlaceholdersButton() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isShown, setIsShown] = useState(false);

  function isValidEmail(Email) {
    return /\S+@\S+\.\S+/.test(Email);
  }
  
  const handleClick = event => {
    event.preventDefault();
    
    
    if (Email.trim().length !== 0 && !isValidEmail(Email)) {
      alert('The Email is Invalid');
    } 
    
    if (Name.trim().length !== 0 && Email.trim().length !== 0 && Password.trim().length !== 0 && isValidEmail(Email)  ) {    
      console.log("Hi you have registered successfully !");
      setIsShown(true);
      return false;

    }

    else if(Name.trim().length === 0 || Email.trim().length === 0 ||  Password.trim().length === 0 ) {
      alert("All fields are mandatory");
      return false;
    }
  };

  return (
    <>
     {isShown && (
        <div className="naya">
          <h3>Hello {Name}, You Have Registered Successfully !</h3>
        </div>
      )}
      <div className="PlaceholdersButton">
       
        <Placeholders Name={Name} Email={Email} Password={Password}
        onNameChange={setName} onEmailChange={setEmail} onPasswordChange={setPassword}/>
        <Button Name={Name} Email={Email} Password={Password} handleClick={handleClick} />
      </div>
    </>
  );
}

function RegistrationForm() {
  return (
    <div className="container">
      <Title />
      <PlaceholdersButton />
    </div>
  );
}

export default function App() {
  return <RegistrationForm />;
}
