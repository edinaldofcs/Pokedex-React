import { useEffect, useState } from "react";
import { UseInfo } from "../../../../context/context";
import { FooterMainBtn } from "./style"

export function FooterMain() {
  const { pokeSearch } = UseInfo();
  const { firstPokemonNumber, setFirstPokemonNumber } = UseInfo();
  const { maxPokemonsPerPage, setMaxPokemonsPerPage } = UseInfo();
  const { amount } = UseInfo();

  const [buttonsValues, setButtonsValues] = useState<number>(1);
  const [buttonsText, setButtonText] = useState<number>(1);
  const [pageAmount, setPageAmount]= useState<number>(0);
  const [btnAmount, setBtnAmount] = useState<number[]>([1, 2, 3, 4]);

  useEffect(() => {

    if (pokeSearch && pokeSearch.length > 0) {
      updateValues();
      setButtonText(1);
      chageValuesOnclick(1);
    }else{
      setBtnAmount([])
    }


  }, [pokeSearch]);
 
  function updateValues() {
    let amountButtons: number = Math.floor(pokeSearch.length / amount)
    let rest: number = pokeSearch.length % pokeSearch !== 0 ? 1 : 0
    amountButtons += rest
    setPageAmount(amountButtons)

    if (amountButtons < 4) {
      setBtnAmount(createButtons(amountButtons))
      return
    }
    setBtnAmount(createButtons(4))

  }

  function createButtons(num: number): number[] {
    let array: Array<number> = []
    for (let i = 0; i < num; i++) {
      array.push(i + 1)
    }

    return array
  }

  function changeUp() {
    if(btnAmount.length === 0)return
    updateValues();
    if (buttonsText + btnAmount[btnAmount.length - 1] - 1 === pageAmount && buttonsValues === btnAmount[btnAmount.length - 1]) return
    setFirstPokemonNumber(firstPokemonNumber + amount)
    setMaxPokemonsPerPage(maxPokemonsPerPage + amount)

    if (buttonsValues === btnAmount[btnAmount.length - 1] && buttonsText + btnAmount[btnAmount.length - 1] - 1 < pageAmount) {
      setButtonText(buttonsText + 1)
    }

    if (buttonsValues < btnAmount[btnAmount.length - 1]) {
      setButtonsValues(buttonsValues + 1)
    }
  }

  function changeDown() {
    if (firstPokemonNumber === 0) return
    setFirstPokemonNumber(firstPokemonNumber - amount)
    setMaxPokemonsPerPage(maxPokemonsPerPage - amount)

    if (buttonsValues === 1 && buttonsText > 0) {
      setButtonText(buttonsText - 1)
    }

    if (buttonsValues > 1) {
      setButtonsValues(buttonsValues - 1)
    }
  }

  function chageValuesOnclick(num: number) {
    setButtonsValues(num)
    setFirstPokemonNumber(num * amount - amount)
    setMaxPokemonsPerPage(num * amount)
  }


  return (
    <>{btnAmount && btnAmount.length > 0 && (
    <FooterMainBtn>
      <button data-previous value={0} className={"pages__btn "}
        onClick={changeDown}
      >
        Previous
      </button>

      {btnAmount &&  (
        btnAmount.map((item, index) => [
          <button id={"change"} value={item} key={item + Math.random()}
            className={`pages__btn btn__num ${buttonsValues === item && "btn__selected"}`} onClick={() => chageValuesOnclick(item)}>{buttonsText + index}
          </button>

        ])
      )}

      <button data-next value={1} className={"pages__btn"}
        onClick={changeUp}
      >
        Next
      </button>
    </FooterMainBtn>
    )}
    </>
  )
}