import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
//import axios from 'axios';

const FormItem = Form.Item;

const AdminLoginForm = () => {
  //use 'useState' to track the input value
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');

  //receive the admin changes 
  const handleAdminChange = e => {
    setAdmin(e.target.value);
  };
  //receive the password changes
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  //receive the submit changes
  const handleSubmit = e => {
    e.preventDefault();
    // use axios send the post to backend api
    // axios
    //   .post('/api/login', { username, password })
    //   .then(response => {
    //     // respond success
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // respond failed
    //     console.error(error);
    //   });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>Admin Login</div>
      <FormItem>
        <Input value={admin} onChange={handleAdminChange} placeholder="Admin" />
      </FormItem>
      <FormItem>
        <Input value={password} onChange={handlePasswordChange} placeholder="Password" />
      </FormItem>
      <FormItem>
        <Button type="primary">Login</Button>
        <Button>Home</Button>
      </FormItem>
    </Form>
  );
};

export default AdminLoginForm;