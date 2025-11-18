import logo from './logo.svg';
import menu from './menu.png';
import xicon from './x_icon.png';
import people from './people.webp';
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

      <main>

        <div className='container_1'>

          <div className='parent_1'>

            <h1>Learn in-demand <span>UX, PM & AI</span> skills</h1>
            <p>Bite-sized, interactive learning built for busy professionals. Advance your UX design or product management career in 5 minutes a day.</p>

            <div className='child_1'>

              <button className='get_button'>Get Started</button>
              <button className='teams_button'>Uxcel for Teams</button>

            </div>

            <div className='child_2'>

              <div className='grand_child_1'>
                <img src={people} alt='people' className='people' />
              </div>

              <div className='grand_child_2'>
                <p>Trusted by 500k+ design & product professionals</p>
              </div>

              <div className='grand_child_3'>
              </div>

              <div className='grand_child_4'>

                <p></p>
                <img src='' alt='' className='' />
                <h5></h5>

              </div>

            </div>

          </div>

        </div>

      </main>


    </div>
  );
}

export default App;
