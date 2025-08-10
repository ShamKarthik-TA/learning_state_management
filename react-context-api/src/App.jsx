import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './features/activity/ProductList';
import { CounterProvider } from './features/counter/CounterContext';
import { TodoProvider } from './features/todo/TodoContext';
import { WeatherProvider } from './features/weather/WeatherContext';
import CounterExample from './features/counter/CounterExample';
import TodoExample from './features/todo/TodoExample';
import WeatherExample from './features/weather/WeatherExample';


function App() {
  return (
    <CounterProvider>
      <TodoProvider>
        <WeatherProvider>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>React Context API Examples</h1>
          <div className="card">
            <CounterExample />
            <TodoExample />
            <WeatherExample />
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <ProductList />
        </WeatherProvider>
      </TodoProvider>
    </CounterProvider>
  );
}

export default App
