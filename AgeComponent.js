import arrow from './icon-arrow.svg';
import '../App.css';
import {useState} from 'react';

export default function AgeComponent() {
    const [day, setDay]=useState('--');
    const [month, setMonth]=useState('--');
    const [year, setYear]=useState('--');
    const [dd, setDD]=useState('');
    const [mm, setMM]=useState('');
    const [yyyy, setYYYY]=useState('');
    function handleSubmit(){
        if (!dd || !mm || !yyyy) {
            // Set border color of empty fields to red
            if (!dd) {
                document.getElementById('dayIn').classList.add('error');
                document.querySelector('.p').style.display='';
            }
            if (!mm) document.getElementById('monthIn').classList.add('error');
            if (!yyyy) document.getElementById('yearIn').classList.add('error');

            // Set text color of h6 elements to red
            if (!dd) document.querySelector('.input > div:nth-child(1) > h6').classList.add('txt');
            if (!mm) document.querySelector('.input > div:nth-child(2) > h6').classList.add('txt');
            if (!yyyy) document.querySelector('.input > div:nth-child(3) > h6').classList.add('txt');

            return;
        }
        const date = new Date();
        const givedate = new Date(`${mm}-${dd}-${yyyy}`);
        const differenceInMilliseconds = date - givedate;
        const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);

        // Calculate the differences in years, months, and days
        const years = Math.floor(differenceInDays / 365);
        const months = Math.floor((differenceInDays % 365) / 30); // Approximate number of days in a month
        const days= Math.floor(differenceInDays % 30);
        console.log(differenceInMilliseconds);
        if(days && months && years){
        setDay(days);
        setMonth(months);
        setYear(years);
    }
        
    }
    return (
        <div className="Container">
        <div className="Content">
            <div className="input">
                <div>
                 <h6 >Day</h6>   
                <input type="text" placeHolder="DD" id="dayIn" onChange={(e)=>setDD(e.target.value)} /> 
                <p className="error">This fields is required</p>   
                </div>   
                <div>
                 <h6>Month</h6>   
                <input type="text" placeHolder="MM" id="monthIn" onChange={(e)=>setMM(e.target.value) }/> 
                <p className="error"></p>   
                </div> 
                <div>
                 <h6>Year</h6>   
                <input type="text" placeHolder="YYYY" id="yearIn" onChange={(e)=>setYYYY(e.target.value) }/> 
                <p className="error"></p>   
                </div>          
            </div>
            <hr/>
            <button onClick={handleSubmit}>
                <img src={arrow} alt='Arrow'/>
            </button>
            <div class="result">
        <h1><span id="yearOut">{year}</span> years</h1>
        <h1><span id="monthOut">{month}</span> months</h1>
        <h1><span id="dayOut">{day}</span> days</h1>
            </div>
      </div>
      </div>
    );
}
