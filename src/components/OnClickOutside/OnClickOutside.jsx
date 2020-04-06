import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

const OnClickOutside = ({ children, action, enabled }) => {
  const wrapperRef = useRef(null);

  const handleClickOuside = useCallback(
    (event) => {
      wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        action !== undefined &&
        action();
    },
    [action]
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener("mousedown", handleClickOuside);
      document.addEventListener("touchstart", handleClickOuside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOuside);
      document.removeEventListener("touchstart", handleClickOuside);
    };
  }, [enabled, handleClickOuside]);

  return <div ref={wrapperRef}>{children}</div>;
};

OnClickOutside.defaultProps = {
  enabled: true,
};

OnClickOutside.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
};

export default OnClickOutside;
