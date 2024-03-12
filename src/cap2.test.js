import { tolkienFan, starWarsFan, marvelFan, blizzardFan } from "./cap2";

describe('practiceTest function', () => {
    let originalConsoleLog;

    beforeEach(() => {
        // Salva a função original do console.log
        originalConsoleLog = console.log;
        // Substitui o console.log por uma função vazia
        console.log = jest.fn();
    });

    afterEach(() => {
        // Restaura a função original do console.log
        console.log = originalConsoleLog;
    });

    test('should call console.log with "Lord of the Rings"', () => {
        tolkienFan();
        expect(console.log).toHaveBeenCalledWith("Lord of the Rings");
    });

    test('should call console.log with "Star wars"', () => {
        starWarsFan();
        expect(console.log).toHaveBeenCalledWith("Star Wars");
    });

    test('should call console.log with "Avengers"', () => {
        marvelFan();
        expect(console.log).toHaveBeenCalledWith("Avengers");
    });


    test('should call console.log with "Blizzard Fans"', () => {
        blizzardFan();
        expect(console.log).toHaveBeenCalledWith("Before if: Warcraft");
        expect(console.log).toHaveBeenCalledWith("Inside if: For the Horde");
        expect(console.log).toHaveBeenCalledWith("After if: For the Alliance!");
    });
});
