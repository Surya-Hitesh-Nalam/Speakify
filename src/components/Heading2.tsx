import React from "react"
import HeadingTable from "./HeadingTable"

export const Heading2 = ({
  mainTitle,
  title,
  desc
}:{
  mainTitle:string;
  title:string;
  desc:string;
})=>{
  return(
    <>
    <div className="flex flex-col justify-center w-full text-center items-center">
      {mainTitle && <HeadingTable lableText={mainTitle}/>}
    <div>
    <h1 className="mt-3 mb-4 block !leading-tight text-3xl text-[#f4fffa00] bg-clip-text bg-gradient-to-b from-white to-[#a0a0a0]">
      <span dangerouslySetInnerHTML={{__html:title}}/>
    </h1>
    <p>{desc}</p>
    </div>
    </div>
    </>
  )
}