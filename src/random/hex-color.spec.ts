import { randomHexColor } from './hex-color';

describe('hex color', () => {

  it('generates a random hex', () => {
    const hex = randomHexColor();

    expect(hex.substr(0, 1)).toBe('#');
    // eslint-disable-next-line: no-magic-numbers
    expect(hex.length).toBe(7);
  });

  it('generates a random hex of 6 chars', () => {
    jest.spyOn(Math, 'floor').mockReturnValue(189195.0); // 189195.0.toString(16) returns 5 chars
    const hex = randomHexColor();

    expect(hex.substr(0, 1)).toBe('#');
    // eslint-disable-next-line: no-magic-numbers
    expect(hex.length).toBe(7);
  });

});
