import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div >

      <header className='App-header'>

        <div className='App-parent_1'>

          <img src={logo} className='App-logo' alt='logo' />

        </div>

        <div className='App-parent_2'>

          <a href='#'>Product</a>
          <a href='#'>Community</a>
          <a href='#'>Resources</a>
          <a href='#'>Pricing</a>
          <a href='#'>For Teams</a>

        </div>

        <div className='App-parent_3'>

          <button className='App-login'>Log In</button>
          <button className='App-get'>Get started</button>

        </div>


      </header>


    </div>
  );
}

export default App;
