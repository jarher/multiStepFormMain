/* eslint-disable react/prop-types */

import { Button } from "./Button";

export default function ButtonsContainer({ data }) {
  return <div className="buttonsContainer">
    {data.map((element, i) => <Button data={element} key={i}/>)}
  </div>;
}
