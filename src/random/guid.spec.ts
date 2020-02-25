import { randomGuid } from './guid';

describe('guid', () => {

  it('generates a random guid', () => {
    expect(randomGuid()).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  });
});
