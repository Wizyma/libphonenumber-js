import
{
	ParseError,
	parsePhoneNumber,
	parsePhoneNumberFromString,

	// Deprecated: `format()` was renamed to `formatNumber()`.
	format,
	formatNumber,
	// Deprecated: `parse()` was renamed to `parseNumber()`.
	parse,
	parseNumber,
	getNumberType,
	getExampleNumber,
	isPossibleNumber,
	isValidNumber,
	isValidNumberForRegion,

	// Deprecated
	findPhoneNumbers,
	searchPhoneNumbers,
	PhoneNumberSearch,

	findNumbers,
	searchNumbers,
	PhoneNumberMatcher,

	AsYouType,
	getCountryCallingCode,
	// `getPhoneCode` name is deprecated.
	getPhoneCode,

	// Deprecated.
	formatCustom,
	parseCustom,
	getNumberTypeCustom,
	isValidNumberCustom,
	searchPhoneNumbersCustom,
	findPhoneNumbersCustom,
	PhoneNumberSearchCustom,
	getCountryCallingCodeCustom,
	// `getPhoneCodeCustom` name is deprecated.
	getPhoneCodeCustom,

	formatIncompletePhoneNumber,
	parseIncompletePhoneNumber,
	parsePhoneNumberCharacter,
	parseDigits,

	Metadata,
	getExtPrefix,
	parseRFC3966,
	formatRFC3966,

	DIGIT_PLACEHOLDER,
	DIGITS
}
from '../index.es6'

import metadata from '../metadata.min.json'
import examples from '../examples.mobile.json'

describe(`exports`, function()
{
	it(`should export ES6`, function()
	{
		expect(ParseError).to.be.a('function')
		parsePhoneNumber('+12133734253').nationalNumber.should.equal('2133734253')
		parsePhoneNumberFromString('+12133734253').nationalNumber.should.equal('2133734253')

		// Deprecated: `parse()` was renamed to `parseNumber()`.
		parse('+12133734253').should.deep.equal({ country: 'US', phone: '2133734253' })
		parseNumber('+12133734253').should.deep.equal({ country: 'US', phone: '2133734253' })
		// Deprecated: `format()` was renamed to `formatNumber()`.
		format('2133734253', 'US', 'E.164').should.equal('+12133734253')
		formatNumber('2133734253', 'US', 'E.164').should.equal('+12133734253')
		getNumberType('2133734253', 'US').should.equal('FIXED_LINE_OR_MOBILE')
		getExampleNumber('RU', examples).nationalNumber.should.equal('9123456789')
		isPossibleNumber('+12133734253', 'US').should.equal(true)
		isValidNumber('+12133734253', 'US').should.equal(true)
		isValidNumberForRegion('+12133734253', 'US').should.equal(true)

		// Deprecated.
		findPhoneNumbers('+12133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		searchPhoneNumbers('+12133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		new PhoneNumberSearch('+12133734253', undefined).find.should.be.a('function')

		findNumbers('+12133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		searchNumbers('+12133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		new PhoneNumberMatcher('+12133734253', undefined).find.should.be.a('function')

		new AsYouType('US').input('+12133734253').should.equal('+1 213 373 4253')

		DIGIT_PLACEHOLDER.should.equal('x')
		Object.keys(DIGITS).length.should.be.above(0)

		// `getPhoneCode` name is deprecated.
		getPhoneCode('KZ').should.equal('7')
		getCountryCallingCode('KZ').should.equal('7')

		new Metadata({ countries: {}, country_calling_codes: {} })
		getExtPrefix('US', metadata).should.equal(' ext. ')
		parseRFC3966('tel:+12133734253').should.deep.equal({ number: '+12133734253' })
		formatRFC3966({ number: '+12133734253' }).should.equal('tel:+12133734253')

		formatIncompletePhoneNumber('+121337342').should.deep.equal('+1 213 373 42')
		parseIncompletePhoneNumber('+1 213 373 42').should.equal('+121337342')
		parsePhoneNumberCharacter('+').should.equal('+')
		parseDigits('+123').should.equal('123')
	})

	// Deprecated exports: remove in `2.0.0`.
	it(`should export ES6 custom functions`, function()
	{
		parseCustom('+12133734253', metadata).should.deep.equal({ country: 'US', phone: '2133734253' })
		formatCustom('2133734253', 'US', 'E.164', metadata).should.equal('+12133734253')
		getNumberTypeCustom('2133734253', 'US', metadata).should.equal('FIXED_LINE_OR_MOBILE')
		isValidNumberCustom('', 'US', metadata)
		findPhoneNumbers('', 'US', metadata)
		searchPhoneNumbers('', 'US', metadata)
		new PhoneNumberSearchCustom('', metadata)
		// `getPhoneCode` name is deprecated.
		getPhoneCodeCustom('KZ', metadata)
		getCountryCallingCodeCustom('KZ', metadata)
	})

	it(`should export CommonJS`, function()
	{
		const Library = require('../index.common')

		expect(Library.ParseError).to.be.a('function')
		Library.parsePhoneNumber('+12133734253').nationalNumber.should.equal('2133734253')
		Library.parsePhoneNumberFromString('+12133734253').nationalNumber.should.equal('2133734253')

		// Deprecated: `parse()` was renamed to `parseNumber()`.
		Library.parse('+12133734253').should.deep.equal({ country: 'US', phone: '2133734253' })
		Library.parseNumber('+12133734253').should.deep.equal({ country: 'US', phone: '2133734253' })
		// Deprecated: `format()` was renamed to `formatNumber()`.
		Library.format('2133734253', 'US', 'E.164').should.equal('+12133734253')
		Library.formatNumber('2133734253', 'US', 'E.164').should.equal('+12133734253')
		Library.getNumberType('2133734253', 'US').should.equal('FIXED_LINE_OR_MOBILE')
		Library.getExampleNumber('RU', examples).nationalNumber.should.equal('9123456789')
		Library.isPossibleNumber('+12133734253', 'US').should.equal(true)
		Library.isValidNumber('+12133734253', 'US').should.equal(true)
		Library.isValidNumberForRegion('+12133734253', 'US').should.equal(true)

		// Deprecated.
		Library.findPhoneNumbers('+12133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		Library.searchPhoneNumbers('+12133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		new Library.PhoneNumberSearch('+12133734253', undefined).find.should.be.a('function')

		Library.findNumbers('+12133734253', 'US').should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		Library.searchNumbers('+12133734253', 'US')[Symbol.iterator]().next.should.be.a('function')
		new Library.PhoneNumberMatcher('+12133734253', undefined).find.should.be.a('function')

		new Library.AsYouType('US').input('+12133734253').should.equal('+1 213 373 4253')

		Library.DIGIT_PLACEHOLDER.should.equal('x')
		Object.keys(Library.DIGITS).length.should.be.above(0)

		// `getPhoneCode` name is deprecated.
		Library.getPhoneCode('KZ').should.equal('7')
		Library.getCountryCallingCode('KZ').should.equal('7')

		Library.getExtPrefix('US').should.equal(' ext. ')

		Library.parseRFC3966('tel:+12133734253').should.deep.equal({ number: '+12133734253' })
		Library.formatRFC3966({ number: '+12133734253' }).should.equal('tel:+12133734253')

		Library.formatIncompletePhoneNumber('+121337342').should.deep.equal('+1 213 373 42')
		Library.parseIncompletePhoneNumber('+1 213 373 42').should.equal('+121337342')
		Library.parsePhoneNumberCharacter('+').should.equal('+')
		Library.parseDigits('+123').should.equal('123')
	})

	it(`should export CommonJS custom functions`, function()
	{
		const Library = require('../custom')

		expect(Library.ParseError).to.be.a('function')
		Library.parsePhoneNumber('+12133734253', metadata).nationalNumber.should.equal('2133734253')
		Library.parsePhoneNumberFromString('+12133734253', metadata).nationalNumber.should.equal('2133734253')

		// Deprecated: `parse()` was renamed to `parseNumber()`.
		Library.parse('+12133734253', metadata).should.deep.equal({ country: 'US', phone: '2133734253' })
		Library.parseNumber('+12133734253', metadata).should.deep.equal({ country: 'US', phone: '2133734253' })
		// Deprecated: `format()` was renamed to `formatNumber()`.
		Library.format('2133734253', 'US', 'E.164', metadata).should.equal('+12133734253')
		Library.formatNumber('2133734253', 'US', 'E.164', metadata).should.equal('+12133734253')
		Library.getNumberType('2133734253', 'US', metadata).should.equal('FIXED_LINE_OR_MOBILE')
		Library.getExampleNumber('RU', examples, metadata).nationalNumber.should.equal('9123456789')
		Library.isPossibleNumber('+12133734253', 'US', metadata).should.equal(true)
		Library.isValidNumber('+12133734253', 'US', metadata).should.equal(true)
		Library.isValidNumberForRegion('+12133734253', 'US', metadata).should.equal(true)

		// Deprecated.
		Library.findPhoneNumbers('+12133734253', 'US', metadata).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		Library.searchPhoneNumbers('+12133734253', 'US', metadata)[Symbol.iterator]().next.should.be.a('function')
		new Library.PhoneNumberSearch('+12133734253', undefined, metadata).find.should.be.a('function')

		Library.findNumbers('+12133734253', 'US', metadata).should.deep.equal([{ country: 'US', phone: '2133734253', startsAt: 0, endsAt: 12 }])
		Library.searchNumbers('+12133734253', 'US', metadata)[Symbol.iterator]().next.should.be.a('function')
		new Library.PhoneNumberMatcher('+12133734253', undefined, metadata).find.should.be.a('function')

		// `getPhoneCode` name is deprecated.
		Library.getPhoneCode('KZ', metadata).should.equal('7')
		Library.getCountryCallingCode('KZ', metadata).should.equal('7')
		new Library.AsYouType('US', metadata).input('+12133734253').should.equal('+1 213 373 4253')
		new Library.Metadata({ countries: {}, country_calling_codes: {} })
		Library.getExtPrefix('US', metadata).should.equal(' ext. ')
		Library.parseRFC3966('tel:+12133734253').should.deep.equal({ number: '+12133734253' })
		Library.formatRFC3966({ number: '+12133734253' }).should.equal('tel:+12133734253')

		Library.formatIncompletePhoneNumber('+121337342', null, metadata).should.deep.equal('+1 213 373 42')
		Library.parseIncompletePhoneNumber('+1 213 373 42').should.equal('+121337342')
		Library.parsePhoneNumberCharacter('+').should.equal('+')
		Library.parseDigits('+123').should.equal('123')
	})
})