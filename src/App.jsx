import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
   const [count, setCount] = useState(0);
   const [test, setTest] = useState("");

   useEffect(() => {
      async function getTest() {
         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/test`);
         setTest(response.data);
      }

      getTest();
   }, []);

   return (
      <>
         <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <h1>{test}</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
         </div>
         <p className="read-the-docs">Version 7 with .env</p>
      </>
   );
}

export default App;
