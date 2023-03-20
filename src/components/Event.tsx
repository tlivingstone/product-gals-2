import React from "react";

export default function Event(props: {
    name: string;
    description: string;
    date: string;
}) {
    return (
        <>
        <div className = "">
            <div className = "">
                    <p className ="font-light text-md pb-2 text-gray-500 tracking-widest font-mono">{props.date}</p>
                    <p className= "text-3xl font-mono pb-8">{props.name}</p>
                    <p className = "tracking-widest font-light text-xl md:w-3/4 lg:w-2/3 xl:w-1/2 leading-8">{props.description}</p>
                    <p className = "pt-3 font-light tracking-widest text-lg md:w-3/4 lg:w-2/3 xl:w-1/2 leading-8">Thank you <a className = "underline decoration-pink-500 font-normal" href="https://www.firstrepublic.com/">First Republic&#8599;</a> and <a  className = "underline decoration-sky-500 font-normal" href="https://www.thisisartium.com/">Artium&#8599;</a> for sponsoring!</p>

            </div>
            
        </div>
      </>
    )
}