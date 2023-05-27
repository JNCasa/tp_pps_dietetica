import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import FrequentQuestions from './FrequentQuestions';

const Pages = () => {
  return (
    <section>
        <Routes>
            <Route path="/AboutUs" exact element={<AboutUs/>} />
            <Route path="/FrequentQuestions" exact element={<FrequentQuestions/>} />
        </Routes>
    </section>
  )
}

export default Pages;
