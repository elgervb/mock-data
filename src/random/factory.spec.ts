import { factory, FactoryType } from './factory';

describe('factory', () => {

  it('has default factory for stri ng', () => {
    expect(typeof factory(FactoryType.string)).toBe('function');
  });

  it('has default factory for number', () => {
    expect(typeof factory(FactoryType.number)).toBe('function');
  });

  it('has default factory for guid', () => {
    expect(typeof factory(FactoryType.guid)).toBe('function');
  });

  it('should throw when factory cannot be resolved', () => {
    // tslint:disable: no-unsafe-any ban-ts-ignore
    // @ts-ignore
    expect(() => factory(FactoryType.bogus)).toThrowError('no generator found for undefined');
    // tslint:enable: no-unsafe-any ban-ts-ignore
  });

  it('has default factory for day', () => {
    expect(typeof factory(FactoryType.day)).toBe('function');
  });

  it('has default factory for month', () => {
    expect(typeof factory(FactoryType.month)).toBe('function');
  });

  it('has default factory for date', () => {
    expect(typeof factory(FactoryType.date)).toBe('function');
  });

  it('has default factory for boolean', () => {
    expect(typeof factory(FactoryType.boolean)).toBe('function');
  });

  it('has default factory for geolocation', () => {
    expect(typeof factory(FactoryType.geo)).toBe('function');
  });

  it('has default factory for year', () => {
    expect(typeof factory(FactoryType.year)).toBe('function');
  });

  it('has default factory for hex', () => {
    expect(typeof factory(FactoryType.hex)).toBe('function');
  });
});
