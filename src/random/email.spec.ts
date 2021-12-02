import { randomEmail } from './email';

describe('randomEmail', () => {

  it('generates a random email', () => {
    const email = randomEmail();
    expect(email.length).toBeGreaterThanOrEqual(7);
    expect(email).toContain('@');
    expect(email).toContain('.com');
  });

  it('generates a random email with specific tld', () => {
    const email = randomEmail('org');
    expect(email).toContain('@');
    expect(email).toContain('.org');
  });
});
