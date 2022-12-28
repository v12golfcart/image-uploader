import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App h-screen">
      <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <svg
              class="h-64 w-full rounded border-2 border-dashed border-gray-300 bg-white text-gray-200"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                vector-effect="non-scaling-stroke"
                stroke-width="2"
                d="M0 0l200 200M0 200L200 0"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
