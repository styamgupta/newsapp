import './App.css';
import React, { useState } from 'react'
import Navbar from '../../newsapp/src/component/Navbar';
import News from '../../newsapp/src/component/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from 'top-loading-bar/dist'

const App = () => {
  const pAge = 10
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={2}//default value 2
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="General" key="General" />}> </Route>
          <Route exact path="/business" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Business" key="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Entertainment" key="entertainment" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Science" key="science" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Health" key="health" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Sports" key="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} pAge={pAge} counTry="in" cataGory="Technology" key="technology" />}></Route>

        </Routes>
      </div>
    </Router>
  )
}
export default App
