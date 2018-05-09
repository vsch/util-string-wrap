"use strict";

const each = require('jest-each');
const utilStringWrap = require('util-string-wrap');
const resolveFunctionArg = utilStringWrap.resolveFunctionArg;
const ifStartsWith = utilStringWrap.ifStartsWith;
const ifEndsWith = utilStringWrap.ifEndsWith;
const ifWrappedWith = utilStringWrap.ifWrappedWith;
const startsWith = utilStringWrap.startsWith;
const endsWith = utilStringWrap.endsWith;
const wrappedWith = utilStringWrap.wrappedWith;
const removePrefix = utilStringWrap.removePrefix;
const removeSuffix = utilStringWrap.removeSuffix;
const unwrap = utilStringWrap.unwrap;
const prefixWith = utilStringWrap.prefixWith;
const suffixWith = utilStringWrap.suffixWith;
const wrapWith = utilStringWrap.wrapWith;
const prefixOnce = utilStringWrap.prefixOnce;
const suffixOnce = utilStringWrap.suffixOnce;
const wrapOnce = utilStringWrap.wrapOnce;
const removePrefixFunc = utilStringWrap.removePrefixFunc;
const removeSuffixFunc = utilStringWrap.removeSuffixFunc;
const unwrapFunc = utilStringWrap.unwrapFunc;

each([
    ['', '', ''],
    ['abc', '', 'abc'],
    ['abc', 'def', 'abcdef'],
    ['abcdef', 'def', 'abcdefdef'],
    ['', 'abc', 'abc'],
])
    .describe(`arg: '%s, param: '%s'`, (arg, param, expected) => {
        test(`'${arg}'.suffixWith('${param}') === '${expected}'`, () => {
            expect(suffixWith(arg, param)).toBe(expected);
        });
    });

each([
    ['', '', ''],
    ['abc', '', 'abc'],
    ['abc', 'def', 'abcdef'],
    ['abcdef', 'def', 'abcdef'],
    ['', 'abc', 'abc'],
])
    .describe(`arg: '%s, param: '%s'`, (arg, param, expected) => {
        test(`'${arg}'.suffixOnce('${param}') === '${expected}'`, () => {
            expect(suffixOnce(arg, param)).toBe(expected);
        });
    });

each([
    ['', '', ''],
    ['abc', '', 'abc'],
    ['abc', 'def', 'defabc'],
    ['abcdef', 'def', 'defabcdef'],
    ['defabc', 'def', 'defdefabc'],
    ['', 'abc', 'abc'],
])
    .describe(`arg: '%s, param: '%s'`, (arg, param, expected) => {
        test(`'${arg}'.prefixWith('${param}') === '${expected}'`, () => {
            expect(prefixWith(arg, param)).toBe(expected);
        });
    });

each([
    ['', '', ''],
    ['abc', '', 'abc'],
    ['abc', 'def', 'defabc'],
    ['abcdef', 'def', 'defabcdef'],
    ['defabc', 'def', 'defabc'],
    ['', 'abc', 'abc'],
])
    .describe(`arg: '%s, param: '%s'`, (arg, param, expected) => {
        test(`'${arg}'.prefixOnce('${param}') === '${expected}'`, () => {
            expect(prefixOnce(arg, param)).toBe(expected);
        });
    });

each([
    ['', '', '', ''],
    ['abc', '', '', 'abc'],
    ['abc', 'xyz', '', 'xyzabc'],
    ['abc', '', 'def', 'abcdef'],
    ['abc', 'xyz', 'def', 'xyzabcdef'],
    ['xyzabc', 'xyz', 'def', 'xyzxyzabcdef'],
    ['abcdef', 'xyz', 'def', 'xyzabcdefdef'],
    ['xyzabcdef', 'xyz', 'def', 'xyzxyzabcdefdef'],
    ['', 'xyz', 'def', 'xyzdef'],
])
    .describe(`arg: '%s, prefix: '%s', suffix: '%s'`, (arg, prefix, suffix, expected) => {
        test(`'${arg}'.wrapWith('${prefix}','${suffix}') === '${expected}'`, () => {
            expect(wrapWith(arg, prefix, suffix)).toBe(expected);
        });
    });

each([
    ['', '', '', ''],
    ['abc', '', '', 'abc'],
    ['abc', 'xyz', '', 'xyzabc'],
    ['abc', '', 'def', 'abcdef'],
    ['abc', 'xyz', 'def', 'xyzabcdef'],
    ['xyzabc', 'xyz', 'def', 'xyzxyzabcdef'],
    ['abcdef', 'xyz', 'def', 'xyzabcdefdef'],
    ['xyzabcdef', 'xyz', 'def', 'xyzabcdef'],
    ['', 'xyz', 'def', 'xyzdef'],
])
    .describe(`arg: '%s, prefix: '%s', suffix: '%s'`, (arg, prefix, suffix, expected) => {
        test(`'${arg}'.wrapOnce('${prefix}','${suffix}') === '${expected}'`, () => {
            expect(wrapOnce(arg, prefix, suffix)).toBe(expected);
        });
    });

