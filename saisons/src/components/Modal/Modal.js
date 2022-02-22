import React from "react";
import { useState } from "react";

import useStyles from "./Modal.style";

function Modal({ label, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  if (!open)
    return (
      <button onClick={toggle}>
        {label}
      </button>
    );
  return (
    <div>
      <div >{children}</div>
      <div >
        <button  onClick={toggle}>
          Retour
        </button>
      </div>
    </div>
  );
}

export default Modal;