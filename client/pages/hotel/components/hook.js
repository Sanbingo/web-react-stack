/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, {
  useState,
} from 'react';
import {
  Input,
  Button,
  Form,
} from 'antd';
// use react hooks
function StationComponent() {
  const [name, setHotelName] = useState('');
  const [mobile, setHotelMobile] = useState('');
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
      <Form layout="inline">
        <Form.Item>
          <Input value={name} onChange={setHotelName} placeholder="name" />
        </Form.Item>
        <Form.Item>
          <Input value={mobile} onChange={setHotelMobile} placeholder="mobile" />
        </Form.Item>
        <Form.Item>
          <Button onClick={() => {
            console.log({
              name,
              mobile,
            });
          }}
          >
              Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default StationComponent;
