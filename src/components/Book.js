import { Link } from "react-router-dom"
export let Book=({item})=>{
  const bookStyleContainer={
    display: "flex",
    flexDirection: "column",
    width: "300px",
  }

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color:"white",
    
  };

    return(
        <div style={bookStyleContainer}>
          <Link to={`/view/${item.id}`} style={bookInfoStyle}>
          <img src={item.cover} width="200" alt={item.title}/>
          <div>{item.title}</div>
          </Link>

        </div>
    )
}