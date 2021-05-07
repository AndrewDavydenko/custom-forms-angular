export interface FieldValidation {
  name: string;
  message: string;
  value: string | number;
}

export interface RegistrationField {
  type: 'text' | 'email' | 'phone' | 'password';
  name: string;
  label: string;
  required: boolean;
  validations?: FieldValidation[];
}

export interface RegistrationRequest {
  [fieldName: string]: string;
}
