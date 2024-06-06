import React, { useState } from 'react';
import { Button, Typography, Input, InputLabel, FormControl, FormHelperText } from '@mui/material';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = form.name.length >= 3 ? "" : "Name should be at least 3 characters long";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) ? "" : "Email must be a valid email address";
    tempErrors.message = form.message.length >= 10 ? "" : "Message should be at least 10 characters long";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <Typography variant="h2" className="text-2xl font-bold mb-6 text-center">Contact Us</Typography>

        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            <FormHelperText error>{errors.name}</FormHelperText>
          </FormControl>
        </div>

        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Email</InputLabel>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
            />
            <FormHelperText error>{errors.email}</FormHelperText>
          </FormControl>
        </div>

        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Message</InputLabel>
            <Input
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              multiline
              rows={4}
            />
            <FormHelperText error>{errors.message}</FormHelperText>
          </FormControl>
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;