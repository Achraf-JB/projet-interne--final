
import './Home.css';
import ImageSlider from './ImageSlider';
import { Sliderdata } from './Sliderdata';

function Home() {
  return (
    <div className="Appp">
     <ImageSlider slides={Sliderdata}/>
    </div>
  );
}

export default Home;
