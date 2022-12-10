import Checkbox from './Checkbox';
import ButtonRemoveTask from './ButtonRemoveTask';
//Незачем передавать весь объект таски. Тебе здесь нужен только флаг checked
function ItemOfTask({ item, onRemoveTaskClick }) {
  return (
    <li className="task">
      <Checkbox item={item} />
      <p className="task__text">{item.name}</p>
      {!item.disabled ? <ButtonRemoveTask task={item} onButtonClick={onRemoveTaskClick} /> : ''}
    </li>
  );
}

export default ItemOfTask;
