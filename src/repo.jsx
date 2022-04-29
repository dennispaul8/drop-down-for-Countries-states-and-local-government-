  // const [state, setState] = useState([
  //         {name: "Juwon" , state: "Kwara"}
  // ])

  // const addName =()=>{
  //       let newName =  prompt("Enter a name")
  //       let newState =  prompt("Enter a state")
  //       let newData = {name: newName , state: newState}
  //       setState([...state, newData])
  // }




// const [json, setJ] = useState([]);

// const displayJ = () =>{
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response=>response.json())
//         .then(json=> {
//           console.log(json)
//               setJ(json)
//         })
// }

//       useEffect (() =>{
//               displayJ();
//       }, [])


//   return (
        
// //     <>
// //     <div className="p-4 d-flex justify-content-between">
// //           <h1>List of Names</h1>
// //           <div><button className='btn btn-primary' onClick={addName}>Add to List</button></div>
// //     </div>
// //     <main>
// //           {state.map((value, index) =>
// //                 <div key={index} className="card shadow-sm p-4 m-3">
// //                       <h1>{value.name}</h1>
// //                       <p>{value.state}</p>
// //                 </div>
// //           )}
// //     </main>
// // </>

//         <>
        
//                           <div className="p-4 d-flex justify-content-between">
//                                 <h1>JSON Placeholder</h1>
//                                 <div><button className='btn btn-primary' onClick={()=>displayJ}>Display JSON</button></div>

                               
//                           </div>
                        
//                                             {Records.map((value, index)  => {
//                                                           if (value.completed == true){
//                                                               return (
//                                                                    <div key={index}  className="card shadow-sm p-4 m-3 bg-success">
//                                                                            { value.title }
//                                                                     </div>
//                                                               )
//                                                           }

//                                                           else{
//                                                             return (
//                                                               <div key={index}  className="card shadow-sm p-4 m-3 bg-danger">
//                                                                       {value.title }
//                                                                </div>
//                                                                )
//                                                           }
//                                                    })}
                          
//           </>
//   );
// }
