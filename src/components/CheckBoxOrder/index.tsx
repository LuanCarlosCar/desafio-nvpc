import { Container } from "./styles";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  setSelectedOrder(objOrder: string[]): void;
  name: string;
  value: string;
  selectedOrder: string[];
}
export default function CheckBoxOrder(props: Props) {
  const { setSelectedOrder, name, value, selectedOrder } = props;
  const [isCheckd, setIsCheckd] = useState(false);

  useEffect(() => {
    const init = value === selectedOrder[0];
    setIsCheckd(() => init);
  }, [selectedOrder]);

  function handleCheck() {
    if (isCheckd) {
      setSelectedOrder([]);
      setIsCheckd(!isCheckd);
      return;
    }
    setSelectedOrder([value]);
    setIsCheckd(!isCheckd);
  }

  return (
    <Container>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isCheckd}
        onClick={handleCheck}
      />
      <label className="label">{name}</label>
    </Container>
  );
}
