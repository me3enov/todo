import { useState, useEffect } from 'react';
import Main from './Main';
import PopupRemoveTask from './PopupRemoveTask';
import api from '../utils/api';

/**
 * 1)Нейминг хэндлеров начинается с handle. Примеры: handleOpenMenu, handleCollapseSidebar
 *   Нейминг пропсов в компонентах, которые принимают эти хэндлеры начинаются с on. Примеры, onOpenMenu, onCollapseSidebar
 * 2)Для className, если используются условия, лучше использовать библиотеки, типа, classnames, clsx
 * 3)Лучше использовать именованный экспорт, а не дефолтный. Есть риск, что компонент изначально назывался SubmitButton,
 *   после импорта в одном месте он будет называться ButtonSubmit, в другом просто Button.
 *   Именованные экспорты решают эту проблему и увеличивают скорость за счет автокомплита
 * 4)Совсем не используешь реакт хуки и HOC'и. Почитай про них и, пожалуйста, добавь их, где необходимо
 * 5)Если в инпуте при создании задачи ничего не ввести и нажать кнопку добавить задачу, появится задача с пустым текстом. Нужна валидация
 * 6)Если в инпуте при создании задачи ввести текст, затем нажать кнопку отменить, затем снова открыть инпут - в нем останется текст с прошлого ввода. Нужна очищать состояние
 * 7)Встречаются компоненты с лишним пробросом пропсов. Есть возможность создать хэндлерын на уровень или даже несколько уровней выше.
 *    Особенно много таких примеров с сабмитом. Пройдись по коду и подумай, есть ли надобность тащить какие - то данные и функцию вниз в компонент, чтобы в этом компоненте создать хэндлер, который будет использовать эту фукнцию и данные
 * 8)Намудрил со способом хранения данных отсюда усложнение логики пошло. Безусловно, разное может случиться в жизни.
 *   И бекенд может отправить данные в таком виде, как ты указал. Но как правило прилетает массив объектов.
 *   Т.е будет массив объектов рубрик, а в каждой рубрике будет массив тассок. К твоему виду бывает приводят(нормализуют данные) уже на клиенте, но для работы с ними есть удобные готовые инструменты. Давай пока без этого.
 * */

function App() {
  const [rubrics, setRubrics] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isRemoveTaskPopupOpen, setIsRemoveTaskPopupOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  //Зачем понадобился useEffect? Нельзя обойтись без него?
  function useUpdateTasks(items) {
    useEffect(() => {
      setTasks(items);
    }, [setTasks]);
    return tasks;
  }

  //Тут тебе нужен только id, а не весь task
  function handleRemoveTask(task) {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  function handleRemoveTaskClick(task) {
    setSelectedTask(task);
    setIsRemoveTaskPopupOpen(true);
  }

  function closeAllPopups() {
    setIsRemoveTaskPopupOpen(false);
    setSelectedTask(null);
  }

  function handleAddTask(task) {
    setTasks([task, ...tasks]);
    closeAllPopups();
  }

  useEffect(() => {
    api
      .getData()
      .then((res) => {
        const items = Object.values(res);
        // setRubrics(items);
        // For Frontend ONLY hardcode;
        const frontend = items.filter((item) => item.name === 'Frontend');
        setRubrics(frontend);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Main
        rubrics={rubrics}
        onRemoveTaskClick={handleRemoveTaskClick}
        useUpdateTasks={useUpdateTasks}
        handleAddTask={handleAddTask}
      />
      <PopupRemoveTask
        task={selectedTask}
        isOpen={isRemoveTaskPopupOpen}
        onClose={closeAllPopups}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default App;
