import { Validator } from "../../js/app.js";

const name = new Validator;
let nameResult = name.validateUsername("pe5tya");
test('validateUsername correct', () => {
  expect(nameResult).toBeTruthy();
});

let nameResultFirstSymbol = name.validateUsername("5petya");
test('validateUsername FirstSymbol', () => {
  expect(nameResultFirstSymbol).toBeFalsy();
});

let nameResultLastSymbol = name.validateUsername("petya5");
test('validateUsername LastSymbol', () => {
  expect(nameResultLastSymbol).toBeFalsy();
});

let nameResultNumbersInRow = name.validateUsername("pet555ya");
test('validateUsername numbersInRow', () => {
  expect(nameResultNumbersInRow).toBeFalsy();
});

let nameResultSymbolsAlowed = name.validateUsername("pe+tya");
test('validateUsername symbolsAlowed', () => {
  expect(nameResultSymbolsAlowed).toBeFalsy();
});

let nameResultEmpty = name.validateUsername("");
test('validateUsername symbolsAlowed', () => {
  expect(nameResultEmpty).toBeFalsy();
});


