import React, {useState} from 'react'
import "./app.css"
import tasbeh from "./images/Tasbih  222-01.png"
import ErrorModal from './ErrorModal';


function App(props) {

  const [counter, setCounter] = useState(0);
  const [error, setError] = useState();
  


  const countHandle = () => {
    setCounter(counter + 1)

    if (counter === 100 || counter === 1000) {
      setError({
        title: 'MashaAlloh',
        message1: "Alloh aytyatkan har bir zirk, salovatlaringizni yahshilik bilan mukofotlasin",
        message2: "2 kalima bor tilga oson lekin qiyomat kuni tarozida juda og'ir vazn bosadi Subhanalloh, Alhamdulillah, La ilaha illalloh"
      })
    }
  }

  const resetHandle = () => {
    setCounter(0)

  }

  const onChangeHanlder = (e) => {
    setCounter(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      { error && <ErrorModal title={error.title} message1={error.message1} message2={error.message2} onConfirm={errorHandler}/>}
      <div className="container">
        <div className="content">
          <div className="img-container">
            <img src={tasbeh} alt="tasbeh"  className='tasbeh-img'/>
            <input className='input' disabled value={counter} onChange={onChangeHanlder}/>
            <button className='reset' onClick={resetHandle}></button>
            <button className='counter' onClick={countHandle}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
