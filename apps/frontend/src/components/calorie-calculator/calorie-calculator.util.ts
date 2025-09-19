export class CalorieCalculatorUtil {
    static calculate(weight: number, height: number, age: number, sex: string) {
        const weightResult = weight * 10;
        const heightResult = height * 6.25;
        const ageResult = age * 5;
        const step1 = weightResult + heightResult;
        const step2 = step1 - ageResult;
        return sex === 'Male' ? step2 + 5 : step2 - 161;
    }
}