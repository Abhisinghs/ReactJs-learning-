import React,{useState} from "react";

function Home() {
    const [inputValue,setInputValue]=useState(0);
    console.log(inputValue);
  return (
    <div>
      <input
        style={{ padding: 20, border: "0.5px solid rgba(0,0,0,0.4)" }}
        type="number"
        placeholder="Enter your name "
        value={inputValue}
        onChange={(e)=>{
            setInputValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Home;
