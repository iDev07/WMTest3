import React from "react";
import Head from "next/head";
function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className="Contacts">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  <span>СВЯЖИТЕСЬ</span> С НАМИ
                  <p>
                    Отвечаем на вопросы о группе компаний, сотрудничестве и
                    рассказываем, как устроиться на работу
                  </p>
                  <p className="contacs_p">
                    <span>
                      <a href="tel: +998 71 230 38 83">+998 71 230 38 83</a>
                    </span>
                    |
                    <span>
                      <a href="mailto: worldmiral@mail.ru">
                        worldmiral@mail.ru
                      </a>
                    </span>
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
