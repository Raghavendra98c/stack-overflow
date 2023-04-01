import { BrowserRouter as Router } from 'react-router-dom' 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import Payment from './Payment';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  
  useEffect(()=>{
    (function(d, m){
        var kommunicateSettings =
            {"appId":"2bf085baaad3f559103cf127c1cc98c10","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
 })

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
        <Payment/>
      </Router >
    </div>
  );
}

export default App;
