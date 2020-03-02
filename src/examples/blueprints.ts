import { arrayFrom, register } from '../blueprint/blueprint';
import { FactoryType } from '../random/factory';

interface Car {
  brand: string;
  color: string;
  guid: string;
  type: string;
  wheels: Wheel[];
}

interface Wheel {
  inches: number;
}

const nrOfWheels = 4;

// First register some blueprints
register<Car>('car', {
  brand: FactoryType.string,
  color: FactoryType.string,
  guid: FactoryType.guid,
  type: FactoryType.string,
  wheels: () => arrayFrom('wheel', nrOfWheels),
});

register<Wheel>('wheel', {
  inches: FactoryType.number,
});

const mocks = arrayFrom<Car>('car', 10);

// tslint:disable: ban-ts-ignore no-console no-unsafe-any
// @ts-ignore
console.dir(mocks);
