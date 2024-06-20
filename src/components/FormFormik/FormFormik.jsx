import { Formik, Field, Form } from 'formik';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import {tasksSlice} from '../../redux';

const FormFormik = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div> TaskForm</div>
      <Formik
        initialValues={{
          task: '',
        }}
        onSubmit={({ task }) => {
          dispatch(tasksSlice.addTask(task));
        }}
      >
        <Form>
          <Field type="text" name="task"></Field>
          <Button type="submit">AddTask</Button>
        </Form>
      </Formik>
    </>
  );
};

export default FormFormik;
