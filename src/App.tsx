import {useEffect,useState} from 'react'
import moment from "moment";


import './App.css'

export default function App() {

    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState();
    //empty array to store the times
    const [savedTime, setSavedTime] = useState([]);

    useEffect(() => {


    })
    //no array dependency because i want it to always fetch as soon as component is loaded to fetch saved timess

    return (
        <div className="App">
            <button
                onClick={() => {
                    setStartDate(new Date());
                    const timer = setInterval(() => {
                        let start = moment(startDate);
                        let end = moment(new Date());
                        let diff = end.diff(start);
                        let f = moment.utc(diff).format("HH:mm:ss.SSS");
                        setDiff(f);
                    }, 1000);
                    //error here WIP
                }}
            >
                start
            </button>
            <button onClick={() => clearInterval(timer)}>stop</button>
            {/*<button onClick={() => {SavedTimes}}>Show all</button>*/}
            <p>{diff}</p>
        </div>
    );


}
// function SavedTimes(this: any) {
//     fetch('http://localhost:8080/api/times')
//         .then(response => response.json())
//         .then(data => this.setState({ totalReactPackages: data.total }));
//
//
//         return (
//             <div className="card text-center m-3">
//                 <h5 className="card-header">GET Request</h5>
//                 <div className="card-body">
//
//                 </div>
//             </div>
//         );
//
// }



//export default App;
