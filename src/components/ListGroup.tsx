import { MouseEvent } from 'react';

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleClick = (event: MouseEvent) => console.log(event.target);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items found</p>}
      <ul className='list-group'>
        {items.map((item) => (
          <li className='list-group-item' key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
