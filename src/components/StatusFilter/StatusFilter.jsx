import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters, selectors, setStatusFilter } from '../../redux';

export const StatusFilter = () => {
  const filter = useSelector(selectors.getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
