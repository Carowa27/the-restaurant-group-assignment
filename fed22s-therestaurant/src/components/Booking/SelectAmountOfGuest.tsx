import { useEffect, useState } from "react";
import { AmountGuestsNumberWrapper } from "../styled/Wrappers";

interface INumberOfGuest {
  numberOfGuests: number;
  isSelected: boolean;
}

interface ISelectGuestsAmountProps {
  handleGuestsNum(num: number): void;
  startNumber: number;
}

export const SelectGuestsAmount = (props: ISelectGuestsAmountProps) => {
  const [optionsList, setOptionsList] = useState<INumberOfGuest[]>([]);
  useEffect(() => {
    let temp: INumberOfGuest[] = [];
    for (let i = 0; i < 12; i++) {
      if (i === props.startNumber - 1) {
        temp.push({ numberOfGuests: i + 1, isSelected: true });
      } else {
        temp.push({ numberOfGuests: i + 1, isSelected: false });
      }
    }
    setOptionsList(temp);
  }, []);

  const handleClick = (item: INumberOfGuest) => {
    props.handleGuestsNum(item.numberOfGuests);
    let options = [...optionsList];
    options.map((item) => (item.isSelected = false));
    options[
      options.findIndex((o) => o.numberOfGuests === item.numberOfGuests)
    ].isSelected =
      !options[
        options.findIndex((o) => o.numberOfGuests === item.numberOfGuests)
      ].isSelected;
    setOptionsList(options);
  };

  let html = optionsList.map((item, i) => {
    return (
      <AmountGuestsNumberWrapper
        key={i}
        onClick={() => {
          handleClick(item);
        }}
        // selected={item.isSelected}
      >
        {item.numberOfGuests}
      </AmountGuestsNumberWrapper>
    );
  });
  return <>{html}</>;
};
