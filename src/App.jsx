import "./App.css";
import { useState } from "react";

const mainData = {
  resistance: {
    r1: 56.0393,
    r2: 21.9103,
    r3: 0.3553,
    r4: 25.4756,
    r5: 5.1024,
  },
  temperature: {
    val1: 40,
    val2: 90,
  },
};

function result(R, temp) {
  return R * (1 + 0.00393 * (temp - 20));
}

const App = () => {
  return (
    <div>
      <h1>Проводники</h1>
      <div className="main_board">
        <div className="resistance">
          <form action="#">
            <fieldset>
              <legend>Resistance</legend>
              <p>
                <input type="radio" name="size" id="res1" />
                <label for="res1">Resistance 1</label>
              </p>
              <p>
                <input type="radio" name="size" id="res2" value="r2" />
                <label for="res2">Resistance 2</label>
              </p>
              <p>
                <input type="radio" name="size" id="res3" value="r3" />
                <label for="res3">Resistance 3</label>
              </p>
              <p>
                <input type="radio" name="size" id="res4" value="r4" />
                <label for="res4">Resistance 4</label>
              </p>
              <p>
                <input type="radio" name="size" id="res5" value="r5" />
                <label for="res5">Resistance 5</label>
              </p>
            </fieldset>
          </form>
        </div>
        <div className="temperature">
          <form action="#">
            <label for="lang">Temperature</label>
            <select name="languages" id="lang">
              <option value="temp1">Temp {mainData.temperature.val1}</option>
              <option value="temp2">Temp {mainData.temperature.val2}</option>
            </select>
          </form>
        </div>
        <div className="picture">
          <img src="./assets/resist.png" alt="" className="resistor_img" />
        </div>
        <div className="result">Result value: {result(56, 60)}</div>
      </div>
    </div>
  );
};

export default App;
