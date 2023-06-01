import { Utils } from "../Utils"
import { IPower } from "./PowerInterface"

export class Power1 implements IPower {
  private power = 1

  private numbersPower1 = [
    "null",
    "eins",
    "zwei",
    "drei",
    "vier",
    "fünf",
    "sechs",
    "sieben",
    "acht",
    "neun",
  ]

  private specialSinglesOnPower2: Record<number, string> = {
    1: "ein",
  }

  public convertPower1PosInt = (
    power1Input: number,
    isPartOfPower2 = false
  ): string => {
    Utils.validatePosInt(power1Input)

    const out =
      (isPartOfPower2 && this.specialSinglesOnPower2[power1Input]) ||
      this.numbersPower1[power1Input]

    return out
  }

  convert(fullInput: number, isPartOfPower2 = false): string {
    const powerOfInput = Utils.extractPositiveIntPower(fullInput, this.power)

    const isPartOfLargerPower = powerOfInput !== fullInput
    if (isPartOfLargerPower && powerOfInput === 0) {
      return ""
    }

    return this.convertPower1PosInt(powerOfInput, isPartOfPower2)
  }
}
