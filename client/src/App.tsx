import NavBar from './components/UI/NavBar';
import PeopleList from './components/page/PeopleList';
import './index.css';

function App(): JSX.Element {
  return (
    <>
      <NavBar />;
      <PeopleList />
    </>
  );
}

export default App;
