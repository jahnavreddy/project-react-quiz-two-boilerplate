function Result(){
  return(
    <>
      <h1>Result</h1>
      <div className="finalScore">
        <h3>You need more practice!!</h3>
        <h1>Your score is 20%</h1>
        <p>Total number of questions  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</p>
        <p>Number of attempted questions  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   9</p>
        <p>Number of correct answers  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3</p>
        <p>Number of wrong answers  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  6</p>
      </div>

      <div className="result-options">
        <button className="play-again">Play Again</button>
        <button className="backtohome">Back to Home</button>
      </div>
    </>
  )

}

export default Result;