import './App.css';

function App() {
  let post ='맞깁';
  return (
    <div className="App">
      <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">
        Click me
      </button>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
