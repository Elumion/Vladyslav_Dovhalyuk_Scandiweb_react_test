import React from "react";
import { ModalCartContainer } from "./ModalCart.styles";

type Props = {
  show: boolean;
  close: () => void;
  children?: JSX.Element | JSX.Element[] | string;
};

class ModalCart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return !this.props.show ? null : (
      <ModalCartContainer>
        <p>TEST MODAL CART</p>
      </ModalCartContainer>
    );
  }
}

export default ModalCart;
