import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
const [firstname, setFname]=useState('Coder');
const [lastname, setLname] = useState('Byte');
const [phone, setPhone] = useState(8885559999);

const handleSubmit=(e)=>{
 e.preventDefault();

addEntryToPhoneBook({firstname, lastname, phone});

}

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstname}
        onChange={(e)=>setFname(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={lastname}
        onChange={(e)=>setLname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      
      />
    </form>
  )
}

function InformationTable(props) {
let data = props.entries;
  let info = data.map((mydata)=><> <tr><td>{mydata.firstname}</td><td>{mydata.lastname}</td><td>{mydata.phone}</td></tr></>)
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
    {info}
      </tbody>
    </table>
  );
}


function App() {
  const [entries, setEntry]=useState([]);

  const addEntryToPhoneBook = (entry)=>{
  
      setEntry(
                  [...entries, entry].sort((a,b)=> a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : -1 )
      );
  
  }
  
    return (
      <section>
        <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
        <InformationTable entries={entries}/>
      </section>
    );
}

export default App;
