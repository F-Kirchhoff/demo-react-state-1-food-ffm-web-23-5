import { useState } from "react";
import FoodButton from "./FoodButton";

export default function FoodOrder() {
  const [currentFood, setFood] = useState("❓");
  const [currentVegan, setVegan] = useState(true);

  return (
    <>
      <div>
        <FoodButton
          icon="🍔"
          label="a hamburger"
          onChoose={() => {
            setFood("🍔");
          }}
        />
        <FoodButton
          icon="🍕"
          label="a pizza"
          onChoose={() => {
            setFood("🍕");
          }}
        />
        <FoodButton
          icon="🌮"
          label="a taco"
          onChoose={() => {
            setFood("🌮");
          }}
        />
        <FoodButton
          icon="🥗"
          label="a salad"
          onChoose={() => {
            setFood("🥗");
          }}
        />
      </div>
      <p>Selected food: {currentFood}</p>
      <button
        onClick={() => {
          setVegan(!currentVegan);
        }}
      >
        Make it vegan:{" "}
        {currentVegan ? (
          <span role="img" aria-label="Thumbs up">
            👍
          </span>
        ) : (
          <span role="img" aria-label="Thumbs down">
            👎
          </span>
        )}
      </button>
    </>
  );
}
