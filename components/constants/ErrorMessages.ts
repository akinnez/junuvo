export const ErrorMessages = {
  required: (value: string) => `${value} is required`,
  invalidEmail: `Invalid Email Address`,
  passwordMismatch: `Passwords do not match`,
  invalidType: (value: string) => `Please enter a valid ${value}`,minLength: (value: string, length: number) =>   `${value} must be at least ${length} characters`,
  maxLength: (value: string, length: number) =>   `${value} must be at most ${length} characters`,

};


