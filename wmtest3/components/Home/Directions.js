import React from "react";
import Link from "next/link";
function Directions() {
  return (
    <div className="Directions">
      <div className="wrapper">
        <div className="myrow">
          <div className="mycol">
            <Link href="/">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>Консалтинговые услуги</h1>
                <p className="border_g">ПОДРОБНЕЕ</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>Экспорт товаров</h1>
                <p className="border_g">ПОДРОБНЕЕ</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>Переработка и производство</h1>
                <p className="border_g">ПОДРОБНЕЕ</p>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link href="/">
              <div className="main_wrapper">
                {/* <img src="images/direct1.png" /> */}
                <h1>Торговая площадка</h1>
                <p className="border_g">ПОДРОБНЕЕ</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
