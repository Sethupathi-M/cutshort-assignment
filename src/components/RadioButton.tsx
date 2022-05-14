import React, { ChangeEvent } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import classNames from "classnames";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  currentValue: string;
  onRadioButtonChange: (event: ChangeEvent<HTMLInputElement>) => {};
  className: string;
  children?: React.ReactNode;
}
function RadioButton({
  value,
  currentValue,
  id,
  name,
  className,
  onRadioButtonChange,
  children,
}: RadioButtonProps) {
  return (
    <ButtonGroup className={classNames(`mb-2 col`, className)}>
      <ToggleButton
        id={id}
        className="text-start"
        type="radio"
        name={name}
        value={value}
        checked={currentValue === value}
        onChange={onRadioButtonChange}
      >
        {children}
      </ToggleButton>
    </ButtonGroup>
  );
}

export default RadioButton;
