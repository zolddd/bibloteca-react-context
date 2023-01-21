import { useAppContext } from "../store/Store";
import { Layout } from "../components/Layout";
import { Book } from "../components/Book";

export let Index = () => {
  const store = useAppContext();
  const bookStyle={
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  }

  return (
   <Layout>
    <div style={bookStyle}>
    {store.items.map((item)=>(<Book key={item.id} item={item}/>))}
    </div>
  
   </Layout>
    
  );
}
