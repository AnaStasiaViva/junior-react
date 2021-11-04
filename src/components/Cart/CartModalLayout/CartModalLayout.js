import React from "react";
import CartModalCard from "./CartModalCard/CartModalCard";
import { ModalLayout } from "./CartModalLayout.styles";
import PropTypes from "prop-types";

class CartModalLayout extends React.PureComponent {
  render() {
    const { closeModal } = this.props;

    return (
      <ModalLayout>
        <div>
          <CartModalCard closeModal={closeModal} />
        </div>
      </ModalLayout>
    );
  }
}
export default CartModalLayout;

CartModalLayout.propTypes = {
  closeModal: PropTypes.func,
};
