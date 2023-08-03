interface InputModel {
  label: string;
  properties: Properties;
}

interface Properties {
  id: string;
  type: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export default InputModel;
