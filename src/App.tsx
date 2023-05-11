import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';

const App = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const [showAlert, setShowAlert] = useState(false);
  const [liked, setLiked] = useState(false);

  // updating nested object example
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111,
    },
  });

  const handleUpdateCustomer = () => {
    console.log(customer);
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 94112,
      },
    });
    console.log(customer);
  };

  // update array
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleUpdateArray = () => {
    console.log(tags);
    // add
    setTags([...tags, 'exciting']);

    // remove
    setTags(tags.filter((tag) => tag !== 'happy'));

    // update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
    console.log(tags);
  };

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
      <BsFillCalendarFill
        size='40'
        onClick={() => {
          console.log('clicked');
          setLiked((current) => !current);
        }}
        color={liked ? 'red' : ''}
      />
      <br />
      <Button onButtonClick={handleButtonClick}>This is a button</Button>
      <Button onButtonClick={handleUpdateCustomer}>Update customer</Button>
      <Button onButtonClick={handleUpdateArray}>Update array</Button>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
