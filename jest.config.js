
/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js}',
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
};

module.exports = config;