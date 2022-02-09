import React from 'react';
import { useState, useEffect } from 'react';
import Image from '../../static/images/ok.png';

function Form(props) {
    const [value, setValue] = useState("");
    const [obj, setObj] = useState([{ text: "Task #1", completed: false }]);
    const [oktext, setOktext] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value !== "") {
            setObj([...obj, { text: value, completed: false }])
        }
        setValue("");
    };

    const completeButton = (index) => {
        const newobj = [...obj];
        newobj[index].completed = !newobj[index].completed; // valoarea inversa
        setObj(newobj);
        // setTimeout(() => {
        //     //     const newobj2 = [...obj];
        //     //     newobj2.splice(index, 1);
        //     //     setObj(newobj2);

        // }, 3000);
    };

    useEffect(() => {
        obj.map((e) => {
            if (e.completed) {
                setOktext(true);
                console.log(`%c setOktext a fost schimbat`, `color: #65f265bf`);
            }
        });
        
    }
        , [obj]);

    const deleteButton = (index) => {
        const newobj = [...obj];
        newobj.splice(index, 1);
        setObj(newobj);
        obj.map((e) => {
            if (e.completed) {
                setOktext(false);
            }
        });

    }


    return (
        <div className="form-container form-content">
            <h1>To do List</h1>
            {obj.map((e, index) => (
                <div key={index}>
                    <div style={{marginTop:"2px", borderRadius:"8px"}} className="form-div-content ">
                        <h4 className="form-h4" style={{ textDecoration: e.completed ? "line-through" : "" }}>{e.text}</h4>
                        <button onClick={() => deleteButton(index)} style={{borderRadius:"10px 10px", marginTop:"4px"}} className="btn-form">X</button>
                        {e.completed ? <img src={Image} style={{width:"16px", marginTop:"4px"}} alt="Ok icon"></img> : <button onClick={() => completeButton(index)} style={{marginTop:"4px"}} className="btn-form">Complete</button>}
                    </div>
                    <p className="ok-text" style={{ display: e.completed ? "" : "none", marginRight:"auto", marginLeft:"auto", width:"300px", marginBottom:"15px" }}>Felicitari ai completat un task.</p>
                </div>
            ))}
            {/* <p className="ok-text" style={{ display: oktext ? "" : "none" }}>Felicitari ai completat un task.</p> */}
            <form onSubmit={handleSubmit} className="form-content">

                <input className='input' style={{marginTop:"2px", borderRadius:"8px"}} type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>

                <input className='btn-submit' style={{borderRadius:"10px 10px", padding:"5px 20px"}} type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Form;