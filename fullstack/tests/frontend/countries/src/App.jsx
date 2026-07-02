import { useState, useEffect, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Country from './Country'
import './App.css'

function App() {
 const [countries, setCountries] = useState([])
useEffect(() => {
  if(countries.length === 0) {
     fetch('https://api.restcountries.com/countries/v5?q=canada', {
        headers: {
          'Authorization': 'Bearer rc_live_c67b42dd06e04e4289fafbf9090113e6'
  }})
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
  }
  

}, [])


  return (
    <>
      <div>
        {countries&&countries.length>0 && countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
        </div>
    </>
  )
}

export default App
