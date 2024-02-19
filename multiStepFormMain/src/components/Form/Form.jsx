import InputWrapper from "../InputWrapper/InputWrapper";

/* eslint-disable react/prop-types */


export default function Form(props) {
  const {data} = props;
  return (
    <form>
      {data.map((inputData, i) => (
        <InputWrapper data={inputData} key={i}/>
      ))}
    </form>
  );
}
