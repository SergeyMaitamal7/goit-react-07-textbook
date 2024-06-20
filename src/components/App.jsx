import { AppBar } from './AppBar/AppBar';
import FormFormik from './FormFormik/FormFormik';
import { Layout } from './Layout/Layout';
// import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <FormFormik/>
      <TaskList />
    </Layout>
  );
};
