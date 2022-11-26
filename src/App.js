import liberty from './optica/visaoliberty.jpg';
import comfort from './optica/visaocomfort.jpg';

import Slider from './components/Slider';

const slider1={
    delay:2000,
    original:{
      url: liberty,
    },
    modified:{
      url: comfort,
    }
};

const App = () => {
  return (
    <div className="App">
      <Slider {...slider1}/>
      <br/>
      
    </div>
  );
}

export default App;
