import React, {useState} from 'react'
import { Button, Div, MainComponent } from '../styled';


function Main() {
  const [advice, setAdvice]= useState(null);
  const [loading, setLoading]= useState(false);

  const generateAdvice=()=> {
      setLoading(true)

      console.log("Hello")
      fetch('https://api.adviceslip.com/advice')
      .then(res=> res.json())
      .then(res=> {
        console.log({res})
        setAdvice(res)
        setLoading(false);
      })
      .catch(err=> console.log(err))
  }


  return (
    <MainComponent>
        <h2>Random Advice Generator App!</h2>
        <div>
            <p>Click the button below to get a random advice</p>
            <p>
                <Button onClick={generateAdvice}>Get New Advice</Button>
            </p>
            {loading ? <p>Loading...</p> : advice !== null ?
            (<Div className="advice-container">
                  <p>{advice?.slip?.advice}</p>
            </Div>) : ""
            }
        </div>
    </MainComponent>
  )

}

export default Main;