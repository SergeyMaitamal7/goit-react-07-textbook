import { useSelector } from 'react-redux';
import { selectors } from '../../redux';

export const TaskCounter = () => {
  const tasks = useSelector(selectors.getTasks);
  //   const count = tasks.reduce(
  //     (acc, task) => {
  //       if (task.completed) {
  //         acc.completed += 1;
  //       } else {
  //         acc.active += 1;
  //       }
  //       return acc;
  //     },
  //     { active: 0, completed: 0 }
  //   );

  const activeTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      {/* <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p> */}
      <p>Active: {activeTasks ?? 0}</p>
      <p>Completed: {completedTasks ?? 0}</p>
    </div>
  );
};
