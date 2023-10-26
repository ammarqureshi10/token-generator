import { useEffect, useState } from "react";

export default function TokenGenerator() {
  const [option, setOption] = useState("standard");

  function handleSelect(value) {
    setOption(value);
    console.log("option selected: ", value);
  }

  function handleSubmit() {
    alert("submitted");
  }

  function Form({ option }) {
    console.log(option);
    return (
      <>
        {option === "liquidity" ? (
          <LiquidityForm />
        ) : option === "baby" ? (
          <BabyForm />
        ) : option === "buybackbaby" ? (
          <BuybackBabyForm />
        ) : (
          <StandardForm />
        )}{" "}
      </>
    );
  }
  function StandardForm(option) {
    return (
      <>
        <label>
          Name:
          <input type="name" placeholder="Ex: Dogecoin" />
        </label>
        <br />
        <label>
          Symbol:
          <input type="name" placeholder="Ex: DOGE" />
        </label>
        <br />
        <label>
          Decimal:
          <input type="name" placeholder="Ex: 18" />
        </label>
        <br />
        <label>
          Total Supply:
          <input type="name" placeholder="Ex: 1000000000000000000" />
        </label>
        <br />
      </>
    );
  }
  function LiquidityForm(option) {
    return (
      <>
        <label>
          Name:
          <input type="name" placeholder="Ex: Dogecoin" />
        </label>
        <br />
        <label>
          Symbol:
          <input type="name" placeholder="Ex: DOGE" />
        </label>
        <br />
        <label>
          Router:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Transaction fee to generate yield (%):
          <input type="name" placeholder="Ex: 0-25" />
        </label>
        <br />
        <label>
          Transaction fee to generate liquidity (%):
          <input type="name" placeholder="Ex: 0-25" />
        </label>
        <br />
        <label>
          Charity/Marketing address:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Charity/Marketing percent (%):
          <input type="name" placeholder="Ex: 0-25" />
        </label>
        <br />
      </>
    );
  }
  function BabyForm(option) {
    return (
      <>
        <label>
          Name:
          <input type="name" placeholder="Ex: Dogecoin" />
        </label>
        <br />
        <label>
          Symbol:
          <input type="name" placeholder="Ex: DOGE" />
        </label>
        <br />
        <label>
          Total Supply:
          <input type="name" placeholder="Ex: 1000000000000000000" />
        </label>
        <br />
        <label>
          Router:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Reward token:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Reward token fee (%):
          <input type="name" placeholder="Ex: 0-100" />
        </label>
        <br />
        <label>
          Minimum token balance for dividends
          <input type="number" placeholder="Ex: 0-0.1" />
        </label>
        <br />
        <label>
          Liquidity fee (%)
          <input type="number" placeholder="Ex: 0-100" />
        </label>
        <br />
        <label>
          Marketing wallet
          <input type="number" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Markting fee (%)
          <input type="number" placeholder="Ex: 0-100" />
        </label>
      </>
    );
  }
  function BuybackBabyForm(option) {
    return (
      <>
        <label>
          Name:
          <input type="name" placeholder="Ex: Dogecoin" />
        </label>
        <br />
        <label>
          Symbol:
          <input type="name" placeholder="Ex: DOGE" />
        </label>
        <br />
        <label>
          Total Supply:
          <input type="name" placeholder="Ex: 1000000000000000000" />
        </label>
        <br />
        <label>
          Router:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Reward token:
          <input type="name" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Liquidity Fee (%)
          <input type="number" placeholder="Ex: 0-100" />
        </label>
        <br />
        <label>
          Buyback Fee (%)
          <input type="number" placeholder="Ex: 0x..." />
        </label>
        <br />
        <label>
          Reflection Fee (%)
          <input type="number" placeholder="Ex: 0-100" />
        </label>
        <br />
        <label>
          Marketing Fee (%)
          <input type="number" placeholder="Ex: 0-100" />
        </label>
      </>
    );
  }

  return (
    <>
      <h2>Select:</h2>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="standard">Standard token</option>
        <option value="liquidity">Liquidity generator token</option>
        <option value="baby">Baby token</option>
        <option value="buybackbaby">BuybackBaby token</option>
      </select>
      <br />
      <br />
      <Form option={option} />
      <br />
      <button onClick={handleSubmit}>Create token</button>
      <br />
      <br />
    </>
  );
}
