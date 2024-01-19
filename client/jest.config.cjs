module.exports = {
 roots: ['<rootDir>/src'],
 transform: {
   '^.+\\.tsx?$': 'ts-jest',
 },
 testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
 moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
 coverageReporters: ['lcov', 'text'],
 setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
