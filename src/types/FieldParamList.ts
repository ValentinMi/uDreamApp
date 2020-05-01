export type FieldParamList = {
  label: string;
  type:
    | "select"
    | "input"
    | "password"
    | "email"
    | "textarea"
    | "keywords"
    | "date";
  name: string;
  selectValues?: Array<string>;
  customStyle?: any;
};
