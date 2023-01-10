import React from "react";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LineHeading } from "../components/LineHeading";
import Image from "next/image";
function produce() {
  return (
    <>
      <Head>
        <title>Produce</title>
      </Head>
      <div className="Produce">
        <div className="main_back wrapper">
          <div className="containerdev">
            <div className="inner_wrap">
              <div className="with_anime">
                <h1 className="heading">
                  Бытовая химия, Антисептические и дезинфекционные{" "}
                  <span>средства</span>
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
        <LineHeading name_section={"DIAGNOKIM SOLUTIONS"} />
        <div className="about_diagnokim  p-5 light_dark">
          <div className="containerdev">
            <div className="content_wrapper ">
              <div className="left_box">
                <p>
                  Фабрика Diagnokim solutions – ведущая в Узбекистане по
                  производству дезинфицирующих средств. Производство начало свою
                  деятельность с 2019 года в г.Ташкенте, основываясь на
                  15-летнем опыте работы турецкой фабрики Diagnokim solutions.
                </p>
                <p>
                  Фабрика Diagnokim solutions – ведущая в Узбекистане по
                  производству дезинфицирующих средств. Производство начало свою
                  деятельность с 2019 года в г.Ташкенте, основываясь на
                  15-летнем опыте работы турецкой фабрики Diagnokim solutions.
                </p>
                <p>
                  Фабрика Diagnokim solutions – ведущая в Узбекистане по
                  производству дезинфицирующих средств. Производство начало свою
                  деятельность с 2019 года в г.Ташкенте, основываясь на
                  15-летнем опыте работы турецкой фабрики Diagnokim solutions.
                </p>
              </div>
              <div className="right_box">
                <img src="images/diagnokim.png" alt="Diagnokim Solutions" />
              </div>
            </div>
          </div>
        </div>
        <LineHeading name_section={"Наша миссия"} />
        <div className="like_advantages p-5 light_dark">
          <div className="containerdev">
            <h1 className="t_center">
              Удовлетворение потребностей общества в чистой и безопасной среде
              обитания, свободной от бактерий и вирусов
            </h1>
            <div className="p-5 link_catalog">
              <a href="" className="border_g">
                перейти В каталог продукции
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default produce;
