**tzts** • [Readme](../README.md) \| [API](../globals.md)

***

[tzts](../README.md) / timezone

# Variable: timezone

> **`const`** **`readonly`** **timezone**: [`Timezone`](../interfaces/Timezone.md)[]

## Name

tzdata

## Description

This is a list of all timezones.

## Version

0.0.1

## Example

```ts
e.g.
`[{"value": "Dateline Standard Time", "abbr": "DST", "offset": -12, "isdst": false, "text": "(UTC-12:00) International Date Line West", "utc": ["Etc/GMT+12"]}]`
`[{"value": "UTC-11", "abbr": "U", "offset": -11, "isdst": false, "text": "(UTC-11:00) Coordinated Universal Time-11", "utc": ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"]}]`
`[{"value": "Hawaiian Standard Time", "abbr": "HST", "offset": -10, "isdst": false, "text": "(UTC-10:00) Hawaii", "utc": ["Etc/GMT+10", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Rarotonga", "Pacific/Tahiti"]}]`
```

## Source

timezone/index.ts:143
