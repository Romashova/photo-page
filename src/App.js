import {
    Route,
    Routes,
} from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

import logo from './logo.png';
import logoName from './logo_name.png';
import './App.css';

import { Family } from './routes/family';
import { Girls } from './routes/girls';
import { Kids } from './routes/children';
import { Love } from './routes/love';
import { Media } from './routes/media';
import { Pets } from './routes/pets';
import { Reportage } from './routes/reportage';
import { Slider } from './components/Slider'

import Likes from './components/Likes';



function App() {
    return (
        <div className="App">
            <header className="App-header">
            <div className='logo-dir'>
            <img src={logo} className="App-logo" alt="logo" />
                <img src={logoName} />
            </div>

                <p className="App-name">
                    Welcome to my page
                                    </p>
            </header>
            <Sidebar className="sidebar-container" />
            <main className='main-container'>
                    <div className='main-content-container'>
                        <Routes className="routes-container">
                            <Route index element={<Home />} />
                            <Route path="/family" element={<Family />} />
                            <Route path="/girls" element={<Girls />} />
                            <Route path="/kids" element={<Kids />} />
                            <Route path="/love" element={<Love />} />
                            <Route path="/media" element={<Media />} />
                            <Route path="/pets" element={<Pets />} />
                            <Route path="/reportage" element={<Reportage />} />
                        </Routes>
                    </div>

            </main>
            <Footer/>
        </div>
    );
}

function Home() {
    return (

        <div className="main">
            <p>I believe that you will like me</p>
            <p><b>I'm shooting a world full of unrelate elements.</b></p>
            <p><i>Object. Composition. Moment. Light. Emotion.</i></p>
            <Slider />
            <div className="likes-wrapper">
                <Likes />
            </div>
        </div>
    );
}

export default App;
