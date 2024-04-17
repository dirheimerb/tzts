[![Build Status](https://travis-ci.com/dirheimerb/tzts.svg?branch=main)](https://travis-ci.com/dirheimerb/tzts)
[![Coverage Status](https://coveralls.io/repos/github/dirheimerb/tzts/badge.svg?branch=main)](https://coveralls.io/github/dirheimerb/tzts?branch=main)
[![npm version](https://badge.fury.io/js/tzts.svg)](https://badge.fury.io/js/tzts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Timezone TypeScript Library (tzts)

## Description
The Timezone TypeScript Library (`tzts`) is a comprehensive toolkit designed to assist developers in handling timezones in their applications. This library offers a robust selection of functions, utilities, and types for managing timezones, making it easier to handle the complexities associated with global time conversions.

## Version
0.0.1

### Installation

```bash
npm install
```

### Build

```bash
npm run build
```

## Key Features
- **Comprehensive Timezone Data**: Provides a rich dataset of timezones, including UTC offsets, abbreviations, and descriptive names.
- **Type Safety**: Utilizes TypeScript for enhanced code reliability and developer experience.
- **Modular Design**: Easy integration with modern JavaScript and TypeScript projects.

## Usage
To use the timezone data in your project, import the desired components as follows:
```typescript
import { timezone2DimensionArray, timezone } from 'tzts';

console.log(timezone2DimensionArray);
console.log(timezone);
```

### Example
Here's a basic example demonstrating how to retrieve the display name and abbreviation of a timezone:
```typescript
import { timezone } from 'tzts';

const tzInfo = timezone.find(tz => tz.value === 'Eastern Standard Time');
console.log(tzInfo?.text); // Outputs: (UTC-05:00) Eastern Time (US & Canada)
console.log(tzInfo?.abbr); // Outputs: EST
```

## Building the Project
To build the library for production, use the following npm script:
```bash
npm run build
```

## Testing
Run tests using Jest by executing:
```bash
npm test
```

## Formatting and Linting
Ensure your code adheres to the configured styles and guidelines:
```bash
npm run format
npm run lint
```

## Documentation
Generate documentation for the project using TypeDoc:
```bash
npm run docs
```

## API Reference
The `tzts` library provides the following functions and types:

`Timezone` - Object representing a timezone

`TimezonePicklist` - Picklist of all the timezones

`TimezoneTwoDimensionArray` - Array of TimezonePicklist

`TimezoneEnum` - Enum of all the timezones

`TimezoneKeys` - A list of all the keys in the Timezone object

`TimezoneValue` - A list of all the values in the Timezone object

`TimezoneArray` - Array of Timezone

`TimezonePicklistArray` - Array of TimezonePicklist

`TimezoneEnumArray` - Array of TimezoneEnum

## Contributing
Contributions to the `tzts` library are welcome. Please ensure to follow the code of conduct and submit pull requests for review.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For support or queries, reach out to the maintainer Bradley Dirheimer at [b.dirheimer@gmail.com](mailto:b.dirheimer@gmail.com).

## Links
- [GitHub Repository](https://github.com/dirheimerb/tzts)
- [Project Homepage](https://github.com/dirheimerb/tzts#readme)
- [NPM Package](https://www.npmjs.com/package/tzts)
- [TypeDoc Documentation](https://dirheimerb.github.io/tzts/)
- [TypeDoc README](https://dirheimerb.github.io/tzts/README.html)