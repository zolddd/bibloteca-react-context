/*import { Link } from "react-router-dom";
export let Navbar=()=>{
    return(
        <div>
         <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    )
  
    
}*/
import { Link } from "react-router-dom";

export function Navbar() {
  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
    color:"white",
    TextDecoration:"none"
  };

  const navContainerStyle = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/create" style={linkStyle}>
        Create
      </Link>
    </div>
  );
}