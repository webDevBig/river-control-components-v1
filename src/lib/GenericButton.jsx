import React from "react";


const GenericButton = ({ classes, isVisible = true, isActive = false, isDisabled = false, handlePress, handleRelease, children }) => (
  isVisible && (
    <button
      className={`btn ${classes}`}
      active={isActive}
      disabled={isDisabled}
      onPointerDown={() => typeof handlePress === "function" && handlePress()}
      onPointerUp={() => typeof handleRelease === "function" && handleRelease()}
    >
      {children}
    </button>
  )
);

export default GenericButton;
