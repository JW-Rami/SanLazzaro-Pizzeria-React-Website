import "./ItalianFoods.css";
import cesarsalad from "../../assets/images/cesarsalad.jpg";
import pizzamarguerita from "../../assets/images/pizzamarguerita.jpg";
import charcuterie from "../../assets/images/charcuterie.jpg";
import risotto from "../../assets/images/risotto.jpg";
import vin from "../../assets/images/vin.jpg";
import CompleteMenu from "../CompleteMenu/CompleteMenu";
import Footer from "../Footer/Footer";
import Menu from "../Menu/menu";
import pdfFile from "../../assets/pdf/la_carte.pdf";
// import View1 from "../TestAspect/View1.js"
import { Link } from "react-router-dom";

function ItalianFoods() {
  return (
    <>
      <section className="Italian">
        <section className="ItalianFoods">
          <Menu
            title="Nos entrées"
            image={cesarsalad}
            description="Saumon fumé, salade césar ou melon au porto, découvrez nos entrée
            qui saura vous transportez.."
          />
          <Menu
            title="Nos pizzas"
            image={pizzamarguerita}
            description="Le coin du pizzaiolo: Quatres saisons, Palermo, Calzone,
            Napolitaine..."
          />
          <Menu
            title="Charcuterie italienne"
            image={charcuterie}
            description="Carpaccio de boeuf, Jambon de Parme, salami piquant découvrez notre charcuterie de San Lazzaro."
          />
          <Menu
            title="Nos spécialités de la mer"
            image={risotto}
            description="Tagliatelle aux Saint-Jacques ou aux Gambas, risotto aux fruits de mer prenez plaisir aux plats de la mer."
          />
          <Menu
            title="Nos vins"
            image={vin}
            description="Rouges, rosés et blanc, découvrez nos vins Italiens ou nos rouges et rosés de France.."
          />
          {/* <Link to="/Test"> */}
          {/* <CompleteMenu/> */}

          <h2 className="full-menu-button">
            <a className="border-button" href={pdfFile}>
              Découvrir notre carte
            </a>
          </h2>

          {/* <button onClick={<CompleteMenu text="yes" />}>
  Activate Lasers
</button> */}
      <CompleteMenu />
        </section>
      </section>
    </>
  );
}
export default ItalianFoods;
