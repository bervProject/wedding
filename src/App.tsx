import './App.css';
import CoupleName from './components/CoupleName';
import Footer from './components/Footer';
import Verse from './components/Verse';
import CoupleIntro from './components/CoupleIntro';
import WeddingMap from './components/WeddingMap';
import Message from './components/Message';
import DateDetails from './components/DateDetails';

function App() {
  return (
    <div>
      <audio loop autoPlay>
        <source src="music/LovingYouLord.ogg" type="audio/ogg" />
        <source src="music/LovingYouLord.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Couple Name & Wedding Date */}
      <CoupleName />
      {/* Bible Verse */}
      <Verse />
      {/* Couple Name & Little Introduction */}
      <CoupleIntro />
      {/* Wedding Venue & Date/Time */}
      <DateDetails />
      {/* Wedding Map */}
      <WeddingMap />
      {/* RSVP/Message */}
      {process.env.NODE_ENV === 'production' ? null : <Message /> } 
      <Footer />
    </div>
  );
}

export default App;
