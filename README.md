

# MOCK-DATA

[![Build Status](https://travis-ci.org/elgervb/mock-data.svg?branch=master)](https://travis-ci.org/elgervb/mock-data)


Mock data made easy.


# Examples

## Simple random models:
[examples/random.ts](./src/examples/random.ts) <br>
`npx ts-node ./src/examples/random.ts`
Output:
```
{
  active: false,
  created: 1986-11-29T23:00:00.000Z,
  id: '99c06715-f119-45f6-8544-01ca94bed5ff',
  name: 'VZxYf1x5w4'
}
```

## Register blueprints:
[examples/blueprints.ts](./src/examples/blueprints.ts) <br>
`npx ts-node ./src/examples/blueprints.ts`
Output:
```
[
  {
    brand: 'XCSLNHDjQS',
    color: 'J7VfZvbLpO',
    guid: 'c4027a22-faf3-4168-9bc4-a1bb11c78fdc',
    type: 'rQI3EoILRW',
    wheels: [ [Object], [Object], [Object], [Object] ]
  },
  {
    brand: '6cbBqZZD3J',
    color: 'UJu4RwwYkt',
    guid: 'b5b6b810-7dd2-4afe-8765-95ab6ce5529d',
    type: 'LBIdfIFmZ9',
    wheels: [ [Object], [Object], [Object], [Object] ]
  },
  ...
```