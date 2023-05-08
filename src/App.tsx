import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

const App = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
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
