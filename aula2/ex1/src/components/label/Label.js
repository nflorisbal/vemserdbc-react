const Label = ({forInput, textLabel}) => {  
  return (
    <label htmlFor={forInput}>{textLabel}</label>
  );
}

export default Label;