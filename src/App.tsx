import React from "react"
import {MarqueeDemo} from "./components/MovingCards"
import Globe from "./components/magicui/globe"
import {DockDemo} from "./components/Dock"
import { IconCloudDemo } from "./components/Cloud"
import FlipTextDemo from "./components/Text"
import {GridPatternDemo} from "./components/Grid"


function App() {

  return (
    <div >
      {/* <div className="">
        <Globe />
      </div>
      <div className=" fixed">
        <MarqueeDemo />
      </div> */}
      <div className="flex justify-center">
        <GridPatternDemo />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className=" col-span-2">
          <h1 className="text-6xl font-bold mt-60 text-center"><FlipTextDemo /></h1>
        </div>
        <div className="row-span-2">
          <IconCloudDemo />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="fixed bottom-5 ">
            <DockDemo />
        </div>
      </div>
    </div>
  )
}

export default App
