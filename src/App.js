import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  // const [note2000, setNote2000] =useState("0");
  // const [note500, setNote500] =useState("0");
  // const [note100, setNote100] =useState("0");
  // const [note20, setNote20] =useState("0");
  // const [note10, setNote10] =useState("0");
  // const [note5, setNote5] =useState("0");
  // const [note1, setNote1] =useState("0");

  function findChange() {
    let billAmount=document.querySelector('.bill-amount');
    let cashAmount=document.querySelector('.cash-amount');
    billAmount=billAmount.value;
    cashAmount=cashAmount.value;
    if(billAmount>0) {
      if(cashAmount>=billAmount) {
        let balance=cashAmount-billAmount;
        let notes=[2000, 500, 100, 20, 10, 5, 1];
        for(let i=0;i<notes.length;i++) {
          let count = Math.trunc(balance/notes[i]);
          balance=balance%notes[i];
          document.querySelector('.note'+notes[i]).innerHTML=count;
        }
        setMessage("");
      }
      else {
        setMessage("uh-oh! you are short on cash. :/")
      }
    }
    else {
      {setMessage("please type valid inputs!");}
    }
  }

  return (
    <div className="App">
      <nav className="brand">cash register<br/><hr></hr></nav>
      <div class="app-detail">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</div>
      <div className="main-div">
        <div className="program">
          <div>
            <div className="name-bill">Bill Amount</div>
          <input className="bill-amount"></input>
          </div>
          <div>
          <div className="name-cash">Cash Given</div>
          <input className="cash-amount"></input>
          </div>
          <div>
          <a className="find-change" onClick={()=>findChange()}>Find Change</a>
          </div>
          <div className="alert-message">{message}</div>
        </div>
        <div className="app-table">
          <table>
            <tr>
              <th className="th-head">Note</th>
              <th className="th-head">Count</th>
            </tr>
            <tr>
              <th>2000x</th>
              <td className="note2000">0</td>
            </tr>
            <tr>
              <th>500x</th>
              <td className="note500">0</td>
            </tr>
            <tr>
              <th>100x</th>
              <td className="note100">0</td>
            </tr>
            <tr>
              <th>20x</th>
              <td className="note20">0</td>
            </tr>
            <tr>
              <th>10x</th>
              <td className="note10">0</td>
            </tr>
            <tr>
              <th>5x</th>
              <td className="note5">0</td>
            </tr>
            <tr>
              <th>1x</th>
              <td className="note1">0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
