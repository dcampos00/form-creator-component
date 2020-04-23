export type CareYouFormFieldType =
  | 'text'
  | 'integer'
  | 'double'
  | 'yes-no'
  | 'checkbox'
  | 'choice';

export interface FormFieldType {
  name: CareYouFormFieldType;
  label: string;
}
export interface CareYouFormFieldOptions {
  id?: string;
  text: string;
  value: string | number | boolean;
}
export interface CareYouFormField {
  id: string;
  position?: number;
  help: string;
  type: FormFieldType;
  question: string;
  showIf?: number; // Debe referenciar a un field yes-no
  options: CareYouFormFieldOptions[];
}
