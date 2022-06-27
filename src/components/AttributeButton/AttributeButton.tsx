import React from "react";
import { AttributeButtonContainer } from "./AttributeButton.styles";

interface Props {
  isSwatch: boolean;
  displayValue: string;
  value: string;
  id: string;
}

class AttributeButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <AttributeButtonContainer
        className={this.props.isSwatch ? "swatch" : "text"}
        itemProp={this.props.value}
      >
        {!this.props.isSwatch && this.props.value}
      </AttributeButtonContainer>
    );
  }
}

export default AttributeButton;
