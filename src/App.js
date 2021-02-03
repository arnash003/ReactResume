import React , { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Resume from './Components/Resume';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
     <Header data={resumeData.main} />
     <About data={resumeData.main} />
     <Resume data={resumeData.resume} />
     <Contact data={resumeData.main} />
     <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
