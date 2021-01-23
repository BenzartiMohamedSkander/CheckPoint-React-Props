import './App.css';
import Profile from './profile/Profile'




function App() {
  const handelName = (myname) => {
    alert(`Hello I am ${myname}`);
  };

const childrenPropos ='/profil2.png'
  return (
    <div className="App">
  
 
 <Profile fullName="Mohamed Ali"  profession="Developper" bio="Mohamed is a Software devlopper and architec "  handelName={handelName} >{childrenPropos}</Profile>
    </div>
  );
}

export default App;
