import { randomHexColor } from './hex-color';

describe('hex color', () => {

  it('generates a random hex', () => {
    const hex = randomHexColor();

    expect(hex.substr(0, 1)).toBe('#');
    // eslint-disable-next-line: no-magic-numbers
    expect(hex.length).toBe(7);
  });

});
