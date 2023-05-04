import './App.css';
import ListGroup from './components/ListGroup';

const App = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
