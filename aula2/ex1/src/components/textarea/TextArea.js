const TextArea = ({action}) => {
  return (
    <textarea name="msg" cols="30" rows="10" placeholder="Type your message." onChange={(e) => action(e.target.value)}/>
  );
}

export default TextArea;