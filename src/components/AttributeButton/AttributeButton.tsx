import React from "react";
import { AttributeType } from "../../@types/ProductTypes";
import { AttributeButtonContainer } from "./AttributeButton.styles";

interface Props {
  isSwatch: boolean;
  displayValue: string;
  value: string;
  id: string;
  isChecked: boolean;
  parentId: string;
  parentName: string;
  parentType: string;
  setAttribute: (attribute: AttributeType) => void;
}

class AttributeButton extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  defineClassName() {
    const typeAttribute = this.props.isSwatch ? "swatch" : "text";
    const checkedAttribute = this.props.isChecked ? "checked" : "";
    return `${typeAttribute} ${checkedAttribute}`;
  }

  checkAttribute(attribute: Props) {
    const newAttribute = {
      id: attribute.parentId,
      name: attribute.parentName,
      type: attribute.parentType,
      items: [
        {
          id: attribute.id,
          value: attribute.value,
          displayValue: attribute.displayValue,
        },
      ],
    };
    this.props.setAttribute(newAttribute);
  }

  render() {
    return (
      <AttributeButtonContainer
        onClick={this.checkAttribute.bind(this, this.props)}
        className={this.defineClassName()}
        itemProp={this.props.value}
      >
        {!this.props.isSwatch && this.props.value}
      </AttributeButtonContainer>
    );
  }
}

export default AttributeButton;
