import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

const fiveFirst = contacts.splice(0,5)


function App() {
  const [contact, setContact] = useState(fiveFirst);
  const [contactRest, setContactRest] = useState(contacts)
  console.log("REST", contactRest)
  
  const addRandom = toContact => {
    let randomNumber = Math.floor(Math.random()*(toContact.length))
    let addToContact = toContact.splice(randomNumber,1)  
    setContact ([...contact, addToContact[0]]);
  };

  const sortByName = sortContactsName => {
    sortContactsName.sort((a, b) => {
      if (a.name < b.name) return -1
      return a.name > b.name ? 1 : 0
    })
    console.log(sortContactsName)
    setContact(sortContactsName)
  }

  const sortByPop = sortContactsPop => {
    sortContactsPop.sort((a, b) => {
      if (a.popularity < b.popularity) return -1
      return a.popularity > b.popularity ? 1 : 0
    })
    console.log(sortContactsPop)
    setContact(sortContactsPop)
  }
  

  const deleteContact = contactId => {
    //console.log(contactId)
    const newContactArray = contact.filter(element => {
      return element.id !== contactId;
    });
    //console.log(newContactArray)
    setContact(newContactArray);
  };
  
  return (
    <div className="App">
    <h2>IronContacts</h2>
    
    <button onClick={() => addRandom(contactRest)} className="btn">
        Add addRandom 
      </button>

      <button onClick={() => sortByName(contact)} className="btn">
        SORT By name 
      </button>

      <button onClick={() => sortByPop(contact)} className="btn">
        SORT By Popularity 
      </button>

    <table>
          <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
      {contact.map(element => {
        return (
            <div key={element.id}>
            <tr>
              <td> <img className="profilepic" src={element.pictureUrl} alt=""></img> </td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.wonOscar && "🏆"}</td>
              <td>{element.wonEmmy && "🏆"}</td>
              <td><button onClick={() => deleteContact(element.id)}>
              Delete 
            </button></td>
            </tr>
            </div>
        );     
      }) 
      } </table>

      

  </div>)
}
export default App;


