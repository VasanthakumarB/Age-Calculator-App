import arrow from './icon-arrow.svg';
import '../App.css';

export default function AgeComponent() {
    return (
        <div className="Container">
        <div className="Content">
            <div className="input">
                <div>
                 <label>Day</label>   
                <input type="text" placeHolder="DD" id="dayIn"/> 
                <p className="error"></p>   
                </div>   
                <div>
                 <label>Month</label>   
                <input type="text" placeHolder="MM" id="monthIn"/> 
                <p className="error"></p>   
                </div> 
                <div>
                 <label>Year</label>   
                <input type="text" placeHolder="YYYY" id="yearIn"/> 
                <p className="error"></p>   
                </div>          
            </div>
            <hr/>
            <button >
                <img src={arrow} alt='Arrow'/>
            </button>
            <div class="result">
        <h1><span id="yearOut">--</span> years</h1>
        <h1><span id="monthOut">--</span> months</h1>
        <h1><span id="dayOut">--</span> days</h1>
            </div>
      </div>
      </div>
    );
}
