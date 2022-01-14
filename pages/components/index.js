import{useRef, useState} from 'react';
import paypal from '../../data/image/paypal.svg'
import classes from './index.module.css';

function loadComponent (){
const[testData, setTestData] = useState([]);
const[picData, setPicData] = useState(null);
const[titleData, setTitleData] = useState('');

    const fectchApi = async()=>{
    const response = await fetch('/api/hello')
    const data = await response.json();
    setTestData(data)
    }
    const fectchPicApi = async()=>{
    const response = await fetch('/api/getPic')
    const data = await response.json();
    setPicData(data)
    }
    const titleHandler = (event) =>{
        setTitleData(event.target.value)
    }
    const fetchPostApi = async(event)=>{
        event.preventDefault();

    const response = await fetch('/api/hello',{
        method: 'POST',
        body : JSON.stringify({titleData}),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    const data = await response.json();
    setTitleData('');
    }
return(
  <div className={classes.box}>
  <button onClick = {fectchApi} className={classes.button2}>Load Test Data</button>
  <button onClick = {fectchPicApi} className={classes.button1}>Load Test Pic</button>
<form className={classes.labelbox} onSubmit={fetchPostApi}>
    <label htmlFor='title'>Add a Text</label>
    <input type='text' value = {titleData}onChange={titleHandler}/>
    <button className={classes.button3}>Submit</button>
</form>
  {testData.length !== 0 && <div className={classes.textbox}>{testData.map(data=>{
      return(
          <div>
             S NO. {data.id} = {data.text}
          </div>

      )
  })}
  </div>}


  {picData !== null && <div><img src={picData && picData.i} alt='logo' id='paypal logo'/>
  </div>}
  </div>  
)
}
export default loadComponent;