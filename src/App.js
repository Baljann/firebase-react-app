import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { dataBase } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(dataBase, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      //READ THE DATA
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  //SET THE DATA
  return (
    <div className="App">
      <Auth />
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
