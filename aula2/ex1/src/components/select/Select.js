import Option from '../option/Option';

const Select = ({name, id}) => {
  return (
    <select name={name} id={id}>
      <Option valueOption='q1' textOption="I forgot my password."/>
      <Option valueOption='q2' textOption="I can't connect to the server."/>
    </select>
  );
}

export default Select;