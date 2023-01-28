import {
    Route,
    Routes,
} from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import './App.css';

import { Family } from './routes/family';
import { Girls } from './routes/girls';
import { Kids } from './routes/children';
import { Love } from './routes/love';
import { Media } from './routes/media';
import { Pets } from './routes/pets';
import { Reportage } from './routes/reportage';
import { Slider } from './components/Slider'


function App() {
    return (

        <div className="App">
            <Header className="App-header"></Header>
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
            <div className='text-container'><p>I believe that you will like</p>
            <p><b>I'm shooting a world full of unrelate elements.</b></p>
            <p><i>Object. Composition. Moment. Light. Emotion.</i></p></div>
            <div className='slider-wrapper'><Slider/></div>
        </div>


    );
}

export default App;
