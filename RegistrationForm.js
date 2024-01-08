// src/RegistrationForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values) => {
    // Assuming a REST API endpoint for data submission
    // You can replace this with your actual API endpoint
    console.log('Submitting data:', values);
  };

  return (
    <div className={styles.registrationForm}>
      <h2>User Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${styles.inputField}`}
            />
            <ErrorMessage name="firstName" component="div" className={styles.error} />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className={`form-control ${styles.inputField}`}
            />
            <ErrorMessage name="lastName" component="div" className={styles.error} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={`form-control ${styles.inputField}`}
            />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`form-control ${styles.inputField}`}
            />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control ${styles.inputField}`}
            />
            <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
