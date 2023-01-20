import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Card from '../Component/Card';

const Main = () => {
    const plusRef=useRef();
    const minRef=useRef();
    const [data,setData]=useState([]);
    const [pageNum,setPageNum]=useState(1);
    const itemPerPage=5;
    useEffect(()=>{
        fetch('https://leadzen-pro.vercel.app/data')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[]);

    const pageCount=Math.ceil(data.length/itemPerPage);
    console.log(pageCount);
    const dataEnd=pageNum*itemPerPage;
    const dataStart=dataEnd-itemPerPage;
    const finalData=data.slice(dataStart, dataEnd);

    const pagePlus=()=>{
            if(pageNum<pageCount){
                setPageNum(prev=>{
                    return prev+1;
                })
            }
    };

    const pageMin=()=>{
            if(pageNum>1){
                setPageNum(prev=>{
                    return prev-1;
                })
            }
    };

    return(
        <div>
        {
            finalData.map(each=><Card data={each}></Card>)
        }
        <div className="btn-group grid grid-cols-2 w-48 mx-auto">
            <button ref={minRef} onClick={pageMin} disabled={pageNum===1&&true} className="btn btn-outline">Previous page</button>
            <button ref={plusRef} onClick={pagePlus} disabled={pageCount===pageNum&&true} className="btn btn-outline">Next</button>
        </div>
        </div>
    );
    
};

export default Main;