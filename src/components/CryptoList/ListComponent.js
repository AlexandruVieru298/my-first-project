import React, { useEffect, useState } from 'react';
import Table from './Table';
import './style.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function ListComponent(props) {
    // States
    const defaultPage = sessionStorage.getItem("pageNumber"); // section Storage
    const defaultPerPage = sessionStorage.getItem("perPage");
    const [value, setValue] = useState(""); // search
    const [data, setData] = useState([]);
    const [tablePageNr, setTablePageNr] = useState(defaultPage || 1); // section Storage
    const [tablePerPage, setTablePerPage] = useState(defaultPerPage || 10);

    //---------

    // Functions
    const handleNext = () => {
        console.log("am crescut")
        // setTablePageNr((next)=>next+1);
        setTablePageNr((prev)=>prev+1);
    }
    const handlePrev = () => {
        console.log("am scazut")
        setTablePageNr(tablePageNr - 1);
    }
    const handlePerPage = (number) => {
        setTablePerPage(number);
        console.log(number);
    }
    //---------

    // API Call
    const fetchData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${tablePerPage}&page=${tablePageNr}`);
        setData(res.data);
    };

    useEffect(() => {
        // setTimeout(() => {
        fetchData();
        // }, 1000)
        sessionStorage.setItem("pageNumber", tablePageNr);
        sessionStorage.setItem("perPage", tablePerPage)
    }, [tablePageNr, tablePerPage]);
    //---------
    return (
        <div className='container-md mt-5 myClass'>
            {(data.length > 0 ?
                <div className='row'>
                    <input type="search" value={value} onChange={(e) => setValue(e.target.value)} className='form-control bg-dark text-light border-0 mt-4 text-center' placeholder='Search...'></input> {/* search */}
                    <Table coins={data} searchValue={value} pageNr={tablePageNr} buttonNext={handleNext} buttonPrev={handlePrev} perPage={handlePerPage} />
                </div>
                : <div className='center-container'><Spinner animation="border" variant="dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            )}
        </div>
    );
}

export default ListComponent;