import './App.scss';
import Button from './components/button/button.tsx';

function App() {
  return (
    <div className="App">
      <h1 className='header'>QUX Test</h1>
      <div className="button-container">
        <h2>Primary Buttons</h2>
        <div className='buttons'>
          <Button type='primary'>Primary</Button>
          <Button type='primary-danger'>Danger</Button>
          <Button type='primary-success'>Success</Button>
          <Button type='disabled'>Disabled</Button>
        </div>
        <br />
        <h2>Secondary Buttons</h2>
        <div className='buttons'>
          <Button type='secondary'>Primary</Button>
          <Button type='secondary-danger'>Danger</Button>
          <Button type='secondary-disabled'>Disabled</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
