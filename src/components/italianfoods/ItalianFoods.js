import "./ItalianFoods.css";
import cesarsalad from "../../assets/images/cesarsalad.jpg";
import pizzamarguerita from "../../assets/images/pizzamarguerita.jpg";
import charcuterie from "../../assets/images/charcuterie.jpg"
import risotto from "../../assets/images/risotto.jpg"
import vin from "../../assets/images/vin.jpg"

function ItalianFoods() {
  return (
    <>
      <section  className="Italian">
        <section  className="ItalianFoods">
          <div className="starter">
            <h3 className="mealstitle">Nos entrées</h3>
            <p className="mealsdescription">
              <img src={cesarsalad} alt="" />
              Saumon fumé, salade césar ou melon au porto, découvrez nos entrée
              qui saura vous transportez..
            </p>
          </div>
          <div className="pizzas">
            <h3 className="mealstitle">Nos pizzas</h3>
            <p className="mealsdescription">
              <img src={pizzamarguerita} alt="" />
              Le coin du pizzaiolo: Quatres saisons, Palermo, Calzone,
              Napolitaine...
            </p>
          </div>
          <div className="delicatessen">
          <h3 className="mealstitle">
            Charcuterie italienne
          </h3>
          <p className="mealsdescription">
            <img src={charcuterie} alt="" />
            Carpaccio de boeuf, Jambon de Parme, salami piquant découvrez notre charcuterie de San Lazzaro.
          </p>
          </div>
          <div className="seafoodspeciality">
            <h3 className="mealstitle"  >
            Nos spécialités de la mer
            </h3>
            <p className="mealsdescription">
              <img src={risotto} alt="" />
              Tagliatelle aux Saint-Jacques ou aux Gambas, risotto aux fruits de mer prenez plaisir aux plats de la mer.
            </p>
          </div>
          <div className="vins">
          <h3 className="mealstitle">
            Nos vins
          </h3>
          <p className="mealsdescription">
            <img src={vin} alt="" />
          Rouges, rosés et blanc, découvrez nos vins Italiens ou nos rouges et rosés de France..
          </p>
          </div>
          <h2 className="full-menu-button">
            <a className="border-button" href="">
              Découvrir notre carte
            </a>
            
          </h2>
          
        </section>
      </section>
    </>
  );
}
export default ItalianFoods;
