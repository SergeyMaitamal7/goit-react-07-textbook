import { MdClose } from 'react-icons/md';
import { InputCheckbox, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';
import { tasksSlice} from '../../redux';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(tasksSlice.deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(tasksSlice.toggleCompleted(task.id));
  };

  return (
    <Wrapper>
      <InputCheckbox
        type="checkbox"
        checked={task.completed}
        onClick={handleToggle}
      />
      <Text>{task.text}</Text>
      <button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </Wrapper>
  );
};
