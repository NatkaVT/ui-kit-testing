import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import ColorPicker from './components/ColorPicker';
import DatePickerEl from './components/DatePicker';
import Dropdown from './components/Dropdown';
import Icon from './components/Icon';
import Inputs from './components/Inputs';
import Link from './components/Link';
import Modal from './components/Modal';
import SelectMenu from './components/SelectMenu';
import TextArea from './components/TextArea';
import Toast from './components/Toast';

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const colors = ['#9F2957', '#D90056', '#E25D33', '#DFC45A', '#B8C42F', '#16AF6E', '#429488', '#397E49', '#439BDF', '#4254AF', '#6C7AC4', '#8332A4'];
  const [isToastVisible, setToastVisible] = useState(true);

  const handleCloseToast = () => {
    setToastVisible(false);
    setTimeout(() => setToastVisible(true), 3000)
  }

  return (
    <div className="App">
      <button 
        className='theme-btn'
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className='btn-element app-element'>
        <div className='btn-el-header'>
          <h6>Primary</h6>
          <h6>Primary With Icon</h6>
          <h6>Secondary</h6>
          <h6>Secondary With Icon</h6>
        </div>
        <div className='btn-content'>
          <div className='btn-el'>
            <div className='btn-default var'>
              <Button variant="primary">Button</Button>
              <Button  variant="primaryWithIcon" icon="play">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondaryWithIcon"icon="play">Button</Button>
            </div>
            <div className='btn-disabled var'>
              <Button variant="primary" disabled>Button</Button>
              <Button variant="primaryWithIcon" icon="play" disabled>Button</Button>
              <Button variant="secondary" disabled>Button</Button>
              <Button variant="secondaryWithIcon" icon="play" disabled>Button</Button>
            </div>
            <div className='btn-hover var'>
              <Button variant="primary" hover>Button</Button>
              <Button variant="primaryWithIcon" icon="play" hover>Button</Button>
              <Button variant="secondary" hover>Button</Button>
              <Button variant="secondaryWithIcon" icon="play" hover>Button</Button>
            </div>
            <div className='btn-pressed var'>
              <Button variant="primary" pressed>Button</Button>
              <Button variant="primaryWithIcon" icon="play" pressed>Button</Button>
              <Button variant="secondary" pressed>Button</Button>
              <Button variant="secondaryWithIcon" icon="play" pressed>Button</Button>
            </div>
          </div>
          <div className='btn-opt'>
            <p>Default</p>
            <p>Disabled</p>
            <p>Hover</p>
            <p>Pressed</p>
          </div>
        </div>
      </div>

      <div className='link-element app-element'>
        <div className='link-content'>
        <Link href="">Link</Link>
        <Link href="" disabled>Link</Link>
        <Link href="" hover>Link</Link>
        <Link href="" pressed>Link</Link>
        </div>
        <div className='link-opt'>
          <p>Default</p>
          <p>Disabled</p>
          <p>Hover</p>
          <p>Pressed</p>
        </div>
      </div>

      <div className='inputs-element app-element'>
        <div className='inputs-content'>
          <Inputs name="" password="" />
          <Inputs name="QuantumSphinx23" password="********" />
          <Inputs name="QuantumSphinx23" password="********" active/>
          <Inputs name="QuantumSphinx23" password="********" disabled />
          <Inputs name="QuantumSphinx23" password="********" nameError="Error message" passwordError="Error message"/>
        </div>
        <div className='inputs-opt'>
          <p>Default</p>
          <p>Filled</p>
          <p>Active</p>
          <p>Disabled</p>
          <p>Error</p>
        </div>
      </div>

      <div className='check-group'>
        <div className='checkbox-element app-element'>
          <Checkbox checked={true} />
          <Checkbox checked={false} />
        </div>

        <div className='checkbox-text-element app-element'>
          <Checkbox checked={true} label="Text" />
          <Checkbox checked={false} label="Text" />
        </div>
      </div>

      <div className='icon-element app-element'>
        <Icon />
      </div>

      <div className='modal-element app-element'>
        <Modal title="Title" isOpen={true} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'>
        </Modal>
      </div>

      <div className='select-menu-element app-element'>
        <div className='select-menu-opt'>
          <p className='def'>Default</p>
          <p>Selected item</p>
          <p>Hovered item</p>
        </div>
        <div className='select-menu-content'>
          <SelectMenu />
          <SelectMenu isOpen={true} value="12:30 pm" />
          <SelectMenu isOpen={true} hover/>
        </div>
        
      </div>

      <div className='text-area-element app-element'>
        <TextArea value='Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'/>
      </div>

      <div className='date-picker-element app-element'>
        <DatePickerEl />
      </div>

      <div className='dropdown-element app-element'>
        <div className='dropdown-opt'>
          <p className='def'>Default</p>
          <p>Hovered</p>
          <p>Pressed</p>
          <p>Hovered item</p>
          <p>Selected item</p>
        </div>
        <div className='dropdown-content'>
        <Dropdown options={['Day', 'Week']} />
        <Dropdown options={['Day', 'Week']} hoverState="Week" />
        <Dropdown options={['Day', 'Week']} isOpen={true} />
        <Dropdown options={['Day', 'Week']} hoverOption="Week" isOpen={true} />
        <Dropdown options={['Day', 'Week']} defaultOption="Week" isOpen={true} />
        </div>
      </div>

      <div className='color-picker-element app-element'>
        <div className='color-picker-opt'>
          <p>Default</p>
          <p>Colour picker</p>
        </div>
        <div className='color-picker-content'>
          <ColorPicker colors={colors} />
          <ColorPicker colors={colors} selected={'#D90056'} />
        </div>
      </div>

      <div className='toast-element app-element'>
        <Toast message="Event deleted" isVisible={isToastVisible} onClose={handleCloseToast}/>
      </div>
    </div>
  );
}

export default App;
