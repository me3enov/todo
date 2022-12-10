import { useState } from 'react';
import ButtonAddTask from './ButtonAddTask';
import PopupAddTask from './PopupAddTask';

function ContainerAddTask({ handleAddTask }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  //Не совсем подходит именно тоггл, потому что логики тогглинга нет. Есть требование явно открыть и закрыть. Я бы разделил на два хэнддлера.
    // Даже просто название handleTogglePopupOpen путает. Не понятно, что делает хэндлер - тогглит или открывает.
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
