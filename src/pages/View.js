import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAppContext } from "../store/Store";
export let View = () => {
  const params = useParams();
  const store = useAppContext();
  const [item, setitem] = useState(null);

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setitem(book);
  }, []);
  if (!item) {
    return <div>book no encontrado</div>;
  }
  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Completado" : "No terminado"}</div>
      <div>{item?.review}</div>
    </Layout>
  );
};
