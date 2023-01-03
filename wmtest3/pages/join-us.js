import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
function JoinUs() {
  return (
    <>
      <Head>
        <title>Join us</title>
      </Head>
      <div className="JoinUs">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  станьте частью нашей <span>команды</span>
                  <p>
                    Группа компаний World Miral – ответственная и
                    целеустремлённая компания, которая стремиться выйти на
                    международный уровень, взяв для себя главную ценность это
                    честность и оперативность.
                  </p>
                </h1>
                <div className="wrapper_animation">
                  <div className="down_animation">
                    <div>
                      <ExpandMoreIcon className="first" />
                    </div>
                    <div>
                      <ExpandMoreIcon className="second" />
                    </div>
                    <div>
                      <ExpandMoreIcon className="third" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading
          name_section={"Почему стоит начать карьеру в WORLDMIRAL ?"}
        />
        <div className="advantages_company">
          <div className="containerdev">
            <div className="uni_p">
              <p>
                Для развития компании в соответствии с мировыми стандартами
                сотрудничаем с иностранными специалистами в каждой сфере
                деятельности. Компания преимущественно отличается современными и
                комфортными условиями, прозрачностью системы оплаты, и
                возможностью стремительного карьерного роста.
              </p>
            </div>
            <div className="wrapper">
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer1.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer2.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer3.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer4.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer5.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
              <div className="mycol">
                <div className="img_wrapper">
                  <img src="images/carer6.png" />
                </div>
                <p>Стабильный доход</p>
              </div>
            </div>
          </div>
        </div>
        <div className="youngs_back">
          <div className="wrapper">
            <div className="containerdev">
              <h1 className="heading">
                Молодые специалисты – это <span>будущее</span> компании.
              </h1>
            </div>
          </div>
        </div>
        <div className="light_dark ">
          <div className="containerdev">
            <p className="uni_p">
              Группа компаний “World Miral” активно поддерживает и привлекает к
              работе молодых специалистов, готовых работать над собой,
              приобретать необходимый опыт работы, профессиональные навыки,
              проявить себя и развивать бизнес, привнося новые, креативные идеи.
              “Если бизнес планирует свое развитие на несколько лет вперед, то
              без молодых специалистов никак не обойтись!”
            </p>
          </div>
        </div>
        <LineHeading name_section={"ЦЕННОСТИ нашей компании"} />
        <div className="company_values">
          <div className="containerdev">
            <p>
              Неотъемлемую часть нашей компании должны составлять инициативные
              сотрудники, готовые работать и развиваться. Под руководством
              сильного и ответственного руководства каждый из сотрудников легко
              и быстро совершенствуется и раскрывает свой потенциал.
            </p>
            <div className="wrapper">
              <ul>
                <li>Сертификация</li>
                <li>Сертификация</li>
                <li>Сертификация</li>
                <li>Сертификация</li>
              </ul>
              <ul>
                <li>Сертификация</li>
                <li>Сертификация</li>
                <li>Сертификация</li>
                <li>Сертификация</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vacancies">
          <div className="wrapper">
            <div className="containerdev">
              <div className="top_section">
                <h1>доступные вакансии</h1>
              </div>
              <div className="wrapper_cols">
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
                <div className="mycol">
                  <a href="">
                    <div className="wrapper_vacancy">
                      <h3>Разработчики клиентской и серверной части</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
