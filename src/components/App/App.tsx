import { Outlet } from 'react-router-dom';
import reactLogo from '@assets/react.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="text-3xl font-bold underline">
                TailwindCSS included
            </p>
            <Outlet />
        </div>
    );
}

export default App;
