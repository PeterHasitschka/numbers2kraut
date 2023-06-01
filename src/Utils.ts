export class Utils {
  public static validatePosInt = (input: number): void => {
    if (parseInt(input.toString(10)) !== input) {
      throw new Error("Input must be integer")
    }

    if (input < 0) {
      throw new Error("Input must be a positive integer")
    }
  }

  public static removeFirstDigitFromPosInt = (input: number): number => {
    Utils.validatePosInt(input)
    const numStr = input.toString()
    return parseInt(numStr.substring(1), 10)
  }
  public static removeLastDigitFromPosInt = (input: number): number => {
    Utils.validatePosInt(input)
    return Math.floor(input / 10)
  }

  /**
   * Returns the power (number of digits) of a number
   * @param input number
   * @returns number
   */
  public static getPower(input: number): number {
    return Math.abs(Math.floor(input)).toString().length
  }

  /**
   * Returns a part depending on the power of the number
   * E.g. if the input is 1234 and the power is 2 => 34 is returned
   * @param input number
   * @param power number
   * @returns
   */
  public static extractPositiveIntPower(input: number, power: number): number {
    this.validatePosInt(power)

    let positiveInt = Math.floor(input * (input < 0 ? -1 : 1))

    while (Utils.getPower(positiveInt) > power) {
      positiveInt = Utils.removeFirstDigitFromPosInt(positiveInt)
    }

    return positiveInt
  }
}
