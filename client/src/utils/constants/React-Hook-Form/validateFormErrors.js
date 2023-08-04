export default {
  required: 'The field is required',
  minLength: (val) => `Minimum number of characters ${val}`,
  maxLength: (val) => `Maximum number of characters ${val}`,
  email: 'Please enter a valid email',
  confirmPassword: 'Password mismatch',
}