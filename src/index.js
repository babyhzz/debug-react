import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <h1>Hello, world!</h1>
  </div>
);

createRoot(document.getElementById("root")).render(<App />);
