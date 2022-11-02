import { Container } from "./styles";
import { useState } from "react";
import { SelectedFilterProps } from "../../types/global";

interface Props {
  setSelectedFilter(objFilter: SelectedFilterProps): void;
  name: string;
  value: string | boolean | null;
  selectedFilter: SelectedFilterProps;
}
export default function CheckBox(props: Props) {
  const { setSelectedFilter, name, value, selectedFilter } = props;
  const [isCheckd, setIsCheckd] = useState(false);

  function handleCheck() {
    if (isCheckd) {
      const newFilter = { ...selectedFilter };
      delete newFilter[name];

      setSelectedFilter(newFilter);
      setIsCheckd(!isCheckd);

      return;
    }

    setSelectedFilter({ ...selectedFilter, [name]: value });
    setIsCheckd(!isCheckd);
  }

  const normalizedName = typeof value !== "boolean" ? value : name;
  return (
    <Container>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isCheckd}
        onClick={handleCheck}
      />
      <label className="label">{normalizedName}</label>
    </Container>
  );
}
