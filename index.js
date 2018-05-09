'use strict';

const isFunction = require('lodash.isfunction');

module.exports.resolveFunctionArg = resolveFunctionArg;

function resolveFunctionArg(arg) {
    return isFunction(arg) ? arg.apply(undefined, Array.prototype.slice.call(arguments, 1)) : arg;
}

module.exports.ifStartsWith = ifStartsWith;

function ifStartsWith(arg, prefix, onTrue, onFalse) {
    return (prefix.length && arg.length >= prefix.length && arg.substr(0, prefix.length) === prefix)
        ? resolveFunctionArg(onTrue, arg, prefix)
        : resolveFunctionArg(onFalse, arg, prefix);
}

module.exports.ifEndsWith = ifEndsWith;

function ifEndsWith(arg, suffix, onTrue, onFalse) {
    return (suffix.length && arg.length >= suffix.length && arg.substr(arg.length - suffix.length) === suffix)
        ? resolveFunctionArg(onTrue, arg, suffix)
        : resolveFunctionArg(onFalse, arg, suffix);
}

module.exports.ifWrappedWith = ifWrappedWith;

function ifWrappedWith(arg, prefix, suffix, onTrue, onFalse) {
    return (arg.length >= prefix.length + suffix.length && startsWith(arg, prefix) && endsWith(arg, suffix))
        ? resolveFunctionArg(onTrue, arg, prefix, suffix)
        : resolveFunctionArg(onFalse, arg, prefix, suffix);
}

module.exports.startsWith = startsWith;

function startsWith(arg, prefix) {
    return ifStartsWith(arg, prefix, true, false);
}

module.exports.endsWith = endsWith;

function endsWith(arg, suffix) {
    return ifEndsWith(arg, suffix, true, false);
}

module.exports.wrappedWith = wrappedWith;

function wrappedWith(arg, prefix, suffix) {
    return ifWrappedWith(arg, prefix, suffix, true, false);
}

module.exports.removePrefixFunc = removePrefixFunc;

function removePrefixFunc(arg, prefix) {
    return arg.substring(prefix.length, arg.length);
}

module.exports.removeSuffixFunc = removeSuffixFunc;

function removeSuffixFunc(arg, suffix) {
    return arg.substring(0, arg.length - suffix.length);
}

module.exports.unwrapFunc = unwrapFunc;

function unwrapFunc(arg, prefix, suffix) {
    return arg.substring(prefix.length, arg.length - suffix.length);
}

module.exports.removePrefix = removePrefix;

function removePrefix(arg, prefix) {
    return ifStartsWith(arg, prefix, removePrefixFunc, arg);
}

module.exports.removeSuffix = removeSuffix;

function removeSuffix(arg, suffix) {
    return ifEndsWith(arg, suffix, removeSuffixFunc, arg);
}

module.exports.unwrap = unwrap;

function unwrap(arg, prefix, suffix) {
    return ifWrappedWith(arg, prefix, suffix, unwrapFunc, arg);
}

module.exports.prefixWith = prefixWith;

function prefixWith(arg, prefix) {
    return prefix + arg;
}

module.exports.suffixWith = suffixWith;

function suffixWith(arg, suffix) {
    return arg + suffix;
}

module.exports.wrapWith = wrapWith;

function wrapWith(arg, prefix, suffix) {
    return prefix + arg + suffix;
}

module.exports.prefixOnce = prefixOnce;

function prefixOnce(arg, prefix) {
    return ifStartsWith(arg, prefix, arg, prefixWith);
}

module.exports.suffixOnce = suffixOnce;

function suffixOnce(arg, suffix) {
    return ifEndsWith(arg, suffix, arg, suffixWith);
}

module.exports.wrapOnce = wrapOnce;

function wrapOnce(arg, prefix, suffix) {
    return ifWrappedWith(arg, prefix, suffix, arg, wrapWith);
}

/*
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
 */
