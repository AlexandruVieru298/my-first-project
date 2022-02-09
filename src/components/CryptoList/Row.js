import React from 'react';
import Button from 'react-bootstrap/Button'

function Row({ coin, popupVisibility }) {
    return (
        <tr style={{color:"#9ec5ee"}}>
            <td>{coin.market_cap_rank}</td>
            <td>
                <img src={coin.image} className="img-fluid me-4" style={{width:"20px", height:"20px", margin:0}} alt="Coin Logo"></img>
                <Button style={{color:"#9ec5ee"}} variant="dark" onClick={() => popupVisibility(true, coin)}> {coin.name}</Button>
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span></td>
            <td>{coin.current_price}</td>
            <td className={(coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger")}>{coin.price_change_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    );
}

export default Row;