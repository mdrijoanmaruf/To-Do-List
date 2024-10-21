
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import Footer from "./components/Footer";

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');  // Theme state


  useEffect(() => {
    localStorage.setItem("tasklist" , JSON.stringify(tasklist))
  }, [tasklist])
  

  return (
    <div>
      <Header />
      <AddTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task}
      setTask={setTask}
      theme={theme}  // Pass theme to AddTask
      />
      <ShowTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task}
      setTask={setTask}
      theme={theme}  // Pass theme to AddTask
      />
      <Footer/>
    </div>
  );
}

export default App;
