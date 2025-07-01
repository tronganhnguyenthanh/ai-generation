import {Route, Routes} from "react-router-dom"
import TabAI from "../components/tabControls/Tab"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<TabAI/>}/>
     </Routes>
   </div>
  )
}
export default App
