import { TimezoneArray, TimeZone } from '@/timezone/index.js';

/**
 * The type of the timezone.
 * @version 0.0.1
 */
export interface Timezone {
	/**
	 * The name of the timezone. e.g. `Dateline Standard Time`
	 * @type {string}
	 * @version 0.0.1
	 */
	value: string;
	/**
	 * The abbreviation of the timezone. e.g. `DST`
	 * @type {string}
	 * @version 0.0.1
	 */
	abbr: string;
	/**
	 * The offset of the timezone. e.g. `10`
	 * @type {number}
	 * @version 0.0.1
	 */
	offset: number;
	/**
	 * Whether the timezone is DST or not.
	 * @type {boolean}
	 * @version 0.0.1
	 */
	isdst: boolean;
	/**
	 * The text of the timezone.
	 * @type {string}
	 * @version 0.0.1
	 */
	text: string;
	/**
	 * The UTC time of the timezone.
	 * @type {string[]}
	 * @version 0.0.1
	 */
	utc: string[];
}
/**
 * The type of the timezone picklist.
 * @version 0.0.1
 */
export interface TimezonePicklist {
	/**
	 * The name of the timezone.
	 * @type {string}
	 * @version 0.0.1
	 */
	value: string;
	/**
	 * The abbreviation of the timezone.
	 * @type {string}
	 * @version 0.0.1
	 */
	abbr: string;
	/**
	 * The offset of the timezone.
	 * @type {number}
	 * @version 0.0.1
	 */
	offset: number;
}
/**
 * The type of the 2-dimensional array.
 * @version 0.0.1
 */
export type Timezone2DimensionArray = readonly [string, string, number][];
/**
 * The type of the timezone enum.
 * @version 0.0.1
 */
export type TimezoneEnum = Record<TimezoneKey, string>;
/**
 * The type of the timezone keys.
 * @version 0.0.1
 */
export type TimezoneKeys = typeof TimezoneArray;
/**
 * The type of the timezone key.
 * @version 0.0.1
 */
export type TimezoneKey = TimezoneKeys[number];
/**
 * The type of the timezone value.
 * @version 0.0.1
 */
export type TimezoneValue = TimezoneEnum[TimezoneKey];
/**
 * The type of the timezone array.
 * @version 0.0.1
 */
export type TimezoneArrayType = TimezoneValue[];
/**
 * The type of the timezone picklist array.
 * @version 0.0.1
 */
export type TimezonePicklistArray = TimezonePicklist[];
/**
 * The type of the timezone two-dimensional array.
 * @version 0.0.1
 */
export type TimeZoneKey = keyof typeof TimeZone;
/**
 * The type of the timezone.
 * @version 0.0.1
 */
export type TimeZoneType = (typeof TimeZone)[TimeZoneKey];
/**
 * The type of the timezone value.
 * @version 0.0.1
 */
export type TimeZoneValue = (typeof TimeZone)[TimeZoneKey];
/**
 * The type of the timezone array.
 * @version 0.0.1
 */
export type TimeZoneArray = TimeZoneValue[];
