import React from "react"
import { UploadFile } from "./modules/upload-file"
import { Canvas } from "./modules/canvas"

const App = () => {
  return (
    <div>
      <div
        style={{
          height: "50px",
          marginBottom: "10px",
          backgroundColor: "white",
          fontSize: "20px",
          padding: "0px 50px",
        }}>
        ML management
      </div>

      <div style={{ padding: "0px 50px" }}>
        <UploadFile />
        <Canvas />
      </div>
    </div>
  )
}

export default App
