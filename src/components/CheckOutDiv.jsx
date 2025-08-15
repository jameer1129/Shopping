import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const CheckOutDiv = forwardRef(function CheckOutDiv(_, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
    close: () => dialog.current.close(),
  }));

  return createPortal(
    <dialog ref={dialog} id="checkout">
      <h2>Order Placed Successfully</h2>
      <p>Thank you for shopping with us!</p>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CheckOutDiv;
