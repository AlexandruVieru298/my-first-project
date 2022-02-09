import React from 'react';
import { useState, useEffect } from 'react';
import Image from '../../static/images/ok.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


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
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <h1>To do list</h1>
                <Box sx={{ flexGrow: 1 }}>
                    {obj.map((e, index) => (
                        <div key={index}>
                            <div>
                                <Grid container columns={16}>
                                    <Grid mt={5} item xs={12}>
                                        <Item><h4 style={{ textDecoration: e.completed ? "line-through" : "" }}>{e.text}</h4></Item>
                                    </Grid>
                                    <Grid item mt={0} p={0} m={0} xs={3}>
                                        <Item><Button variant="contained" onClick={() => deleteButton(index)}>X</Button>
                                            {e.completed ? <img src={Image} width={16} alt="Ok icon"></img> : <Button variant="contained" onClick={() => completeButton(index)}>Complete</Button>}</Item>
                                    </Grid>
                                </Grid>
                            </div>
                            <p style={{ display: e.completed ? "" : "none" }}>Felicitari ai completat un task.</p>

                        </div>

                    ))}
                    <form onSubmit={handleSubmit} className="form-content">
                        <TextField id="filled-basic" inputProps={{ style: { color: 'white' } }} variant="filled" color="secondary" type="text" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
                        <Button id="filled-basic" color="secondary" type="submit" variant="filled" value="Submit">Submit</Button>
                    </form>

                </Box>
            </CardContent>
        </Card>
    );
}

/* <h1>To do List</h1>
            {obj.map((e, index) => (
                <div key={index}>
                    <div>
                        <h4 style={{ textDecoration: e.completed ? "line-through" : "" }}>{e.text}</h4>
                        <Button variant="contained" onClick={() => deleteButton(index)}>X</Button>
                        {e.completed ? <img src={Image} width={16} alt="Ok icon"></img> : <Button variant="contained" onClick={() => completeButton(index)}>Complete</Button>}
                    </div>
                    <p className="ok-text" style={{ display: e.completed ? "" : "none" }}>Felicitari ai completat un task.</p>
                </div>
            ))}
            {/* <p className="ok-text" style={{ display: oktext ? "" : "none" }}>Felicitari ai completat un task.</p> */
// <form onSubmit={handleSubmit} className="form-content">

//     <TextField id="filled-basic" variant="filled" color="secondary" type="text" value={value} onChange={(e) => setValue(e.target.value)}></TextField>

//     <Button id="filled-basic" color="secondary" variant="filled" value="Submit">Submit</Button>
// </form>

export default Form;