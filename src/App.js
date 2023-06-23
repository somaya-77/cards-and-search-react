import Card from './Components/Card/Card';
import './App.css';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';

function App() {
  const [cardToggle, setcardToggle] = useState(true);
  const [filterName, setFilterName] = useState('');
  const [state, setState] = useState([
    {
      name: "ahmed",
      age: 25,
      adress: "alex",
      phone: "1589669889",
    },
    {
      name: "ali",
      age: 28,
      adress: "alex",
      phone: "1589669229",
    },
    {
      name: "eslam",
      age: 30,
      adress: "alex",
      phone: "15896695559",
    },
  ]);

  const deleteHandler = (event, clicked) => {
    // const deleteOpration = state.filter((el,index) => index !== clicked);
    // setState(deleteOpration);

    setState((prevState) => {
      return prevState.filter((el,idx) => idx !== clicked)
    });
  };

  // const handlerClick = () => {
  //   setcardToggle(!cardToggle);
  // };

  const filterNameHandler = (name) => {
    console.log(name)
  }

  const nameHandler = () => {
    if(filterName.length !== 0) {
      return '';
    }
    return state;
  }

  return (
    <div className="App">
      <h1>Boys</h1>
      <button style={{marginBottom: "20px"}} onClick={() => setcardToggle(!cardToggle)}>{cardToggle ? "Hide Cards" : "Show Cards"}</button>
      <Filter filteration = {filterNameHandler}/>
      

      <div className={cardToggle ? "show" : "hide"}>
        <Card cardsList={nameHandler()} type='man' deletehandle={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
