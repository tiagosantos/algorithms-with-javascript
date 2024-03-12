import practiceTest from "./index";

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

    test('should call console.log with "Hello World!"', () => {
        practiceTest();
        // Verifica se console.log foi chamado corretamente
        expect(console.log).toHaveBeenCalledWith("Hello World!");
    });

    test('should call console.log only once', () => {
        practiceTest();
        // Verifica se console.log foi chamado apenas uma vez
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
