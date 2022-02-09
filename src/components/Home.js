import React from 'react';
import {Link,} from 'react-router-dom';
import '../utils/Home.css';
import Me from '../static/images/me.jpg';
import TodoListImg from '../static/images/Todo.jpg';
import CryptoImg from '../static/images/Crypto.jpg';

function Home(props) {
    return (
        <div>
            {/* <nav>
                    <ul>
                        <img src={Logo} alt="Logo"></img>
                        <li><Link to="../components/CryptoList/ListComponent" className="nav-link">Crypto</Link></li>
                        <li><Link to="../components/ToDo/Form" className="nav-link">To Do</Link></li>
                        <li><Link exact to="/" className="nav-link">Home</Link></li>
                    </ul>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="../components/ToDo/Form" element={<ListComponents />} />
                            <Route path="../components/CryptoList/ListComponent" element={<Form />} />
                        </Routes>
                    </div>
                </nav> */}
            <div className="grid-container">
                <div className='item1'>
                    <h1 style={{ color: "#333", marginLeft: "215px" }}><b>Hello, I am </b></h1><h1 style={{ color: "#3399FF", marginLeft: "0" }}><b>sKy</b></h1>
                    <h5 style={{ color: "#333", marginTop: "7px" }}><b>Junior Web Developer</b></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur inventore illum laboriosam odio. Nam quam velit atque explicabo vero, ipsa consequuntur error eveniet ipsam provident id vitae blanditiis libero?</p>
                    <button><a href="">About Me</a></button>
                </div>
                <div className='item2'>
                    <img src={Me} alt='Me'></img>
                </div>
            </div>
            <div className='container'>
                <div className='card-image'>
                    <img src={TodoListImg} alt="TodoList"></img>
                </div>
                <div className='card-text'>
                    <Link to="/Form" className="links">To Do</Link>
                    <p > Aici puteti gasi aplicatia mea de tip "TO DO List"</p>
                </div>
                <div style={{ marginLeft: "150px" }} className='card-image'>
                    <img src={CryptoImg} alt="Crypto"></img>
                </div>
                <div className='card-text'>
                    <Link to="/ListComponent" className="links">Crypto</Link>
                    <p>Aici puteti gasi aplicatia mea de tip "Crypto"</p>
                </div>
            </div>
        </div>
    );
}

export default Home;