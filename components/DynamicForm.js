import React, { useState } from 'react';

const formConfig = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'age', label: 'Age', type: 'number', required: false },
];

export default function DynamicForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value, type, required) => {
    if (required && !value) {
      return 'This field is required.';
    }

    if (type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
      return 'Invalid email address.';
    }

    return '';
  };

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value, field.type, field.required);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    formConfig.forEach((field) => {
      const value = formData[field.name] || '';
      const error = validateField(field.name, value, field.type, field.required);
      if (error) newErrors[field.name] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.name} style={{ marginBottom: '1rem' }}>
          <label>
            {field.label} {field.required && '*'}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(e, field)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          {errors[field.name] && (
            <div style={{ color: 'red' }}>{errors[field.name]}</div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
