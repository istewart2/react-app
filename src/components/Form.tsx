import React, { FormEvent, useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({ name: '', age: 0 });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form'>
          Name
        </label>
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form'>
          Age
        </label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
