import { useState } from "react"

const convertData = (data , type)=>{
 const convertedData = data[type].map(item=>{
        return{
            date: item[0],
            [type] : item[1]
        }
    })
    return convertedData
    // console.log(data[type])
}

export default convertData