import './App.css';
import Form from './components/form/Form';
import List from './components/list/List';
import WorkerProvider from './context/Worker';

function App() {
  return (
    <div className='App'>
      <WorkerProvider>
        <Form />
        <List />
      </WorkerProvider>
    </div>
  );
}

export default App;
