import { Numbers2Word } from "./Numbers2Word"
import { Utils } from "./Utils"

export const numbers2words = (input: number): string => {
  Utils.validatePosInt(input)

  const converter = new Numbers2Word(input)
  return converter.convert()
}
