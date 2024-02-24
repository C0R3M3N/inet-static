
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
  <div className='cyber-container' >
    <h2>Good {timeOfDay}! </h2>
    <b>{colors + ' '}</b>
    <p>This is static web for test purpose only</p>
    <p>Lần đầu tiên chúng tôi gặp nhau là khi tôi vừa bước chân vào con đường đại học. Khi đó, một ngày đầu xuân, không lời chào hỏi, không cầu kì, nhanh thoanh thoắt, thoáng chốc ngồi vào đối diện tôi. Bốn mắt nhìn nhau, vẫn không một lời nhưng có lẽ như cả hai đã thấu hiểu nhau từ rất lâu, tôi chia sẻ chiếc xúc xích đang ăn dở của mình. Cả hai cùng ngồi xuống hoàn thành nốt phần ăn của mình. Cứ như thế, nhẹ nhàng, êm dịu, chúng tôi đã gặp nhau như thế.</p>
  </div>
  );
}

export default App;
