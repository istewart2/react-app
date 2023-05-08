import './App.css';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

const App = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        <h1>Hello World</h1>
      </Alert>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
