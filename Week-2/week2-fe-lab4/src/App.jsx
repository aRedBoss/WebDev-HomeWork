import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
    <div className='container'>
      <div className='main'>
        <Header />
        <MainContent />
        <Footer />
      </div>
      
      <Sidebar/>
      
    </div>
    </>
  );
}

export default App;