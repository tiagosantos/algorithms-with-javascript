import {
    tolkienFan,
    starWarsFan,
    marvelFan,
    blizzardFan,
    circleArea2
} from './cap2.js';

const spy = jest.spyOn(console, 'log');

describe('tolkienFan', () => {
    it('should log "Lord of the Rings"', () => {
        tolkienFan();
        expect(spy).toHaveBeenCalledWith('Lord of the Rings');
    });
});

describe('starWarsFan', () => {
    it('should log "Star Wars"', () => {
        starWarsFan();
        expect(spy).toHaveBeenCalledWith('Star Wars');
    });
});

describe('marvelFan', () => {
    it('should log "Avengers"', () => {
        marvelFan();
        expect(spy).toHaveBeenCalledWith('Avengers');
    });
});

describe('blizzardFan', () => {
    it('should log correct phrases', () => {
        blizzardFan();
        expect(spy).toHaveBeenCalledWith('Before if: Warcraft');
        expect(spy).toHaveBeenCalledWith('Inside if: For the Horde');
        expect(spy).toHaveBeenCalledWith('After if: For the Alliance!');
    });
});

describe('circleArea2', () => {
    it('should calculate and log the area of a circle', () => {
        circleArea2(2);
        expect(spy).toHaveBeenCalledWith(12.56);
    });
});
