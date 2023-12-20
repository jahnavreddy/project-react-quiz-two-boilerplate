// import "./App.css"

function Home(){
  return(
    <div>
      <h1>Quiz App</h1>
      <button className="play" onClick={()=>{
        window.location.href = "./Quiz.jsx"
      }}>Play</button>


    </div>
  )
}

export default Home;