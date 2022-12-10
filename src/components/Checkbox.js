import React, { useState } from 'react';

function Checkbox({ item }) {
    //Иметь два состояния не есть хорошо. Может привести к рассинхрону. Передавай сюда функцию для изменения состояния.
    //Навешивай checked и функцию ( в твоем случае получается две, если ты хочешь навесить хэндлер на доп события ) сразу на инпут без создания доп состояний
  const [checked, setChecked] = useState(item.checked);

  const handleChange = () => {
    setChecked(!checked);
    item.checked = !item.checked;
  };

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
      {/* почему оставил устаревшее событие? */}
      <span className="task__checkmark" onKeyPress={handleKeyToggle} tabIndex={0} />
    </label>
  );
}

export default Checkbox;
