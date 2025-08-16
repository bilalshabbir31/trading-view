import "./App.css";
import TradingViewWidget from './components/tradingView'

function App() {

  return (
    <>
      <div style={{ height: "100vh", 
      width: "100%",
      margin: 0,
      padding: 0,
      border: "none",
      backgroundColor: "#0F0F0F" }}>
        <TradingViewWidget />
      </div>
    </>
  )
}

export default App
