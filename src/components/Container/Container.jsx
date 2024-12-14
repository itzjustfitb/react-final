import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import List from "../List/List";
import Search from "../Search/Search";
import axios from "axios";

function Container({ setBasketActive, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [list, setList] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/movie`;
  const getSearch = (search) => {
    setSearchParams(search);
  };

  console.log(basket);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(basket);

  return (
    <div className="container">
      <div className="container-left">
        <Search
          getData={getSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="container-cards">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchParams.toLowerCase())
            )
            .map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                setList={setList}
                list={list}
              />
            ))}
        </div>
      </div>
      <div className="container-right">
        <List
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
}

export default Container;
