import { CareYouFormField } from './field';

export interface CareYouForm {
  name: string;
  label: string;
  title: string;
  help: string;
  fields: CareYouFormField[];
}
