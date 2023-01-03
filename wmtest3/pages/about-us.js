import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="About">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  Группа компаний <span>World Miral</span> работает во многих
                  сферах бизнеса в Узбекистане
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
        <LineHeading name_section={"О компании"} />
        <div className="about_company">
          <div className="containerdev">
            <p className="simple_text">
              Группа компаний World Miral создана в 2019 году с целью занять
              лидирующие позиции одновременно в нескольких направлениях бизнеса.
              Сегодня наша организация занимается производством, консалтингом,
              переработкой, наружной рекламой, всесторонней поддержкой экспорта
              и импорта, а также перспективными проектами в сфере IT. Наша
              компания и команда не ограничиваются достигнутыми результатами и
              достижениями, уверенно двигаясь вперед и добиваясь еще более
              высоких результатов.
            </p>
            <div className="boss">
              <div className="wrapper">
                <div className="left_box">
                  <img src="images/boss.png" />
                </div>
                <div className="right_box">
                  <h1>Асланов Мираббос Фарходович</h1>
                  <p className="title">Генеральный директор</p>
                  <p className="about_boss">
                    «Окружай себя теми, у кого такие же цели» Асланов Мираббос
                    создал Группу компаний World Miral в 2019 году с целью
                    создать не просто компанию на ряду с другими. Одной из
                    основополагающих отличий World Miral Group является
                    слаженность работы как между компаниями входящими в состав
                    Группы, так и между департаментами и подразделениями внутри
                    этих компаний. За плечами Асланова Мираббоса опыт работы в
                    государственных ведомствах и в системе управления крупными
                    бизнесами. Под его руководством, за 4 года, компания
                    достигла больших масштабов работ и это еще не предел. «Для
                    меня всегда было важно создать не просто коллектив, а
                    создать семью, крепкую и сплоченную, объединёнными одной
                    страстью и одной мечтой – создать огромную компанию,
                    нацеленную в будущее.»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={"Ценности помогают вам расти"} />
        <div className="values">
          <div className="Advantages">
            <div className="containerdev">
              <div className="wrapper">
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan1.png" />
                    <h3>Профессионализм во всем</h3>
                    <p>
                      Мы ответственно подходим к работе, поэтому нам всегда
                      доверяют. Наша команда состоит из сотрудников с
                      многолетним опытом
                    </p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan2.png" />
                    <h3>Результат проделанной работы</h3>
                    <p>
                      Еще одна причина, по которой наши клиенты доверяют нам, -
                      это достигнутые нами результаты и успешное завершение
                      проектов
                    </p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>Команда, которая любит разработку</h3>
                    <p>
                      Наша команда постоянно работает над улучшением своих
                      навыков, и каждый оказывает на это положительное влияние
                    </p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>Команда, которая любит разработку</h3>
                    <p>
                      Наша команда постоянно работает над улучшением своих
                      навыков, и каждый оказывает на это положительное влияние
                    </p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>Команда, которая любит разработку</h3>
                    <p>
                      Наша команда постоянно работает над улучшением своих
                      навыков, и каждый оказывает на это положительное влияние
                    </p>
                  </div>
                </div>
                <div className="mycol">
                  <div className="myrow">
                    <img src="images/advan3.png" />
                    <h3>Команда, которая любит разработку</h3>
                    <p>
                      Наша команда постоянно работает над улучшением своих
                      навыков, и каждый оказывает на это положительное влияние
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
