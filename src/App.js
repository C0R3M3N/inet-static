
import './App.css';

function App() {
  const date = new Date();
  const hour = date.getHours() % 24;
  let timeOfDay

  if(hour < 12) {
    timeOfDay = "morning"
  } else if (hour >= 12 && hour < 17){
    timeOfDay = 'afternoon'
  } else timeOfDay = 'night'

  const colors = ['red', 'green', 'yellow', 'blue', 'white', 'black', 'pink', 'purple', 'orange']

  return (
  <div className='App' >
    <h2>Good {timeOfDay}! </h2>
    <b>{colors}</b>
  </div>
  );
}

export default App;
