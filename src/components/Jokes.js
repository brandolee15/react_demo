import React, {useState} from 'react';

const Jokes = () => {
  const [formData, setFormData] = useState({username: "", password: ""})

  
  const handleInput = e => {
    //using destructuring to access e.target.name and e.target.value
    
    const {name, value} = e.target
    setFormData({...formData, [name]:value});
  }
    return(
      <form>
        <input type="text" name="username" placeholder="That's not my name" value={formData.username} onChange={handleInput}/>
        <input type="password" name="password" value={formData.password} onChange={handleInput}/>
        <input type="submit" value="UPDATE" />
      </form>
    )
  
  
  
};

export default Jokes;