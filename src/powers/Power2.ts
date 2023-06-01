import { Utils } from "../Utils"
import { Power1 } from "./Power1"
import { IPower } from "./PowerInterface"

export class Power2 implements IPower {
  private power = 2

  private numbersPower2 = [
    "",
    "zehn",
    "zwanzig",
    "dreißig",
    "vierzig",
    "fünfzig",
    "sechzig",
    "siebzig",
    "achtzig",
    "neunzig",
  ]

  private skipAndPower2 = [1]

  private specialPower2Numbers: Record<number, string> = {
    11: "elf",
    12: "zwölf",
  }

  private convertPower2PosInt = (
    power2Input: number,
    fullInput: number
  ): string => {
    Utils.validatePosInt(power2Input)

    if (power2Input < 10) {
      return new Power1().convert(fullInput)
    }

    // 11, 12
    if (this.specialPower2Numbers[power2Input]) {
      return this.specialPower2Numbers[power2Input]
    }

    const power2Num = Utils.removeLastDigitFromPosInt(power2Input)
    const power2Str = this.numbersPower2[power2Num]

    const power1Num = Utils.removeFirstDigitFromPosInt(power2Input)

    // 10, 20 ...
    if (power1Num === 0) {
      return power2Str
    }

    const power1Str = new Power1().convert(power1Num, true)

    const useAndStr = !this.skipAndPower2.includes(power2Num)
    const andStr = useAndStr ? "und" : ""
    return `${power1Str}${andStr}${power2Str}`
  }

  convert(fullInput: number): string {
    const powerOfInput = Utils.extractPositiveIntPower(fullInput, this.power)
    return this.convertPower2PosInt(powerOfInput, fullInput)
  }
}
