import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';

const App = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert onClose={handleAlertDismiss}>
          <h1>Hello World</h1>
        </Alert>
      )}
      <BsFillCalendarFill size='40' />
      <br />
      <Button onButtonClick={handleButtonClick}>This is a button</Button>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
