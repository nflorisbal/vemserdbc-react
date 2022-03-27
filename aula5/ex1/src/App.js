import './App.css';
import Form from './components/form/Form';
import List from './components/list/List';
import ValidateProvider from './contexts/Validate';
import WorkerProvider from './contexts/Worker';

function App() {
  return (
    <div className='App'>
      <ValidateProvider>
      <WorkerProvider>
        <Form />
        <List />
      </WorkerProvider>
      </ValidateProvider>
    </div>
  );
}

export default App;