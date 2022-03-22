import ToDo from "./Components/ToDo";

export default function App() {
  return (
      <>
          <div className="App prose lg:prose-lg dark:prose-invert">
              <h1>Hi!</h1>
              <ToDo />
          </div>
      </>
  );
}