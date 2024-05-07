import "./App.css";
import Banner from "./Banner.js";
import requests from "./request.js";
import Row from "./Row.js";
import Nav from "./Nav.js";
function App() {
  // document.body.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("movie_player")){
  //     return;
  //   }
  //   console.log(e.target)
  //   Array.from(document.querySelectorAll(".movie_player")).forEach((element)=>{
  //     if (element.classList.contains("playing-now")){
  //       // element.classList.remove("playing-now");
  //       // element.innerHTML = '';
  //     }
  //   })
  // });
  return (
    <div className="app">
      <Nav />
      <Banner />
      <div className="row_container">
        <Row
          title="NetFlix Originals"
          fetchUrl={requests.fetchingNetflixOrginals}
        />
        <Row
          title="Trending Now"
          isLargeRow={true}
          fetchUrl={requests.fetchTrending}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
