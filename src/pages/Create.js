import { useState } from "react";
import { useAppContext } from "../store/Store";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";

export let Create = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [cover, setcover] = useState("");
  const [intro, setintro] = useState("");
  const [completed, setcompleted] = useState(false);
  const [review, setreview] = useState("");
  const store = useAppContext();
  const navigater=useNavigate();

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "title":
        settitle(value);
        break;
      case "author":
        setauthor(value);
        break;
      case "intro":
        setintro(value);
        break;
      case "completed":
        setcompleted(e.target.checked);
        break;
      case "review":
        setreview(value);
        break;
    }
  };
  let handleChangeonFile = (e) => {
    const element = e.target; //input
    const file = element.files[0];
    const reader = new FileReader(); //api para anejar img en el navegador
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setcover(reader.result.toString());
    };
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    
    store.createItem(newBook);
    navigater("/")
  };

  return (

     <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={title}
          />
        </div>

        <div>
          <div>Author</div>
          <input
            type="text"
            onChange={handleChange}
            name="author"
            value={author}
          />
        </div>

        <div>
          <div>Cover</div>
          <input type="file" onChange={handleChangeonFile} name="cover" />
          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>

        <div>
          <div>Intro</div>
          <input
            type="text"
            onChange={handleChange}
            name="intro"
            value={intro}
          />
        </div>

        <div>
          <div>completed</div>
          <input
            type="checkbox"
            onChange={handleChange}
            name="completed"
            value={completed}
          />
        </div>

        <div>
          <div>Review</div>
          <input
            type="text"
            onChange={handleChange}
            name="review"
            value={review}
          />
        </div>

        <input type="submit" value={"registrar un book"} />
      </form>
      </Layout> 

      

  );
};
