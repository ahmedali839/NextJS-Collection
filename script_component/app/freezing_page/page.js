"use client";

import { useState } from "react";

export default function Home() {

  const [result,setResult] = useState("");
  const [freezeResult,setFreezeResult] = useState("");

  function freezeBrowser(){

    let sum = 0;

    for(let i = 0; i < 1000000000; i++){
      sum += i;
    }

    setFreezeResult("Finished heavy calculation on MAIN THREAD");
  }

  function runWorker(){

    const worker = new Worker("/scripts/heavyWorker.js");

    worker.postMessage("start");

    worker.onmessage = function(event){
      setResult("Worker finished calculation");
    }

  }

  return (
    <div style={{padding:"40px",fontSize:"20px"}}>

      <h1>Next.js Performance Demo</h1>

      <p>Click buttons and watch browser behavior</p>

      <button
        onClick={freezeBrowser}
        style={{padding:"15px",marginRight:"20px",fontSize:"18px"}}
      >
        Freeze Browser (Main Thread)
      </button>

      <button
        onClick={runWorker}
        style={{padding:"15px",fontSize:"18px"}}
      >
        Run Worker (Background Thread)
      </button>

      <div style={{marginTop:"40px",fontSize:"28px",color:"red"}}>
        {freezeResult}
      </div>

      <div style={{marginTop:"20px",fontSize:"28px",color:"green"}}>
        {result}
      </div>

    </div>
  );
}