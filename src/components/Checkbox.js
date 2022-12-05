import React, { useState } from 'react';

function Checkbox({ item }) {
  const [checked, setChecked] = useState(item.checked);

  const handleChange = () => {
    setChecked(!checked);
    item.checked = !item.checked;
  }

  function handleKeyToggle(evt) {
    if (evt.code === 'Space' || evt.code === 'Enter') {
      setChecked(!checked);
    }
  }

  return (
    <label className="task__checkbox-container">
      <input
        className="task__input"
        type="checkbox"
        checked={checked}
        disabled={item.disabled}
        onChange={handleChange}
        tabIndex={-1}
      />
      <span
        className="task__checkmark"
        onKeyPress={handleKeyToggle}
        tabIndex={0}>
      </span>
    </label>
  );
}

export default Checkbox;
