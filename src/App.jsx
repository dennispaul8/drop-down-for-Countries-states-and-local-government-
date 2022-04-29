import { useState, useEffect } from 'react';
import './App.css';
import Records from './records.json'
import countries from './countries.json'
import lga from './ngla.json'

const App =()=>{

    const [country , setCountry] = useState([])
    const [states , setStates] = useState([])
    const [local , setLocals] = useState([])
    const [store, setStore]=useState([])

    useEffect(() =>{
        setCountry(countries)
        setStore(lga)
    })

    const showStates =(e)=>{
        let [sel_states] = country.filter(f => f.name == e.currentTarget.value)
        setStates(sel_states.states)
        console.log(sel_states.states)
    }

    const showCapital =(ev)=>{
      let sel= store.find(g => g.name == ev.currentTarget.value)
         setLocals(sel.locals)
        console.log(sel.locals)
  }

  

        return(
          <div>
            <label htmlFor="">Countries</label>
              <select onChange={(e)=>showStates(e)}>
                      {countries.map((item, index) => (
                          <option key={index} value={item.name}>{item.name}</option>
                      )
                      )}
              </select>
                <br /> <br />

                <label htmlFor="">States</label>
              <select onChange={(ev)=>showCapital(ev)}>
                      {states.map((item, index) => (
                          <option key={index} value={item.name}>{item.name}</option>
                          )
                      )}
              </select>
                    <br /> <br />

                    <label htmlFor="">LGA</label>
                         <select>
                             {local.map((valuee, index2) => (
                                             <option key={index2} value={valuee.locals}>{valuee.name}</option>
                                    )
                              ) }
              </select>
            </div>

            
        )

  //         const [showPassword, setShowPassword] = useState(false);

  //         const toggle = () => {
  //           setShowPassword(!showPassword);
  //         };


  // return (
  //   <div>
  //     <input type= {showPassword ? "text" : "password"} />
  //     <button onClick={toggle}>Show Password</button>
  //   </div>
  // );

  }


export default App;
