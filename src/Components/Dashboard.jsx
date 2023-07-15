import React, { useState } from 'react';
import './Dashboard.css';
import Data from './Data';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJs,CategoryScale,LinearScale,BarElement,Tooltip,Legend} from 'chart.js';
ChartJs.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend);

function Dashboard() {
    const [data,setData]=useState(Data);
    {console.log(data[0])}
  return (
    <>
    <div className='dash'>
    <marquee behavior="alternate" scrollamount="20" className='blink'><h1>Welcome to Dashboard</h1></marquee>
    </div>
    <div className='bar' style={{padding:"5rem 10rem"}}>
        <Bar data={{
            labels:data.map(user=>user.name),
            
            datasets:[
                {
                    label:"attendance",
                    data:data.map(user=>user.attendance),
                    backgroundColor:"rgba(255,99,132)",
                },
            ]
        }}/>
    </div>
      
    </>
  )
}

export default Dashboard;