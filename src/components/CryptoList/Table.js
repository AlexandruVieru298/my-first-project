import React, { useEffect, useState } from 'react';
import Row from './Row';
import Toast from 'react-bootstrap/Toast';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';


function Table({ coins, searchValue, pageNr, buttonNext, buttonPrev, perPage }) {

    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState();
    const filteredData = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase())); //search filter
    const updatePopup = (visibilityPopup, dataPopup) => {
        setPopup(visibilityPopup);
        setPopupData(dataPopup);
    }

    useEffect(() => {
        console.log("am intrat")
    }, [popup])

    return (
        <div className='background' style={{
            position: "relative",
        }}>
            {/* <Dropdown>
                <Dropdown.Toggle style={{background:"#2c3034",color:"#9ec5ee"}} className="mt-5" id="dropdown-basic">
                    Per Page
                </Dropdown.Toggle>

                <Dropdown.Menu style={{background:"#2c3034"}}>
                    <Dropdown.Item style={{color:"#9ec5ee"}} onClick ={() => perPage(10)}><b>10 Elements on Page</b></Dropdown.Item>
                    <Dropdown.Item style={{color:"#9ec5ee"}} onClick ={() => perPage(20)}><b>20 Elements on Page</b></Dropdown.Item>
                    <Dropdown.Item style={{color:"#9ec5ee"}} onClick ={() => perPage(30)}><b>30 Elements on Page</b></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            {popup && <Toast bg="dark" style={{
                position: "absolute",
                left: "35%",
                right: "50%",
                top: "5%",
            }}
                onClose={(() => setPopup(false))}>
                <Toast.Header>
                    <strong className="me-auto">{popupData.name}</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body style={{ color: "#fff" }}> ATH :{popupData.ath}</Toast.Body>
            </Toast>
            }
            {/* <Table className="striped bordered hover" variant="dark"> */}
            <table style={{ marginBottom: 0, color: "#9ec5ee" }} className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Corner</th>
                        <th>Price</th>
                        <th>Price Change</th>
                        <th>24h Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((e, index) => (
                        <Row coin={e} key={index} popupVisibility={updatePopup} />
                    ))} {/* search filter  */}
                </tbody>
            </table>
            <div className='display-flex mt-3'>
                <Dropdown>
                    <Dropdown.Toggle style={{ background: "#f5f5f5", color: "#0d6efd" }} id="dropdown-basic">
                        Per Page
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ background: "#f5f5f5" }}>
                        <Dropdown.Item style={{ color: "#3D74AF" }} onClick={() => perPage(10)}><b>10 Elements on Page</b></Dropdown.Item>
                        <Dropdown.Item style={{ color: "#3D74AF" }} onClick={() => perPage(20)}><b>20 Elements on Page</b></Dropdown.Item>
                        <Dropdown.Item style={{ color: "#3D74AF" }} onClick={() => perPage(30)}><b>30 Elements on Page</b></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Pagination style={{ background: "none",  marginLeft: "auto", marginRight: "auto", width: "150px", borderRadius: "5px", padding: 0 }}>
                    <Pagination.Prev disabled={pageNr === 1} onClick={buttonPrev} />
                    <Pagination.Item>{pageNr}</Pagination.Item>
                    <Pagination.Next onClick={buttonNext} />
                </Pagination>
            </div>
        </div>
    );
}

export default Table;