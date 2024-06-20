import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constans';
import { selectors } from '../../redux';
import { Item, List } from './TaskList.styled';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
export const TaskList = () => {
  const tasks = useSelector(selectors.getTasks);
  const filter = useSelector(selectors.getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, filter);
  console.log(tasks);
  console.log(filter);
  return (
    <>
      <List>
        {visibleTasks.map(task => (
          <Item key={task.id}>
            <Task task={task} />
          </Item>
        ))}
      </List>
    </>
  );
};
