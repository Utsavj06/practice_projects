import React, { useEffect, useState } from 'react'
import { data } from '../data'

const Box = ({head, selector, Item}) => {
    const [total, setTotal] = useState([])
    const [percentage, setPercentage] = useState({Food:0 , Shopping:0, Movie:0})
    const [itemPrices , setItemPrices] = useState({Food:0, Shopping:0, Movie:0} )

    const styleColor = {
      Food : 'Yellow',
      Shopping : 'Red',
      Movie : 'black'
    }

    const handleData = () =>{
      let sum = 0
      const temp = {...itemPrices}
      data.map((item)=>{
        sum += item.price
        temp[item.name] = item.price
      })
      setTotal(sum)
      setItemPrices({...temp})
    }

    useEffect(()=>{
      console.log(total,itemPrices)
      const temp = {...percentage}
      if(total>0){
        temp.Food=itemPrices.Food/total*100
        temp.Shopping=itemPrices.Shopping/total*100
        temp.Movie = itemPrices.Movie/total*100
      }
      setPercentage({...temp})
    },[total, itemPrices])

    const bcolor = (item) => {
      if(item=='Food'){
        return 'yellow'
      } else if(item == "Shopping"){
        return 'red'
      } else {
        return 'blue'
      }
    }

    useEffect(()=>{
      console.log(percentage , 'hi')
    },[percentage])

    useEffect(()=>{     
        handleData()
    },[])

  return (
    <div style={{width:'350px', height:'200px', backgroundColor:'#66645f', borderRadius:'7%', color:'white'}}>
        <div style={{display:'flex', color:'white', justifyContent:'space-between'}}>
          <h4 style={{marginLeft:'20px'}}>{head}</h4>
          <p style={{marginRight:'20px', marginTop:'22.5px', cursor:'pointer'}}><u>{selector}</u></p>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{width:'80%' , display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
            <h5 style={{width:'20%'}}>{Item}</h5>
            <h1>{total}</h1>
          </div>
        </div>
          <div style={{marginLeft:'26px', width:'300px', backgroundColor:'white', height:'7px', borderRadius:'20px'}}>
            {Object.keys(percentage).map((item)=>{
              return <span style={{marginBottom:'8px',display:'flex', justifyContent:'flex-start',display:'inline-block', width:3*percentage[item], backgroundColor:styleColor[item], height:'7px'}}></span>
            })}
          </div>
    </div>
  )
}

export default Box