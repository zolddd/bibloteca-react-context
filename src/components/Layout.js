import { Navbar } from "./Navbar"
export let Layout=({children})=>{
   const containerStyle = {
      width: "90%",
      margin: "100px auto",
    };
 return(
    <div>
   <Navbar/>
   <div style={containerStyle}>{children}</div>
    </div>
 )
}