import { useRef } from "react"

 export const RevealOnScroll =({children})=>{


    const ref = useRef(null)

    return <div ref={ref}>{children}</div>

 }