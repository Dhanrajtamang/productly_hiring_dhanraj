import {useEffect, useState} from "react"
import Products from "./Products"
import "normalize.css"        // to persist and make style consistent across devices

function App() {
  const [data, seData] = useState([]);
  // when the fetch function is triggered
  // it is put into hold as it is an asynchronous function until the main thread finish the execution.
  // after the main thread executes the function execution begins
  // the whole component re-renders because of setData()
  // and because of the empty dependency in use Effect the data persist in the component
  // now the page is rendered with data.
  useEffect(()=>{
    async function fetchDataSynchoronously(){
      try{
        const initialRes = await fetch('https://fakestoreapi.com/products')
        const finalRes = await initialRes.json()
        seData(finalRes)
        console.log("inside try", data.length)
      }catch(error){
        console.log("error is ",error)
      }
    }
  fetchDataSynchoronously()
  },[])
  console.log(data)
  return (
        <div className="container">
        {
          data.map(product=>{
            return <Products key={product.id} products={product}/>
          })
        }
        </div>
  )
}
export default App
