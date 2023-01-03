import Link from "next/link";

export const Heading = ({ number, name, name_page, link }) => {
  return (
    <div className="Heading_pages">
      <div className="wrapper">
        <div className="containerdev">
          <div className="number">
            <p>{number}</p>
          </div>
          <div className="content">
            <div className="name">
              <h1>{name}</h1>
            </div>
            <div className="border_g ml-auto">
              <Link href={link}>{name_page}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
