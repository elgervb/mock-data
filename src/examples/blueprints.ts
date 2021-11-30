import { arrayFrom, randomGuid, randomHexColor, randomNumber, randomString, register } from '..';

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
  brand: () => randomString(3),
  color: () => randomHexColor(),
  guid: randomGuid,
  type: () => randomString(4),
  wheels: () => arrayFrom('wheel', nrOfWheels),
});

register<Wheel>('wheel', {
  inches: () => randomNumber(2, 4),
});

const mocks = arrayFrom<Car>('car', 10);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.dir(mocks);
