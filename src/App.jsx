import { useState } from "react";
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import Verify from "./pages/Verify/Verify";

function App() {
  const [tab, settab] = useState('Welcome');
  return (
    <>
      <Header settab={settab}/>
      {tab === 'Welcome' && <Welcome />}
      {tab === 'Login' && <Login settab={settab} />}
      {tab === 'Register' && <Register settab={settab} />}
      {tab === 'Forgot' && <Forgot settab={settab} />}
      {tab === 'Verify' && <Verify settab={settab} />}
    </>
  )
}

export default App

// TODO: валидация форм
// TODO: можно все инпуты сделать одним компонентом, нужно
// Q: туплю с главной страницей и с футером в формах