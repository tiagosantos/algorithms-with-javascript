//vars
// let and const

export function tolkienFan() {
    let movie = 'Lord of the Rings';
    console.log(movie);
}

export function starWarsFan() {
    const movie = 'Star Wars';
    console.log(movie);
}

export function marvelFan() {
    console.log('Avengers');
}

export function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log("Before if: " + phrase);
    if (isFan) {
        let phrase = 'initial text';
        phrase = 'For the Horde';
        console.log("Inside if: " + phrase);
    }
    phrase = 'For the Alliance!';
    console.log("After if: " + phrase);
}

export function circleArea2(area) {
    const circleArea2 = r => 3.14 * r * r;
    console.log(circleArea2(area));
}