// @ts-ignore
import LocalButton from './Button';
import './fonts.css';
import './style.css';

const App = () => (
  <div>
    <span
      className="translate-x-0 inline-block size-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    ></span>
    <h1 className="text-color-red">Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
  </div>
);

export default App;
