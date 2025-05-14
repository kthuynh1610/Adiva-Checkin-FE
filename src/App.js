import { HomePage, NameFilled, SignIn, ReloadData} from "./Components/index.js";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import "@fontsource/montserrat";
const App = ({name})=>{
    return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/SignIn' element={<SignIn/>} />
                <Route path='/NameFilled' element={<NameFilled/>}/>
                <Route path='/reloadData' element={<ReloadData/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;