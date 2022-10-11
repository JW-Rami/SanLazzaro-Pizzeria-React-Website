import React from "react";
import FoodSection from "../FoodSection/FoodSection";
import MexicanData from "../../data/Mexican";
import FastFoodData from "../../data/FastFood";
import IranianData from "../../data/Iranian";
import Title from "../Title/Title";
import ItalianFoods from "../Italianfoods/italianFoods";

function Foods() {
    return (
        <section>
            <Title title="Foods" />
            <ItalianFoods/>
        </section>
    );
}

export default Foods;
