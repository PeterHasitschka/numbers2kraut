import { Utils } from "./Utils"
import { Power2 } from "./powers/Power2"
import { Power3 } from "./powers/Power3"
import { IPower } from "./powers/PowerInterface"

export class Numbers2Word {
  private powerConverts: Record<number, IPower> = {
    2: new Power2(),
    3: new Power3(),
  }

  constructor(private fullInput: number) {}

  private getPowersOrdered(): number[] {
    const powers = Object.keys(this.powerConverts).map(Number)
    const sortFct = (a: number, b: number) => b - a
    return powers.sort(sortFct)
  }

  private getMaxSupportedNumber(): number {
    return Math.pow(10, Math.max(...this.getPowersOrdered())) - 1
  }

  convert() {
    if (this.fullInput > this.getMaxSupportedNumber()) {
      throw Error(
        `Input ${
          this.fullInput
        } is larger than supported number ${this.getMaxSupportedNumber()}`
      )
    }

    const powersOrdered = this.getPowersOrdered()
    const parts: string[] = []
    for (let i = 0; i < powersOrdered.length; i++) {
      const currentPower = powersOrdered[i]
      // const inputWithCurrentPower = Utils.extractPositiveIntPower(
      //   this.fullInput,
      //   currentPower
      // )
      const powerConverter = this.powerConverts[currentPower]
      parts.push(powerConverter.convert(this.fullInput))
    }

    return parts.join("")
  }
}
