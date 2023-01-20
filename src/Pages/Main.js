import React, { useEffect, useState } from 'react';
import Card from '../Component/Card';

const Main = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
    return(
        <div>
        {
            data.map(each=><Card data={each}></Card>)
        }
        </div>
    );
    
};

export default Main;