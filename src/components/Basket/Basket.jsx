import React from "react";
import { Link } from "react-router-dom";

function Basket({ basket, setBasketActive }) {
  return (
    <div className="basket">
      <div className="basket-container">
        <h1>Basket</h1>
        <div className="basket-rows">
          <div className="basket-row">
            {basket.orders ? (
              <>
                <h1>List name: {basket.title}</h1>
                <div className="basket-orders">
                  {basket.orders.map((item, index) => (
                    <div key={index} className="basket-order">
                      <Link
                        target="_blank"
                        to={`https://www.themoviedb.org/movie/${item.id}`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                          alt=""
                        />
                      </Link>
                      <div>
                        <p>{item.title}</p>
                        <span>Year: {item.release_date.slice(0, 4)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="basket-empty">There is no item</div>
            )}
          </div>
        </div>
        <button onClick={() => setBasketActive(false)}>Go to back</button>
      </div>
    </div>
  );
}

export default Basket;
