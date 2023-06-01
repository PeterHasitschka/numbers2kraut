import { Utils } from "../Utils"
import { Power1 } from "./Power1"
import { IPower } from "./PowerInterface"

export class Power3 implements IPower {
  private power = 3

  private hundredStr = "hundert"

  convert(fullInput: number): string {
    const powerOfInput = Utils.extractPositiveIntPower(fullInput, this.power)
    const hundredDigit = Utils.removeLastDigitFromPosInt(
      Utils.removeLastDigitFromPosInt(powerOfInput)
    )

    if (hundredDigit === 0) {
      return ""
    }

    const isPartOfLargerPower = powerOfInput !== fullInput
    if (!isPartOfLargerPower && hundredDigit === 1) {
      return this.hundredStr
    }

    // We use the same logic as we convert something like the '3' in '23'
    const power1Converter = new Power1()
    const firstPart = power1Converter.convertPower1PosInt(hundredDigit, true)

    return `${firstPart}${this.hundredStr}`
  }
}
