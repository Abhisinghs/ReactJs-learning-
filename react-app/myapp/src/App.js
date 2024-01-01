import './App.css';

function MyComponent({name}){
  return (
    <>
      <div className={name}>{name}</div>
    <hr/>
    </>
  )
}
function App() {
  return (
  <div id="hello"> Hello World! <MyComponent name={1} /> <MyComponent name={"abhi1"}/> <MyComponent name={"abhi2"}/> </div>
  )
}
export default App;
