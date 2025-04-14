import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuixContext';
 
import Feedback from './componnents/Feedback';
import SentenceQuestion from './componnents/SentenceQuestion';
import FirstPage from './componnents/FirstPage';

export default function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
           
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/a"element={<SentenceQuestion/>}></Route>
          <Route path='/'element={<FirstPage/>}></Route>
        </Routes>
      </Router>
    </QuizProvider>
  );
}
