// src/components/ContextMenu.js
import React, { useState, useRef } from "react";
import "./ContextMenu.css";

const ContextMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    const { clientX: left, clientY: top } = event;
    setPosition({ top, left });
    setIsOpen(!isOpen);
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    const { clientX: left, clientY: top } = event;
    setPosition({ top, left });
    setIsOpen(true);
  };

  const handleMenuItemClick = (action) => {
    action();
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="context-menu-container">
      <button
        onClick={handleButtonClick}
        onContextMenu={handleRightClick}
        className="context-menu-button"
      >
        Open Context Menu
      </button>
      {isOpen && (
        <div
          className="context-menu"
          style={{ top: position.top, left: position.left }}
          ref={menuRef}
        >
          <ul className="context-menu-list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMenuItemClick(item.action)}
                className="context-menu-item"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
