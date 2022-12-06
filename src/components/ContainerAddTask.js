import { useState } from 'react';
import ButtonAddTask from './ButtonAddTask';
import PopupAddTask from './PopupAddTask';

function ContainerAddTask({ handleAddTask }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleTogglePopupOpen() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div className="rubric__button-container">
      <ButtonAddTask handlePopupOpen={handleTogglePopupOpen} isOpen={isPopupOpen} />
      <PopupAddTask
        handleAddTask={handleAddTask}
        handleTogglePopupOpen={handleTogglePopupOpen}
        isOpen={isPopupOpen}
      />
    </div>
  );
}

export default ContainerAddTask;
