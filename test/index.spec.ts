import { Utils } from "../src/Utils"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { numbers2words } = require("../src/index")

describe("Test N2W", () => {
  it.each`
    input   | power  | expected
    ${1234} | ${1}   | ${4}
    ${1234} | ${2}   | ${34}
    ${1234} | ${3}   | ${234}
    ${1234} | ${4}   | ${1234}
    ${1234} | ${10}  | ${1234}
    ${1234} | ${0}   | ${false}
    ${1234} | ${-1}  | ${false}
    ${1234} | ${2.3} | ${false}
  `(
    "should extract the positive power part of $input with power $power to be $expected",
    ({ input, power, expected }) => {
      if (expected === false) {
        const throwing = () => Utils.extractPositiveIntPower(input, power)
        expect(throwing).toThrow()
      } else {
        expect(Utils.extractPositiveIntPower(input, power)).toBe(expected)
      }
    }
  )

  it.each`
    input | expected
    ${0}  | ${"null"}
    ${1}  | ${"eins"}
    ${2}  | ${"zwei"}
    ${3}  | ${"drei"}
    ${4}  | ${"vier"}
    ${5}  | ${"fünf"}
    ${6}  | ${"sechs"}
    ${7}  | ${"sieben"}
    ${8}  | ${"acht"}
    ${9}  | ${"neun"}
  `(
    "should convert single positive digit $input to '$expected' correctly",
    ({ input, expected }) => {
      expect(numbers2words(input)).toBe(expected)
    }
  )

  it.each`
    input | expected
    ${10} | ${"zehn"}
    ${11} | ${"elf"}
    ${12} | ${"zwölf"}
    ${13} | ${"dreizehn"}
    ${14} | ${"vierzehn"}
    ${19} | ${"neunzehn"}
    ${20} | ${"zwanzig"}
    ${21} | ${"einundzwanzig"}
    ${22} | ${"zweiundzwanzig"}
    ${34} | ${"vierunddreißig"}
    ${99} | ${"neunundneunzig"}
  `(
    "should convert power 2 positive number $input to '$expected' correctly",
    ({ input, expected }) => {
      expect(numbers2words(input)).toBe(expected)
    }
  )

  it.each`
    input  | expected
    ${100} | ${"hundert"}
    ${101} | ${"hunderteins"}
    ${102} | ${"hundertzwei"}
    ${103} | ${"hundertdrei"}
    ${111} | ${"hundertelf"}
    ${114} | ${"hundertvierzehn"}
    ${199} | ${"hundertneunundneunzig"}
    ${200} | ${"zweihundert"}
    ${201} | ${"zweihunderteins"}
    ${311} | ${"dreihundertelf"}
    ${999} | ${"neunhundertneunundneunzig"}
  `(
    "should convert power 3 positive number $input to '$expected' correctly",
    ({ input, expected }) => {
      expect(numbers2words(input)).toBe(expected)
    }
  )
})
