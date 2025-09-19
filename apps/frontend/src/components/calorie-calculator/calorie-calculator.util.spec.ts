import {CalorieCalculatorUtil} from "./calorie-calculator.util";

describe('calorie calculator', () => {
    const scenarios = [
        // 10 x 90 = 900 (weight), 187 * 6.25 = 1168.75 (height), 5 * 35 = 175 (age) -> 900 + 1168.75 = 2068.75 -> 2068.75 - 175 = 1893.75 -> 1893.75 + 5 = 1898.75
        {name: 'Should be correct for a male', sex: 'Male', height: 187, weight: 90, age: 35, expected: 1898.75},
        // 10 x 67 = 670 (weight), 162 * 6.25 = 1012.5 (height), 5 * 34 = 170 (age) -> 670 + 1012.5 = 1682.5 -> 1682.5 - 170 = 1512.5 -> 1512.5 - 161 = 1351.5
        {name: 'Should be correct for a female', sex: 'Female', height: 162, weight: 67, age: 34, expected: 1351.5},
    ];

    test.each(scenarios)('$name', ({sex, age, weight, height, expected}) => {
        const result = CalorieCalculatorUtil.calculate(weight, height, age, sex);
        expect(result).toEqual(expected);
    });
});