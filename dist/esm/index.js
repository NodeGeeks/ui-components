import * as UI from '@aws-amplify/ui-react';
import { Flex, Text, Input, View, Button, Autocomplete as Autocomplete$1, SwitchField, Table, TableHead, TableRow, TableCell, TableBody, Link, Divider, CheckboxField, Card, Icon } from '@aws-amplify/ui-react';
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Buffer as Buffer$1 } from 'buffer';

function Autocomplete(_a) {
    var options = _a.options, displayProperty = _a.displayProperty, valueProperty = _a.valueProperty, value = _a.value, onChange = _a.onChange, label = _a.label;
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(options), filteredOptions = _d[0], setFilteredOptions = _d[1];
    useEffect(function () {
        if (value) {
            setInputValue(String(value[displayProperty]));
        }
    }, [value, displayProperty]);
    var handleInputChange = function (event) {
        var newInputValue = event.target.value;
        setInputValue(newInputValue);
        setIsOpen(true);
        var filtered = options.filter(function (option) {
            return String(option[displayProperty]).toLowerCase().includes(newInputValue.toLowerCase());
        });
        setFilteredOptions(filtered);
    };
    var handleOptionSelect = function (option) {
        setInputValue(String(option[displayProperty]));
        onChange(option);
        setIsOpen(false);
    };
    var handleInputFocus = function () {
        setIsOpen(true);
    };
    var handleInputBlur = function () {
        setTimeout(function () { return setIsOpen(false); }, 200);
    };
    return (React.createElement(Flex, { direction: "column", position: "relative" },
        label && React.createElement(Text, null, label),
        React.createElement(Input, { value: inputValue, onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur, placeholder: "Type to search..." }),
        isOpen && (React.createElement(View, { position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", borderWidth: "1px", borderStyle: "solid", borderColor: "gray.300", borderRadius: "md", maxHeight: "200px" }, filteredOptions.map(function (option, index) { return (React.createElement(Button, { key: String(option[valueProperty]), onClick: function () { return handleOptionSelect(option); }, width: "100%", justifyContent: "flex-start", backgroundColor: index % 2 === 0 ? "gray.100" : "white" }, String(option[displayProperty]))); })))));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Chip = function (_a) {
    var value = _a.value, onChange = _a.onChange, options = _a.options, label = _a.label;
    var _b = useState([]), chips = _b[0], setChips = _b[1];
    var handleKeyDown = function (event) {
        if (event.key === "Enter" && value.trim() !== "" && !chips.includes(value.trim())) {
            setChips(__spreadArray(__spreadArray([], chips, true), [value.trim()], false));
            onChange("");
        }
    };
    var handleOnSelect = function (option) {
        var trimmedLabel = option.label.trim();
        if (!chips.includes(trimmedLabel)) {
            setChips(__spreadArray(__spreadArray([], chips, true), [trimmedLabel], false));
            onChange("");
        }
    };
    var removeChip = function (chipToRemove) {
        setChips(chips.filter(function (chip) { return chip !== chipToRemove; }));
    };
    var renderChips = function () { return (React.createElement("div", { className: "flex flex-wrap gap-2 mb-2" }, chips.map(function (chip, index) { return (React.createElement("span", { key: index, className: "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" },
        chip,
        React.createElement("button", { onClick: function () { return removeChip(chip); }, className: "ml-2 text-blue-800 hover:text-blue-900" }, "\u00D7"))); }))); };
    if (options) {
        return (React.createElement("div", null,
            renderChips(),
            React.createElement(Autocomplete$1, { label: label, options: options, value: value, onChange: function (e) { return onChange(e.target.value); }, onKeyDown: handleKeyDown, onSelect: handleOnSelect })));
    }
    return (React.createElement("div", null,
        renderChips(),
        React.createElement(Input, { value: value, onChange: function (e) { return onChange(e.target.value); }, onKeyDown: handleKeyDown })));
};

var ColorSelection = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.output, output = _b === void 0 ? "hex" : _b, className = _a.className;
    var _c = useState(false); _c[0]; var setIsOpen = _c[1];
    var handleColorChange = function (color) {
        var formattedColor = output === "rgb" ? hexToRgb(color) : color;
        onChange(formattedColor);
        setIsOpen(false);
    };
    var hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? "rgb(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ")")
            : hex;
    };
    return (React.createElement("input", { type: "color", role: 'input', value: value, className: className || "h-8 w-8", onChange: function (e) { return handleColorChange(e.target.value); } }));
};

var Dashboard = function (_a) {
    var panels = _a.panels;
    return (React.createElement(View, { as: "div", className: "flex flex-wrap gap-4 p-4" }, panels.map(function (panel) { return (React.createElement("div", { className: "".concat(panel.minWidth, " ").concat(panel.minHeight), key: panel.id, id: panel.id, style: {
            padding: '1rem',
            borderRadius: 'var(--amplify-radii-medium)',
        } },
        React.createElement("h2", { style: { marginBlockEnd: '1rem', fontWeight: 'var(--amplify-font-weights-bold)' } }, panel.title),
        React.createElement("div", { className: "panel-body" }, panel.content))); })));
};

function createError(message) {
    var err = new Error(message);
    err.source = "ulid";
    return err;
}
// These values should NEVER change. If
// they do, we're no longer making ulids!
var ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
var ENCODING_LEN = ENCODING.length;
var TIME_MAX = Math.pow(2, 48) - 1;
var TIME_LEN = 10;
var RANDOM_LEN = 16;
function replaceCharAt(str, index, char) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr(0, index) + char + str.substr(index + 1);
}
function incrementBase32(str) {
    var done = undefined;
    var index = str.length;
    var char = void 0;
    var charIndex = void 0;
    var maxCharIndex = ENCODING_LEN - 1;
    while (!done && index-- >= 0) {
        char = str[index];
        charIndex = ENCODING.indexOf(char);
        if (charIndex === -1) {
            throw createError("incorrectly encoded string");
        }
        if (charIndex === maxCharIndex) {
            str = replaceCharAt(str, index, ENCODING[0]);
            continue;
        }
        done = replaceCharAt(str, index, ENCODING[charIndex + 1]);
    }
    if (typeof done === "string") {
        return done;
    }
    throw createError("cannot increment this string");
}
function randomChar(prng) {
    var rand = Math.floor(prng() * ENCODING_LEN);
    if (rand === ENCODING_LEN) {
        rand = ENCODING_LEN - 1;
    }
    return ENCODING.charAt(rand);
}
function encodeTime(now, len) {
    if (isNaN(now)) {
        throw new Error(now + " must be a number");
    }
    if (now > TIME_MAX) {
        throw createError("cannot encode time greater than " + TIME_MAX);
    }
    if (now < 0) {
        throw createError("time must be positive");
    }
    if (Number.isInteger(now) === false) {
        throw createError("time must be an integer");
    }
    var mod = void 0;
    var str = "";
    for (; len > 0; len--) {
        mod = now % ENCODING_LEN;
        str = ENCODING.charAt(mod) + str;
        now = (now - mod) / ENCODING_LEN;
    }
    return str;
}
function encodeRandom(len, prng) {
    var str = "";
    for (; len > 0; len--) {
        str = randomChar(prng) + str;
    }
    return str;
}
function detectPrng() {
    var allowInsecure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var root = arguments[1];

    if (!root) {
        root = typeof window !== "undefined" ? window : null;
    }
    var browserCrypto = root && (root.crypto || root.msCrypto);
    if (browserCrypto) {
        return function () {
            var buffer = new Uint8Array(1);
            browserCrypto.getRandomValues(buffer);
            return buffer[0] / 0xff;
        };
    } else {
        try {
            var nodeCrypto = require("crypto");
            return function () {
                return nodeCrypto.randomBytes(1).readUInt8() / 0xff;
            };
        } catch (e) {}
    }
    if (allowInsecure) {
        try {
            console.error("secure crypto unusable, falling back to insecure Math.random()!");
        } catch (e) {}
        return function () {
            return Math.random();
        };
    }
    throw createError("secure crypto unusable, insecure Math.random not allowed");
}
function factory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN, currPrng);
    };
}
function monotonicFactory(currPrng) {
    if (!currPrng) {
        currPrng = detectPrng();
    }
    var lastTime = 0;
    var lastRandom = void 0;
    return function ulid(seedTime) {
        if (isNaN(seedTime)) {
            seedTime = Date.now();
        }
        if (seedTime <= lastTime) {
            var incrementedRandom = lastRandom = incrementBase32(lastRandom);
            return encodeTime(lastTime, TIME_LEN) + incrementedRandom;
        }
        lastTime = seedTime;
        var newRandom = lastRandom = encodeRandom(RANDOM_LEN, currPrng);
        return encodeTime(seedTime, TIME_LEN) + newRandom;
    };
}
factory();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Logging constants
const AWS_CLOUDWATCH_CATEGORY = 'Logging';
const USER_AGENT_HEADER$1 = 'x-amz-user-agent';
// Error exception code constants
const NO_HUBCALLBACK_PROVIDED_EXCEPTION = 'NoHubcallbackProvidedException';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var LogType;
(function (LogType) {
    LogType["DEBUG"] = "DEBUG";
    LogType["ERROR"] = "ERROR";
    LogType["INFO"] = "INFO";
    LogType["WARN"] = "WARN";
    LogType["VERBOSE"] = "VERBOSE";
    LogType["NONE"] = "NONE";
})(LogType || (LogType = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5,
    NONE: 6,
};
/**
 * Write logs
 * @class Logger
 */
class ConsoleLogger {
    /**
     * @constructor
     * @param {string} name - Name of the logger
     */
    constructor(name, level = LogType.WARN) {
        this.name = name;
        this.level = level;
        this._pluggables = [];
    }
    _padding(n) {
        return n < 10 ? '0' + n : '' + n;
    }
    _ts() {
        const dt = new Date();
        return ([this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(':') +
            '.' +
            dt.getMilliseconds());
    }
    configure(config) {
        if (!config)
            return this._config;
        this._config = config;
        return this._config;
    }
    /**
     * Write log
     * @method
     * @memeberof Logger
     * @param {LogType|string} type - log type, default INFO
     * @param {string|object} msg - Logging message or object
     */
    _log(type, ...msg) {
        let loggerLevelName = this.level;
        if (ConsoleLogger.LOG_LEVEL) {
            loggerLevelName = ConsoleLogger.LOG_LEVEL;
        }
        if (typeof window !== 'undefined' && window.LOG_LEVEL) {
            loggerLevelName = window.LOG_LEVEL;
        }
        const loggerLevel = LOG_LEVELS[loggerLevelName];
        const typeLevel = LOG_LEVELS[type];
        if (!(typeLevel >= loggerLevel)) {
            // Do nothing if type is not greater than or equal to logger level (handle undefined)
            return;
        }
        let log = console.log.bind(console);
        if (type === LogType.ERROR && console.error) {
            log = console.error.bind(console);
        }
        if (type === LogType.WARN && console.warn) {
            log = console.warn.bind(console);
        }
        if (ConsoleLogger.BIND_ALL_LOG_LEVELS) {
            if (type === LogType.INFO && console.info) {
                log = console.info.bind(console);
            }
            if (type === LogType.DEBUG && console.debug) {
                log = console.debug.bind(console);
            }
        }
        const prefix = `[${type}] ${this._ts()} ${this.name}`;
        let message = '';
        if (msg.length === 1 && typeof msg[0] === 'string') {
            message = `${prefix} - ${msg[0]}`;
            log(message);
        }
        else if (msg.length === 1) {
            message = `${prefix} ${msg[0]}`;
            log(prefix, msg[0]);
        }
        else if (typeof msg[0] === 'string') {
            let obj = msg.slice(1);
            if (obj.length === 1) {
                obj = obj[0];
            }
            message = `${prefix} - ${msg[0]} ${obj}`;
            log(`${prefix} - ${msg[0]}`, obj);
        }
        else {
            message = `${prefix} ${msg}`;
            log(prefix, msg);
        }
        for (const plugin of this._pluggables) {
            const logEvent = { message, timestamp: Date.now() };
            plugin.pushLogs([logEvent]);
        }
    }
    /**
     * Write General log. Default to INFO
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    log(...msg) {
        this._log(LogType.INFO, ...msg);
    }
    /**
     * Write INFO log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    info(...msg) {
        this._log(LogType.INFO, ...msg);
    }
    /**
     * Write WARN log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    warn(...msg) {
        this._log(LogType.WARN, ...msg);
    }
    /**
     * Write ERROR log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    error(...msg) {
        this._log(LogType.ERROR, ...msg);
    }
    /**
     * Write DEBUG log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    debug(...msg) {
        this._log(LogType.DEBUG, ...msg);
    }
    /**
     * Write VERBOSE log
     * @method
     * @memeberof Logger
     * @param {string|object} msg - Logging message or object
     */
    verbose(...msg) {
        this._log(LogType.VERBOSE, ...msg);
    }
    addPluggable(pluggable) {
        if (pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY) {
            this._pluggables.push(pluggable);
            pluggable.configure(this._config);
        }
    }
    listPluggables() {
        return this._pluggables;
    }
}
ConsoleLogger.LOG_LEVEL = null;
ConsoleLogger.BIND_ALL_LOG_LEVELS = false;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isWebWorker = () => {
    if (typeof self === 'undefined') {
        return false;
    }
    const selfContext = self;
    return (typeof selfContext.WorkerGlobalScope !== 'undefined' &&
        self instanceof selfContext.WorkerGlobalScope);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class NonRetryableError extends Error {
    constructor() {
        super(...arguments);
        this.nonRetryable = true;
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isNonRetryableError = (obj) => {
    const key = 'nonRetryable';
    return obj && obj[key];
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const MAX_DELAY_MS$1 = 5 * 60 * 1000;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private
 * Internal use of Amplify only
 */
function jitteredBackoff$1(maxDelayMs = MAX_DELAY_MS$1) {
    const BASE_TIME_MS = 100;
    const JITTER_FACTOR = 100;
    return attempt => {
        const delay = 2 ** attempt * BASE_TIME_MS + JITTER_FACTOR * Math.random();
        return delay > maxDelayMs ? false : delay;
    };
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$h = new ConsoleLogger('retryUtil');
/**
 * @private
 * Internal use of Amplify only
 */
async function retry(functionToRetry, args, delayFn, onTerminate) {
    if (typeof functionToRetry !== 'function') {
        throw Error('functionToRetry must be a function');
    }
    // TODO(eslint): remove this linter suppression with refactoring.
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        let attempt = 0;
        let terminated = false;
        let timeout;
        let wakeUp = () => {
            // no-op
        }; // will be replaced with a resolver()
        // used after the loop if terminated while waiting for a timer.
        let lastError;
        onTerminate &&
            onTerminate.then(() => {
                // signal not to try anymore.
                terminated = true;
                // stop sleeping if we're sleeping.
                clearTimeout(timeout);
                wakeUp();
            });
        // TODO(eslint): remove this linter suppression with refactoring.
        // eslint-disable-next-line no-unmodified-loop-condition
        while (!terminated) {
            attempt++;
            logger$h.debug(`${functionToRetry.name} attempt #${attempt} with this vars: ${JSON.stringify(args)}`);
            try {
                resolve(await functionToRetry(...args));
                return;
            }
            catch (err) {
                lastError = err;
                logger$h.debug(`error on ${functionToRetry.name}`, err);
                if (isNonRetryableError(err)) {
                    logger$h.debug(`${functionToRetry.name} non retryable error`, err);
                    reject(err);
                    return;
                }
                const retryIn = delayFn(attempt, args, err);
                logger$h.debug(`${functionToRetry.name} retrying in ${retryIn} ms`);
                // we check `terminated` again here because it could have flipped
                // in the time it took `functionToRetry` to return.
                if (retryIn === false || terminated) {
                    reject(err);
                    return;
                }
                else {
                    await new Promise(_resolve => {
                        wakeUp = _resolve; // export wakeUp for onTerminate handling
                        timeout = setTimeout(wakeUp, retryIn);
                    });
                }
            }
        }
        // reached if terminated while waiting for a timer.
        reject(lastError);
    });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private
 * Internal use of Amplify only
 */
const jitteredExponentialRetry = (functionToRetry, args, maxDelayMs = MAX_DELAY_MS$1, onTerminate) => retry(functionToRetry, args, jitteredBackoff$1(maxDelayMs), onTerminate);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AmplifyError extends Error {
    /**
     *  Constructs an AmplifyError.
     *
     * @param message text that describes the main problem.
     * @param underlyingError the underlying cause of the error.
     * @param recoverySuggestion suggestion to recover from the error.
     *
     */
    constructor({ message, name, recoverySuggestion, underlyingError, }) {
        super(message);
        this.name = name;
        this.underlyingError = underlyingError;
        this.recoverySuggestion = recoverySuggestion;
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = AmplifyError;
        Object.setPrototypeOf(this, AmplifyError.prototype);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var AmplifyErrorCode;
(function (AmplifyErrorCode) {
    AmplifyErrorCode["NoEndpointId"] = "NoEndpointId";
    AmplifyErrorCode["PlatformNotSupported"] = "PlatformNotSupported";
    AmplifyErrorCode["Unknown"] = "Unknown";
    AmplifyErrorCode["NetworkError"] = "NetworkError";
})(AmplifyErrorCode || (AmplifyErrorCode = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createAssertionFunction = (errorMap, AssertionError = AmplifyError) => (assertion, name, additionalContext) => {
    const { message, recoverySuggestion } = errorMap[name];
    if (!assertion) {
        throw new AssertionError({
            name,
            message: additionalContext
                ? `${message} ${additionalContext}`
                : message,
            recoverySuggestion,
        });
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$g = new ConsoleLogger('parseAWSExports');
const authTypeMapping = {
    API_KEY: 'apiKey',
    AWS_IAM: 'iam',
    AMAZON_COGNITO_USER_POOLS: 'userPool',
    OPENID_CONNECT: 'oidc',
    NONE: 'none',
    AWS_LAMBDA: 'lambda',
    // `LAMBDA` is an incorrect value that was added during the v6 rewrite.
    // Keeping it as a valid value until v7 to prevent breaking customers who might
    // be relying on it as a workaround.
    // ref: https://github.com/aws-amplify/amplify-js/pull/12922
    // TODO: @v7 remove next line
    LAMBDA: 'lambda',
};
/**
 * Converts the object imported from `aws-exports.js` or `amplifyconfiguration.json` files generated by
 * the Amplify CLI into an object that conforms to the {@link ResourcesConfig}.
 *
 * @param config A configuration object imported  from `aws-exports.js` or `amplifyconfiguration.json`.
 *
 * @returns An object that conforms to the {@link ResourcesConfig} .
 */
const parseAWSExports = (config = {}) => {
    if (!Object.prototype.hasOwnProperty.call(config, 'aws_project_region')) {
        throw new AmplifyError({
            name: 'InvalidParameterException',
            message: 'Invalid config parameter.',
            recoverySuggestion: 'Ensure passing the config object imported from  `amplifyconfiguration.json`.',
        });
    }
    const { aws_appsync_apiKey, aws_appsync_authenticationType, aws_appsync_graphqlEndpoint, aws_appsync_region, aws_bots_config, aws_cognito_identity_pool_id, aws_cognito_sign_up_verification_method, aws_cognito_mfa_configuration, aws_cognito_mfa_types, aws_cognito_password_protection_settings, aws_cognito_verification_mechanisms, aws_cognito_signup_attributes, aws_cognito_social_providers, aws_cognito_username_attributes, aws_mandatory_sign_in, aws_mobile_analytics_app_id, aws_mobile_analytics_app_region, aws_user_files_s3_bucket, aws_user_files_s3_bucket_region, aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing, aws_user_pools_id, aws_user_pools_web_client_id, geo, oauth, predictions, aws_cloud_logic_custom, Notifications, modelIntrospection, } = config;
    const amplifyConfig = {};
    // Analytics
    if (aws_mobile_analytics_app_id) {
        amplifyConfig.Analytics = {
            Pinpoint: {
                appId: aws_mobile_analytics_app_id,
                region: aws_mobile_analytics_app_region,
            },
        };
    }
    // Notifications
    const { InAppMessaging, Push } = Notifications ?? {};
    if (InAppMessaging?.AWSPinpoint || Push?.AWSPinpoint) {
        if (InAppMessaging?.AWSPinpoint) {
            const { appId, region } = InAppMessaging.AWSPinpoint;
            amplifyConfig.Notifications = {
                InAppMessaging: {
                    Pinpoint: {
                        appId,
                        region,
                    },
                },
            };
        }
        if (Push?.AWSPinpoint) {
            const { appId, region } = Push.AWSPinpoint;
            amplifyConfig.Notifications = {
                ...amplifyConfig.Notifications,
                PushNotification: {
                    Pinpoint: {
                        appId,
                        region,
                    },
                },
            };
        }
    }
    // Interactions
    if (Array.isArray(aws_bots_config)) {
        amplifyConfig.Interactions = {
            LexV1: Object.fromEntries(aws_bots_config.map(bot => [bot.name, bot])),
        };
    }
    // API
    if (aws_appsync_graphqlEndpoint) {
        const defaultAuthMode = authTypeMapping[aws_appsync_authenticationType];
        if (!defaultAuthMode) {
            logger$g.debug(`Invalid authentication type ${aws_appsync_authenticationType}. Falling back to IAM.`);
        }
        amplifyConfig.API = {
            GraphQL: {
                endpoint: aws_appsync_graphqlEndpoint,
                apiKey: aws_appsync_apiKey,
                region: aws_appsync_region,
                defaultAuthMode: defaultAuthMode ?? 'iam',
            },
        };
        if (modelIntrospection) {
            amplifyConfig.API.GraphQL.modelIntrospection = modelIntrospection;
        }
    }
    // Auth
    const mfaConfig = aws_cognito_mfa_configuration
        ? {
            status: aws_cognito_mfa_configuration &&
                aws_cognito_mfa_configuration.toLowerCase(),
            totpEnabled: aws_cognito_mfa_types?.includes('TOTP') ?? false,
            smsEnabled: aws_cognito_mfa_types?.includes('SMS') ?? false,
        }
        : undefined;
    const passwordFormatConfig = aws_cognito_password_protection_settings
        ? {
            minLength: aws_cognito_password_protection_settings.passwordPolicyMinLength,
            requireLowercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_LOWERCASE') ?? false,
            requireUppercase: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_UPPERCASE') ?? false,
            requireNumbers: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_NUMBERS') ?? false,
            requireSpecialCharacters: aws_cognito_password_protection_settings.passwordPolicyCharacters?.includes('REQUIRES_SYMBOLS') ?? false,
        }
        : undefined;
    const mergedUserAttributes = Array.from(new Set([
        ...(aws_cognito_verification_mechanisms ?? []),
        ...(aws_cognito_signup_attributes ?? []),
    ]));
    const userAttributes = mergedUserAttributes.reduce((attributes, key) => ({
        ...attributes,
        // All user attributes generated by the CLI are required
        [key.toLowerCase()]: { required: true },
    }), {});
    const loginWithEmailEnabled = aws_cognito_username_attributes?.includes('EMAIL') ?? false;
    const loginWithPhoneEnabled = aws_cognito_username_attributes?.includes('PHONE_NUMBER') ?? false;
    if (aws_cognito_identity_pool_id || aws_user_pools_id) {
        amplifyConfig.Auth = {
            Cognito: {
                identityPoolId: aws_cognito_identity_pool_id,
                allowGuestAccess: aws_mandatory_sign_in !== 'enable',
                signUpVerificationMethod: aws_cognito_sign_up_verification_method,
                userAttributes,
                userPoolClientId: aws_user_pools_web_client_id,
                userPoolId: aws_user_pools_id,
                mfa: mfaConfig,
                passwordFormat: passwordFormatConfig,
                loginWith: {
                    username: !(loginWithEmailEnabled || loginWithPhoneEnabled),
                    email: loginWithEmailEnabled,
                    phone: loginWithPhoneEnabled,
                },
            },
        };
    }
    const hasOAuthConfig = oauth ? Object.keys(oauth).length > 0 : false;
    const hasSocialProviderConfig = aws_cognito_social_providers
        ? aws_cognito_social_providers.length > 0
        : false;
    if (amplifyConfig.Auth && hasOAuthConfig) {
        amplifyConfig.Auth.Cognito.loginWith = {
            ...amplifyConfig.Auth.Cognito.loginWith,
            oauth: {
                ...getOAuthConfig(oauth),
                ...(hasSocialProviderConfig && {
                    providers: parseSocialProviders(aws_cognito_social_providers),
                }),
            },
        };
    }
    // Storage
    if (aws_user_files_s3_bucket) {
        amplifyConfig.Storage = {
            S3: {
                bucket: aws_user_files_s3_bucket,
                region: aws_user_files_s3_bucket_region,
                dangerouslyConnectToHttpEndpointForTesting: aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing,
            },
        };
    }
    // Geo
    if (geo) {
        const { amazon_location_service } = geo;
        amplifyConfig.Geo = {
            LocationService: {
                maps: amazon_location_service.maps,
                geofenceCollections: amazon_location_service.geofenceCollections,
                searchIndices: amazon_location_service.search_indices,
                region: amazon_location_service.region,
            },
        };
    }
    // REST API
    if (aws_cloud_logic_custom) {
        amplifyConfig.API = {
            ...amplifyConfig.API,
            REST: aws_cloud_logic_custom.reduce((acc, api) => {
                const { name, endpoint, region, service } = api;
                return {
                    ...acc,
                    [name]: {
                        endpoint,
                        ...(service ? { service } : undefined),
                        ...(region ? { region } : undefined),
                    },
                };
            }, {}),
        };
    }
    // Predictions
    if (predictions) {
        // map VoiceId from speechGenerator defaults to voiceId
        const { VoiceId: voiceId } = predictions?.convert?.speechGenerator?.defaults ?? {};
        amplifyConfig.Predictions = voiceId
            ? {
                ...predictions,
                convert: {
                    ...predictions.convert,
                    speechGenerator: {
                        ...predictions.convert.speechGenerator,
                        defaults: { voiceId },
                    },
                },
            }
            : predictions;
    }
    return amplifyConfig;
};
const getRedirectUrl = (redirectStr) => redirectStr?.split(',') ?? [];
const getOAuthConfig = ({ domain, scope, redirectSignIn, redirectSignOut, responseType, }) => ({
    domain,
    scopes: scope,
    redirectSignIn: getRedirectUrl(redirectSignIn),
    redirectSignOut: getRedirectUrl(redirectSignOut),
    responseType,
});
const parseSocialProviders = (aws_cognito_social_providers) => {
    return aws_cognito_social_providers.map((provider) => {
        const updatedProvider = provider.toLowerCase();
        return updatedProvider.charAt(0).toUpperCase() + updatedProvider.slice(1);
    });
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isAmplifyOutputs(config) {
    // version format initially will be '1' but is expected to be something like x.y where x is major and y minor version
    const { version } = config;
    if (!version) {
        return false;
    }
    return version.startsWith('1');
}
function parseStorage(amplifyOutputsStorageProperties) {
    if (!amplifyOutputsStorageProperties) {
        return undefined;
    }
    const { bucket_name, aws_region, buckets } = amplifyOutputsStorageProperties;
    return {
        S3: {
            bucket: bucket_name,
            region: aws_region,
            buckets: buckets && createBucketInfoMap(buckets),
        },
    };
}
function parseAuth(amplifyOutputsAuthProperties) {
    if (!amplifyOutputsAuthProperties) {
        return undefined;
    }
    const { user_pool_id, user_pool_client_id, identity_pool_id, password_policy, mfa_configuration, mfa_methods, unauthenticated_identities_enabled, oauth, username_attributes, standard_required_attributes, groups, } = amplifyOutputsAuthProperties;
    const authConfig = {
        Cognito: {
            userPoolId: user_pool_id,
            userPoolClientId: user_pool_client_id,
            groups,
        },
    };
    if (identity_pool_id) {
        authConfig.Cognito = {
            ...authConfig.Cognito,
            identityPoolId: identity_pool_id,
        };
    }
    if (password_policy) {
        authConfig.Cognito.passwordFormat = {
            requireLowercase: password_policy.require_lowercase,
            requireNumbers: password_policy.require_numbers,
            requireUppercase: password_policy.require_uppercase,
            requireSpecialCharacters: password_policy.require_symbols,
            minLength: password_policy.min_length ?? 6,
        };
    }
    if (mfa_configuration) {
        authConfig.Cognito.mfa = {
            status: getMfaStatus(mfa_configuration),
            smsEnabled: mfa_methods?.includes('SMS'),
            totpEnabled: mfa_methods?.includes('TOTP'),
        };
    }
    if (unauthenticated_identities_enabled) {
        authConfig.Cognito.allowGuestAccess = unauthenticated_identities_enabled;
    }
    if (oauth) {
        authConfig.Cognito.loginWith = {
            oauth: {
                domain: oauth.domain,
                redirectSignIn: oauth.redirect_sign_in_uri,
                redirectSignOut: oauth.redirect_sign_out_uri,
                responseType: oauth.response_type === 'token' ? 'token' : 'code',
                scopes: oauth.scopes,
                providers: getOAuthProviders(oauth.identity_providers),
            },
        };
    }
    if (username_attributes) {
        authConfig.Cognito.loginWith = {
            ...authConfig.Cognito.loginWith,
            email: username_attributes.includes('email'),
            phone: username_attributes.includes('phone_number'),
            // Signing in with a username is not currently supported in Gen2, this should always evaluate to false
            username: username_attributes.includes('username'),
        };
    }
    if (standard_required_attributes) {
        authConfig.Cognito.userAttributes = standard_required_attributes.reduce((acc, curr) => ({ ...acc, [curr]: { required: true } }), {});
    }
    return authConfig;
}
function parseAnalytics(amplifyOutputsAnalyticsProperties) {
    if (!amplifyOutputsAnalyticsProperties?.amazon_pinpoint) {
        return undefined;
    }
    const { amazon_pinpoint } = amplifyOutputsAnalyticsProperties;
    return {
        Pinpoint: {
            appId: amazon_pinpoint.app_id,
            region: amazon_pinpoint.aws_region,
        },
    };
}
function parseGeo(amplifyOutputsAnalyticsProperties) {
    if (!amplifyOutputsAnalyticsProperties) {
        return undefined;
    }
    const { aws_region, geofence_collections, maps, search_indices } = amplifyOutputsAnalyticsProperties;
    return {
        LocationService: {
            region: aws_region,
            searchIndices: search_indices,
            geofenceCollections: geofence_collections,
            maps,
        },
    };
}
function parseData(amplifyOutputsDataProperties) {
    if (!amplifyOutputsDataProperties) {
        return undefined;
    }
    const { aws_region, default_authorization_type, url, api_key, model_introspection, } = amplifyOutputsDataProperties;
    const GraphQL = {
        endpoint: url,
        defaultAuthMode: getGraphQLAuthMode(default_authorization_type),
        region: aws_region,
        apiKey: api_key,
        modelIntrospection: model_introspection,
    };
    return {
        GraphQL,
    };
}
function parseCustom(amplifyOutputsCustomProperties) {
    if (!amplifyOutputsCustomProperties?.events) {
        return undefined;
    }
    const { url, aws_region, api_key, default_authorization_type } = amplifyOutputsCustomProperties.events;
    const Events = {
        endpoint: url,
        defaultAuthMode: getGraphQLAuthMode(default_authorization_type),
        region: aws_region,
        apiKey: api_key,
    };
    return {
        Events,
    };
}
function parseNotifications(amplifyOutputsNotificationsProperties) {
    if (!amplifyOutputsNotificationsProperties) {
        return undefined;
    }
    const { aws_region, channels, amazon_pinpoint_app_id } = amplifyOutputsNotificationsProperties;
    const hasInAppMessaging = channels.includes('IN_APP_MESSAGING');
    const hasPushNotification = channels.includes('APNS') || channels.includes('FCM');
    if (!(hasInAppMessaging || hasPushNotification)) {
        return undefined;
    }
    // At this point, we know the Amplify outputs contains at least one supported channel
    const notificationsConfig = {};
    if (hasInAppMessaging) {
        notificationsConfig.InAppMessaging = {
            Pinpoint: {
                appId: amazon_pinpoint_app_id,
                region: aws_region,
            },
        };
    }
    if (hasPushNotification) {
        notificationsConfig.PushNotification = {
            Pinpoint: {
                appId: amazon_pinpoint_app_id,
                region: aws_region,
            },
        };
    }
    return notificationsConfig;
}
function parseAmplifyOutputs(amplifyOutputs) {
    const resourcesConfig = {};
    if (amplifyOutputs.storage) {
        resourcesConfig.Storage = parseStorage(amplifyOutputs.storage);
    }
    if (amplifyOutputs.auth) {
        resourcesConfig.Auth = parseAuth(amplifyOutputs.auth);
    }
    if (amplifyOutputs.analytics) {
        resourcesConfig.Analytics = parseAnalytics(amplifyOutputs.analytics);
    }
    if (amplifyOutputs.geo) {
        resourcesConfig.Geo = parseGeo(amplifyOutputs.geo);
    }
    if (amplifyOutputs.data) {
        resourcesConfig.API = parseData(amplifyOutputs.data);
    }
    if (amplifyOutputs.custom) {
        const customConfig = parseCustom(amplifyOutputs.custom);
        if (customConfig && 'Events' in customConfig) {
            resourcesConfig.API = { ...resourcesConfig.API, ...customConfig };
        }
    }
    if (amplifyOutputs.notifications) {
        resourcesConfig.Notifications = parseNotifications(amplifyOutputs.notifications);
    }
    return resourcesConfig;
}
const authModeNames = {
    AMAZON_COGNITO_USER_POOLS: 'userPool',
    API_KEY: 'apiKey',
    AWS_IAM: 'iam',
    AWS_LAMBDA: 'lambda',
    OPENID_CONNECT: 'oidc',
};
function getGraphQLAuthMode(authType) {
    return authModeNames[authType];
}
const providerNames = {
    GOOGLE: 'Google',
    LOGIN_WITH_AMAZON: 'Amazon',
    FACEBOOK: 'Facebook',
    SIGN_IN_WITH_APPLE: 'Apple',
};
function getOAuthProviders(providers = []) {
    return providers.reduce((oAuthProviders, provider) => {
        if (providerNames[provider] !== undefined) {
            oAuthProviders.push(providerNames[provider]);
        }
        return oAuthProviders;
    }, []);
}
function getMfaStatus(mfaConfiguration) {
    if (mfaConfiguration === 'OPTIONAL')
        return 'optional';
    if (mfaConfiguration === 'REQUIRED')
        return 'on';
    return 'off';
}
function createBucketInfoMap(buckets) {
    const mappedBuckets = {};
    buckets.forEach(({ name, bucket_name: bucketName, aws_region: region, paths }) => {
        if (name in mappedBuckets) {
            throw new Error(`Duplicate friendly name found: ${name}. Name must be unique.`);
        }
        mappedBuckets[name] = {
            bucketName,
            region,
            paths,
        };
    });
    return mappedBuckets;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ADD_OAUTH_LISTENER = Symbol('oauth-listener');

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const amplifyUuid = v4;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const AmplifyUrl = URL;
const AmplifyUrlSearchParams = URLSearchParams;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Parses the variety of configuration shapes that Amplify can accept into a ResourcesConfig.
 *
 * @param amplifyConfig An Amplify configuration object conforming to one of the supported schemas.
 * @return A ResourcesConfig for the provided configuration object.
 */
const parseAmplifyConfig = (amplifyConfig) => {
    if (Object.keys(amplifyConfig).some(key => key.startsWith('aws_'))) {
        return parseAWSExports(amplifyConfig);
    }
    else if (isAmplifyOutputs(amplifyConfig)) {
        return parseAmplifyOutputs(amplifyConfig);
    }
    else {
        return amplifyConfig;
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getCrypto = () => {
    if (typeof window === 'object' && typeof window.crypto === 'object') {
        return window.crypto;
    }
    // Next.js global polyfill
    if (typeof crypto === 'object') {
        return crypto;
    }
    throw new AmplifyError({
        name: 'MissingPolyfill',
        message: 'Cannot resolve the `crypto` function from the environment.',
    });
};
const getBtoa = () => {
    // browser
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
        return window.btoa;
    }
    // Next.js global polyfill
    if (typeof btoa === 'function') {
        return btoa;
    }
    throw new AmplifyError({
        name: 'Base64EncoderError',
        message: 'Cannot resolve the `btoa` function from the environment.',
    });
};

class AuthClass {
    /**
     * Configure Auth category
     *
     * @internal
     *
     * @param authResourcesConfig - Resources configurations required by Auth providers.
     * @param authOptions - Client options used by library
     *
     * @returns void
     */
    configure(authResourcesConfig, authOptions) {
        this.authConfig = authResourcesConfig;
        this.authOptions = authOptions;
    }
    /**
     * Fetch the auth tokens, and the temporary AWS credentials and identity if they are configured. By default it
     * does not refresh the auth tokens or credentials if they are loaded in storage already. You can force a refresh
     * with `{ forceRefresh: true }` input.
     *
     * @param options - Options configuring the fetch behavior.
     *
     * @returns Promise of current auth session {@link AuthSession}.
     */
    async fetchAuthSession(options = {}) {
        let credentialsAndIdentityId;
        let userSub;
        // Get tokens will throw if session cannot be refreshed (network or service error) or return null if not available
        const tokens = await this.getTokens(options);
        if (tokens) {
            userSub = tokens.accessToken?.payload?.sub;
            // getCredentialsAndIdentityId will throw if cannot get credentials (network or service error)
            credentialsAndIdentityId =
                await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
                    authConfig: this.authConfig,
                    tokens,
                    authenticated: true,
                    forceRefresh: options.forceRefresh,
                });
        }
        else {
            // getCredentialsAndIdentityId will throw if cannot get credentials (network or service error)
            credentialsAndIdentityId =
                await this.authOptions?.credentialsProvider?.getCredentialsAndIdentityId({
                    authConfig: this.authConfig,
                    authenticated: false,
                    forceRefresh: options.forceRefresh,
                });
        }
        return {
            tokens,
            credentials: credentialsAndIdentityId?.credentials,
            identityId: credentialsAndIdentityId?.identityId,
            userSub,
        };
    }
    async clearCredentials() {
        await this.authOptions?.credentialsProvider?.clearCredentialsAndIdentityId();
    }
    async getTokens(options) {
        return ((await this.authOptions?.tokenProvider?.getTokens(options)) ?? undefined);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns signed headers.
 *
 * @param headers `headers` from the request.
 * @returns List of headers included in canonical headers, separated by semicolons (;). This indicates which headers
 * are part of the signing process. Header names must use lowercase characters and must appear in alphabetical order.
 *
 * @internal
 */
const getSignedHeaders = (headers) => Object.keys(headers)
    .map(key => key.toLowerCase())
    .sort()
    .join(';');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// query params
const AMZ_DATE_QUERY_PARAM = 'X-Amz-Date';
const TOKEN_QUERY_PARAM = 'X-Amz-Security-Token';
// headers
const AUTH_HEADER = 'authorization';
const HOST_HEADER = 'host';
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
// identifiers
const KEY_TYPE_IDENTIFIER = 'aws4_request';
const SHA256_ALGORITHM_IDENTIFIER = 'AWS4-HMAC-SHA256';
const SIGNATURE_IDENTIFIER = 'AWS4';
// preset values
const EMPTY_HASH = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
const UNSIGNED_PAYLOAD = 'UNSIGNED-PAYLOAD';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns the credential scope which restricts the resulting signature to the specified region and service.
 *
 * @param date Current date in the format 'YYYYMMDD'.
 * @param region AWS region in which the service resides.
 * @param service Service to which the signed request is being sent.
 *
 * @returns  A string representing the credential scope with format 'YYYYMMDD/region/service/aws4_request'.
 *
 * @internal
 */
const getCredentialScope = (date, region, service) => `${date}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns expected date strings to be used in signing.
 *
 * @param date JavaScript `Date` object.
 * @returns `FormattedDates` object containing the following:
 * - longDate: A date string in 'YYYYMMDDThhmmssZ' format
 * - shortDate: A date string in 'YYYYMMDD' format
 *
 * @internal
 */
const getFormattedDates = (date) => {
    const longDate = date.toISOString().replace(/[:-]|\.\d{3}/g, '');
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Extracts common values used for signing both requests and urls.
 *
 * @param options `SignRequestOptions` object containing values used to construct the signature.
 * @returns Common `SigningValues` used for signing.
 *
 * @internal
 */
const getSigningValues = ({ credentials, signingDate = new Date(), signingRegion, signingService, uriEscapePath = true, }) => {
    // get properties from credentials
    const { accessKeyId, secretAccessKey, sessionToken } = credentials;
    // get formatted dates for signing
    const { longDate, shortDate } = getFormattedDates(signingDate);
    // copy header and set signing properties
    const credentialScope = getCredentialScope(shortDate, signingRegion, signingService);
    return {
        accessKeyId,
        credentialScope,
        longDate,
        secretAccessKey,
        sessionToken,
        shortDate,
        signingRegion,
        signingService,
        uriEscapePath,
    };
};

/**
 * @internal
 */
var BLOCK_SIZE = 64;
/**
 * @internal
 */
var DIGEST_LENGTH = 32;
/**
 * @internal
 */
var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
/**
 * @internal
 */
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

/**
 * @internal
 */
var RawSha256 = /** @class */ (function () {
    function RawSha256() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    RawSha256.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] =
                    ((buffer[i * 4] & 0xff) << 24) |
                        ((buffer[i * 4 + 1] & 0xff) << 16) |
                        ((buffer[i * 4 + 2] & 0xff) << 8) |
                        (buffer[i * 4 + 3] & 0xff);
            }
            else {
                var u = this.temp[i - 2];
                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
                u = this.temp[i - 15];
                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
                this.temp[i] =
                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
            }
            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^
                ((state4 >>> 11) | (state4 << 21)) ^
                ((state4 >>> 25) | (state4 << 7))) +
                ((state4 & state5) ^ (~state4 & state6))) |
                0) +
                ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) |
                0;
            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^
                ((state0 >>> 13) | (state0 << 19)) ^
                ((state0 >>> 22) | (state0 << 10))) +
                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
                0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}());

const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return Buffer$1.from(input, encoding) ;
};

const fromUtf8$1 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : fromUtf8$1;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}

var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.secret = secret;
        this.hash = new RawSha256();
        this.reset();
    }
    Sha256.prototype.update = function (toHash) {
        if (isEmptyData(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update(convertToBuffer(toHash));
        }
        catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */
    Sha256.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */
    Sha256.prototype.digest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.digestSync()];
            });
        });
    };
    Sha256.prototype.reset = function () {
        this.hash = new RawSha256();
        if (this.secret) {
            this.outer = new RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (var i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    };
    return Sha256;
}());
function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
        var bufferHash = new RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}

const SHORT_TO_HEX = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: V6 update to different crypto dependency?
/**
 * Returns the hashed data a `Uint8Array`.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns `Uint8Array` created from the data as input to a hash function.
 */
const getHashedData = (key, data) => {
    const sha256 = new Sha256(key ?? undefined);
    sha256.update(data);
    // TODO: V6 flip to async digest
    const hashedData = sha256.digestSync();
    return hashedData;
};
/**
 * Returns the hashed data as a hex string.
 *
 * @param key `SourceData` to be used as hashing key.
 * @param data Hashable `SourceData`.
 * @returns String using lowercase hexadecimal characters created from the data as input to a hash function.
 *
 * @internal
 */
const getHashedDataAsHex = (key, data) => {
    const hashedData = getHashedData(key, data);
    return toHex(hashedData);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns canonical headers.
 *
 * @param headers Headers from the request.
 * @returns Request headers that will be signed, and their values, separated by newline characters. Header names must
 * use lowercase characters, must appear in alphabetical order, and must be followed by a colon (:). For the values,
 * trim any leading or trailing spaces, convert sequential spaces to a single space, and separate the values
 * for a multi-value header using commas.
 *
 * @internal
 */
const getCanonicalHeaders = (headers) => Object.entries(headers)
    .map(([key, value]) => ({
    key: key.toLowerCase(),
    value: value?.trim().replace(/\s+/g, ' ') ?? '',
}))
    .sort((a, b) => (a.key < b.key ? -1 : 1))
    .map(entry => `${entry.key}:${entry.value}\n`)
    .join('');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a canonical query string.
 *
 * @param searchParams `searchParams` from the request url.
 * @returns URL-encoded query string parameters, separated by ampersands (&). Percent-encode reserved characters,
 * including the space character. Encode names and values separately. If there are empty parameters, append the equals
 * sign to the parameter name before encoding. After encoding, sort the parameters alphabetically by key name. If there
 * is no query string, use an empty string ("").
 *
 * @internal
 */
const getCanonicalQueryString = (searchParams) => Array.from(searchParams)
    .sort(([keyA, valA], [keyB, valB]) => {
    if (keyA === keyB) {
        return valA < valB ? -1 : 1;
    }
    return keyA < keyB ? -1 : 1;
})
    .map(([key, val]) => `${escapeUri(key)}=${escapeUri(val)}`)
    .join('&');
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a canonical uri.
 *
 * @param pathname `pathname` from request url.
 * @param uriEscapePath Whether to uri encode the path as part of canonical uri. It's used for S3 only where the
 *   pathname is already uri encoded, and the signing process is not expected to uri encode it again. Defaults to true.
 * @returns URI-encoded version of the absolute path component URL (everything between the host and the question mark
 * character (?) that starts the query string parameters). If the absolute path is empty, a forward slash character (/).
 *
 * @internal
 */
const getCanonicalUri = (pathname, uriEscapePath = true) => pathname
    ? uriEscapePath
        ? encodeURIComponent(pathname).replace(/%2F/g, '/')
        : pathname
    : '/';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns the hashed payload.
 *
 * @param body `body` (payload) from the request.
 * @returns String created using the payload in the body of the HTTP request as input to a hash function. This string
 * uses lowercase hexadecimal characters. If the payload is empty, return precalculated result of an empty hash.
 *
 * @internal
 */
const getHashedPayload = (body) => {
    // return precalculated empty hash if body is undefined or null
    if (body == null) {
        return EMPTY_HASH;
    }
    if (isSourceData(body)) {
        const hashedData = getHashedDataAsHex(null, body);
        return hashedData;
    }
    // Defined body is not signable. Return unsigned payload which may or may not be accepted by the service.
    return UNSIGNED_PAYLOAD;
};
const isSourceData = (body) => typeof body === 'string' || ArrayBuffer.isView(body) || isArrayBuffer(body);
const isArrayBuffer = (arg) => (typeof ArrayBuffer === 'function' && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === '[object ArrayBuffer]';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a canonical request.
 *
 * @param request `HttpRequest` from which to create the canonical request from.
 * @param uriEscapePath Whether to uri encode the path as part of canonical uri. It's used for S3 only where the
 *   pathname is already uri encoded, and the signing process is not expected to uri encode it again. Defaults to true.
 * @returns String created by by concatenating the following strings, separated by newline characters:
 * - HTTPMethod
 * - CanonicalUri
 * - CanonicalQueryString
 * - CanonicalHeaders
 * - SignedHeaders
 * - HashedPayload
 *
 * @internal
 */
const getCanonicalRequest = ({ body, headers, method, url }, uriEscapePath = true) => [
    method,
    getCanonicalUri(url.pathname, uriEscapePath),
    getCanonicalQueryString(url.searchParams),
    getCanonicalHeaders(headers),
    getSignedHeaders(headers),
    getHashedPayload(body),
].join('\n');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a signing key to be used for signing requests.
 *
 * @param secretAccessKey AWS secret access key from credentials.
 * @param date Current date in the format 'YYYYMMDD'.
 * @param region AWS region in which the service resides.
 * @param service Service to which the signed request is being sent.
 *
 * @returns `Uint8Array` calculated from its composite parts.
 *
 * @internal
 */
const getSigningKey = (secretAccessKey, date, region, service) => {
    const key = `${SIGNATURE_IDENTIFIER}${secretAccessKey}`;
    const dateKey = getHashedData(key, date);
    const regionKey = getHashedData(dateKey, region);
    const serviceKey = getHashedData(regionKey, service);
    const signingKey = getHashedData(serviceKey, KEY_TYPE_IDENTIFIER);
    return signingKey;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a string to be signed.
 *
 * @param date Current date in the format 'YYYYMMDDThhmmssZ'.
 * @param credentialScope String representing the credential scope with format 'YYYYMMDD/region/service/aws4_request'.
 * @param hashedRequest Hashed canonical request.
 *
 * @returns A string created by by concatenating the following strings, separated by newline characters:
 * - Algorithm
 * - RequestDateTime
 * - CredentialScope
 * - HashedCanonicalRequest
 *
 * @internal
 */
const getStringToSign = (date, credentialScope, hashedRequest) => [SHA256_ALGORITHM_IDENTIFIER, date, credentialScope, hashedRequest].join('\n');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Calculates and returns an AWS API Signature.
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns AWS API Signature to sign a request or url with.
 *
 * @internal
 */
const getSignature = (request, { credentialScope, longDate, secretAccessKey, shortDate, signingRegion, signingService, uriEscapePath, }) => {
    // step 1: create a canonical request
    const canonicalRequest = getCanonicalRequest(request, uriEscapePath);
    // step 2: create a hash of the canonical request
    const hashedRequest = getHashedDataAsHex(null, canonicalRequest);
    // step 3: create a string to sign
    const stringToSign = getStringToSign(longDate, credentialScope, hashedRequest);
    // step 4: calculate the signature
    const signature = getHashedDataAsHex(getSigningKey(secretAccessKey, shortDate, signingRegion, signingService), stringToSign);
    return signature;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Given a `HttpRequest`, returns a Signature Version 4 signed `HttpRequest`.
 *
 * @param request `HttpRequest` to be signed.
 * @param signRequestOptions `SignRequestOptions` object containing values used to construct the signature.
 * @returns A `HttpRequest` with authentication headers which can grant temporary access to AWS resources.
 */
const signRequest = (request, options) => {
    const signingValues = getSigningValues(options);
    const { accessKeyId, credentialScope, longDate, sessionToken } = signingValues;
    // create the request to sign
    const headers = { ...request.headers };
    headers[HOST_HEADER] = request.url.host;
    headers[AMZ_DATE_HEADER] = longDate;
    if (sessionToken) {
        headers[TOKEN_HEADER] = sessionToken;
    }
    const requestToSign = { ...request, headers };
    // calculate and add the signature to the request
    const signature = getSignature(requestToSign, signingValues);
    const credentialEntry = `Credential=${accessKeyId}/${credentialScope}`;
    const signedHeadersEntry = `SignedHeaders=${getSignedHeaders(headers)}`;
    const signatureEntry = `Signature=${signature}`;
    headers[AUTH_HEADER] =
        `${SHA256_ALGORITHM_IDENTIFIER} ${credentialEntry}, ${signedHeadersEntry}, ${signatureEntry}`;
    return requestToSign;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var Framework;
(function (Framework) {
    // < 100 - Web frameworks
    Framework["WebUnknown"] = "0";
    Framework["React"] = "1";
    Framework["NextJs"] = "2";
    Framework["Angular"] = "3";
    Framework["VueJs"] = "4";
    Framework["Nuxt"] = "5";
    Framework["Svelte"] = "6";
    // 100s - Server side frameworks
    Framework["ServerSideUnknown"] = "100";
    Framework["ReactSSR"] = "101";
    Framework["NextJsSSR"] = "102";
    Framework["AngularSSR"] = "103";
    Framework["VueJsSSR"] = "104";
    Framework["NuxtSSR"] = "105";
    Framework["SvelteSSR"] = "106";
    // 200s - Mobile framework
    Framework["ReactNative"] = "201";
    Framework["Expo"] = "202";
})(Framework || (Framework = {}));
var Category;
(function (Category) {
    Category["AI"] = "ai";
    Category["API"] = "api";
    Category["Auth"] = "auth";
    Category["Analytics"] = "analytics";
    Category["DataStore"] = "datastore";
    Category["Geo"] = "geo";
    Category["InAppMessaging"] = "inappmessaging";
    Category["Interactions"] = "interactions";
    Category["Predictions"] = "predictions";
    Category["PubSub"] = "pubsub";
    Category["PushNotification"] = "pushnotification";
    Category["Storage"] = "storage";
})(Category || (Category = {}));
var AiAction;
(function (AiAction) {
    AiAction["CreateConversation"] = "1";
    AiAction["GetConversation"] = "2";
    AiAction["ListConversations"] = "3";
    AiAction["DeleteConversation"] = "4";
    AiAction["SendMessage"] = "5";
    AiAction["ListMessages"] = "6";
    AiAction["OnMessage"] = "7";
    AiAction["Generation"] = "8";
    AiAction["UpdateConversation"] = "9";
})(AiAction || (AiAction = {}));
var AnalyticsAction;
(function (AnalyticsAction) {
    AnalyticsAction["Record"] = "1";
    AnalyticsAction["IdentifyUser"] = "2";
})(AnalyticsAction || (AnalyticsAction = {}));
var ApiAction;
(function (ApiAction) {
    ApiAction["GraphQl"] = "1";
    ApiAction["Get"] = "2";
    ApiAction["Post"] = "3";
    ApiAction["Put"] = "4";
    ApiAction["Patch"] = "5";
    ApiAction["Del"] = "6";
    ApiAction["Head"] = "7";
})(ApiAction || (ApiAction = {}));
var AuthAction;
(function (AuthAction) {
    AuthAction["SignUp"] = "1";
    AuthAction["ConfirmSignUp"] = "2";
    AuthAction["ResendSignUpCode"] = "3";
    AuthAction["SignIn"] = "4";
    AuthAction["FetchMFAPreference"] = "6";
    AuthAction["UpdateMFAPreference"] = "7";
    AuthAction["SetUpTOTP"] = "10";
    AuthAction["VerifyTOTPSetup"] = "11";
    AuthAction["ConfirmSignIn"] = "12";
    AuthAction["DeleteUserAttributes"] = "15";
    AuthAction["DeleteUser"] = "16";
    AuthAction["UpdateUserAttributes"] = "17";
    AuthAction["FetchUserAttributes"] = "18";
    AuthAction["ConfirmUserAttribute"] = "22";
    AuthAction["SignOut"] = "26";
    AuthAction["UpdatePassword"] = "27";
    AuthAction["ResetPassword"] = "28";
    AuthAction["ConfirmResetPassword"] = "29";
    AuthAction["FederatedSignIn"] = "30";
    AuthAction["RememberDevice"] = "32";
    AuthAction["ForgetDevice"] = "33";
    AuthAction["FetchDevices"] = "34";
    AuthAction["SendUserAttributeVerificationCode"] = "35";
    AuthAction["SignInWithRedirect"] = "36";
    AuthAction["StartWebAuthnRegistration"] = "37";
    AuthAction["CompleteWebAuthnRegistration"] = "38";
    AuthAction["ListWebAuthnCredentials"] = "39";
    AuthAction["DeleteWebAuthnCredential"] = "40";
})(AuthAction || (AuthAction = {}));
var DataStoreAction;
(function (DataStoreAction) {
    DataStoreAction["Subscribe"] = "1";
    DataStoreAction["GraphQl"] = "2";
})(DataStoreAction || (DataStoreAction = {}));
var GeoAction;
(function (GeoAction) {
    GeoAction["SearchByText"] = "0";
    GeoAction["SearchByCoordinates"] = "1";
    GeoAction["SearchForSuggestions"] = "2";
    GeoAction["SearchByPlaceId"] = "3";
    GeoAction["SaveGeofences"] = "4";
    GeoAction["GetGeofence"] = "5";
    GeoAction["ListGeofences"] = "6";
    GeoAction["DeleteGeofences"] = "7";
})(GeoAction || (GeoAction = {}));
var InAppMessagingAction;
(function (InAppMessagingAction) {
    InAppMessagingAction["SyncMessages"] = "1";
    InAppMessagingAction["IdentifyUser"] = "2";
    InAppMessagingAction["NotifyMessageInteraction"] = "3";
})(InAppMessagingAction || (InAppMessagingAction = {}));
var InteractionsAction;
(function (InteractionsAction) {
    InteractionsAction["None"] = "0";
})(InteractionsAction || (InteractionsAction = {}));
var PredictionsAction;
(function (PredictionsAction) {
    PredictionsAction["Convert"] = "1";
    PredictionsAction["Identify"] = "2";
    PredictionsAction["Interpret"] = "3";
})(PredictionsAction || (PredictionsAction = {}));
var PubSubAction;
(function (PubSubAction) {
    PubSubAction["Subscribe"] = "1";
})(PubSubAction || (PubSubAction = {}));
var PushNotificationAction;
(function (PushNotificationAction) {
    PushNotificationAction["InitializePushNotifications"] = "1";
    PushNotificationAction["IdentifyUser"] = "2";
})(PushNotificationAction || (PushNotificationAction = {}));
var StorageAction;
(function (StorageAction) {
    StorageAction["UploadData"] = "1";
    StorageAction["DownloadData"] = "2";
    StorageAction["List"] = "3";
    StorageAction["Copy"] = "4";
    StorageAction["Remove"] = "5";
    StorageAction["GetProperties"] = "6";
    StorageAction["GetUrl"] = "7";
    StorageAction["GetDataAccess"] = "8";
    StorageAction["ListCallerAccessGrants"] = "9";
})(StorageAction || (StorageAction = {}));

// generated by genversion
const version = '6.10.3';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const globalExists = () => {
    return typeof global !== 'undefined';
};
const windowExists = () => {
    return typeof window !== 'undefined';
};
const documentExists = () => {
    return typeof document !== 'undefined';
};
const processExists = () => {
    return typeof process !== 'undefined';
};
const keyPrefixMatch = (object, prefix) => {
    return !!Object.keys(object).find(key => key.startsWith(prefix));
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react 18.2 - built using Vite
function reactWebDetect() {
    const elementKeyPrefixedWithReact = (key) => {
        return key.startsWith('_react') || key.startsWith('__react');
    };
    const elementIsReactEnabled = (element) => {
        return Object.keys(element).find(elementKeyPrefixedWithReact);
    };
    const allElementsWithId = () => Array.from(document.querySelectorAll('[id]'));
    return documentExists() && allElementsWithId().some(elementIsReactEnabled);
}
function reactSSRDetect() {
    return (processExists() &&
        typeof process.env !== 'undefined' &&
        !!Object.keys(process.env).find(key => key.includes('react')));
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with vue 3.3.2
function vueWebDetect() {
    return windowExists() && keyPrefixMatch(window, '__VUE');
}
function vueSSRDetect() {
    return globalExists() && keyPrefixMatch(global, '__VUE');
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with svelte 3.59
function svelteWebDetect() {
    return windowExists() && keyPrefixMatch(window, '__SVELTE');
}
function svelteSSRDetect() {
    return (processExists() &&
        typeof process.env !== 'undefined' &&
        !!Object.keys(process.env).find(key => key.includes('svelte')));
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with next 13.4 / react 18.2
function nextWebDetect() {
    return (windowExists() &&
        window.next &&
        typeof window.next === 'object');
}
function nextSSRDetect() {
    return (globalExists() &&
        (keyPrefixMatch(global, '__next') || keyPrefixMatch(global, '__NEXT')));
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with nuxt 2.15 / vue 2.7
function nuxtWebDetect() {
    return (windowExists() &&
        (window.__NUXT__ !== undefined ||
            window.$nuxt !== undefined));
}
function nuxtSSRDetect() {
    return (globalExists() && typeof global.__NUXT_PATHS__ !== 'undefined');
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with @angular/core 16.0.0
function angularWebDetect() {
    const angularVersionSetInDocument = Boolean(documentExists() && document.querySelector('[ng-version]'));
    const angularContentSetInWindow = Boolean(windowExists() && typeof window.ng !== 'undefined');
    return angularVersionSetInDocument || angularContentSetInWindow;
}
function angularSSRDetect() {
    return ((processExists() &&
        typeof process.env === 'object' &&
        process.env.npm_lifecycle_script?.startsWith('ng ')) ||
        false);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with react-native 0.17.7
function reactNativeDetect() {
    return (typeof navigator !== 'undefined' &&
        typeof navigator.product !== 'undefined' &&
        navigator.product === 'ReactNative');
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Tested with expo 48 / react-native 0.71.3
function expoDetect() {
    return globalExists() && typeof global.expo !== 'undefined';
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function webDetect() {
    return windowExists();
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// These are in the order of detection where when both are detectable, the early Framework will be reported
const detectionMap = [
    // First, detect mobile
    { platform: Framework.Expo, detectionMethod: expoDetect },
    { platform: Framework.ReactNative, detectionMethod: reactNativeDetect },
    // Next, detect web frameworks
    { platform: Framework.NextJs, detectionMethod: nextWebDetect },
    { platform: Framework.Nuxt, detectionMethod: nuxtWebDetect },
    { platform: Framework.Angular, detectionMethod: angularWebDetect },
    { platform: Framework.React, detectionMethod: reactWebDetect },
    { platform: Framework.VueJs, detectionMethod: vueWebDetect },
    { platform: Framework.Svelte, detectionMethod: svelteWebDetect },
    { platform: Framework.WebUnknown, detectionMethod: webDetect },
    // Last, detect ssr frameworks
    { platform: Framework.NextJsSSR, detectionMethod: nextSSRDetect },
    { platform: Framework.NuxtSSR, detectionMethod: nuxtSSRDetect },
    { platform: Framework.ReactSSR, detectionMethod: reactSSRDetect },
    { platform: Framework.VueJsSSR, detectionMethod: vueSSRDetect },
    { platform: Framework.AngularSSR, detectionMethod: angularSSRDetect },
    { platform: Framework.SvelteSSR, detectionMethod: svelteSSRDetect },
];
function detect() {
    return (detectionMap.find(detectionEntry => detectionEntry.detectionMethod())
        ?.platform || Framework.ServerSideUnknown);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// We want to cache detection since the framework won't change
let frameworkCache;
const frameworkChangeObservers = [];
// Setup the detection reset tracking / timeout delays
let resetTriggered = false;
const SSR_RESET_TIMEOUT = 10; // ms
const WEB_RESET_TIMEOUT = 10; // ms
const PRIME_FRAMEWORK_DELAY = 1000; // ms
const detectFramework = () => {
    if (!frameworkCache) {
        frameworkCache = detect();
        if (resetTriggered) {
            // The final run of detectFramework:
            // Starting from this point, the `frameworkCache` becomes "final".
            // So we don't need to notify the observers again so the observer
            // can be removed after the final notice.
            while (frameworkChangeObservers.length) {
                frameworkChangeObservers.pop()?.();
            }
        }
        else {
            // The first run of detectFramework:
            // Every time we update the cache, call each observer function
            frameworkChangeObservers.forEach(fcn => {
                fcn();
            });
        }
        // Retry once for either Unknown type after a delay (explained below)
        resetTimeout(Framework.ServerSideUnknown, SSR_RESET_TIMEOUT);
        resetTimeout(Framework.WebUnknown, WEB_RESET_TIMEOUT);
    }
    return frameworkCache;
};
function clearCache() {
    frameworkCache = undefined;
}
// For a framework type and a delay amount, setup the event to re-detect
//   During the runtime boot, it is possible that framework detection will
//   be triggered before the framework has made modifications to the
//   global/window/etc needed for detection. When no framework is detected
//   we will reset and try again to ensure we don't use a cached
//   non-framework detection result for all requests.
function resetTimeout(framework, delay) {
    if (frameworkCache === framework && !resetTriggered) {
        setTimeout(() => {
            clearCache();
            resetTriggered = true;
            setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
        }, delay);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Maintains custom user-agent state set by external consumers.
const customUserAgentState = {};
const getCustomUserAgent = (category, api) => customUserAgentState[category]?.[api]?.additionalDetails;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const BASE_USER_AGENT = `aws-amplify`;
/** Sanitize Amplify version string be removing special character + and character post the special character  */
const sanitizeAmplifyVersion = (amplifyVersion) => amplifyVersion.replace(/\+.*/, '');
const getAmplifyUserAgentObject = ({ category, action, } = {}) => {
    const userAgent = [
        [BASE_USER_AGENT, sanitizeAmplifyVersion(version)],
    ];
    if (category) {
        userAgent.push([category, action]);
    }
    userAgent.push(['framework', detectFramework()]);
    if (category && action) {
        const customState = getCustomUserAgent(category, action);
        if (customState) {
            customState.forEach(state => {
                userAgent.push(state);
            });
        }
    }
    return userAgent;
};
const getAmplifyUserAgent = (customUserAgentDetails) => {
    const userAgent = getAmplifyUserAgentObject(customUserAgentDetails);
    const userAgentString = userAgent
        .map(([agentKey, agentValue]) => agentKey && agentValue ? `${agentKey}/${agentValue}` : agentKey)
        .join(' ');
    return userAgentString;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Error class for errors that associated with unsuccessful HTTP responses.
 * It's throw by API category REST API handlers and GraphQL query handlers for now.
 */
class ApiError extends AmplifyError {
    /**
     * The unwrapped HTTP response causing the given API error.
     */
    get response() {
        return this._response
            ? replicateApiErrorResponse(this._response)
            : undefined;
    }
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = ApiError;
        Object.setPrototypeOf(this, ApiError.prototype);
        if (params.response) {
            this._response = params.response;
        }
    }
}
const replicateApiErrorResponse = (response) => ({
    ...response,
    headers: { ...response.headers },
});

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class PlatformNotSupportedError extends AmplifyError {
    constructor() {
        super({
            name: AmplifyErrorCode.PlatformNotSupported,
            message: 'Function not supported on current platform',
        });
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class BackgroundManagerNotOpenError extends Error {
    constructor(message) {
        super(`BackgroundManagerNotOpenError: ${message}`);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * All possible states a `BackgroundProcessManager` instance can be in.
 */
var BackgroundProcessManagerState;
(function (BackgroundProcessManagerState) {
    /**
     * Accepting new jobs.
     */
    BackgroundProcessManagerState["Open"] = "Open";
    /**
     * Not accepting new jobs. Waiting for submitted jobs to complete.
     */
    BackgroundProcessManagerState["Closing"] = "Closing";
    /**
     * Not accepting new jobs. All submitted jobs are complete.
     */
    BackgroundProcessManagerState["Closed"] = "Closed";
})(BackgroundProcessManagerState || (BackgroundProcessManagerState = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @private For internal Amplify use.
 *
 * Creates a new scope for promises, observables, and other types of work or
 * processes that may be running in the background. This manager provides
 * an singular entrypoint to request termination and await completion.
 *
 * As work completes on its own prior to close, the manager removes them
 * from the registry to avoid holding references to completed jobs.
 */
class BackgroundProcessManager {
    constructor() {
        /**
         * A string indicating whether the manager is accepting new work ("Open"),
         * waiting for work to complete ("Closing"), or fully done with all
         * submitted work and *not* accepting new jobs ("Closed").
         */
        this._state = BackgroundProcessManagerState.Open;
        /**
         * The list of outstanding jobs we'll need to wait for upon `close()`
         */
        this.jobs = new Set();
    }
    add(jobOrDescription, optionalDescription) {
        let job;
        let description;
        if (typeof jobOrDescription === 'string') {
            job = undefined;
            description = jobOrDescription;
        }
        else {
            job = jobOrDescription;
            description = optionalDescription;
        }
        const error = this.closedFailure(description);
        if (error)
            return error;
        if (job === undefined) {
            return this.addHook(description);
        }
        else if (typeof job === 'function') {
            return this.addFunction(job, description);
        }
        else if (job instanceof BackgroundProcessManager) {
            this.addManager(job, description);
        }
        else {
            throw new Error('If `job` is provided, it must be an Observable, Function, or BackgroundProcessManager.');
        }
    }
    /**
     * Adds a **cleaner** function that doesn't immediately get executed.
     * Instead, the caller gets a **terminate** function back. The *cleaner* is
     * invoked only once the mananger *closes* or the returned **terminate**
     * function is called.
     *
     * @param clean The cleanup function.
     * @param description Optional description to help identify pending jobs.
     * @returns A terminate function.
     */
    addCleaner(clean, description) {
        const { resolve, onTerminate } = this.addHook(description);
        const proxy = async () => {
            await clean();
            resolve();
        };
        onTerminate.then(proxy);
        return proxy;
    }
    addFunction(job, description) {
        // the function we call when we want to try to terminate this job.
        let terminate;
        // the promise the job can opt into listening to for termination.
        const onTerminate = new Promise(resolve => {
            terminate = resolve;
        });
        // finally! start the job.
        const jobResult = job(onTerminate);
        // depending on what the job gives back, register the result
        // so we can monitor for completion.
        if (typeof jobResult?.then === 'function') {
            this.registerPromise(jobResult, terminate, description);
        }
        // At the end of the day, or you know, method call, it doesn't matter
        // what the return value is at all; we just pass it through to the
        // caller.
        return jobResult;
    }
    addManager(manager, description) {
        this.addCleaner(async () => manager.close(), description);
    }
    /**
     * Creates and registers a fabricated job for processes that need to operate
     * with callbacks/hooks. The returned `resolve` and `reject`
     * functions can be used to signal the job is done successfully or not.
     * The returned `onTerminate` is a promise that will resolve when the
     * manager is requesting the termination of the job.
     *
     * @param description Optional description to help identify pending jobs.
     * @returns `{ resolve, reject, onTerminate }`
     */
    addHook(description) {
        // the resolve/reject functions we'll provide to the caller to signal
        // the state of the job.
        let promiseResolve;
        let promiseReject;
        // the underlying promise we'll use to manage it, pretty much like
        // any other promise.
        const promise = new Promise((resolve, reject) => {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        // the function we call when we want to try to terminate this job.
        let terminate;
        // the promise the job can opt into listening to for termination.
        const onTerminate = new Promise(resolve => {
            terminate = resolve;
        });
        this.registerPromise(promise, terminate, description);
        return {
            resolve: promiseResolve,
            reject: promiseReject,
            onTerminate,
        };
    }
    /**
     * Adds a Promise based job to the list of jobs for monitoring and listens
     * for either a success or failure, upon which the job is considered "done"
     * and removed from the registry.
     *
     * @param promise A promise that is on its way to being returned to a
     * caller, which needs to be tracked as a background job.
     * @param terminate The termination function to register, which can be
     * invoked to request the job stop.
     * @param description Optional description to help identify pending jobs.
     */
    registerPromise(promise, terminate, description) {
        const jobEntry = { promise, terminate, description };
        this.jobs.add(jobEntry);
        // in all of my testing, it is safe to multi-subscribe to a promise.
        // so, rather than create another layer of promising, we're just going
        // to hook into the promise we already have, and when it's done
        // (successfully or not), we no longer need to wait for it upon close.
        //
        // sorry this is a bit hand-wavy:
        //
        // i believe we use `.then` and `.catch` instead of `.finally` because
        // `.finally` is invoked in a different order in the sequence, and this
        // breaks assumptions throughout and causes failures.
        promise
            .then(() => {
            this.jobs.delete(jobEntry);
        })
            .catch(() => {
            this.jobs.delete(jobEntry);
        });
    }
    /**
     * The number of jobs being waited on.
     *
     * We don't use this for anything. It's just informational for the caller,
     * and can be used in logging and testing.
     *
     * @returns the number of jobs.
     */
    get length() {
        return this.jobs.size;
    }
    /**
     * The execution state of the manager. One of:
     *
     * 1. "Open" -> Accepting new jobs
     * 1. "Closing" -> Not accepting new work. Waiting for jobs to complete.
     * 1. "Closed" -> Not accepting new work. All submitted jobs are complete.
     */
    get state() {
        return this._state;
    }
    /**
     * The registered `description` of all still-pending jobs.
     *
     * @returns descriptions as an array.
     */
    get pending() {
        return Array.from(this.jobs).map(job => job.description);
    }
    /**
     * Whether the manager is accepting new jobs.
     */
    get isOpen() {
        return this._state === BackgroundProcessManagerState.Open;
    }
    /**
     * Whether the manager is rejecting new work, but still waiting for
     * submitted work to complete.
     */
    get isClosing() {
        return this._state === BackgroundProcessManagerState.Closing;
    }
    /**
     * Whether the manager is rejecting work and done waiting for submitted
     * work to complete.
     */
    get isClosed() {
        return this._state === BackgroundProcessManagerState.Closed;
    }
    closedFailure(description) {
        if (!this.isOpen) {
            return Promise.reject(new BackgroundManagerNotOpenError([
                `The manager is ${this.state}.`,
                `You tried to add "${description}".`,
                `Pending jobs: [\n${this.pending
                    .map(t => '    ' + t)
                    .join(',\n')}\n]`,
            ].join('\n')));
        }
    }
    /**
     * Signals jobs to stop (for those that accept interruptions) and waits
     * for confirmation that jobs have stopped.
     *
     * This immediately puts the manager into a closing state and just begins
     * to reject new work. After all work in the manager is complete, the
     * manager goes into a `Completed` state and `close()` returns.
     *
     * This call is idempotent.
     *
     * If the manager is already closing or closed, `finalCleaup` is not executed.
     *
     * @param onClosed
     * @returns The settled results of each still-running job's promise. If the
     * manager is already closed, this will contain the results as of when the
     * manager's `close()` was called in an `Open` state.
     */
    async close() {
        if (this.isOpen) {
            this._state = BackgroundProcessManagerState.Closing;
            for (const job of Array.from(this.jobs)) {
                try {
                    job.terminate();
                }
                catch (error) {
                    // Due to potential races with a job's natural completion, it's
                    // reasonable to expect the termination call to fail. Hence,
                    // not logging as an error.
                    console.warn(`Failed to send termination signal to job. Error: ${error.message}`, job);
                }
            }
            // Use `allSettled()` because we want to wait for all to finish. We do
            // not want to stop waiting if there is a failure.
            this._closingPromise = Promise.allSettled(Array.from(this.jobs).map(j => j.promise));
            await this._closingPromise;
            this._state = BackgroundProcessManagerState.Closed;
        }
        return this._closingPromise;
    }
    /**
     * Signals the manager to start accepting work (again) and returns once
     * the manager is ready to do so.
     *
     * If the state is already `Open`, this call is a no-op.
     *
     * If the state is `Closed`, this call simply updates state and returns.
     *
     * If the state is `Closing`, this call waits for completion before it
     * updates the state and returns.
     */
    async open() {
        if (this.isClosing) {
            await this.close();
        }
        this._state = BackgroundProcessManagerState.Open;
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Christian Speckner <cnspeckn@googlemail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Mutex {
    constructor() {
        this._queue = [];
        this._pending = false;
    }
    isLocked() {
        return this._pending;
    }
    acquire() {
        const ticket = new Promise(resolve => this._queue.push(resolve));
        if (!this._pending) {
            this._dispatchNext();
        }
        return ticket;
    }
    runExclusive(callback) {
        return this.acquire().then(release => {
            let result;
            try {
                result = callback();
            }
            catch (e) {
                release();
                throw e;
            }
            return Promise.resolve(result).then((x) => {
                release();
                return x;
            }, e => {
                release();
                throw e;
            });
        });
    }
    _dispatchNext() {
        if (this._queue.length > 0) {
            this._pending = true;
            this._queue.shift()(this._dispatchNext.bind(this));
        }
        else {
            this._pending = false;
        }
    }
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

function errorContext(cb) {
    {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler$1(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler$1,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

function isScheduler(value) {
    return value && isFunction(value.schedule);
}

function last(arr) {
    return arr[arr.length - 1];
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}

var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

function isInteropObservable(input) {
    return isFunction(input[observable]);
}

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process$1(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}

function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}

function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}

function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}

function scheduleIterable(input, scheduler) {
    return new Observable(function (subscriber) {
        var iterator$1;
        executeSchedule(subscriber, scheduler, function () {
            iterator$1 = input[iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator$1.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return(); };
    });
}

function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}

function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}

function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    return from(args, scheduler);
}

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}

function catchError(selector) {
    return operate(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
            handledResult = innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class Reachability {
    networkMonitor(_) {
        const globalObj = isWebWorker()
            ? self
            : typeof window !== 'undefined' && window;
        if (!globalObj) {
            return from([{ online: true }]);
        }
        return new Observable(observer => {
            observer.next({ online: globalObj.navigator.onLine });
            const notifyOnline = () => {
                observer.next({ online: true });
            };
            const notifyOffline = () => {
                observer.next({ online: false });
            };
            globalObj.addEventListener('online', notifyOnline);
            globalObj.addEventListener('offline', notifyOffline);
            Reachability._observers.push(observer);
            return () => {
                globalObj.removeEventListener('online', notifyOnline);
                globalObj.removeEventListener('offline', notifyOffline);
                Reachability._observers = Reachability._observers.filter(_observer => _observer !== observer);
            };
        });
    }
    // expose observers to simulate offline mode for integration testing
    static _observerOverride(status) {
        for (const observer of this._observers) {
            if (observer.closed) {
                this._observers = this._observers.filter(_observer => _observer !== observer);
                continue;
            }
            observer?.next && observer.next(status);
        }
    }
}
Reachability._observers = [];

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fetchAuthSession$1 = (amplify, options) => {
    return amplify.Auth.fetchAuthSession(options);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const AMPLIFY_SYMBOL = (typeof Symbol !== 'undefined'
    ? Symbol('amplify_default')
    : '@@amplify_default');
const logger$f = new ConsoleLogger('Hub');
class HubClass {
    constructor(name) {
        this.listeners = new Map();
        this.protectedChannels = [
            'core',
            'auth',
            'api',
            'analytics',
            'interactions',
            'pubsub',
            'storage',
            'ui',
            'xr',
        ];
        this.name = name;
    }
    /**
     * Used internally to remove a Hub listener.
     *
     * @remarks
     * This private method is for internal use only. Instead of calling Hub.remove, call the result of Hub.listen.
     */
    _remove(channel, listener) {
        const holder = this.listeners.get(channel);
        if (!holder) {
            logger$f.warn(`No listeners for ${channel}`);
            return;
        }
        this.listeners.set(channel, [
            ...holder.filter(({ callback }) => callback !== listener),
        ]);
    }
    dispatch(channel, payload, source, ampSymbol) {
        if (typeof channel === 'string' &&
            this.protectedChannels.indexOf(channel) > -1) {
            const hasAccess = ampSymbol === AMPLIFY_SYMBOL;
            if (!hasAccess) {
                logger$f.warn(`WARNING: ${channel} is protected and dispatching on it can have unintended consequences`);
            }
        }
        const capsule = {
            channel,
            payload: { ...payload },
            source,
            patternInfo: [],
        };
        try {
            this._toListeners(capsule);
        }
        catch (e) {
            logger$f.error(e);
        }
    }
    listen(channel, callback, listenerName = 'noname') {
        let cb;
        if (typeof callback !== 'function') {
            throw new AmplifyError({
                name: NO_HUBCALLBACK_PROVIDED_EXCEPTION,
                message: 'No callback supplied to Hub',
            });
        }
        else {
            // Needs to be casted as a more generic type
            cb = callback;
        }
        let holder = this.listeners.get(channel);
        if (!holder) {
            holder = [];
            this.listeners.set(channel, holder);
        }
        holder.push({
            name: listenerName,
            callback: cb,
        });
        return () => {
            this._remove(channel, cb);
        };
    }
    _toListeners(capsule) {
        const { channel, payload } = capsule;
        const holder = this.listeners.get(channel);
        if (holder) {
            holder.forEach(listener => {
                logger$f.debug(`Dispatching to ${channel} with `, payload);
                try {
                    listener.callback(capsule);
                }
                catch (e) {
                    logger$f.error(e);
                }
            });
        }
    }
}
/* We export a __default__ instance of HubClass to use it as a
pseudo Singleton for the main messaging bus, however you can still create
your own instance of HubClass() for a separate "private bus" of events. */
const Hub = new HubClass('__default__');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function bytesToString(input) {
    return Array.from(input, byte => String.fromCodePoint(byte)).join('');
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const base64Encoder = {
    /**
     * Convert input to base64-encoded string
     * @param input - string to convert to base64
     * @param options - encoding options that can optionally produce a base64url string
     * @returns base64-encoded string
     */
    convert(input, options = {
        urlSafe: false,
        skipPadding: false,
    }) {
        const inputStr = typeof input === 'string' ? input : bytesToString(input);
        let encodedStr = getBtoa()(inputStr);
        // urlSafe char replacement and skipPadding options conform to the base64url spec
        // https://datatracker.ietf.org/doc/html/rfc4648#section-5
        if (options.urlSafe) {
            encodedStr = encodedStr.replace(/\+/g, '-').replace(/\//g, '_');
        }
        if (options.skipPadding) {
            encodedStr = encodedStr.replace(/=/g, '');
        }
        return encodedStr;
    },
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/*
 * Cryptographically secure pseudorandom number generator
 * As Math.random() is cryptographically not safe to use
 */
function cryptoSecureRandomInt() {
    const crypto = getCrypto();
    const randomResult = crypto.getRandomValues(new Uint32Array(1))[0];
    return randomResult;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Hex encoding strategy.
 * Converts a word array to a hex string.
 * @param {WordArray} wordArray The word array.
 * @return {string} The hex string.
 * @static
 */
function hexStringify(wordArray) {
    // Shortcuts
    const { words } = wordArray;
    const { sigBytes } = wordArray;
    // Convert
    const hexChars = [];
    for (let i = 0; i < sigBytes; i++) {
        const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        hexChars.push((bite >>> 4).toString(16));
        hexChars.push((bite & 0x0f).toString(16));
    }
    return hexChars.join('');
}
class WordArray {
    constructor(words, sigBytes) {
        this.words = [];
        let Words = words;
        Words = this.words = Words || [];
        if (sigBytes !== undefined) {
            this.sigBytes = sigBytes;
        }
        else {
            this.sigBytes = Words.length * 4;
        }
    }
    random(nBytes) {
        const words = [];
        for (let i = 0; i < nBytes; i += 4) {
            words.push(cryptoSecureRandomInt());
        }
        return new WordArray(words, nBytes);
    }
    toString() {
        return hexStringify(this);
    }
}

function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[Q]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);if(null===t)return !0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t);}function _(){return "production"===process.env.NODE_ENV||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if("production"!==process.env.NODE_ENV&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r);}function z(n,t){var r=n[Q];return (r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1;}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return [n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"));}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u);}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)});}}));}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1];}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])});}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])});}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length});}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n});}u++;})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n});}u++;}));}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t});}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return !0;E(n),k(n);}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),on.deleteProperty=function(t,r){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&n(13),en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return "production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&n(14),en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return (r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t);},this.produceWithPatches=function(n,t){return "function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t;})),r,i];var r,i;},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q];"production"!==process.env.NODE_ENV&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un;an.produce;an.produceWithPatches.bind(an);var sn=an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);

/**
 * @private
 * @param obj
 * @returns `true` if the given object likely represents a model in a schema.
 */
function isSchemaModel(obj) {
    return obj && obj.pluralName !== undefined;
}
/**
 * @private
 * @param m
 * @returns `true` if the given schema entry defines Schema Model attributes.
 */
function isSchemaModelWithAttributes(m) {
    return isSchemaModel(m) && m.attributes !== undefined;
}
/**
 * @private
 * @param obj
 * @returns `true` if the given object specifies either `targetName` or `targetNames`.
 */
function isTargetNameAssociation(obj) {
    return obj?.targetName || obj?.targetNames;
}
/**
 * @private
 * @param obj
 * @param fieldName
 * @returns Truthy if the object has a `FieldAssociation` for the given `fieldName`.
 */
function isFieldAssociation(obj, fieldName) {
    return obj?.fields[fieldName]?.association?.connectionType;
}
/**
 * @private
 * @param attr
 * @returns `true` if the given attribute is a key field.
 */
function isModelAttributeKey(attr) {
    return (attr.type === 'key' &&
        attr.properties &&
        attr.properties.fields &&
        attr.properties.fields.length > 0);
}
/**
 * @private
 * @param attr
 * @returns `true` if the given attribute is a primary key, indicated by the key being unnamed.
 */
function isModelAttributePrimaryKey(attr) {
    return isModelAttributeKey(attr) && attr.properties.name === undefined;
}
/**
 * @private
 * @param attr
 * @returns `true` if the given attribute represents a composite key with multiple fields.
 */
function isModelAttributeCompositeKey(attr) {
    return (isModelAttributeKey(attr) &&
        attr.properties.name !== undefined &&
        attr.properties.fields.length > 2);
}
var ModelAttributeAuthAllow;
(function (ModelAttributeAuthAllow) {
    ModelAttributeAuthAllow["CUSTOM"] = "custom";
    ModelAttributeAuthAllow["OWNER"] = "owner";
    ModelAttributeAuthAllow["GROUPS"] = "groups";
    ModelAttributeAuthAllow["PRIVATE"] = "private";
    ModelAttributeAuthAllow["PUBLIC"] = "public";
})(ModelAttributeAuthAllow || (ModelAttributeAuthAllow = {}));
var ModelAttributeAuthProvider;
(function (ModelAttributeAuthProvider) {
    ModelAttributeAuthProvider["FUNCTION"] = "function";
    ModelAttributeAuthProvider["USER_POOLS"] = "userPools";
    ModelAttributeAuthProvider["OIDC"] = "oidc";
    ModelAttributeAuthProvider["IAM"] = "iam";
    ModelAttributeAuthProvider["API_KEY"] = "apiKey";
})(ModelAttributeAuthProvider || (ModelAttributeAuthProvider = {}));
var GraphQLScalarType;
(function (GraphQLScalarType) {
    GraphQLScalarType[GraphQLScalarType["ID"] = 0] = "ID";
    GraphQLScalarType[GraphQLScalarType["String"] = 1] = "String";
    GraphQLScalarType[GraphQLScalarType["Int"] = 2] = "Int";
    GraphQLScalarType[GraphQLScalarType["Float"] = 3] = "Float";
    GraphQLScalarType[GraphQLScalarType["Boolean"] = 4] = "Boolean";
    GraphQLScalarType[GraphQLScalarType["AWSDate"] = 5] = "AWSDate";
    GraphQLScalarType[GraphQLScalarType["AWSTime"] = 6] = "AWSTime";
    GraphQLScalarType[GraphQLScalarType["AWSDateTime"] = 7] = "AWSDateTime";
    GraphQLScalarType[GraphQLScalarType["AWSTimestamp"] = 8] = "AWSTimestamp";
    GraphQLScalarType[GraphQLScalarType["AWSEmail"] = 9] = "AWSEmail";
    GraphQLScalarType[GraphQLScalarType["AWSJSON"] = 10] = "AWSJSON";
    GraphQLScalarType[GraphQLScalarType["AWSURL"] = 11] = "AWSURL";
    GraphQLScalarType[GraphQLScalarType["AWSPhone"] = 12] = "AWSPhone";
    GraphQLScalarType[GraphQLScalarType["AWSIPAddress"] = 13] = "AWSIPAddress";
})(GraphQLScalarType || (GraphQLScalarType = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace
(function (GraphQLScalarType) {
    function getJSType(scalar) {
        switch (scalar) {
            case 'Boolean':
                return 'boolean';
            case 'ID':
            case 'String':
            case 'AWSDate':
            case 'AWSTime':
            case 'AWSDateTime':
            case 'AWSEmail':
            case 'AWSURL':
            case 'AWSPhone':
            case 'AWSIPAddress':
                return 'string';
            case 'Int':
            case 'Float':
            case 'AWSTimestamp':
                return 'number';
            case 'AWSJSON':
                return 'object';
            default:
                throw new Error('Invalid scalar type');
        }
    }
    GraphQLScalarType.getJSType = getJSType;
    function getValidationFunction(scalar) {
        switch (scalar) {
            case 'AWSDate':
                return isAWSDate;
            case 'AWSTime':
                return isAWSTime;
            case 'AWSDateTime':
                return isAWSDateTime;
            case 'AWSTimestamp':
                return isAWSTimestamp;
            case 'AWSEmail':
                return isAWSEmail;
            case 'AWSJSON':
                return isAWSJSON;
            case 'AWSURL':
                return isAWSURL;
            case 'AWSPhone':
                return isAWSPhone;
            case 'AWSIPAddress':
                return isAWSIPAddress;
            default:
                return undefined;
        }
    }
    GraphQLScalarType.getValidationFunction = getValidationFunction;
})(GraphQLScalarType || (GraphQLScalarType = {}));
/**
 * @private
 * @returns `true` if the given field specifies a scalar type.
 */
function isGraphQLScalarType(obj) {
    return obj && GraphQLScalarType[obj] !== undefined;
}
/**
 * @private
 * @param obj
 * @returns `true` if the given field specifies a Model.
 */
function isModelFieldType(obj) {
    const modelField = 'model';
    if (obj && obj[modelField])
        return true;
    return false;
}
/**
 * @private
 * @param obj
 * @returns `true` if the given field specifies a custom non-model type.
 */
function isNonModelFieldType(obj) {
    const typeField = 'nonModel';
    if (obj && obj[typeField])
        return true;
    return false;
}
/**
 * @private
 * @param obj
 * @returns `true` if the object is an `EnumFieldType`.
 */
function isEnumFieldType(obj) {
    const modelField = 'enum';
    if (obj && obj[modelField])
        return true;
    return false;
}
/**
 * @private
 * @param obj
 * @param modelDefinition
 * @returns `true` if the given item is an object that has all identifier fields populated.
 */
function isIdentifierObject(obj, modelDefinition) {
    const keys = extractPrimaryKeyFieldNames(modelDefinition);
    return (typeof obj === 'object' && obj && keys.every(k => obj[k] !== undefined));
}
// #endregion
// #region Subscription messages
var OpType;
(function (OpType) {
    OpType["INSERT"] = "INSERT";
    OpType["UPDATE"] = "UPDATE";
    OpType["DELETE"] = "DELETE";
})(OpType || (OpType = {}));
/**
 * @private
 * @param obj
 * @returns `true` if the given predicate field object, specifying an [in-]equality test against a field.
 */
function isPredicateObj(obj) {
    return obj && obj.field !== undefined;
}
/**
 * @private
 * @param obj
 * @returns `true` if the given predicate object is a "group" like "and", "or", or "not".
 */
function isPredicateGroup(obj) {
    return obj && obj.type !== undefined;
}
var QueryOne;
(function (QueryOne) {
    QueryOne[QueryOne["FIRST"] = 0] = "FIRST";
    QueryOne[QueryOne["LAST"] = 1] = "LAST";
})(QueryOne || (QueryOne = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ASCENDING";
    SortDirection["DESCENDING"] = "DESCENDING";
})(SortDirection || (SortDirection = {}));
var AuthModeStrategyType;
(function (AuthModeStrategyType) {
    AuthModeStrategyType["DEFAULT"] = "DEFAULT";
    AuthModeStrategyType["MULTI_AUTH"] = "MULTI_AUTH";
})(AuthModeStrategyType || (AuthModeStrategyType = {}));
var ModelOperation;
(function (ModelOperation) {
    ModelOperation["CREATE"] = "CREATE";
    ModelOperation["READ"] = "READ";
    ModelOperation["UPDATE"] = "UPDATE";
    ModelOperation["DELETE"] = "DELETE";
})(ModelOperation || (ModelOperation = {}));
var ProcessName;
(function (ProcessName) {
    ProcessName["sync"] = "sync";
    ProcessName["mutate"] = "mutate";
    ProcessName["subscribe"] = "subscribe";
})(ProcessName || (ProcessName = {}));
const DISCARD = Symbol('DISCARD');
var LimitTimerRaceResolvedValues;
(function (LimitTimerRaceResolvedValues) {
    LimitTimerRaceResolvedValues["LIMIT"] = "LIMIT";
    LimitTimerRaceResolvedValues["TIMER"] = "TIMER";
})(LimitTimerRaceResolvedValues || (LimitTimerRaceResolvedValues = {}));
/**
 * A pointer used by DataStore internally to lookup predicate details
 * that should not be exposed on public customer interfaces.
 */
class PredicateInternalsKey {
    constructor() {
        this.__isPredicateInternalsKeySentinel = true;
    }
}

class ModelSortPredicateCreator {
    static createPredicateBuilder(modelDefinition) {
        const { name: modelName } = modelDefinition;
        const fieldNames = new Set(Object.keys(modelDefinition.fields));
        const predicate = new Proxy({}, {
            get(_target, propertyKey, receiver) {
                const field = propertyKey;
                if (!fieldNames.has(field)) {
                    throw new Error(`Invalid field for model. field: ${String(field)}, model: ${modelName}`);
                }
                const result = (sortDirection) => {
                    ModelSortPredicateCreator.sortPredicateGroupsMap
                        .get(receiver)
                        ?.push({ field, sortDirection });
                    return receiver;
                };
                return result;
            },
        });
        ModelSortPredicateCreator.sortPredicateGroupsMap.set(predicate, []);
        return predicate;
    }
    static isValidPredicate(predicate) {
        return ModelSortPredicateCreator.sortPredicateGroupsMap.has(predicate);
    }
    static getPredicates(predicate, throwOnInvalid = true) {
        if (throwOnInvalid &&
            !ModelSortPredicateCreator.isValidPredicate(predicate)) {
            throw new Error('The predicate is not valid');
        }
        const predicateGroup = ModelSortPredicateCreator.sortPredicateGroupsMap.get(predicate);
        if (predicateGroup) {
            return predicateGroup;
        }
        else {
            throw new Error('Predicate group not found');
        }
    }
    // transforms cb-style predicate into Proxy
    static createFromExisting(modelDefinition, existing) {
        if (!existing || !modelDefinition) {
            return undefined;
        }
        return existing(ModelSortPredicateCreator.createPredicateBuilder(modelDefinition));
    }
}
ModelSortPredicateCreator.sortPredicateGroupsMap = new WeakMap();

const predicatesAllSet = new WeakSet();
function isPredicatesAll(predicate) {
    return predicatesAllSet.has(predicate);
}
/**
 * The valid logical grouping keys for a predicate group.
 */
const groupKeys = new Set(['and', 'or', 'not']);
/**
 * Determines whether an object is a GraphQL style predicate "group", which must be an
 * object containing a single "group key", which then contains the child condition(s).
 *
 * E.g.,
 *
 * ```
 * { and: [ ... ] }
 * { not: { ... } }
 * ```
 *
 * @param o The object to test.
 */
const isGroup = o => {
    const keys = [...Object.keys(o)];
    return keys.length === 1 && groupKeys.has(keys[0]);
};
/**
 * Determines whether an object specifies no conditions and should match everything,
 * as would be the case with `Predicates.ALL`.
 *
 * @param o The object to test.
 */
const isEmpty = o => {
    return !Array.isArray(o) && Object.keys(o).length === 0;
};
/**
 * The valid comparison operators that can be used as keys in a predicate comparison object.
 */
const comparisonKeys = new Set([
    'eq',
    'ne',
    'gt',
    'lt',
    'ge',
    'le',
    'contains',
    'notContains',
    'beginsWith',
    'between',
]);
/**
 * Determines whether an object is a GraphQL style predicate comparison node, which must
 * be an object containing a single "comparison operator" key, which then contains the
 * operand or operands to compare against.
 *
 * @param o The object to test.
 */
const isComparison = o => {
    const keys = [...Object.keys(o)];
    return !Array.isArray(o) && keys.length === 1 && comparisonKeys.has(keys[0]);
};
/**
 * A light check to determine whether an object is a valid GraphQL Condition AST.
 *
 * @param o The object to test.
 */
const isValid = o => {
    if (Array.isArray(o)) {
        return o.every(v => isValid(v));
    }
    else {
        return Object.keys(o).length <= 1;
    }
};
class ModelPredicateCreator {
    /**
     * Determines whether the given storage predicate (lookup key) is a predicate
     * key that DataStore recognizes.
     *
     * @param predicate The storage predicate (lookup key) to test.
     */
    static isValidPredicate(predicate) {
        return ModelPredicateCreator.predicateGroupsMap.has(predicate);
    }
    /**
     * Looks for the storage predicate AST that corresponds to a given storage
     * predicate key.
     *
     * The key must have been created internally by a DataStore utility
     * method, such as `ModelPredicate.createFromAST()`.
     *
     * @param predicate The predicate reference to look up.
     * @param throwOnInvalid Whether to throw an exception if the predicate
     * isn't a valid DataStore predicate.
     */
    static getPredicates(predicate, throwOnInvalid = true) {
        if (throwOnInvalid && !ModelPredicateCreator.isValidPredicate(predicate)) {
            throw new Error('The predicate is not valid');
        }
        return ModelPredicateCreator.predicateGroupsMap.get(predicate);
    }
    /**
     * using the PK values from the given `model` (which can be a partial of T
     * Creates a predicate that matches an instance described by `modelDefinition`
     * that contains only PK field values.)
     *
     * @param modelDefinition The model definition to create a predicate for.
     * @param model The model instance to extract value equalities from.
     */
    static createForPk(modelDefinition, model) {
        const keyFields = extractPrimaryKeyFieldNames(modelDefinition);
        const keyValues = extractPrimaryKeyValues(model, keyFields);
        const predicate = this.createFromAST(modelDefinition, {
            and: keyFields.map((field, idx) => {
                const operand = keyValues[idx];
                return { [field]: { eq: operand } };
            }),
        });
        return predicate;
    }
    /**
     * Searches a `Model` table for records matching the given equalities object.
     *
     * This only matches against fields given in the equalities object. No other
     * fields are tested by the predicate.
     *
     * @param modelDefinition The model we need a predicate for.
     * @param flatEqualities An object holding field equalities to search for.
     */
    static createFromFlatEqualities(modelDefinition, flatEqualities) {
        const ast = {
            and: Object.entries(flatEqualities).map(([k, v]) => ({ [k]: { eq: v } })),
        };
        return this.createFromAST(modelDefinition, ast);
    }
    /**
     * Accepts a GraphQL style filter predicate tree and transforms it into an
     * AST that can be used for a storage adapter predicate. Example input:
     *
     * ```js
     * {
     * 	and: [
     * 		{ name: { eq: "Bob Jones" } },
     * 		{ age: { between: [32, 64] } },
     * 		{ not: {
     * 			or: [
     * 				{ favoriteFood: { eq: 'pizza' } },
     * 				{ favoriteFood: { eq: 'tacos' } },
     * 			]
     * 		}}
     * 	]
     * }
     * ```
     *
     * @param gql GraphQL style filter node.
     */
    static transformGraphQLFilterNodeToPredicateAST(gql) {
        if (!isValid(gql)) {
            throw new Error('Invalid GraphQL Condition or subtree: ' + JSON.stringify(gql));
        }
        if (isEmpty(gql)) {
            return {
                type: 'and',
                predicates: [],
            };
        }
        else if (isGroup(gql)) {
            const groupkey = Object.keys(gql)[0];
            const children = this.transformGraphQLFilterNodeToPredicateAST(gql[groupkey]);
            return {
                type: groupkey,
                predicates: Array.isArray(children) ? children : [children],
            };
        }
        else if (isComparison(gql)) {
            const operatorKey = Object.keys(gql)[0];
            return {
                operator: operatorKey,
                operand: gql[operatorKey],
            };
        }
        else {
            if (Array.isArray(gql)) {
                return gql.map(o => this.transformGraphQLFilterNodeToPredicateAST(o));
            }
            else {
                const fieldKey = Object.keys(gql)[0];
                return {
                    field: fieldKey,
                    ...this.transformGraphQLFilterNodeToPredicateAST(gql[fieldKey]),
                };
            }
        }
    }
    /**
     * Accepts a GraphQL style filter predicate tree and transforms it into a predicate
     * that storage adapters understand. Example input:
     *
     * ```js
     * {
     * 	and: [
     * 		{ name: { eq: "Bob Jones" } },
     * 		{ age: { between: [32, 64] } },
     * 		{ not: {
     * 			or: [
     * 				{ favoriteFood: { eq: 'pizza' } },
     * 				{ favoriteFood: { eq: 'tacos' } },
     * 			]
     * 		}}
     * 	]
     * }
     * ```
     *
     * @param modelDefinition The model that the AST/predicate must be compatible with.
     * @param ast The graphQL style AST that should specify conditions for `modelDefinition`.
     */
    static createFromAST(modelDefinition, ast) {
        const key = {};
        ModelPredicateCreator.predicateGroupsMap.set(key, this.transformGraphQLFilterNodeToPredicateAST(ast));
        return key;
    }
}
/**
 * Map of storage predicates (key objects) to storage predicate AST's.
 */
ModelPredicateCreator.predicateGroupsMap = new WeakMap();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ID = 'id';
/**
 * Used by the Async Storage Adapter to concatenate key values
 * for a record. For instance, if a model has the following keys:
 * `customId: ID! @primaryKey(sortKeyFields: ["createdAt"])`,
 * we concatenate the `customId` and `createdAt` as:
 * `12-234-5#2022-09-28T00:00:00.000Z`
 */
const DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR = '#';
/**
 * Used for generating spinal-cased index name from an array of
 * key field names.
 * E.g. for keys `[id, title]` => 'id-title'
 */
const IDENTIFIER_KEY_SEPARATOR = '-';
const errorMessages = {
    idEmptyString: 'An index field cannot contain an empty string value',
    queryByPkWithCompositeKeyPresent: 'Models with composite primary keys cannot be queried by a single key value. Use object literal syntax for composite keys instead: https://docs.amplify.aws/lib/datastore/advanced-workflows/q/platform/js/#querying-records-with-custom-primary-keys',
    deleteByPkWithCompositeKeyPresent: 'Models with composite primary keys cannot be deleted by a single key value, unless using a predicate. Use object literal syntax for composite keys instead: https://docs.amplify.aws/lib/datastore/advanced-workflows/q/platform/js/#querying-records-with-custom-primary-keys',
    observeWithObjectLiteral: 'Object literal syntax cannot be used with observe. Use a predicate instead: https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/#predicates',
};
var NAMESPACES;
(function (NAMESPACES) {
    NAMESPACES["DATASTORE"] = "datastore";
    NAMESPACES["USER"] = "user";
    NAMESPACES["SYNC"] = "sync";
    NAMESPACES["STORAGE"] = "storage";
})(NAMESPACES || (NAMESPACES = {}));
const { DATASTORE } = NAMESPACES;
const { USER } = NAMESPACES;
const { SYNC } = NAMESPACES;
const { STORAGE } = NAMESPACES;
const isNullOrUndefined = (val) => {
    return typeof val === 'undefined' || val === undefined || val === null;
};
const validatePredicate = (model, groupType, predicatesOrGroups) => {
    let filterType;
    let isNegation = false;
    if (predicatesOrGroups.length === 0) {
        return true;
    }
    switch (groupType) {
        case 'not':
            filterType = 'every';
            isNegation = true;
            break;
        case 'and':
            filterType = 'every';
            break;
        case 'or':
            filterType = 'some';
            break;
        default:
            throw new Error(`Invalid ${groupType}`);
    }
    const result = predicatesOrGroups[filterType](predicateOrGroup => {
        if (isPredicateObj(predicateOrGroup)) {
            const { field, operator, operand } = predicateOrGroup;
            const value = model[field];
            return validatePredicateField(value, operator, operand);
        }
        if (isPredicateGroup(predicateOrGroup)) {
            const { type, predicates } = predicateOrGroup;
            return validatePredicate(model, type, predicates);
        }
        throw new Error('Not a predicate or group');
    });
    return isNegation ? !result : result;
};
const validatePredicateField = (value, operator, operand) => {
    switch (operator) {
        case 'ne':
            return value !== operand;
        case 'eq':
            return value === operand;
        case 'le':
            return value <= operand;
        case 'lt':
            return value < operand;
        case 'ge':
            return value >= operand;
        case 'gt':
            return value > operand;
        case 'between': {
            const [min, max] = operand;
            return value >= min && value <= max;
        }
        case 'beginsWith':
            return (!isNullOrUndefined(value) &&
                value.startsWith(operand));
        case 'contains':
            return (!isNullOrUndefined(value) &&
                value.indexOf(operand) > -1);
        case 'notContains':
            return (isNullOrUndefined(value) ||
                value.indexOf(operand) ===
                    -1);
        default:
            return false;
    }
};
const isModelConstructor = (obj) => {
    return (obj && typeof obj.copyOf === 'function');
};
const topologicallySortedModels = new WeakMap();
const traverseModel = (srcModelName, instance, namespace, modelInstanceCreator, getModelConstructorByModelName) => {
    const modelConstructor = getModelConstructorByModelName(namespace.name, srcModelName);
    const result = [];
    const newInstance = modelConstructor.copyOf(instance, () => {
        // no-op
    });
    result.unshift({
        modelName: srcModelName,
        item: newInstance,
        instance: newInstance,
    });
    if (!topologicallySortedModels.has(namespace)) {
        topologicallySortedModels.set(namespace, Array.from(namespace.modelTopologicalOrdering.keys()));
    }
    const sortedModels = topologicallySortedModels.get(namespace);
    result.sort((a, b) => {
        return (sortedModels.indexOf(a.modelName) - sortedModels.indexOf(b.modelName));
    });
    return result;
};
let privateModeCheckResult;
const isPrivateMode = () => {
    return new Promise(resolve => {
        const dbname = amplifyUuid();
        // eslint-disable-next-line prefer-const
        let db;
        const isPrivate = () => {
            privateModeCheckResult = false;
            resolve(true);
        };
        const isNotPrivate = async () => {
            if (db && db.result && typeof db.result.close === 'function') {
                await db.result.close();
            }
            await indexedDB.deleteDatabase(dbname);
            privateModeCheckResult = true;
            resolve(false);
        };
        if (privateModeCheckResult === true) {
            return isNotPrivate();
        }
        if (privateModeCheckResult === false) {
            isPrivate();
            return;
        }
        if (indexedDB === null) {
            isPrivate();
            return;
        }
        db = indexedDB.open(dbname);
        db.onerror = isPrivate;
        db.onsuccess = isNotPrivate;
    });
};
let safariCompatabilityModeResult;
/**
 * Whether the browser's implementation of IndexedDB breaks on array lookups
 * against composite indexes whose keypath contains a single column.
 *
 * E.g., Whether `store.createIndex(indexName, ['id'])` followed by
 * `store.index(indexName).get([1])` will *ever* return records.
 *
 * In all known, modern Safari browsers as of Q4 2022, the query against an index like
 * this will *always* return `undefined`. So, the index needs to be created as a scalar.
 */
const isSafariCompatabilityMode = async () => {
    try {
        const dbName = amplifyUuid();
        const storeName = 'indexedDBFeatureProbeStore';
        const indexName = 'idx';
        if (indexedDB === null)
            return false;
        if (safariCompatabilityModeResult !== undefined) {
            return safariCompatabilityModeResult;
        }
        const db = await new Promise(resolve => {
            const dbOpenRequest = indexedDB.open(dbName);
            dbOpenRequest.onerror = () => {
                resolve(false);
            };
            dbOpenRequest.onsuccess = () => {
                const openedDb = dbOpenRequest.result;
                resolve(openedDb);
            };
            dbOpenRequest.onupgradeneeded = (event) => {
                const upgradedDb = event?.target?.result;
                upgradedDb.onerror = () => {
                    resolve(false);
                };
                const store = upgradedDb.createObjectStore(storeName, {
                    autoIncrement: true,
                });
                store.createIndex(indexName, ['id']);
            };
        });
        if (!db) {
            throw new Error('Could not open probe DB');
        }
        const rwTx = db.transaction(storeName, 'readwrite');
        const rwStore = rwTx.objectStore(storeName);
        rwStore.add({
            id: 1,
        });
        rwTx.commit();
        const result = await new Promise(resolve => {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const index = store.index(indexName);
            const getRequest = index.get([1]);
            getRequest.onerror = () => {
                resolve(false);
            };
            getRequest.onsuccess = (event) => {
                resolve(event?.target?.result);
            };
        });
        if (db && typeof db.close === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
            await db.close();
        }
        await indexedDB.deleteDatabase(dbName);
        if (result === undefined) {
            safariCompatabilityModeResult = true;
        }
        else {
            safariCompatabilityModeResult = false;
        }
    }
    catch (error) {
        safariCompatabilityModeResult = false;
    }
    return safariCompatabilityModeResult;
};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    HEX_TO_SHORT[encodedByte] = i;
}
const getBytesFromHex = (encoded) => {
    if (encoded.length % 2 !== 0) {
        throw new Error('Hex encoded strings must have an even number length');
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
};
const randomBytes = (nBytes) => {
    const str = new WordArray().random(nBytes).toString();
    return getBytesFromHex(str);
};
const prng = () => randomBytes(1)[0] / 0xff;
function monotonicUlidFactory(seed) {
    const ulid = monotonicFactory(prng);
    return () => {
        return ulid(seed);
    };
}
/**
 * Uses performance.now() if available, otherwise, uses Date.now() (e.g. react native without a polyfill)
 *
 * The values returned by performance.now() always increase at a constant rate,
 * independent of the system clock (which might be adjusted manually or skewed
 * by software like NTP).
 *
 * Otherwise, performance.timing.navigationStart + performance.now() will be
 * approximately equal to Date.now()
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now#Example
 */
function getNow() {
    if (typeof performance !== 'undefined' &&
        performance &&
        typeof performance.now === 'function') {
        return performance.now() | 0; // convert to integer
    }
    else {
        return Date.now();
    }
}
function sortCompareFunction(sortPredicates) {
    return function compareFunction(a, b) {
        // enable multi-field sort by iterating over predicates until
        // a comparison returns -1 or 1
        for (const predicate of sortPredicates) {
            const { field, sortDirection } = predicate;
            // reverse result when direction is descending
            const sortMultiplier = sortDirection === SortDirection.ASCENDING ? 1 : -1;
            if (a[field] < b[field]) {
                return -1 * sortMultiplier;
            }
            if (a[field] > b[field]) {
                return 1 * sortMultiplier;
            }
        }
        return 0;
    };
}
/* deep directed comparison ensuring that all fields on "from" object exist and
 * are equal to values on an "against" object
 *
 * Note: This same guarauntee is not applied for values on "against" that aren't on "from"
 *
 * @param fromObject - The object that may be an equal subset of the againstObject.
 * @param againstObject - The object that may be an equal superset of the fromObject.
 *
 * @returns True if fromObject is a equal subset of againstObject and False otherwise.
 */
function directedValueEquality(fromObject, againstObject, nullish = false) {
    const aKeys = Object.keys(fromObject);
    for (const key of aKeys) {
        const fromValue = fromObject[key];
        const againstValue = againstObject[key];
        if (!valuesEqual(fromValue, againstValue, nullish)) {
            return false;
        }
    }
    return true;
}
// deep compare any 2 values
// primitives or object types (including arrays, Sets, and Maps)
// returns true if equal by value
// if nullish is true, treat undefined and null values as equal
// to normalize for GQL response values for undefined fields
function valuesEqual(valA, valB, nullish = false) {
    let a = valA;
    let b = valB;
    const nullishCompare = (_a, _b) => {
        return ((_a === undefined || _a === null) && (_b === undefined || _b === null));
    };
    // if one of the values is a primitive and the other is an object
    if ((a instanceof Object && !(b instanceof Object)) ||
        (!(a instanceof Object) && b instanceof Object)) {
        return false;
    }
    // compare primitive types
    if (!(a instanceof Object)) {
        if (nullish && nullishCompare(a, b)) {
            return true;
        }
        return a === b;
    }
    // make sure object types match
    if ((Array.isArray(a) && !Array.isArray(b)) ||
        (Array.isArray(b) && !Array.isArray(a))) {
        return false;
    }
    if (a instanceof Set && b instanceof Set) {
        a = [...a];
        b = [...b];
    }
    if (a instanceof Map && b instanceof Map) {
        a = Object.fromEntries(a);
        b = Object.fromEntries(b);
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    // last condition is to ensure that [] !== [null] even if nullish. However [undefined] === [null] when nullish
    if (aKeys.length !== bKeys.length && (!nullish || Array.isArray(a))) {
        return false;
    }
    // iterate through the longer set of keys
    // e.g., for a nullish comparison of a={ a: 1 } and b={ a: 1, b: null }
    // we want to iterate through bKeys
    const keys = aKeys.length >= bKeys.length ? aKeys : bKeys;
    for (const key of keys) {
        const aVal = a[key];
        const bVal = b[key];
        if (!valuesEqual(aVal, bVal, nullish)) {
            return false;
        }
    }
    return true;
}
/**
 * Statelessly extracts the specified page from an array.
 *
 * @param records - The source array to extract a page from.
 * @param pagination - A definition of the page to extract.
 * @returns This items from `records` matching the `pagination` definition.
 */
function inMemoryPagination(records, pagination) {
    if (pagination && records.length > 1) {
        if (pagination.sort) {
            const sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
            if (sortPredicates.length) {
                const compareFn = sortCompareFunction(sortPredicates);
                records.sort(compareFn);
            }
        }
        const { page = 0, limit = 0 } = pagination;
        const start = Math.max(0, page * limit) || 0;
        const end = limit > 0 ? start + limit : records.length;
        return records.slice(start, end);
    }
    return records;
}
/**
 * An `aysnc` implementation of `Array.some()`. Returns as soon as a match is found.
 * @param items The items to check.
 * @param matches The async matcher function, expected to
 * return Promise<boolean>: `true` for a matching item, `false` otherwise.
 * @returns A `Promise<boolean>`, `true` if "some" items match; `false` otherwise.
 */
async function asyncSome(items, matches) {
    for (const item of items) {
        if (await matches(item)) {
            return true;
        }
    }
    return false;
}
/**
 * An `aysnc` implementation of `Array.every()`. Returns as soon as a non-match is found.
 * @param items The items to check.
 * @param matches The async matcher function, expected to
 * return Promise<boolean>: `true` for a matching item, `false` otherwise.
 * @returns A `Promise<boolean>`, `true` if every item matches; `false` otherwise.
 */
async function asyncEvery(items, matches) {
    for (const item of items) {
        if (!(await matches(item))) {
            return false;
        }
    }
    return true;
}
const isAWSDate = (val) => {
    return !!/^\d{4}-\d{2}-\d{2}(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
const isAWSTime = (val) => {
    return !!/^\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
const isAWSDateTime = (val) => {
    return !!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(.\d+)?)?(Z|[+-]\d{2}:\d{2}($|:\d{2}))?$/.exec(val);
};
const isAWSTimestamp = (val) => {
    return !!/^\d+$/.exec(String(val));
};
const isAWSEmail = (val) => {
    return !!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.exec(val);
};
const isAWSJSON = (val) => {
    try {
        JSON.parse(val);
        return true;
    }
    catch {
        return false;
    }
};
const isAWSURL = (val) => {
    try {
        return !!new AmplifyUrl(val);
    }
    catch {
        return false;
    }
};
const isAWSPhone = (val) => {
    return !!/^\+?\d[\d\s-]+$/.exec(val);
};
const isAWSIPAddress = (val) => {
    return !!/((^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$)|(^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$))$/.exec(val);
};
class DeferredPromise {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.promise = new Promise((resolve, reject) => {
            self.resolve = resolve;
            self.reject = reject;
        });
    }
}
class DeferredCallbackResolver {
    constructor(options) {
        this.limitPromise = new DeferredPromise();
        this.raceInFlight = false;
        this.callback = () => {
            // no-op
        };
        this.defaultErrorHandler = (msg = 'DeferredCallbackResolver error') => {
            throw new Error(msg);
        };
        this.callback = options.callback;
        this.errorHandler = options.errorHandler || this.defaultErrorHandler;
        this.maxInterval = options.maxInterval || 2000;
    }
    startTimer() {
        this.timerPromise = new Promise((resolve, _reject) => {
            this.timer = setTimeout(() => {
                resolve(LimitTimerRaceResolvedValues.TIMER);
            }, this.maxInterval);
        });
    }
    async racePromises() {
        let winner;
        try {
            this.raceInFlight = true;
            this.startTimer();
            winner = await Promise.race([
                this.timerPromise,
                this.limitPromise.promise,
            ]);
            this.callback();
        }
        catch (err) {
            this.errorHandler(err);
        }
        finally {
            // reset for the next race
            this.clear();
            this.raceInFlight = false;
            this.limitPromise = new DeferredPromise();
            // eslint-disable-next-line no-unsafe-finally
            return winner;
        }
    }
    start() {
        if (!this.raceInFlight)
            this.racePromises();
    }
    clear() {
        clearTimeout(this.timer);
    }
    resolve() {
        this.limitPromise.resolve(LimitTimerRaceResolvedValues.LIMIT);
    }
}
const getStorename = (namespace, modelName) => {
    const storeName = `${namespace}_${modelName}`;
    return storeName;
};
// #region Key Utils
/*
  When we have GSI(s) with composite sort keys defined on a model
    There are some very particular rules regarding which fields must be included in the update mutation input
    The field selection becomes more complex as the number of GSIs with composite sort keys grows

    To summarize: any time we update a field that is part of the composite sort key of a GSI, we must include:
     1. all of the other fields in that composite sort key
     2. all of the fields from any other composite sort key that intersect with the fields from 1.

     E.g.,
     Model @model
        @key(name: 'key1' fields: ['hk', 'a', 'b', 'c'])
        @key(name: 'key2' fields: ['hk', 'a', 'b', 'd'])
        @key(name: 'key3' fields: ['hk', 'x', 'y', 'z'])

    Model.a is updated => include ['a', 'b', 'c', 'd']
    Model.c is updated => include ['a', 'b', 'c', 'd']
    Model.d is updated => include ['a', 'b', 'c', 'd']
    Model.x is updated => include ['x', 'y', 'z']

    This function accepts a model's attributes and returns grouped sets of composite key fields
    Using our example Model above, the function will return:
    [
        Set('a', 'b', 'c', 'd'),
        Set('x', 'y', 'z'),
    ]

    This gives us the opportunity to correctly include the required fields for composite keys
    When crafting the mutation input in Storage.getUpdateMutationInput

    See 'processCompositeKeys' test in util.test.ts for more examples
*/
const processCompositeKeys = (attributes) => {
    const extractCompositeSortKey = ({ properties: { 
    // ignore the HK (fields[0]) we only need to include the composite sort key fields[1...n]
    fields: [, ...sortKeyFields], }, }) => sortKeyFields;
    const compositeKeyFields = attributes
        .filter(isModelAttributeCompositeKey)
        .map(extractCompositeSortKey);
    /*
        if 2 sets of fields have any intersecting fields => combine them into 1 union set
        e.g., ['a', 'b', 'c'] and ['a', 'b', 'd'] => ['a', 'b', 'c', 'd']
    */
    const combineIntersecting = (fields) => fields.reduce((combined, sortKeyFields) => {
        const sortKeyFieldsSet = new Set(sortKeyFields);
        if (combined.length === 0) {
            combined.push(sortKeyFieldsSet);
            return combined;
        }
        // does the current set share values with another set we've already added to `combined`?
        const intersectingSetIdx = combined.findIndex(existingSet => {
            return [...existingSet].some(f => sortKeyFieldsSet.has(f));
        });
        if (intersectingSetIdx > -1) {
            const union = new Set([
                ...combined[intersectingSetIdx],
                ...sortKeyFieldsSet,
            ]);
            // combine the current set with the intersecting set we found above
            combined[intersectingSetIdx] = union;
        }
        else {
            // none of the sets in `combined` have intersecting values with the current set
            combined.push(sortKeyFieldsSet);
        }
        return combined;
    }, []);
    const initial = combineIntersecting(compositeKeyFields);
    // a single pass pay not be enough to correctly combine all the fields
    // call the function once more to get a final merged list of sets
    const combined = combineIntersecting(initial);
    return combined;
};
const extractKeyIfExists = (modelDefinition) => {
    const keyAttribute = modelDefinition?.attributes?.find(isModelAttributeKey);
    return keyAttribute;
};
const extractPrimaryKeyFieldNames = (modelDefinition) => {
    const keyAttribute = extractKeyIfExists(modelDefinition);
    if (keyAttribute && isModelAttributePrimaryKey(keyAttribute)) {
        return keyAttribute.properties.fields;
    }
    return [ID];
};
const extractPrimaryKeyValues = (model, keyFields) => {
    return keyFields.map(key => model[key]);
};
const extractPrimaryKeysAndValues = (model, keyFields) => {
    const primaryKeysAndValues = {};
    keyFields.forEach(key => (primaryKeysAndValues[key] = model[key]));
    return primaryKeysAndValues;
};
const establishRelationAndKeys = (namespace) => {
    const relationship = {};
    const keys = {};
    Object.keys(namespace.models).forEach((mKey) => {
        relationship[mKey] = { indexes: [], relationTypes: [] };
        keys[mKey] = {};
        const model = namespace.models[mKey];
        Object.keys(model.fields).forEach((attr) => {
            const fieldAttribute = model.fields[attr];
            if (typeof fieldAttribute.type === 'object' &&
                'model' in fieldAttribute.type) {
                const { connectionType } = fieldAttribute.association;
                relationship[mKey].relationTypes.push({
                    fieldName: fieldAttribute.name,
                    modelName: fieldAttribute.type.model,
                    relationType: connectionType,
                    targetName: fieldAttribute.association.targetName,
                    targetNames: fieldAttribute.association.targetNames,
                    // eslint-disable-next-line dot-notation
                    associatedWith: fieldAttribute.association['associatedWith'],
                });
                if (connectionType === 'BELONGS_TO') {
                    const targetNames = extractTargetNamesFromSrc(fieldAttribute.association);
                    if (targetNames) {
                        const idxName = indexNameFromKeys(targetNames);
                        const idxExists = relationship[mKey].indexes.find(([index]) => index === idxName);
                        if (!idxExists) {
                            relationship[mKey].indexes.push([idxName, targetNames]);
                        }
                    }
                }
            }
        });
        if (model.attributes) {
            keys[mKey].compositeKeys = processCompositeKeys(model.attributes);
            for (const attribute of model.attributes) {
                if (!isModelAttributeKey(attribute)) {
                    continue;
                }
                const { fields } = attribute.properties;
                if (isModelAttributePrimaryKey(attribute)) {
                    keys[mKey].primaryKey = fields;
                    continue;
                }
                // create indexes for all other keys
                const idxName = indexNameFromKeys(fields);
                const idxExists = relationship[mKey].indexes.find(([index]) => index === idxName);
                if (!idxExists) {
                    relationship[mKey].indexes.push([idxName, fields]);
                }
            }
        }
        // set 'id' as the PK for models without a custom PK explicitly defined
        if (!keys[mKey].primaryKey) {
            keys[mKey].primaryKey = [ID];
        }
        // create primary index
        relationship[mKey].indexes.push([
            'byPk',
            keys[mKey].primaryKey,
            { unique: true },
        ]);
    });
    return [relationship, keys];
};
/**
 * Backwards-compatability for schema generated prior to custom primary key support:
the single field `targetName` has been replaced with an array of `targetNames`.
`targetName` and `targetNames` are exclusive (will never exist on the same schema)
 * @param src {RelationType | ModelAssociation | undefined}
 * @returns array of targetNames, or `undefined`
 */
const extractTargetNamesFromSrc = (src) => {
    const targetName = src?.targetName;
    const targetNames = src?.targetNames;
    if (Array.isArray(targetNames)) {
        return targetNames;
    }
    else if (typeof targetName === 'string') {
        return [targetName];
    }
    else {
        return undefined;
    }
};
// Generates spinal-cased index name from an array of key field names
// E.g. for keys `[id, title]` => 'id-title'
const indexNameFromKeys = (keys) => {
    return keys.reduce((prev, cur, idx) => {
        if (idx === 0) {
            return cur;
        }
        return `${prev}${IDENTIFIER_KEY_SEPARATOR}${cur}`;
    }, '');
};
const keysEqual = (keysA, keysB) => {
    if (keysA.length !== keysB.length) {
        return false;
    }
    return keysA.every((key, idx) => key === keysB[idx]);
};
// Returns primary keys for a model
const getIndexKeys = (namespace, modelName) => {
    const keyPath = namespace?.keys?.[modelName]?.primaryKey;
    if (keyPath) {
        return keyPath;
    }
    return [ID];
};

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof$3(value) == 'object' && value !== null;
}

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    _ref[0];
        var line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { _defineProperties$1(Constructor.prototype, protoProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _nodeLocations, _nodeLocations2, _nodeLocations3;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message);
    _this.name = 'GraphQLError';
    _this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.

    _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined);
    var nodeLocations = [];

    for (var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++) {
      var _this$nodes;

      var _ref4 = _ref3[_i2];
      var loc = _ref4.loc;

      if (loc != null) {
        nodeLocations.push(loc);
      }
    }

    nodeLocations = undefinedIfEmpty(nodeLocations); // Compute locations in the source for the given nodes/positions.

    _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
    _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function (loc) {
      return loc.start;
    });
    _this.locations = positions && source ? positions.map(function (pos) {
      return getLocation(source, pos);
    }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function (loc) {
      return getLocation(loc.source, loc.start);
    });
    _this.path = path !== null && path !== void 0 ? path : undefined;
    var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;

    if (extensions == null && isObjectLike(originalExtensions)) {
      _this.extensions = _objectSpread({}, originalExtensions);
    } else {
      _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
    } // By being enumerable, JSON.stringify will include bellow properties in the resulting output.
    // This ensures that the simplest possible GraphQL service adheres to the spec.


    Object.defineProperties(_assertThisInitialized(_this), {
      message: {
        enumerable: true
      },
      locations: {
        enumerable: _this.locations != null
      },
      path: {
        enumerable: _this.path != null
      },
      extensions: {
        enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass$1(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */


function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++) {
      var node = _error$nodes2[_i4];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++) {
      var location = _error$locations2[_i6];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error('Unexpected invariant triggered.');
  }
}

// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;

/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || invariant(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (nodejsCustomInspectSymbol) {
    classObject.prototype[nodejsCustomInspectSymbol] = fn;
  }
}

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Token);
/**
 * @internal
 */

function isNode$1(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof$1(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
var instanceOf = process.env.NODE_ENV === 'production' ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (_typeof(value) === 'object' && value !== null) {
    var _value$constructor;

    var className = constructor.prototype[Symbol.toStringTag];
    var valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
    Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;

    if (className === valueClassName) {
      var stringifiedValue = inspect(value);
      throw new Error("Cannot use ".concat(className, " \"").concat(stringifiedValue, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
};

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { _defineProperties(Constructor.prototype, protoProps); return Constructor; }

/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return instanceOf(source, Source);
}

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw syntaxError(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}

/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? "\"".concat(kind, "\"") : kind;
}

/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode$1(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode$1(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap$1('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap$1(' = ', defaultValue) + wrap$1(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap$1('', alias, ': ') + name;
    var argsLine = prefix + wrap$1('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap$1('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap$1(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap$1('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap$1('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap$1('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap$1('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap$1('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap$1('(\n', indent(join(args, '\n')), '\n)') : wrap$1('(', join(args, ', '), ')')) + ': ' + type + wrap$1(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap$1('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap$1('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap$1('(\n', indent(join(args, '\n')), '\n)') : wrap$1('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap$1('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap$1('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap$1('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap$1(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap$1('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class RestApiError extends ApiError {
    constructor(params) {
        super(params);
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = RestApiError;
        Object.setPrototypeOf(this, RestApiError.prototype);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Internal-only class for CanceledError.
 *
 * @internal
 */
class CanceledError extends RestApiError {
    constructor(params = {}) {
        super({
            name: 'CanceledError',
            message: 'Request is canceled by user',
            ...params,
        });
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = CanceledError;
        Object.setPrototypeOf(this, CanceledError.prototype);
    }
}
/**
 * Check if an error is caused by user calling `cancel()` in REST API.
 *
 * @note This function works **ONLY** for errors thrown by REST API. For GraphQL APIs, use `client.isCancelError(error)`
 *   instead. `client` is generated from  `generateClient()` API from `aws-amplify/api`.
 *
 * @param {unknown} error The unknown exception to be checked.
 * @returns - A boolean indicating if the error was from an upload cancellation
 */
const isCancelError = (error) => !!error && error instanceof CanceledError;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const deepFreeze = (object) => {
    const propNames = Reflect.ownKeys(object);
    for (const name of propNames) {
        const value = object[name];
        if ((value && typeof value === 'object') || typeof value === 'function') {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AmplifyClass {
    constructor() {
        this.oAuthListener = undefined;
        this.resourcesConfig = {};
        this.libraryOptions = {};
        this.Auth = new AuthClass();
    }
    /**
     * Configures Amplify for use with your back-end resources.
     *
     * @remarks
     * This API does not perform any merging of either `resourcesConfig` or `libraryOptions`. The most recently
     * provided values will be used after configuration.
     *
     * @remarks
     * `configure` can be used to specify additional library options where available for supported categories.
     *
     * @param resourceConfig - Back-end resource configuration. Typically provided via the `aws-exports.js` file.
     * @param libraryOptions - Additional options for customizing the behavior of the library.
     */
    configure(resourcesConfig, libraryOptions) {
        const resolvedResourceConfig = parseAmplifyConfig(resourcesConfig);
        this.resourcesConfig = resolvedResourceConfig;
        if (libraryOptions) {
            this.libraryOptions = libraryOptions;
        }
        // Make resource config immutable
        this.resourcesConfig = deepFreeze(this.resourcesConfig);
        this.Auth.configure(this.resourcesConfig.Auth, this.libraryOptions.Auth);
        Hub.dispatch('core', {
            event: 'configure',
            data: this.resourcesConfig,
        }, 'Configure', AMPLIFY_SYMBOL);
        this.notifyOAuthListener();
    }
    /**
     * Provides access to the current back-end resource configuration for the Library.
     *
     * @returns Returns the immutable back-end resource configuration.
     */
    getConfig() {
        return this.resourcesConfig;
    }
    /** @internal */
    [ADD_OAUTH_LISTENER](listener) {
        if (this.resourcesConfig.Auth?.Cognito.loginWith?.oauth) {
            // when Amplify has been configured with a valid OAuth config while adding the listener, run it directly
            listener(this.resourcesConfig.Auth?.Cognito);
        }
        else {
            // otherwise register the listener and run it later when Amplify gets configured with a valid oauth config
            this.oAuthListener = listener;
        }
    }
    notifyOAuthListener() {
        if (!this.resourcesConfig.Auth?.Cognito.loginWith?.oauth ||
            !this.oAuthListener) {
            return;
        }
        this.oAuthListener(this.resourcesConfig.Auth?.Cognito);
        // the listener should only be notified once with a valid oauth config
        this.oAuthListener = undefined;
    }
}
/**
 * The `Amplify` utility is used to configure the library.
 *
 * @remarks
 * `Amplify` orchestrates cross-category communication within the library.
 */
const Amplify = new AmplifyClass();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Fetch the auth session including the tokens and credentials if they are available. By default it
 * does not refresh the auth tokens or credentials if they are loaded in storage already. You can force a refresh
 * with `{ forceRefresh: true }` input.
 *
 * @param options - Options configuring the fetch behavior.
 * @throws {@link AuthError} - Throws error when session information cannot be refreshed.
 * @returns Promise<AuthSession>
 */
const fetchAuthSession = (options) => {
    return fetchAuthSession$1(Amplify, options);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const parseMetadata = (response) => {
    const { headers, statusCode } = response;
    return {
        ...(isMetadataBearer(response) ? response.$metadata : {}),
        httpStatusCode: statusCode,
        requestId: headers['x-amzn-requestid'] ??
            headers['x-amzn-request-id'] ??
            headers['x-amz-request-id'],
        extendedRequestId: headers['x-amz-id-2'],
        cfId: headers['x-amz-cf-id'],
    };
};
const isMetadataBearer = (response) => typeof response?.$metadata === 'object';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Utility functions for serializing and deserializing of JSON protocol in general(including: REST-JSON, JSON-RPC, etc.)
 */
/**
 * Error parser for AWS JSON protocol.
 */
const parseJsonError = async (response) => {
    if (!response || response.statusCode < 300) {
        return;
    }
    const body = await parseJsonBody(response);
    const sanitizeErrorCode = (rawValue) => {
        const [cleanValue] = rawValue.toString().split(/[,:]+/);
        if (cleanValue.includes('#')) {
            return cleanValue.split('#')[1];
        }
        return cleanValue;
    };
    const code = sanitizeErrorCode(response.headers['x-amzn-errortype'] ??
        body.code ??
        body.__type ??
        'UnknownError');
    const message = body.message ?? body.Message ?? 'Unknown error';
    const error = new Error(message);
    return Object.assign(error, {
        name: code,
        $metadata: parseMetadata(response),
    });
};
/**
 * Parse JSON response body to JavaScript object.
 */
const parseJsonBody = async (response) => {
    if (!response.body) {
        throw new Error('Missing response payload');
    }
    const output = await response.body.json();
    return Object.assign(output, {
        $metadata: parseMetadata(response),
    });
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_RETRY_ATTEMPTS = 3;
/**
 * Retry middleware
 */
const retryMiddlewareFactory = ({ maxAttempts = DEFAULT_RETRY_ATTEMPTS, retryDecider, computeDelay, abortSignal, }) => {
    if (maxAttempts < 1) {
        throw new Error('maxAttempts must be greater than 0');
    }
    return (next, context) => async function retryMiddleware(request) {
        let error;
        let attemptsCount = context.attemptsCount ?? 0;
        let response;
        // When retry is not needed or max attempts is reached, either error or response will be set. This function handles either cases.
        const handleTerminalErrorOrResponse = () => {
            if (response) {
                addOrIncrementMetadataAttempts(response, attemptsCount);
                return response;
            }
            else {
                addOrIncrementMetadataAttempts(error, attemptsCount);
                throw error;
            }
        };
        while (!abortSignal?.aborted && attemptsCount < maxAttempts) {
            try {
                response = await next(request);
                error = undefined;
            }
            catch (e) {
                error = e;
                response = undefined;
            }
            // context.attemptsCount may be updated after calling next handler which may retry the request by itself.
            attemptsCount =
                (context.attemptsCount ?? 0) > attemptsCount
                    ? (context.attemptsCount ?? 0)
                    : attemptsCount + 1;
            context.attemptsCount = attemptsCount;
            const { isCredentialsExpiredError, retryable } = await retryDecider(response, error, context);
            if (retryable) {
                // Setting isCredentialsInvalid flag to notify signing middleware to forceRefresh credentials provider.
                context.isCredentialsExpired = !!isCredentialsExpiredError;
                if (!abortSignal?.aborted && attemptsCount < maxAttempts) {
                    // prevent sleep for last attempt or cancelled request;
                    const delay = computeDelay(attemptsCount);
                    await cancellableSleep(delay, abortSignal);
                }
                continue;
            }
            else {
                return handleTerminalErrorOrResponse();
            }
        }
        if (abortSignal?.aborted) {
            throw new Error('Request aborted.');
        }
        else {
            return handleTerminalErrorOrResponse();
        }
    };
};
const cancellableSleep = (timeoutMs, abortSignal) => {
    if (abortSignal?.aborted) {
        return Promise.resolve();
    }
    let timeoutId;
    let sleepPromiseResolveFn;
    const sleepPromise = new Promise(resolve => {
        sleepPromiseResolveFn = resolve;
        timeoutId = setTimeout(resolve, timeoutMs);
    });
    abortSignal?.addEventListener('abort', function cancelSleep(_) {
        clearTimeout(timeoutId);
        abortSignal?.removeEventListener('abort', cancelSleep);
        sleepPromiseResolveFn();
    });
    return sleepPromise;
};
const addOrIncrementMetadataAttempts = (nextHandlerOutput, attempts) => {
    if (Object.prototype.toString.call(nextHandlerOutput) !== '[object Object]') {
        return;
    }
    nextHandlerOutput.$metadata = {
        ...(nextHandlerOutput.$metadata ?? {}),
        attempts,
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware injects user agent string to specified header(default to 'x-amz-user-agent'),
 * if the header is not set already.
 *
 * TODO: incorporate new user agent design
 */
const userAgentMiddlewareFactory = ({ userAgentHeader = 'x-amz-user-agent', userAgentValue = '', }) => next => {
    return async function userAgentMiddleware(request) {
        if (userAgentValue.trim().length === 0) {
            const result = await next(request);
            return result;
        }
        else {
            const headerName = userAgentHeader.toLowerCase();
            request.headers[headerName] = request.headers[headerName]
                ? `${request.headers[headerName]} ${userAgentValue}`
                : userAgentValue;
            const response = await next(request);
            return response;
        }
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Compose a transfer handler with a core transfer handler and a list of middleware.
 * @param coreHandler Core transfer handler
 * @param middleware	List of middleware
 * @returns A transfer handler whose option type is the union of the core
 * 	transfer handler's option type and the middleware's option type.
 * @internal
 */
const composeTransferHandler = (coreHandler, middleware) => (request, options) => {
    const context = {};
    let composedHandler = (composeHandlerRequest) => coreHandler(composeHandlerRequest, options);
    for (let i = middleware.length - 1; i >= 0; i--) {
        const m = middleware[i];
        const resolvedMiddleware = m(options);
        composedHandler = resolvedMiddleware(composedHandler, context);
    }
    return composedHandler(request);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Cache the payload of a response body. It allows multiple calls to the body,
 * for example, when reading the body in both retry decider and error deserializer.
 * Caching body is allowed here because we call the body accessor(blob(), json(),
 * etc.) when body is small or streaming implementation is not available(RN).
 *
 * @internal
 */
const withMemoization = (payloadAccessor) => {
    let cached;
    return () => {
        if (!cached) {
            // Explicitly not awaiting. Intermediate await would add overhead and
            // introduce a possible race in the event that this wrapper is called
            // again before the first `payloadAccessor` call resolves.
            cached = payloadAccessor();
        }
        return cached;
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const shouldSendBody = (method) => !['HEAD', 'GET', 'DELETE'].includes(method.toUpperCase());
// TODO[AllanZhengYP]: we need to provide isCanceledError utility
const fetchTransferHandler = async ({ url, method, headers, body }, { abortSignal, cache, withCrossDomainCredentials }) => {
    let resp;
    try {
        resp = await fetch(url, {
            method,
            headers,
            body: shouldSendBody(method) ? body : undefined,
            signal: abortSignal,
            cache,
            credentials: withCrossDomainCredentials ? 'include' : 'same-origin',
        });
    }
    catch (e) {
        if (e instanceof TypeError) {
            throw new AmplifyError({
                name: AmplifyErrorCode.NetworkError,
                message: 'A network error has occurred.',
                underlyingError: e,
            });
        }
        throw e;
    }
    const responseHeaders = {};
    resp.headers?.forEach((value, key) => {
        responseHeaders[key.toLowerCase()] = value;
    });
    const httpResponse = {
        statusCode: resp.status,
        headers: responseHeaders,
        body: null,
    };
    // resp.body is a ReadableStream according to Fetch API spec, but React Native
    // does not implement it.
    const bodyWithMixin = Object.assign(resp.body ?? {}, {
        text: withMemoization(() => resp.text()),
        blob: withMemoization(() => resp.blob()),
        json: withMemoization(() => resp.json()),
    });
    return {
        ...httpResponse,
        body: bodyWithMixin,
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const unauthenticatedHandler = composeTransferHandler(fetchTransferHandler, [userAgentMiddlewareFactory, retryMiddlewareFactory]);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: [v6] The separate retry utility is used by Data packages now and will replaced by retry middleware.
const DEFAULT_MAX_DELAY_MS = 5 * 60 * 1000;
const jitteredBackoff = attempt => {
    const delayFunction = jitteredBackoff$1(DEFAULT_MAX_DELAY_MS);
    const delay = delayFunction(attempt);
    // The delayFunction returns false when the delay is greater than the max delay(5 mins).
    // In this case, the retry middleware will delay 5 mins instead, as a ceiling of the delay.
    return delay === false ? DEFAULT_MAX_DELAY_MS : delay;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// via https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L8
const CLOCK_SKEW_ERROR_CODES = [
    'AuthFailure',
    'InvalidSignatureException',
    'RequestExpired',
    'RequestInTheFuture',
    'RequestTimeTooSkewed',
    'SignatureDoesNotMatch',
    'BadRequestException', // API Gateway
];
/**
 * Given an error code, returns true if it is related to a clock skew error.
 *
 * @param errorCode String representation of some error.
 * @returns True if given error is present in `CLOCK_SKEW_ERROR_CODES`, false otherwise.
 *
 * @internal
 */
const isClockSkewError = (errorCode) => !!errorCode && CLOCK_SKEW_ERROR_CODES.includes(errorCode);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Get retry decider function
 * @param errorParser Function to load JavaScript error from HTTP response
 */
const getRetryDecider = (errorParser) => async (response, error) => {
    const parsedError = error ??
        (await errorParser(response)) ??
        undefined;
    const errorCode = parsedError?.code || parsedError?.name;
    const statusCode = response?.statusCode;
    const isRetryable = isConnectionError(error) ||
        isThrottlingError(statusCode, errorCode) ||
        isClockSkewError(errorCode) ||
        isServerSideError(statusCode, errorCode);
    return {
        retryable: isRetryable,
    };
};
// reference: https://github.com/aws/aws-sdk-js-v3/blob/ab0e7be36e7e7f8a0c04834357aaad643c7912c3/packages/service-error-classification/src/constants.ts#L22-L37
const THROTTLING_ERROR_CODES = [
    'BandwidthLimitExceeded',
    'EC2ThrottledException',
    'LimitExceededException',
    'PriorRequestNotComplete',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException',
];
const TIMEOUT_ERROR_CODES = [
    'TimeoutError',
    'RequestTimeout',
    'RequestTimeoutException',
];
const isThrottlingError = (statusCode, errorCode) => statusCode === 429 ||
    (!!errorCode && THROTTLING_ERROR_CODES.includes(errorCode));
const isConnectionError = (error) => [
    AmplifyErrorCode.NetworkError,
    // TODO(vNext): unify the error code `ERR_NETWORK` used by the Storage XHR handler
    'ERR_NETWORK',
].includes(error?.name);
const isServerSideError = (statusCode, errorCode) => (!!statusCode && [500, 502, 503, 504].includes(statusCode)) ||
    (!!errorCode && TIMEOUT_ERROR_CODES.includes(errorCode));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class KeyValueStorage {
    constructor(storage) {
        this.storage = storage;
    }
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    async setItem(key, value) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.setItem(key, value);
    }
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    async getItem(key) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        return this.storage.getItem(key);
    }
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    async removeItem(key) {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.removeItem(key);
    }
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    async clear() {
        if (!this.storage)
            throw new PlatformNotSupportedError();
        this.storage.clear();
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class InMemoryStorage {
    constructor() {
        this.storage = new Map();
    }
    get length() {
        return this.storage.size;
    }
    key(index) {
        if (index > this.length - 1) {
            return null;
        }
        return Array.from(this.storage.keys())[index];
    }
    setItem(key, value) {
        this.storage.set(key, value);
    }
    getItem(key) {
        return this.storage.get(key) ?? null;
    }
    removeItem(key) {
        this.storage.delete(key);
    }
    clear() {
        this.storage.clear();
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 * @returns Either a reference to window.localStorage or an in-memory storage as fallback
 */
const logger$e = new ConsoleLogger('CoreStorageUtils');
const getLocalStorageWithFallback = () => {
    try {
        // Attempt to use localStorage directly
        if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
        }
    }
    catch (e) {
        // Handle any errors related to localStorage access
        logger$e.info('localStorage not found. InMemoryStorage is used as a fallback.');
    }
    // Return in-memory storage as a fallback if localStorage is not accessible
    return new InMemoryStorage();
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Default cache config
 */
const defaultConfig = {
    keyPrefix: 'aws-amplify-cache',
    capacityInBytes: 1048576,
    itemMaxSize: 210000,
    defaultTTL: 259200000,
    defaultPriority: 5,
    warningThreshold: 0.8,
};
const currentSizeKey = 'CurSize';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * return the byte size of the string
 * @param str
 */
function getByteLength(str) {
    let ret = 0;
    ret = str.length;
    for (let i = str.length; i >= 0; i -= 1) {
        const charCode = str.charCodeAt(i);
        if (charCode > 0x7f && charCode <= 0x7ff) {
            ret += 1;
        }
        else if (charCode > 0x7ff && charCode <= 0xffff) {
            ret += 2;
        }
        // trail surrogate
        if (charCode >= 0xdc00 && charCode <= 0xdfff) {
            i -= 1;
        }
    }
    return ret;
}
/**
 * get current time
 */
function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.getTime();
}
const getCurrentSizeKey = (keyPrefix) => `${keyPrefix}${currentSizeKey}`;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var CacheErrorCode;
(function (CacheErrorCode) {
    CacheErrorCode["NoCacheItem"] = "NoCacheItem";
    CacheErrorCode["NullNextNode"] = "NullNextNode";
    CacheErrorCode["NullPreviousNode"] = "NullPreviousNode";
})(CacheErrorCode || (CacheErrorCode = {}));
const cacheErrorMap = {
    [CacheErrorCode.NoCacheItem]: {
        message: 'Item not found in the cache storage.',
    },
    [CacheErrorCode.NullNextNode]: {
        message: 'Next node is null.',
    },
    [CacheErrorCode.NullPreviousNode]: {
        message: 'Previous node is null.',
    },
};
const assert = createAssertionFunction(cacheErrorMap);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$d = new ConsoleLogger('StorageCache');
/**
 * Initialization of the cache
 *
 */
class StorageCacheCommon {
    /**
     * Initialize the cache
     *
     * @param config - Custom configuration for this instance.
     */
    constructor({ config, keyValueStorage, }) {
        this.config = {
            ...defaultConfig,
            ...config,
        };
        this.keyValueStorage = keyValueStorage;
        this.sanitizeConfig();
    }
    getModuleName() {
        return 'Cache';
    }
    /**
     * Set custom configuration for the cache instance.
     *
     * @param config - customized configuration (without keyPrefix, which can't be changed)
     *
     * @return - the current configuration
     */
    configure(config) {
        if (config) {
            if (config.keyPrefix) {
                logger$d.warn('keyPrefix can not be re-configured on an existing Cache instance.');
            }
            this.config = {
                ...this.config,
                ...config,
            };
        }
        this.sanitizeConfig();
        return this.config;
    }
    /**
     * return the current size of the cache
     * @return {Promise}
     */
    async getCurrentCacheSize() {
        let size = await this.getStorage().getItem(getCurrentSizeKey(this.config.keyPrefix));
        if (!size) {
            await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), '0');
            size = '0';
        }
        return Number(size);
    }
    /**
     * Set item into cache. You can put number, string, boolean or object.
     * The cache will first check whether has the same key.
     * If it has, it will delete the old item and then put the new item in
     * The cache will pop out items if it is full
     * You can specify the cache item options. The cache will abort and output a warning:
     * If the key is invalid
     * If the size of the item exceeds itemMaxSize.
     * If the value is undefined
     * If incorrect cache item configuration
     * If error happened with browser storage
     *
     * @param {String} key - the key of the item
     * @param {Object} value - the value of the item
     * @param {Object} [options] - optional, the specified meta-data
     *
     * @return {Promise}
     */
    async setItem(key, value, options) {
        logger$d.debug(`Set item: key is ${key}, value is ${value} with options: ${options}`);
        if (!key || key === currentSizeKey) {
            logger$d.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
            return;
        }
        if (typeof value === 'undefined') {
            logger$d.warn(`The value of item should not be undefined!`);
            return;
        }
        const cacheItemOptions = {
            priority: options?.priority !== undefined
                ? options.priority
                : this.config.defaultPriority,
            expires: options?.expires !== undefined
                ? options.expires
                : this.config.defaultTTL + getCurrentTime(),
        };
        if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
            logger$d.warn(`Invalid parameter: priority due to out or range. It should be within 1 and 5.`);
            return;
        }
        const prefixedKey = `${this.config.keyPrefix}${key}`;
        const item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
        // check whether this item is too big;
        if (item.byteSize > this.config.itemMaxSize) {
            logger$d.warn(`Item with key: ${key} you are trying to put into is too big!`);
            return;
        }
        try {
            // first look into the storage, if it exists, delete it.
            const val = await this.getStorage().getItem(prefixedKey);
            if (val) {
                await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
            }
            // check whether the cache is full
            if (await this.isCacheFull(item.byteSize)) {
                const validKeys = await this.clearInvalidAndGetRemainingKeys();
                if (await this.isCacheFull(item.byteSize)) {
                    const sizeToPop = await this.sizeToPop(item.byteSize);
                    await this.popOutItems(validKeys, sizeToPop);
                }
            }
            // put item in the cache
            return this.setCacheItem(prefixedKey, item);
        }
        catch (e) {
            logger$d.warn(`setItem failed! ${e}`);
        }
    }
    /**
     * Get item from cache. It will return null if item doesn’t exist or it has been expired.
     * If you specified callback function in the options,
     * then the function will be executed if no such item in the cache
     * and finally put the return value into cache.
     * Please make sure the callback function will return the value you want to put into the cache.
     * The cache will abort output a warning:
     * If the key is invalid
     * If error happened with AsyncStorage
     *
     * @param {String} key - the key of the item
     * @param {Object} [options] - the options of callback function
     *
     * @return {Promise} - return a promise resolves to be the value of the item
     */
    async getItem(key, options) {
        logger$d.debug(`Get item: key is ${key} with options ${options}`);
        let cached;
        if (!key || key === currentSizeKey) {
            logger$d.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
            return null;
        }
        const prefixedKey = `${this.config.keyPrefix}${key}`;
        try {
            cached = await this.getStorage().getItem(prefixedKey);
            if (cached != null) {
                if (await this.isExpired(prefixedKey)) {
                    // if expired, remove that item and return null
                    await this.removeCacheItem(prefixedKey, JSON.parse(cached).byteSize);
                }
                else {
                    // if not expired, update its visitedTime and return the value
                    const item = await this.updateVisitedTime(JSON.parse(cached), prefixedKey);
                    return item.data;
                }
            }
            if (options?.callback) {
                const val = options.callback();
                if (val !== null) {
                    await this.setItem(key, val, options);
                }
                return val;
            }
            return null;
        }
        catch (e) {
            logger$d.warn(`getItem failed! ${e}`);
            return null;
        }
    }
    /**
     * remove item from the cache
     * The cache will abort output a warning:
     * If error happened with AsyncStorage
     * @param {String} key - the key of the item
     * @return {Promise}
     */
    async removeItem(key) {
        logger$d.debug(`Remove item: key is ${key}`);
        if (!key || key === currentSizeKey) {
            logger$d.warn(`Invalid key: should not be empty or reserved key: '${currentSizeKey}'`);
            return;
        }
        const prefixedKey = `${this.config.keyPrefix}${key}`;
        try {
            const val = await this.getStorage().getItem(prefixedKey);
            if (val) {
                await this.removeCacheItem(prefixedKey, JSON.parse(val).byteSize);
            }
        }
        catch (e) {
            logger$d.warn(`removeItem failed! ${e}`);
        }
    }
    /**
     * Return all the keys owned by this cache.
     * Will return an empty array if error occurred.
     *
     * @return {Promise}
     */
    async getAllKeys() {
        try {
            return await this.getAllCacheKeys();
        }
        catch (e) {
            logger$d.warn(`getAllkeys failed! ${e}`);
            return [];
        }
    }
    getStorage() {
        return this.keyValueStorage;
    }
    /**
     * check whether item is expired
     *
     * @param key - the key of the item
     *
     * @return true if the item is expired.
     */
    async isExpired(key) {
        const text = await this.getStorage().getItem(key);
        assert(text !== null, CacheErrorCode.NoCacheItem, `Key: ${key}`);
        const item = JSON.parse(text);
        if (getCurrentTime() >= item.expires) {
            return true;
        }
        return false;
    }
    /**
     * delete item from cache
     *
     * @param prefixedKey - the key of the item
     * @param size - optional, the byte size of the item
     */
    async removeCacheItem(prefixedKey, size) {
        const item = await this.getStorage().getItem(prefixedKey);
        assert(item !== null, CacheErrorCode.NoCacheItem, `Key: ${prefixedKey}`);
        const itemSize = size ?? JSON.parse(item).byteSize;
        // first try to update the current size of the cache
        await this.decreaseCurrentSizeInBytes(itemSize);
        // try to remove the item from cache
        try {
            await this.getStorage().removeItem(prefixedKey);
        }
        catch (removeItemError) {
            // if some error happened, we need to rollback the current size
            await this.increaseCurrentSizeInBytes(itemSize);
            logger$d.error(`Failed to remove item: ${removeItemError}`);
        }
    }
    /**
     * produce a JSON object with meta-data and data value
     * @param value - the value of the item
     * @param options - optional, the specified meta-data
     *
     * @return - the item which has the meta-data and the value
     */
    fillCacheItem(key, value, options) {
        const item = {
            key,
            data: value,
            timestamp: getCurrentTime(),
            visitedTime: getCurrentTime(),
            priority: options.priority ?? 0,
            expires: options.expires ?? 0,
            type: typeof value,
            byteSize: 0,
        };
        // calculate byte size
        item.byteSize = getByteLength(JSON.stringify(item));
        // re-calculate using cache item with updated byteSize property
        item.byteSize = getByteLength(JSON.stringify(item));
        return item;
    }
    sanitizeConfig() {
        if (this.config.itemMaxSize > this.config.capacityInBytes) {
            logger$d.error('Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.');
            this.config.itemMaxSize = defaultConfig.itemMaxSize;
        }
        if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
            logger$d.error('Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.');
            this.config.defaultPriority = defaultConfig.defaultPriority;
        }
        if (Number(this.config.warningThreshold) > 1 ||
            Number(this.config.warningThreshold) < 0) {
            logger$d.error('Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.');
            this.config.warningThreshold = defaultConfig.warningThreshold;
        }
        // Set 5MB limit
        const cacheLimit = 5 * 1024 * 1024;
        if (this.config.capacityInBytes > cacheLimit) {
            logger$d.error('Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.');
            this.config.capacityInBytes = defaultConfig.capacityInBytes;
        }
    }
    /**
     * increase current size of the cache
     *
     * @param amount - the amount of the cache szie which need to be increased
     */
    async increaseCurrentSizeInBytes(amount) {
        const size = await this.getCurrentCacheSize();
        await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size + amount).toString());
    }
    /**
     * decrease current size of the cache
     *
     * @param amount - the amount of the cache size which needs to be decreased
     */
    async decreaseCurrentSizeInBytes(amount) {
        const size = await this.getCurrentCacheSize();
        await this.getStorage().setItem(getCurrentSizeKey(this.config.keyPrefix), (size - amount).toString());
    }
    /**
     * update the visited time if item has been visited
     *
     * @param item - the item which need to be updated
     * @param prefixedKey - the key of the item
     *
     * @return the updated item
     */
    async updateVisitedTime(item, prefixedKey) {
        item.visitedTime = getCurrentTime();
        await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
        return item;
    }
    /**
     * put item into cache
     *
     * @param prefixedKey - the key of the item
     * @param itemData - the value of the item
     * @param itemSizeInBytes - the byte size of the item
     */
    async setCacheItem(prefixedKey, item) {
        // first try to update the current size of the cache.
        await this.increaseCurrentSizeInBytes(item.byteSize);
        // try to add the item into cache
        try {
            await this.getStorage().setItem(prefixedKey, JSON.stringify(item));
        }
        catch (setItemErr) {
            // if some error happened, we need to rollback the current size
            await this.decreaseCurrentSizeInBytes(item.byteSize);
            logger$d.error(`Failed to set item ${setItemErr}`);
        }
    }
    /**
     * total space needed when poping out items
     *
     * @param itemSize
     *
     * @return total space needed
     */
    async sizeToPop(itemSize) {
        const cur = await this.getCurrentCacheSize();
        const spaceItemNeed = cur + itemSize - this.config.capacityInBytes;
        const cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
        return spaceItemNeed > cacheThresholdSpace
            ? spaceItemNeed
            : cacheThresholdSpace;
    }
    /**
     * see whether cache is full
     *
     * @param itemSize
     *
     * @return true if cache is full
     */
    async isCacheFull(itemSize) {
        const cur = await this.getCurrentCacheSize();
        return itemSize + cur > this.config.capacityInBytes;
    }
    /**
     * get all the items we have, sort them by their priority,
     * if priority is same, sort them by their last visited time
     * pop out items from the low priority (5 is the lowest)
     * @private
     * @param keys - all the keys in this cache
     * @param sizeToPop - the total size of the items which needed to be poped out
     */
    async popOutItems(keys, sizeToPop) {
        const items = [];
        let remainedSize = sizeToPop;
        for (const key of keys) {
            const val = await this.getStorage().getItem(key);
            if (val != null) {
                const item = JSON.parse(val);
                items.push(item);
            }
        }
        // first compare priority
        // then compare visited time
        items.sort((a, b) => {
            if (a.priority > b.priority) {
                return -1;
            }
            else if (a.priority < b.priority) {
                return 1;
            }
            else {
                if (a.visitedTime < b.visitedTime) {
                    return -1;
                }
                else
                    return 1;
            }
        });
        for (const item of items) {
            // pop out items until we have enough room for new item
            await this.removeCacheItem(item.key, item.byteSize);
            remainedSize -= item.byteSize;
            if (remainedSize <= 0) {
                return;
            }
        }
    }
    /**
     * Scan the storage and combine the following operations for efficiency
     *   1. Clear out all expired keys owned by this cache, not including the size key.
     *   2. Return the remaining keys.
     *
     * @return The remaining valid keys
     */
    async clearInvalidAndGetRemainingKeys() {
        const remainingKeys = [];
        const keys = await this.getAllCacheKeys({
            omitSizeKey: true,
        });
        for (const key of keys) {
            if (await this.isExpired(key)) {
                await this.removeCacheItem(key);
            }
            else {
                remainingKeys.push(key);
            }
        }
        return remainingKeys;
    }
    /**
     * clear the entire cache
     * The cache will abort and output a warning if error occurs
     * @return {Promise}
     */
    async clear() {
        logger$d.debug(`Clear Cache`);
        try {
            const keys = await this.getAllKeys();
            for (const key of keys) {
                const prefixedKey = `${this.config.keyPrefix}${key}`;
                await this.getStorage().removeItem(prefixedKey);
            }
        }
        catch (e) {
            logger$d.warn(`clear failed! ${e}`);
        }
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$c = new ConsoleLogger('StorageCache');
/**
 * Customized storage based on the SessionStorage or LocalStorage with LRU implemented
 */
class StorageCache extends StorageCacheCommon {
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    constructor(config) {
        const storage = getLocalStorageWithFallback();
        super({ config, keyValueStorage: new KeyValueStorage(storage) });
        this.storage = storage;
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    async getAllCacheKeys(options) {
        const { omitSizeKey } = options ?? {};
        const keys = [];
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            if (omitSizeKey && key === getCurrentSizeKey(this.config.keyPrefix)) {
                continue;
            }
            if (key?.startsWith(this.config.keyPrefix)) {
                keys.push(key.substring(this.config.keyPrefix.length));
            }
        }
        return keys;
    }
    /**
     * Return a new instance of cache with customized configuration.
     * @param {Object} config - the customized configuration
     * @return {Object} - the new instance of Cache
     */
    createInstance(config) {
        if (!config.keyPrefix || config.keyPrefix === defaultConfig.keyPrefix) {
            logger$c.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = getCurrentTime.toString();
        }
        return new StorageCache(config);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const Cache = new StorageCache();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns a `Date` that is corrected for clock skew.
 *
 * @param systemClockOffset The offset of the system clock in milliseconds.
 *
 * @returns `Date` representing the current time adjusted by the system clock offset.
 *
 * @internal
 */
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// 5 mins in milliseconds. Ref: https://github.com/aws/aws-sdk-js-v3/blob/6c0f44fab30a1bb2134af47362a31332abc3666b/packages/middleware-signing/src/utils/isClockSkewed.ts#L10
const SKEW_WINDOW = 5 * 60 * 1000;
/**
 * Checks if the provided date is within the skew window of 5 minutes.
 *
 * @param clockTimeInMilliseconds Time to check for skew in milliseconds.
 * @param clockOffsetInMilliseconds Offset to check clock against in milliseconds.
 *
 * @returns True if skewed. False otherwise.
 *
 * @internal
 */
const isClockSkewed = (clockTimeInMilliseconds, clockOffsetInMilliseconds) => Math.abs(getSkewCorrectedDate(clockOffsetInMilliseconds).getTime() -
    clockTimeInMilliseconds) >= SKEW_WINDOW;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Returns the difference between clock time and the current system time if clock is skewed.
 *
 * @param clockTimeInMilliseconds Clock time in milliseconds.
 * @param currentSystemClockOffset Current system clock offset in milliseconds.
 *
 * @internal
 */
const getUpdatedSystemClockOffset = (clockTimeInMilliseconds, currentSystemClockOffset) => {
    if (isClockSkewed(clockTimeInMilliseconds, currentSystemClockOffset)) {
        return clockTimeInMilliseconds - Date.now();
    }
    return currentSystemClockOffset;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Middleware that SigV4 signs request with AWS credentials, and correct system clock offset.
 * This middleware is expected to be placed after retry middleware.
 */
const signingMiddlewareFactory = ({ credentials, region, service, uriEscapePath = true, }) => {
    let currentSystemClockOffset;
    return (next, context) => async function signingMiddleware(request) {
        currentSystemClockOffset = currentSystemClockOffset ?? 0;
        const signRequestOptions = {
            credentials: typeof credentials === 'function'
                ? await credentials({
                    forceRefresh: !!context?.isCredentialsExpired,
                })
                : credentials,
            signingDate: getSkewCorrectedDate(currentSystemClockOffset),
            signingRegion: region,
            signingService: service,
            uriEscapePath,
        };
        const signedRequest = await signRequest(request, signRequestOptions);
        const response = await next(signedRequest);
        // Update system clock offset if response contains date header, regardless of the status code.
        // non-2xx response will still be returned from next handler instead of thrown, because it's
        // only thrown by the retry middleware.
        const dateString = getDateHeader(response);
        if (dateString) {
            currentSystemClockOffset = getUpdatedSystemClockOffset(Date.parse(dateString), currentSystemClockOffset);
        }
        return response;
    };
};
const getDateHeader = ({ headers } = {}) => headers?.date ?? headers?.Date ?? headers?.['x-amz-date'];

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const authenticatedHandler = composeTransferHandler(fetchTransferHandler, [
    userAgentMiddlewareFactory,
    retryMiddlewareFactory,
    signingMiddlewareFactory,
]);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var RestApiValidationErrorCode;
(function (RestApiValidationErrorCode) {
    RestApiValidationErrorCode["InvalidApiName"] = "InvalidApiName";
})(RestApiValidationErrorCode || (RestApiValidationErrorCode = {}));
({
    [RestApiValidationErrorCode.InvalidApiName]: {
        message: 'API name is invalid.',
        recoverySuggestion: 'Check if the API name matches the one in your configuration or `aws-exports.js`',
    },
});

/**
 * Parses both AWS and non-AWS error responses coming from the users' backend code.
 * * AWS errors generated by the AWS services(e.g. API Gateway, Bedrock). They can be Signature errors,
 *   ClockSkew errors, etc. These responses will be parsed to errors with proper name and message from the AWS
 *   services.
 * * non-AWS errors thrown by the user code. They can contain any headers or body. Users need to access the
 *   error.response to get the headers and body and parse them accordingly. The JS error name and message will
 *   be `UnknownError` and `Unknown error` respectively.
 */
const parseRestApiServiceError = async (response) => {
    if (!response) {
        // Response is not considered an error.
        return;
    }
    const parsedAwsError = await parseJsonError(stubErrorResponse(response));
    if (!parsedAwsError) ;
    else {
        const bodyText = await response.body?.text();
        return buildRestApiError(parsedAwsError, {
            statusCode: response.statusCode,
            headers: response.headers,
            body: bodyText,
        });
    }
};
/**
 * The response object needs to be stub here because the parseAwsJsonError assumes the response body to be valid JSON.
 * Although this is true for AWS services, it is not true for responses from user's code. Once the response body is
 * unwrapped as JSON(and fail), it cannot be read as text again. Therefore, we need to stub the response body here to
 * make sure we can read the error response body as a JSON, and may fall back to read as text if it is not a valid JSON.
 */
const stubErrorResponse = (response) => {
    let bodyTextPromise;
    const bodyProxy = new Proxy(response.body, {
        get(target, prop, receiver) {
            if (prop === 'json') {
                // For potential AWS errors, error parser will try to parse the body as JSON first.
                return async () => {
                    if (!bodyTextPromise) {
                        bodyTextPromise = target.text();
                    }
                    try {
                        return JSON.parse(await bodyTextPromise);
                    }
                    catch (error) {
                        // If response body is not a valid JSON, we stub it to be an empty object and eventually parsed
                        // as an unknown error
                        return {};
                    }
                };
            }
            else if (prop === 'text') {
                // For non-AWS errors, users can access the body as a string as a fallback.
                return async () => {
                    if (!bodyTextPromise) {
                        bodyTextPromise = target.text();
                    }
                    return bodyTextPromise;
                };
            }
            else {
                return Reflect.get(target, prop, receiver);
            }
        },
    });
    const responseProxy = new Proxy(response, {
        get(target, prop, receiver) {
            if (prop === 'body') {
                return bodyProxy;
            }
            else {
                return Reflect.get(target, prop, receiver);
            }
        },
    });
    return responseProxy;
};
/**
 * Utility to create a new RestApiError from a service error.
 */
const buildRestApiError = (error, response) => {
    const restApiError = new RestApiError({
        name: error?.name,
        message: error.message,
        underlyingError: error,
        response,
    });
    // $metadata is only required for backwards compatibility.
    return Object.assign(restApiError, { $metadata: error.$metadata });
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$b = new ConsoleLogger('RestApis');

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
function createCancellableOperation(handler, abortController) {
    const isInternalPost = (targetHandler) => !!abortController;
    // For creating a cancellable operation for public REST APIs, we need to create an AbortController
    // internally. Whereas for internal POST APIs, we need to accept in the AbortController from the
    // callers.
    const publicApisAbortController = new AbortController();
    const publicApisAbortSignal = publicApisAbortController.signal;
    const internalPostAbortSignal = abortController?.signal;
    let abortReason;
    const job = async () => {
        try {
            const response = await (isInternalPost(handler)
                ? handler()
                : handler(publicApisAbortSignal));
            if (response.statusCode >= 300) {
                throw await parseRestApiServiceError(response);
            }
            return response;
        }
        catch (error) {
            const abortSignal = internalPostAbortSignal ?? publicApisAbortSignal;
            const message = abortReason ?? abortSignal.reason;
            if (error.name === 'AbortError' || abortSignal?.aborted === true) {
                const canceledError = new CanceledError({
                    ...(message && { message }),
                    underlyingError: error,
                    recoverySuggestion: 'The API request was explicitly canceled. If this is not intended, validate if you called the `cancel()` function on the API request erroneously.',
                });
                logger$b.debug(error);
                throw canceledError;
            }
            logger$b.debug(error);
            throw error;
        }
    };
    if (isInternalPost()) {
        return job();
    }
    else {
        const cancel = (abortMessage) => {
            if (publicApisAbortSignal.aborted === true) {
                return;
            }
            publicApisAbortController.abort(abortMessage);
            // If abort reason is not supported, set a scoped reasons instead. The reason property inside an
            // AbortSignal is a readonly property and trying to set it would throw an error.
            if (abortMessage && publicApisAbortSignal.reason !== abortMessage) {
                abortReason = abortMessage;
            }
        };
        return { response: job(), cancel };
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_REST_IAM_SIGNING_SERVICE = 'execute-api';
const DEFAULT_IAM_SIGNING_REGION = 'us-east-1';
/**
 * The REST endpoints generated by API Gateway
 * @see {@link https://docs.aws.amazon.com/general/latest/gr/apigateway.html#apigateway_region_data_plane}
 */
const APIG_HOSTNAME_PATTERN = /^.+\.([a-z0-9-]+)\.([a-z0-9-]+)\.amazonaws\.com/;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Infer the signing service and region from the given URL, and for REST API only, from the Amplify configuration.
 * It supports raw API Gateway endpoint and AppSync endpoint.
 *
 * @internal
 */
const parseSigningInfo = (url, restApiOptions) => {
    const { service: signingService = DEFAULT_REST_IAM_SIGNING_SERVICE, region: signingRegion = DEFAULT_IAM_SIGNING_REGION, } = {};
    const { hostname } = url;
    const [, service, region] = APIG_HOSTNAME_PATTERN.exec(hostname) ?? [];
    if (service === DEFAULT_REST_IAM_SIGNING_SERVICE) {
        // The configured endpoint is an API Gateway endpoint
        // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-call-api.html
        return {
            service,
            region: region ?? signingRegion,
        };
    }
    else if (service === 'appsync-api') {
        // AppSync endpoint is internally supported because GraphQL operation will send request using POST handler.
        // example: https://xxxx.appsync-api.us-east-1.amazonaws.com/graphql
        return {
            service: 'appsync',
            region: region ?? signingRegion,
        };
    }
    else {
        return {
            service: signingService,
            region: signingRegion,
        };
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Determines if IAM authentication should be applied for a GraphQL request.
 *
 * This function checks the `headers` of the HTTP request to determine if IAM authentication
 * is applicable. IAM authentication is considered applicable if there is no `authorization`
 * header, no `x-api-key` header, and `signingServiceInfo` is provided.
 *
 * @param request - The HTTP request object containing headers.
 * @param signingServiceInfo - Optional signing service information,
 * including service and region.
 * @returns A boolean `true` if IAM authentication should be applied.
 *
 * @internal
 */
const isIamAuthApplicableForGraphQL = ({ headers }, signingServiceInfo) => !headers.authorization && !headers['x-api-key'] && !!signingServiceInfo;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const resolveHeaders = (headers, body) => {
    const normalizedHeaders = {};
    for (const key in headers) {
        normalizedHeaders[key.toLowerCase()] = headers[key];
    }
    if (body) {
        normalizedHeaders['content-type'] = 'application/json; charset=UTF-8';
        if (body instanceof FormData) {
            /**
             * If body is a FormData we should not allow setting content-type.
             * It's because runtime HTTP handlers(xhr, fetch, undici, node-fetch,
             * etc.) will modify the content-type value when setting multipart
             * boundary.
             */
            delete normalizedHeaders['content-type'];
        }
    }
    return normalizedHeaders;
};

/**
 * Make REST API call with best-effort IAM auth.
 * @param amplify Amplify instance to to resolve credentials and tokens. Should use different instance in client-side
 *   and SSR
 * @param options Options accepted from public API options when calling the handlers.
 * @param signingServiceInfo Internal-only options enable IAM auth as well as to to overwrite the IAM signing service
 *   and region. If specified, and NONE of API Key header or Auth header is present, IAM auth will be used.
 * @param iamAuthApplicable Callback function that is used to determine if IAM Auth should be used or not.
 *
 * @internal
 */
const transferHandler = async (amplify, options, iamAuthApplicable, signingServiceInfo) => {
    const { url, method, headers, body, withCredentials, abortSignal } = options;
    const resolvedBody = body
        ? body instanceof FormData
            ? body
            : JSON.stringify(body ?? '')
        : undefined;
    const resolvedHeaders = resolveHeaders(headers, body);
    const request = {
        url,
        headers: resolvedHeaders,
        method,
        body: resolvedBody,
    };
    const baseOptions = {
        retryDecider: getRetryDecider(parseRestApiServiceError),
        computeDelay: jitteredBackoff,
        withCrossDomainCredentials: withCredentials,
        abortSignal,
    };
    const isIamAuthApplicable = iamAuthApplicable(request, signingServiceInfo);
    let response;
    const credentials = await resolveCredentials(amplify);
    if (isIamAuthApplicable && credentials) {
        const signingInfoFromUrl = parseSigningInfo(url);
        const signingService = signingServiceInfo?.service ?? signingInfoFromUrl.service;
        const signingRegion = signingServiceInfo?.region ?? signingInfoFromUrl.region;
        response = await authenticatedHandler(request, {
            ...baseOptions,
            credentials,
            region: signingRegion,
            service: signingService,
        });
    }
    else {
        response = await unauthenticatedHandler(request, {
            ...baseOptions,
        });
    }
    // Clean-up un-modeled properties from response.
    return {
        statusCode: response.statusCode,
        headers: response.headers,
        body: response.body,
    };
};
const resolveCredentials = async (amplify) => {
    try {
        const { credentials } = await amplify.Auth.fetchAuthSession();
        if (credentials) {
            return credentials;
        }
    }
    catch (e) {
        logger$b.debug('No credentials available, the request will be unsigned.');
    }
    return null;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * This weak map provides functionality to cancel a request given the promise containing the `post` request.
 *
 * 1. For every GraphQL POST request, an abort controller is created and supplied to the request.
 * 2. The promise fulfilled by GraphGL POST request is then mapped to that abort controller.
 * 3. The promise is returned to the external caller.
 * 4. The caller can either wait for the promise to fulfill or call `cancel(promise)` to cancel the request.
 * 5. If `cancel(promise)` is called, then the corresponding abort controller is retrieved from the map below.
 * 6. GraphQL POST request will be rejected with the error message provided during cancel.
 * 7. Caller can check if the error is because of cancelling by calling `isCancelError(error)`.
 */
const cancelTokenMap = new WeakMap();
/**
 * @internal
 *
 * REST POST handler to send GraphQL request to given endpoint. By default, it will use IAM to authorize
 * the request. In some auth modes, the IAM auth has to be disabled. Here's how to set up the request auth correctly:
 * * If auth mode is 'iam', you MUST NOT set 'authorization' header and 'x-api-key' header, since it would disable IAM
 *   auth. You MUST also set 'input.options.signingServiceInfo' option.
 *   * The including 'input.options.signingServiceInfo.service' and 'input.options.signingServiceInfo.region' are
 *     optional. If omitted, the signing service and region will be inferred from url.
 * * If auth mode is 'none', you MUST NOT set 'options.signingServiceInfo' option.
 * * If auth mode is 'apiKey', you MUST set 'x-api-key' custom header.
 * * If auth mode is 'oidc' or 'lambda' or 'userPool', you MUST set 'authorization' header.
 *
 * To make the internal post cancellable, you must also call `updateRequestToBeCancellable()` with the promise from
 * internal post call and the abort controller supplied to the internal post call.
 *
 * @param amplify the AmplifyClassV6 instance - it may be the singleton used on Web, or an instance created within
 * a context created by `runWithAmplifyServerContext`
 * @param postInput an object of {@link InternalPostInput}
 * @param postInput.url The URL that the POST request sends to
 * @param postInput.options Options of the POST request
 * @param postInput.abortController The abort controller used to cancel the POST request
 * @returns a {@link RestApiResponse}
 *
 * @throws an {@link AmplifyError} with `Network Error` as the `message` when the external resource is unreachable due to one
 * of the following reasons:
 *   1. no network connection
 *   2. CORS error
 * @throws a {@link CanceledError} when the ongoing POST request get cancelled
 */
const post = (amplify, { url, options, abortController }) => {
    const controller = abortController ?? new AbortController();
    const responsePromise = createCancellableOperation(async () => {
        const response = transferHandler(amplify, {
            url,
            method: 'POST',
            ...options,
            abortSignal: controller.signal,
        }, isIamAuthApplicableForGraphQL, options?.signingServiceInfo);
        return response;
    }, controller);
    const responseWithCleanUp = responsePromise.finally(() => {
        cancelTokenMap.delete(responseWithCleanUp);
    });
    return responseWithCleanUp;
};
/**
 * Cancels a request given the promise returned by `post`.
 * If the request is already completed, this function does nothing.
 * It MUST be used after `updateRequestToBeCancellable` is called.
 */
const cancel = (promise, message) => {
    const controller = cancelTokenMap.get(promise);
    if (controller) {
        controller.abort(message);
        if (message && controller.signal.reason !== message) {
            // In runtimes where `AbortSignal.reason` is not supported, we track the reason ourselves.
            // @ts-expect-error reason is read-only property.
            controller.signal.reason = message;
        }
        return true;
    }
    return false;
};
/**
 * MUST be used to make a promise including internal `post` API call cancellable.
 */
const updateRequestToBeCancellable = (promise, controller) => {
    cancelTokenMap.set(promise, controller);
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const MAX_DELAY_MS = 5000;
const NON_RETRYABLE_CODES = [400, 401, 403];
const NON_RETRYABLE_ERROR_TYPES = [
    'BadRequestException',
    'UnauthorizedException',
];
const CONNECTION_STATE_CHANGE = 'ConnectionStateChange';
var MESSAGE_TYPES;
(function (MESSAGE_TYPES) {
    /**
     * Client -> Server message.
     * This message type is the first message after handshake and this will initialize AWS AppSync RealTime communication
     */
    MESSAGE_TYPES["GQL_CONNECTION_INIT"] = "connection_init";
    /**
     * Server -> Client message
     * This message type is in case there is an issue with AWS AppSync RealTime when establishing connection
     */
    MESSAGE_TYPES["GQL_CONNECTION_ERROR"] = "connection_error";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_CONNECTION_INIT message
     */
    MESSAGE_TYPES["GQL_CONNECTION_ACK"] = "connection_ack";
    /**
     * Client -> Server message.
     * This message type is for register subscriptions with AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_START"] = "start";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_START message
     */
    MESSAGE_TYPES["GQL_START_ACK"] = "start_ack";
    /**
     * Server -> Client message.
     * This message type is for subscription message from AWS AppSync RealTime or Events
     */
    MESSAGE_TYPES["DATA"] = "data";
    /**
     * Server -> Client message.
     * This message type helps the client to know is still receiving messages from AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_CONNECTION_KEEP_ALIVE"] = "ka";
    /**
     * Client -> Server message.
     * This message type is for unregister subscriptions with AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_STOP"] = "stop";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_STOP message
     */
    MESSAGE_TYPES["GQL_COMPLETE"] = "complete";
    /**
     * Server -> Client message.
     * This message type is for sending error messages from AWS AppSync RealTime to the client
     */
    MESSAGE_TYPES["GQL_ERROR"] = "error";
    /**
     * Client -> Server message.
     * This message type is for registering subscriptions with Events
     */
    MESSAGE_TYPES["EVENT_SUBSCRIBE"] = "subscribe";
    /**
     * Client -> Server message.
     * This message type is for publishing a message with Events
     */
    MESSAGE_TYPES["EVENT_PUBLISH"] = "publish";
    /**
     * Server -> Client message.
     * Server acknowledges successful subscription
     */
    MESSAGE_TYPES["EVENT_SUBSCRIBE_ACK"] = "subscribe_success";
    /**
     * Server -> Client message.
     * Server acknowledges successful publish
     */
    MESSAGE_TYPES["EVENT_PUBLISH_ACK"] = "publish_success";
    /**
     * Client -> Server message.
     * This message type is for unregister subscriptions with AWS AppSync RealTime
     */
    MESSAGE_TYPES["EVENT_STOP"] = "unsubscribe";
    /**
     * Server -> Client message.
     * This is the ack response from AWS AppSync Events to EVENT_STOP message
     */
    MESSAGE_TYPES["EVENT_COMPLETE"] = "unsubscribe_success";
})(MESSAGE_TYPES || (MESSAGE_TYPES = {}));
var SUBSCRIPTION_STATUS;
(function (SUBSCRIPTION_STATUS) {
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["PENDING"] = 0] = "PENDING";
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["CONNECTED"] = 1] = "CONNECTED";
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["FAILED"] = 2] = "FAILED";
})(SUBSCRIPTION_STATUS || (SUBSCRIPTION_STATUS = {}));
var SOCKET_STATUS;
(function (SOCKET_STATUS) {
    SOCKET_STATUS[SOCKET_STATUS["CLOSED"] = 0] = "CLOSED";
    SOCKET_STATUS[SOCKET_STATUS["READY"] = 1] = "READY";
    SOCKET_STATUS[SOCKET_STATUS["CONNECTING"] = 2] = "CONNECTING";
})(SOCKET_STATUS || (SOCKET_STATUS = {}));
const AWS_APPSYNC_REALTIME_HEADERS = {
    accept: 'application/json, text/javascript',
    'content-encoding': 'amz-1.0',
    'content-type': 'application/json; charset=UTF-8',
};
/**
 * Time in milleseconds to wait for GQL_CONNECTION_INIT message
 */
const CONNECTION_INIT_TIMEOUT = 15000;
/**
 * Time in milleseconds to wait for GQL_START_ACK message
 */
const START_ACK_TIMEOUT = 15000;
/**
 * Default Time in milleseconds to wait for GQL_CONNECTION_KEEP_ALIVE message
 */
const DEFAULT_KEEP_ALIVE_TIMEOUT = 5 * 60 * 1000;
/**
 * Default Time in milleseconds to alert for missed GQL_CONNECTION_KEEP_ALIVE message
 */
const DEFAULT_KEEP_ALIVE_ALERT_TIMEOUT = 65 * 1000;
/**
 * Default delay time in milleseconds between when reconnect is triggered vs when it is attempted
 */
const RECONNECT_DELAY = 5 * 1000;
/**
 * Default interval time in milleseconds between when reconnect is re-attempted
 */
const RECONNECT_INTERVAL = 60 * 1000;

var CONTROL_MSG$1;
(function (CONTROL_MSG) {
    CONTROL_MSG["CONNECTION_CLOSED"] = "Connection closed";
    CONTROL_MSG["CONNECTION_FAILED"] = "Connection failed";
    CONTROL_MSG["REALTIME_SUBSCRIPTION_INIT_ERROR"] = "AppSync Realtime subscription init error";
    CONTROL_MSG["SUBSCRIPTION_ACK"] = "Subscription ack";
    CONTROL_MSG["TIMEOUT_DISCONNECT"] = "Timeout disconnect";
})(CONTROL_MSG$1 || (CONTROL_MSG$1 = {}));
/** @enum {string} */
var ConnectionState;
(function (ConnectionState) {
    /*
     * The connection is alive and healthy
     */
    ConnectionState["Connected"] = "Connected";
    /*
     * The connection is alive, but the connection is offline
     */
    ConnectionState["ConnectedPendingNetwork"] = "ConnectedPendingNetwork";
    /*
     * The connection has been disconnected while in use
     */
    ConnectionState["ConnectionDisrupted"] = "ConnectionDisrupted";
    /*
     * The connection has been disconnected and the network is offline
     */
    ConnectionState["ConnectionDisruptedPendingNetwork"] = "ConnectionDisruptedPendingNetwork";
    /*
     * The connection is in the process of connecting
     */
    ConnectionState["Connecting"] = "Connecting";
    /*
     * The connection is not in use and is being disconnected
     */
    ConnectionState["ConnectedPendingDisconnect"] = "ConnectedPendingDisconnect";
    /*
     * The connection is not in use and has been disconnected
     */
    ConnectionState["Disconnected"] = "Disconnected";
    /*
     * The connection is alive, but a keep alive message has been missed
     */
    ConnectionState["ConnectedPendingKeepAlive"] = "ConnectedPendingKeepAlive";
})(ConnectionState || (ConnectionState = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ReachabilityMonitor$1 = () => new Reachability().networkMonitor();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const CONNECTION_CHANGE = {
    KEEP_ALIVE_MISSED: { keepAliveState: 'unhealthy' },
    KEEP_ALIVE: { keepAliveState: 'healthy' },
    CONNECTION_ESTABLISHED: { connectionState: 'connected' },
    CONNECTION_FAILED: {
        intendedConnectionState: 'disconnected',
        connectionState: 'disconnected',
    },
    CLOSING_CONNECTION: { intendedConnectionState: 'disconnected' },
    OPENING_CONNECTION: {
        intendedConnectionState: 'connected',
        connectionState: 'connecting',
    },
    CLOSED: { connectionState: 'disconnected' },
    ONLINE: { networkState: 'connected' },
    OFFLINE: { networkState: 'disconnected' },
};
class ConnectionStateMonitor {
    constructor() {
        this._networkMonitoringSubscription = undefined;
        this._linkedConnectionState = {
            networkState: 'connected',
            connectionState: 'disconnected',
            intendedConnectionState: 'disconnected',
            keepAliveState: 'healthy',
        };
        // Attempt to update the state with the current actual network state
        this._initialNetworkStateSubscription = ReachabilityMonitor$1().subscribe(({ online }) => {
            this.record(online ? CONNECTION_CHANGE.ONLINE : CONNECTION_CHANGE.OFFLINE);
            this._initialNetworkStateSubscription?.unsubscribe();
        });
        this._linkedConnectionStateObservable =
            new Observable(connectionStateObserver => {
                connectionStateObserver.next(this._linkedConnectionState);
                this._linkedConnectionStateObserver = connectionStateObserver;
            });
    }
    /**
     * Turn network state monitoring on if it isn't on already
     */
    enableNetworkMonitoring() {
        // If no initial network state was discovered, stop trying
        this._initialNetworkStateSubscription?.unsubscribe();
        // Maintain the network state based on the reachability monitor
        if (this._networkMonitoringSubscription === undefined) {
            this._networkMonitoringSubscription = ReachabilityMonitor$1().subscribe(({ online }) => {
                this.record(online ? CONNECTION_CHANGE.ONLINE : CONNECTION_CHANGE.OFFLINE);
            });
        }
    }
    /**
     * Turn network state monitoring off if it isn't off already
     */
    disableNetworkMonitoring() {
        this._networkMonitoringSubscription?.unsubscribe();
        this._networkMonitoringSubscription = undefined;
    }
    /**
     * Get the observable that allows us to monitor the connection state
     *
     * @returns {Observable<ConnectionState>} - The observable that emits ConnectionState updates
     */
    get connectionStateObservable() {
        let previous;
        // The linked state aggregates state changes to any of the network, connection,
        // intendedConnection and keepAliveHealth. Some states will change these independent
        // states without changing the overall connection state.
        // After translating from linked states to ConnectionState, then remove any duplicates
        return this._linkedConnectionStateObservable
            .pipe(map(value => {
            return this.connectionStatesTranslator(value);
        }))
            .pipe(filter(current => {
            const toInclude = current !== previous;
            previous = current;
            return toInclude;
        }));
    }
    /*
     * Updates local connection state and emits the full state to the observer.
     */
    record(statusUpdates) {
        // Maintain the network monitor
        if (statusUpdates.intendedConnectionState === 'connected') {
            this.enableNetworkMonitoring();
        }
        else if (statusUpdates.intendedConnectionState === 'disconnected') {
            this.disableNetworkMonitoring();
        }
        // Maintain the socket state
        const newSocketStatus = {
            ...this._linkedConnectionState,
            ...statusUpdates,
        };
        this._linkedConnectionState = { ...newSocketStatus };
        this._linkedConnectionStateObserver?.next(this._linkedConnectionState);
    }
    /*
     * Translate the ConnectionState structure into a specific ConnectionState string literal union
     */
    connectionStatesTranslator({ connectionState, networkState, intendedConnectionState, keepAliveState, }) {
        if (connectionState === 'connected' && networkState === 'disconnected')
            return ConnectionState.ConnectedPendingNetwork;
        if (connectionState === 'connected' &&
            intendedConnectionState === 'disconnected')
            return ConnectionState.ConnectedPendingDisconnect;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected' &&
            networkState === 'disconnected')
            return ConnectionState.ConnectionDisruptedPendingNetwork;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected')
            return ConnectionState.ConnectionDisrupted;
        if (connectionState === 'connected' && keepAliveState === 'unhealthy')
            return ConnectionState.ConnectedPendingKeepAlive;
        // All remaining states directly correspond to the connection state
        if (connectionState === 'connecting')
            return ConnectionState.Connecting;
        if (connectionState === 'disconnected')
            return ConnectionState.Disconnected;
        return ConnectionState.Connected;
    }
}

var ReconnectEvent;
(function (ReconnectEvent) {
    ReconnectEvent["START_RECONNECT"] = "START_RECONNECT";
    ReconnectEvent["HALT_RECONNECT"] = "HALT_RECONNECT";
})(ReconnectEvent || (ReconnectEvent = {}));
/**
 * Captures the reconnect event logic used to determine when to reconnect to PubSub providers.
 *   Reconnect attempts are delayed by 5 seconds to let the interface settle.
 *   Attempting to reconnect only once creates unrecoverable states when the network state isn't
 *   supported by the browser, so this keeps retrying every minute until halted.
 */
class ReconnectionMonitor {
    constructor() {
        this.reconnectObservers = [];
    }
    /**
     * Add reconnect observer to the list of observers to alert on reconnect
     */
    addObserver(reconnectObserver) {
        this.reconnectObservers.push(reconnectObserver);
    }
    /**
     * Given a reconnect event, start the appropriate behavior
     */
    record(event) {
        if (event === ReconnectEvent.START_RECONNECT) {
            // If the reconnection hasn't been started
            if (this.reconnectSetTimeoutId === undefined &&
                this.reconnectIntervalId === undefined) {
                this.reconnectSetTimeoutId = setTimeout(() => {
                    // Reconnect now
                    this._triggerReconnect();
                    // Retry reconnect every periodically until it works
                    this.reconnectIntervalId = setInterval(() => {
                        this._triggerReconnect();
                    }, RECONNECT_INTERVAL);
                }, RECONNECT_DELAY);
            }
        }
        if (event === ReconnectEvent.HALT_RECONNECT) {
            if (this.reconnectIntervalId) {
                clearInterval(this.reconnectIntervalId);
                this.reconnectIntervalId = undefined;
            }
            if (this.reconnectSetTimeoutId) {
                clearTimeout(this.reconnectSetTimeoutId);
                this.reconnectSetTimeoutId = undefined;
            }
        }
    }
    /**
     * Complete all reconnect observers
     */
    close() {
        this.reconnectObservers.forEach(reconnectObserver => {
            reconnectObserver.complete?.();
        });
    }
    _triggerReconnect() {
        this.reconnectObservers.forEach(reconnectObserver => {
            reconnectObserver.next?.();
        });
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const protocol = 'wss://';
const standardDomainPattern = /^https:\/\/\w{26}\.appsync-api\.\w{2}(?:(?:-\w{2,})+)-\d\.amazonaws.com(?:\.cn)?\/graphql$/i;
const eventDomainPattern = /^https:\/\/\w{26}\.\w+-api\.\w{2}(?:(?:-\w{2,})+)-\d\.amazonaws.com(?:\.cn)?\/event$/i;
const customDomainPath = '/realtime';
const isCustomDomain = (url) => {
    return url.match(standardDomainPattern) === null;
};
const isEventDomain = (url) => url.match(eventDomainPattern) !== null;
const getRealtimeEndpointUrl = (appSyncGraphqlEndpoint) => {
    let realtimeEndpoint = appSyncGraphqlEndpoint ?? '';
    if (isEventDomain(realtimeEndpoint)) {
        realtimeEndpoint = realtimeEndpoint
            .concat(customDomainPath)
            .replace('ddpg-api', 'grt-gamma')
            .replace('appsync-api', 'appsync-realtime-api');
    }
    else if (isCustomDomain(realtimeEndpoint)) {
        realtimeEndpoint = realtimeEndpoint.concat(customDomainPath);
    }
    else {
        realtimeEndpoint = realtimeEndpoint
            .replace('appsync-api', 'appsync-realtime-api')
            .replace('gogi-beta', 'grt-beta')
            .replace('ddpg-api', 'grt-gamma');
    }
    realtimeEndpoint = realtimeEndpoint
        .replace('https://', protocol)
        .replace('http://', protocol);
    return new AmplifyUrl(realtimeEndpoint);
};
/**
 * Strips out `Authorization` header if present
 */
const extractNonAuthHeaders = (headers) => {
    if (!headers) {
        return {};
    }
    if ('Authorization' in headers) {
        const { Authorization: _, ...nonAuthHeaders } = headers;
        return nonAuthHeaders;
    }
    return headers;
};
/**
 *
 * @param headers - http headers
 * @returns uri-encoded query parameters derived from custom headers
 */
const queryParamsFromCustomHeaders = (headers) => {
    const nonAuthHeaders = extractNonAuthHeaders(headers);
    const params = new AmplifyUrlSearchParams();
    Object.entries(nonAuthHeaders).forEach(([k, v]) => {
        params.append(k, v);
    });
    return params;
};
/**
 * Normalizes AppSync realtime endpoint URL
 *
 * @param appSyncGraphqlEndpoint - AppSync endpointUri from config
 * @param urlParams - URLSearchParams
 * @returns fully resolved string realtime endpoint URL
 */
const realtimeUrlWithQueryString = (appSyncGraphqlEndpoint, urlParams) => {
    const realtimeEndpointUrl = getRealtimeEndpointUrl(appSyncGraphqlEndpoint);
    // preserves any query params a customer might manually set in the configuration
    const existingParams = new AmplifyUrlSearchParams(realtimeEndpointUrl.search);
    for (const [k, v] of urlParams.entries()) {
        existingParams.append(k, v);
    }
    realtimeEndpointUrl.search = existingParams.toString();
    return realtimeEndpointUrl.toString();
};
// TODO: move to separate file?
const additionalHeadersFromOptions = async (options) => {
    const { appSyncGraphqlEndpoint, query, libraryConfigHeaders = () => ({}), additionalHeaders = {}, authToken, } = options;
    let additionalCustomHeaders = {};
    const _libraryConfigHeaders = await libraryConfigHeaders();
    if (typeof additionalHeaders === 'function') {
        const requestOptions = {
            url: appSyncGraphqlEndpoint || '',
            queryString: query || '',
        };
        additionalCustomHeaders = await additionalHeaders(requestOptions);
    }
    else {
        additionalCustomHeaders = additionalHeaders;
    }
    // if an authorization header is set, have the explicit, operation-level authToken take precedence
    if (authToken) {
        additionalCustomHeaders = {
            ...additionalCustomHeaders,
            Authorization: authToken,
        };
    }
    return {
        additionalCustomHeaders,
        libraryConfigHeaders: _libraryConfigHeaders,
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$a = new ConsoleLogger('AWSAppSyncRealTimeProvider Auth');
const awsAuthTokenHeader = async ({ host }) => {
    const session = await fetchAuthSession();
    return {
        Authorization: session?.tokens?.accessToken?.toString(),
        host,
    };
};
const awsRealTimeApiKeyHeader = async ({ apiKey, host, }) => {
    const dt = new Date();
    const dtStr = dt.toISOString().replace(/[:-]|\.\d{3}/g, '');
    return {
        host,
        'x-amz-date': dtStr,
        'x-api-key': apiKey,
    };
};
const awsRealTimeIAMHeader = async ({ payload, canonicalUri, appSyncGraphqlEndpoint, region, }) => {
    const endpointInfo = {
        region,
        service: 'appsync',
    };
    const creds = (await fetchAuthSession()).credentials;
    const request = {
        url: `${appSyncGraphqlEndpoint}${canonicalUri}`,
        data: payload,
        method: 'POST',
        headers: { ...AWS_APPSYNC_REALTIME_HEADERS },
    };
    const signedParams = signRequest({
        headers: request.headers,
        method: request.method,
        url: new AmplifyUrl(request.url),
        body: request.data,
    }, {
        credentials: creds,
        signingRegion: endpointInfo.region,
        signingService: endpointInfo.service,
    });
    return signedParams.headers;
};
const customAuthHeader = async ({ host, additionalCustomHeaders, }) => {
    /**
     * If `additionalHeaders` was provided to the subscription as a function,
     * the headers that are returned by that function will already have been
     * provided before this function is called.
     */
    if (!additionalCustomHeaders?.Authorization) {
        throw new Error('No auth token specified');
    }
    return {
        Authorization: additionalCustomHeaders.Authorization,
        host,
    };
};
const awsRealTimeHeaderBasedAuth = async ({ apiKey, authenticationType, canonicalUri, appSyncGraphqlEndpoint, region, additionalCustomHeaders, payload, }) => {
    const headerHandler = {
        apiKey: awsRealTimeApiKeyHeader,
        iam: awsRealTimeIAMHeader,
        oidc: awsAuthTokenHeader,
        userPool: awsAuthTokenHeader,
        lambda: customAuthHeader,
        none: customAuthHeader,
    };
    if (!authenticationType || !headerHandler[authenticationType]) {
        logger$a.debug(`Authentication type ${authenticationType} not supported`);
        return undefined;
    }
    else {
        const handler = headerHandler[authenticationType];
        const host = appSyncGraphqlEndpoint
            ? new AmplifyUrl(appSyncGraphqlEndpoint).host
            : undefined;
        const resolvedApiKey = authenticationType === 'apiKey' ? apiKey : undefined;
        logger$a.debug(`Authenticating with ${JSON.stringify(authenticationType)}`);
        const result = await handler({
            payload,
            canonicalUri,
            appSyncGraphqlEndpoint,
            apiKey: resolvedApiKey,
            region,
            host,
            additionalCustomHeaders,
        });
        return result;
    }
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const dispatchApiEvent = (payload) => {
    Hub.dispatch('api', payload, 'PubSub', AMPLIFY_SYMBOL);
};
class AWSWebSocketProvider {
    constructor(args) {
        this.subscriptionObserverMap = new Map();
        this.socketStatus = SOCKET_STATUS.CLOSED;
        this.keepAliveTimeout = DEFAULT_KEEP_ALIVE_TIMEOUT;
        this.promiseArray = [];
        this.connectionStateMonitor = new ConnectionStateMonitor();
        this.reconnectionMonitor = new ReconnectionMonitor();
        /**
         * Open WebSocket connection & perform handshake
         * Ref: https://docs.aws.amazon.com/appsync/latest/devguide/real-time-websocket-client.html#appsynclong-real-time-websocket-client-implementation-guide-for-graphql-subscriptions
         *
         * @param subprotocol -
         */
        this._establishConnection = async (awsRealTimeUrl, subprotocol) => {
            this.logger.debug(`Establishing WebSocket connection to ${awsRealTimeUrl}`);
            try {
                await this._openConnection(awsRealTimeUrl, subprotocol);
                await this._initiateHandshake();
            }
            catch (err) {
                const { errorType, errorCode } = err;
                if (NON_RETRYABLE_CODES.includes(errorCode) ||
                    // Event API does not currently return `errorCode`. This may change in the future.
                    // For now fall back to also checking known non-retryable error types
                    NON_RETRYABLE_ERROR_TYPES.includes(errorType)) {
                    throw new NonRetryableError(errorType);
                }
                else if (errorType) {
                    throw new Error(errorType);
                }
                else {
                    throw err;
                }
            }
        };
        this.logger = new ConsoleLogger(args.providerName);
        this.wsProtocolName = args.wsProtocolName;
        this.wsConnectUri = args.connectUri;
        this.connectionStateMonitorSubscription =
            this._startConnectionStateMonitoring();
    }
    /**
     * Mark the socket closed and release all active listeners
     */
    close() {
        // Mark the socket closed both in status and the connection monitor
        this.socketStatus = SOCKET_STATUS.CLOSED;
        this.connectionStateMonitor.record(CONNECTION_CHANGE.CONNECTION_FAILED);
        // Turn off the subscription monitor Hub publishing
        this.connectionStateMonitorSubscription.unsubscribe();
        // Complete all reconnect observers
        this.reconnectionMonitor.close();
        return new Promise((resolve, reject) => {
            if (this.awsRealTimeSocket) {
                this.awsRealTimeSocket.onclose = (_) => {
                    this.subscriptionObserverMap = new Map();
                    this.awsRealTimeSocket = undefined;
                    resolve();
                };
                this.awsRealTimeSocket.onerror = (err) => {
                    reject(err);
                };
                this.awsRealTimeSocket.close();
            }
            else {
                resolve();
            }
        });
    }
    subscribe(options, customUserAgentDetails) {
        return new Observable(observer => {
            if (!options?.appSyncGraphqlEndpoint) {
                observer.error({
                    errors: [
                        {
                            ...new GraphQLError(`Subscribe only available for AWS AppSync endpoint`),
                        },
                    ],
                });
                observer.complete();
                return;
            }
            let subscriptionStartInProgress = false;
            const subscriptionId = amplifyUuid();
            const startSubscription = () => {
                if (!subscriptionStartInProgress) {
                    subscriptionStartInProgress = true;
                    this._startSubscriptionWithAWSAppSyncRealTime({
                        options,
                        observer,
                        subscriptionId,
                        customUserAgentDetails,
                    })
                        .catch(err => {
                        this.logger.debug(`${CONTROL_MSG$1.REALTIME_SUBSCRIPTION_INIT_ERROR}: ${err}`);
                        this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSED);
                    })
                        .finally(() => {
                        subscriptionStartInProgress = false;
                    });
                }
            };
            // Add an observable to the reconnection list to manage reconnection for this subscription
            const reconnectSubscription = new Observable(reconnectSubscriptionObserver => {
                this.reconnectionMonitor.addObserver(reconnectSubscriptionObserver);
            }).subscribe(() => {
                startSubscription();
            });
            startSubscription();
            return async () => {
                await this._cleanupSubscription(subscriptionId, reconnectSubscription);
            };
        });
    }
    async connect(options) {
        if (this.socketStatus === SOCKET_STATUS.READY) {
            return;
        }
        await this._connectWebSocket(options);
    }
    async publish(options, customUserAgentDetails) {
        if (this.socketStatus !== SOCKET_STATUS.READY) {
            throw new Error('Subscription has not been initialized');
        }
        return this._publishMessage(options, customUserAgentDetails);
    }
    async _connectWebSocket(options) {
        const { apiKey, appSyncGraphqlEndpoint, authenticationType, region } = options;
        const { additionalCustomHeaders } = await additionalHeadersFromOptions(options);
        this.connectionStateMonitor.record(CONNECTION_CHANGE.OPENING_CONNECTION);
        await this._initializeWebSocketConnection({
            apiKey,
            appSyncGraphqlEndpoint,
            authenticationType,
            region,
            additionalCustomHeaders,
        });
    }
    async _publishMessage(options, customUserAgentDetails) {
        const subscriptionId = amplifyUuid();
        const { additionalCustomHeaders, libraryConfigHeaders } = await additionalHeadersFromOptions(options);
        const serializedSubscriptionMessage = await this._prepareSubscriptionPayload({
            options,
            subscriptionId,
            customUserAgentDetails,
            additionalCustomHeaders,
            libraryConfigHeaders,
            publish: true,
        });
        return new Promise((resolve, reject) => {
            if (this.awsRealTimeSocket) {
                const publishListener = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.id === subscriptionId && data.type === 'publish_success') {
                        this.awsRealTimeSocket &&
                            this.awsRealTimeSocket.removeEventListener('message', publishListener);
                        resolve();
                    }
                    if (data.erroredEvents && data.erroredEvents.length > 0) ;
                };
                this.awsRealTimeSocket.addEventListener('message', publishListener);
                this.awsRealTimeSocket.addEventListener('close', () => {
                    reject(new Error('WebSocket is closed'));
                });
                //
                // this.awsRealTimeSocket.addEventListener('error', publishListener);
                this.awsRealTimeSocket.send(serializedSubscriptionMessage);
            }
        });
    }
    async _cleanupSubscription(subscriptionId, reconnectSubscription) {
        // Cleanup reconnection subscription
        reconnectSubscription?.unsubscribe();
        // Cleanup after unsubscribing or observer.complete was called after _startSubscriptionWithAWSAppSyncRealTime
        try {
            // Waiting that subscription has been connected before trying to unsubscribe
            await this._waitForSubscriptionToBeConnected(subscriptionId);
            const { subscriptionState } = this.subscriptionObserverMap.get(subscriptionId) || {};
            if (!subscriptionState) {
                // subscription already unsubscribed
                return;
            }
            if (subscriptionState === SUBSCRIPTION_STATUS.CONNECTED) {
                this._sendUnsubscriptionMessage(subscriptionId);
            }
            else {
                throw new Error('Subscription never connected');
            }
        }
        catch (err) {
            this.logger.debug(`Error while unsubscribing ${err}`);
        }
        finally {
            this._removeSubscriptionObserver(subscriptionId);
        }
    }
    // Monitor the connection state and pass changes along to Hub
    _startConnectionStateMonitoring() {
        return this.connectionStateMonitor.connectionStateObservable.subscribe(connectionState => {
            dispatchApiEvent({
                event: CONNECTION_STATE_CHANGE,
                data: {
                    provider: this,
                    connectionState,
                },
                message: `Connection state is ${connectionState}`,
            });
            this.connectionState = connectionState;
            // Trigger START_RECONNECT when the connection is disrupted
            if (connectionState === ConnectionState.ConnectionDisrupted) {
                this.reconnectionMonitor.record(ReconnectEvent.START_RECONNECT);
            }
            // Trigger HALT_RECONNECT to halt reconnection attempts when the state is anything other than
            // ConnectionDisrupted or Connecting
            if ([
                ConnectionState.Connected,
                ConnectionState.ConnectedPendingDisconnect,
                ConnectionState.ConnectedPendingKeepAlive,
                ConnectionState.ConnectedPendingNetwork,
                ConnectionState.ConnectionDisruptedPendingNetwork,
                ConnectionState.Disconnected,
            ].includes(connectionState)) {
                this.reconnectionMonitor.record(ReconnectEvent.HALT_RECONNECT);
            }
        });
    }
    async _startSubscriptionWithAWSAppSyncRealTime({ options, observer, subscriptionId, customUserAgentDetails, }) {
        const { query, variables } = options;
        const { additionalCustomHeaders, libraryConfigHeaders } = await additionalHeadersFromOptions(options);
        this.subscriptionObserverMap.set(subscriptionId, {
            observer,
            query: query ?? '',
            variables: variables ?? {},
            subscriptionState: SUBSCRIPTION_STATUS.PENDING,
            startAckTimeoutId: undefined,
        });
        const serializedSubscriptionMessage = await this._prepareSubscriptionPayload({
            options,
            subscriptionId,
            customUserAgentDetails,
            additionalCustomHeaders,
            libraryConfigHeaders,
        });
        try {
            await this._connectWebSocket(options);
        }
        catch (err) {
            this._logStartSubscriptionError(subscriptionId, observer, err);
            return;
        }
        // Potential race condition can occur when unsubscribe is called during _initializeWebSocketConnection.
        // E.g.unsubscribe gets invoked prior to finishing WebSocket handshake or START_ACK.
        // Both subscriptionFailedCallback and subscriptionReadyCallback are used to synchronized this.
        const { subscriptionFailedCallback, subscriptionReadyCallback } = this.subscriptionObserverMap.get(subscriptionId) ?? {};
        // This must be done before sending the message in order to be listening immediately
        this.subscriptionObserverMap.set(subscriptionId, {
            observer,
            subscriptionState: SUBSCRIPTION_STATUS.PENDING,
            query: query ?? '',
            variables: variables ?? {},
            subscriptionReadyCallback,
            subscriptionFailedCallback,
            startAckTimeoutId: setTimeout(() => {
                this._timeoutStartSubscriptionAck(subscriptionId);
            }, START_ACK_TIMEOUT),
        });
        if (this.awsRealTimeSocket) {
            this.awsRealTimeSocket.send(serializedSubscriptionMessage);
        }
    }
    // Log logic for start subscription failures
    _logStartSubscriptionError(subscriptionId, observer, err) {
        this.logger.debug({ err });
        const message = String(err.message ?? '');
        // Resolving to give the state observer time to propogate the update
        this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSED);
        // Capture the error only when the network didn't cause disruption
        if (this.connectionState !== ConnectionState.ConnectionDisruptedPendingNetwork) {
            // When the error is non-retriable, error out the observable
            if (isNonRetryableError(err)) {
                observer.error({
                    errors: [
                        {
                            ...new GraphQLError(`${CONTROL_MSG$1.CONNECTION_FAILED}: ${message}`),
                        },
                    ],
                });
            }
            else {
                this.logger.debug(`${CONTROL_MSG$1.CONNECTION_FAILED}: ${message}`);
            }
            const { subscriptionFailedCallback } = this.subscriptionObserverMap.get(subscriptionId) || {};
            // Notify concurrent unsubscription
            if (typeof subscriptionFailedCallback === 'function') {
                subscriptionFailedCallback();
            }
        }
    }
    // Waiting that subscription has been connected before trying to unsubscribe
    async _waitForSubscriptionToBeConnected(subscriptionId) {
        const subscriptionObserver = this.subscriptionObserverMap.get(subscriptionId);
        if (subscriptionObserver) {
            const { subscriptionState } = subscriptionObserver;
            // This in case unsubscribe is invoked before sending start subscription message
            if (subscriptionState === SUBSCRIPTION_STATUS.PENDING) {
                return new Promise((resolve, reject) => {
                    const { observer, subscriptionState: observedSubscriptionState, variables, query, } = subscriptionObserver;
                    this.subscriptionObserverMap.set(subscriptionId, {
                        observer,
                        subscriptionState: observedSubscriptionState,
                        variables,
                        query,
                        subscriptionReadyCallback: resolve,
                        subscriptionFailedCallback: reject,
                    });
                });
            }
        }
    }
    _sendUnsubscriptionMessage(subscriptionId) {
        try {
            if (this.awsRealTimeSocket &&
                this.awsRealTimeSocket.readyState === WebSocket.OPEN &&
                this.socketStatus === SOCKET_STATUS.READY) {
                // Preparing unsubscribe message to stop receiving messages for that subscription
                const unsubscribeMessage = this._unsubscribeMessage(subscriptionId);
                const stringToAWSRealTime = JSON.stringify(unsubscribeMessage);
                this.awsRealTimeSocket.send(stringToAWSRealTime);
            }
        }
        catch (err) {
            // If GQL_STOP is not sent because of disconnection issue, then there is nothing the client can do
            this.logger.debug({ err });
        }
    }
    _removeSubscriptionObserver(subscriptionId) {
        this.subscriptionObserverMap.delete(subscriptionId);
        // Verifying 1000ms after removing subscription in case there are new subscription unmount/mount
        setTimeout(this._closeSocketIfRequired.bind(this), 1000);
    }
    _closeSocketIfRequired() {
        if (this.subscriptionObserverMap.size > 0) {
            // Active subscriptions on the WebSocket
            return;
        }
        if (!this.awsRealTimeSocket) {
            this.socketStatus = SOCKET_STATUS.CLOSED;
            return;
        }
        this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSING_CONNECTION);
        if (this.awsRealTimeSocket.bufferedAmount > 0) {
            // Still data on the WebSocket
            setTimeout(this._closeSocketIfRequired.bind(this), 1000);
        }
        else {
            this.logger.debug('closing WebSocket...');
            if (this.keepAliveTimeoutId) {
                clearTimeout(this.keepAliveTimeoutId);
            }
            if (this.keepAliveAlertTimeoutId) {
                clearTimeout(this.keepAliveAlertTimeoutId);
            }
            const tempSocket = this.awsRealTimeSocket;
            // Cleaning callbacks to avoid race condition, socket still exists
            tempSocket.onclose = null;
            tempSocket.onerror = null;
            tempSocket.close(1000);
            this.awsRealTimeSocket = undefined;
            this.socketStatus = SOCKET_STATUS.CLOSED;
            this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSED);
        }
    }
    _handleIncomingSubscriptionMessage(message) {
        if (typeof message.data !== 'string') {
            return;
        }
        const [isData, data] = this._handleSubscriptionData(message);
        if (isData)
            return;
        const { type, id, payload } = data;
        const { observer = null, query = '', variables = {}, startAckTimeoutId, subscriptionReadyCallback, subscriptionFailedCallback, } = this.subscriptionObserverMap.get(id) || {};
        if (type === MESSAGE_TYPES.GQL_START_ACK ||
            type === MESSAGE_TYPES.EVENT_SUBSCRIBE_ACK) {
            this.logger.debug(`subscription ready for ${JSON.stringify({ query, variables })}`);
            if (typeof subscriptionReadyCallback === 'function') {
                subscriptionReadyCallback();
            }
            if (startAckTimeoutId)
                clearTimeout(startAckTimeoutId);
            dispatchApiEvent({
                event: CONTROL_MSG$1.SUBSCRIPTION_ACK,
                data: { query, variables },
                message: 'Connection established for subscription',
            });
            const subscriptionState = SUBSCRIPTION_STATUS.CONNECTED;
            if (observer) {
                this.subscriptionObserverMap.set(id, {
                    observer,
                    query,
                    variables,
                    startAckTimeoutId: undefined,
                    subscriptionState,
                    subscriptionReadyCallback,
                    subscriptionFailedCallback,
                });
            }
            this.connectionStateMonitor.record(CONNECTION_CHANGE.CONNECTION_ESTABLISHED);
            return;
        }
        if (type === MESSAGE_TYPES.GQL_CONNECTION_KEEP_ALIVE) {
            if (this.keepAliveTimeoutId)
                clearTimeout(this.keepAliveTimeoutId);
            if (this.keepAliveAlertTimeoutId)
                clearTimeout(this.keepAliveAlertTimeoutId);
            this.keepAliveTimeoutId = setTimeout(() => {
                this._errorDisconnect(CONTROL_MSG$1.TIMEOUT_DISCONNECT);
            }, this.keepAliveTimeout);
            this.keepAliveAlertTimeoutId = setTimeout(() => {
                this.connectionStateMonitor.record(CONNECTION_CHANGE.KEEP_ALIVE_MISSED);
            }, DEFAULT_KEEP_ALIVE_ALERT_TIMEOUT);
            this.connectionStateMonitor.record(CONNECTION_CHANGE.KEEP_ALIVE);
            return;
        }
        if (type === MESSAGE_TYPES.GQL_ERROR) {
            const subscriptionState = SUBSCRIPTION_STATUS.FAILED;
            if (observer) {
                this.subscriptionObserverMap.set(id, {
                    observer,
                    query,
                    variables,
                    startAckTimeoutId,
                    subscriptionReadyCallback,
                    subscriptionFailedCallback,
                    subscriptionState,
                });
                this.logger.debug(`${CONTROL_MSG$1.CONNECTION_FAILED}: ${JSON.stringify(payload ?? data)}`);
                observer.error({
                    errors: [
                        {
                            ...new GraphQLError(`${CONTROL_MSG$1.CONNECTION_FAILED}: ${JSON.stringify(payload ?? data)}`),
                        },
                    ],
                });
                if (startAckTimeoutId)
                    clearTimeout(startAckTimeoutId);
                if (typeof subscriptionFailedCallback === 'function') {
                    subscriptionFailedCallback();
                }
            }
        }
    }
    _errorDisconnect(msg) {
        this.logger.debug(`Disconnect error: ${msg}`);
        if (this.awsRealTimeSocket) {
            this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSED);
            this.awsRealTimeSocket.close();
        }
        this.socketStatus = SOCKET_STATUS.CLOSED;
    }
    _timeoutStartSubscriptionAck(subscriptionId) {
        const subscriptionObserver = this.subscriptionObserverMap.get(subscriptionId);
        if (subscriptionObserver) {
            const { observer, query, variables } = subscriptionObserver;
            if (!observer) {
                return;
            }
            this.subscriptionObserverMap.set(subscriptionId, {
                observer,
                query,
                variables,
                subscriptionState: SUBSCRIPTION_STATUS.FAILED,
            });
            this.connectionStateMonitor.record(CONNECTION_CHANGE.CLOSED);
            this.logger.debug('timeoutStartSubscription', JSON.stringify({ query, variables }));
        }
    }
    _initializeWebSocketConnection({ appSyncGraphqlEndpoint, authenticationType, apiKey, region, additionalCustomHeaders, }) {
        if (this.socketStatus === SOCKET_STATUS.READY) {
            return;
        }
        // TODO(Eslint): refactor to now use async function as the promise executor
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            this.promiseArray.push({ res: resolve, rej: reject });
            if (this.socketStatus === SOCKET_STATUS.CLOSED) {
                try {
                    this.socketStatus = SOCKET_STATUS.CONNECTING;
                    // Empty payload on connect
                    const payloadString = '{}';
                    const authHeader = await awsRealTimeHeaderBasedAuth({
                        authenticationType,
                        payload: payloadString,
                        canonicalUri: this.wsConnectUri,
                        apiKey,
                        appSyncGraphqlEndpoint,
                        region,
                        additionalCustomHeaders,
                    });
                    const headerString = authHeader ? JSON.stringify(authHeader) : '';
                    // base64url-encoded string
                    const encodedHeader = base64Encoder.convert(headerString, {
                        urlSafe: true,
                        skipPadding: true,
                    });
                    const authTokenSubprotocol = `header-${encodedHeader}`;
                    const queryParams = queryParamsFromCustomHeaders(additionalCustomHeaders);
                    const awsRealTimeUrl = realtimeUrlWithQueryString(appSyncGraphqlEndpoint, queryParams);
                    await this._establishRetryableConnection(awsRealTimeUrl, authTokenSubprotocol);
                    this.promiseArray.forEach(({ res }) => {
                        this.logger.debug('Notifying connection successful');
                        res();
                    });
                    this.socketStatus = SOCKET_STATUS.READY;
                    this.promiseArray = [];
                }
                catch (err) {
                    this.logger.debug('Connection exited with', err);
                    this.promiseArray.forEach(({ rej }) => {
                        rej(err);
                    });
                    this.promiseArray = [];
                    if (this.awsRealTimeSocket &&
                        this.awsRealTimeSocket.readyState === WebSocket.OPEN) {
                        this.awsRealTimeSocket.close(3001);
                    }
                    this.awsRealTimeSocket = undefined;
                    this.socketStatus = SOCKET_STATUS.CLOSED;
                }
            }
        });
    }
    async _establishRetryableConnection(awsRealTimeUrl, subprotocol) {
        this.logger.debug(`Establishing retryable connection`);
        await jitteredExponentialRetry(this._establishConnection.bind(this), [awsRealTimeUrl, subprotocol], MAX_DELAY_MS);
    }
    async _openConnection(awsRealTimeUrl, subprotocol) {
        return new Promise((resolve, reject) => {
            const newSocket = this._getNewWebSocket(awsRealTimeUrl, [
                this.wsProtocolName,
                subprotocol,
            ]);
            newSocket.onerror = () => {
                this.logger.debug(`WebSocket connection error`);
            };
            newSocket.onclose = () => {
                reject(new Error('Connection handshake error'));
            };
            newSocket.onopen = () => {
                this.awsRealTimeSocket = newSocket;
                resolve();
            };
        });
    }
    _getNewWebSocket(url, protocol) {
        return new WebSocket(url, protocol);
    }
    async _initiateHandshake() {
        return new Promise((resolve, reject) => {
            if (!this.awsRealTimeSocket) {
                reject(new Error('awsRealTimeSocket undefined'));
                return;
            }
            let ackOk = false;
            this.awsRealTimeSocket.onerror = error => {
                this.logger.debug(`WebSocket error ${JSON.stringify(error)}`);
            };
            this.awsRealTimeSocket.onclose = event => {
                this.logger.debug(`WebSocket closed ${event.reason}`);
                reject(new Error(JSON.stringify(event)));
            };
            this.awsRealTimeSocket.onmessage = (message) => {
                if (typeof message.data !== 'string') {
                    return;
                }
                this.logger.debug(`subscription message from AWS AppSyncRealTime: ${message.data} `);
                const data = JSON.parse(message.data);
                const { type } = data;
                const connectionTimeoutMs = this._extractConnectionTimeout(data);
                if (type === MESSAGE_TYPES.GQL_CONNECTION_ACK) {
                    ackOk = true;
                    this._registerWebsocketHandlers(connectionTimeoutMs);
                    resolve('Connected to AWS AppSyncRealTime');
                    return;
                }
                if (type === MESSAGE_TYPES.GQL_CONNECTION_ERROR) {
                    const { errorType, errorCode } = this._extractErrorCodeAndType(data);
                    // TODO(Eslint): refactor to reject an Error object instead of a plain object
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject({ errorType, errorCode });
                }
            };
            const gqlInit = {
                type: MESSAGE_TYPES.GQL_CONNECTION_INIT,
            };
            this.awsRealTimeSocket.send(JSON.stringify(gqlInit));
            const checkAckOk = (targetAckOk) => {
                if (!targetAckOk) {
                    this.connectionStateMonitor.record(CONNECTION_CHANGE.CONNECTION_FAILED);
                    reject(new Error(`Connection timeout: ack from AWSAppSyncRealTime was not received after ${CONNECTION_INIT_TIMEOUT} ms`));
                }
            };
            setTimeout(() => {
                checkAckOk(ackOk);
            }, CONNECTION_INIT_TIMEOUT);
        });
    }
    _registerWebsocketHandlers(connectionTimeoutMs) {
        if (!this.awsRealTimeSocket) {
            return;
        }
        this.keepAliveTimeout = connectionTimeoutMs;
        this.awsRealTimeSocket.onmessage =
            this._handleIncomingSubscriptionMessage.bind(this);
        this.awsRealTimeSocket.onerror = err => {
            this.logger.debug(err);
            this._errorDisconnect(CONTROL_MSG$1.CONNECTION_CLOSED);
        };
        this.awsRealTimeSocket.onclose = event => {
            this.logger.debug(`WebSocket closed ${event.reason}`);
            this._errorDisconnect(CONTROL_MSG$1.CONNECTION_CLOSED);
        };
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const PROVIDER_NAME = 'AWSAppSyncRealTimeProvider';
const WS_PROTOCOL_NAME = 'graphql-ws';
const CONNECT_URI = '/connect';
class AWSAppSyncRealTimeProvider extends AWSWebSocketProvider {
    constructor() {
        super({
            providerName: PROVIDER_NAME,
            wsProtocolName: WS_PROTOCOL_NAME,
            connectUri: CONNECT_URI,
        });
    }
    getProviderName() {
        return PROVIDER_NAME;
    }
    subscribe(options, customUserAgentDetails) {
        return super.subscribe(options, customUserAgentDetails);
    }
    async _prepareSubscriptionPayload({ options, subscriptionId, customUserAgentDetails, additionalCustomHeaders, libraryConfigHeaders, }) {
        const { appSyncGraphqlEndpoint, authenticationType, query, variables, apiKey, region, } = options;
        const data = {
            query,
            variables,
        };
        const serializedData = JSON.stringify(data);
        const headers = {
            ...(await awsRealTimeHeaderBasedAuth({
                apiKey,
                appSyncGraphqlEndpoint,
                authenticationType,
                payload: serializedData,
                canonicalUri: '',
                region,
                additionalCustomHeaders,
            })),
            ...libraryConfigHeaders,
            ...additionalCustomHeaders,
            [USER_AGENT_HEADER$1]: getAmplifyUserAgent(customUserAgentDetails),
        };
        const subscriptionMessage = {
            id: subscriptionId,
            payload: {
                data: serializedData,
                extensions: {
                    authorization: {
                        ...headers,
                    },
                },
            },
            type: MESSAGE_TYPES.GQL_START,
        };
        const serializedSubscriptionMessage = JSON.stringify(subscriptionMessage);
        return serializedSubscriptionMessage;
    }
    _handleSubscriptionData(message) {
        this.logger.debug(`subscription message from AWS AppSync RealTime: ${message.data}`);
        const { id = '', payload, type } = JSON.parse(String(message.data));
        const { observer = null, query = '', variables = {}, } = this.subscriptionObserverMap.get(id) || {};
        this.logger.debug({ id, observer, query, variables });
        if (type === MESSAGE_TYPES.DATA && payload && payload.data) {
            if (observer) {
                observer.next(payload);
            }
            else {
                this.logger.debug(`observer not found for id: ${id}`);
            }
            return [true, { id, type, payload }];
        }
        return [false, { id, type, payload }];
    }
    _unsubscribeMessage(subscriptionId) {
        return {
            id: subscriptionId,
            type: MESSAGE_TYPES.GQL_STOP,
        };
    }
    _extractConnectionTimeout(data) {
        const { payload: { connectionTimeoutMs = DEFAULT_KEEP_ALIVE_TIMEOUT } = {}, } = data;
        return connectionTimeoutMs;
    }
    _extractErrorCodeAndType(data) {
        const { payload: { errors: [{ errorType = '', errorCode = 0 } = {}] = [] } = {}, } = data;
        return { errorCode, errorType };
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class GraphQLApiError extends AmplifyError {
    constructor(params) {
        super(params);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = GraphQLApiError;
        Object.setPrototypeOf(this, GraphQLApiError.prototype);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var APIValidationErrorCode;
(function (APIValidationErrorCode) {
    APIValidationErrorCode["NoAuthSession"] = "NoAuthSession";
    APIValidationErrorCode["NoRegion"] = "NoRegion";
    APIValidationErrorCode["NoCustomEndpoint"] = "NoCustomEndpoint";
})(APIValidationErrorCode || (APIValidationErrorCode = {}));
const validationErrorMap = {
    [APIValidationErrorCode.NoAuthSession]: {
        message: 'Auth session should not be empty.',
    },
    // TODO: re-enable when working in all test environments:
    // [APIValidationErrorCode.NoEndpoint]: {
    // 	message: 'Missing endpoint',
    // },
    [APIValidationErrorCode.NoRegion]: {
        message: 'Missing region.',
    },
    [APIValidationErrorCode.NoCustomEndpoint]: {
        message: 'Custom endpoint region is present without custom endpoint.',
    },
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
function assertValidationError(assertion, name) {
    const { message, recoverySuggestion } = validationErrorMap[name];
    if (!assertion) {
        throw new GraphQLApiError({ name, message, recoverySuggestion });
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$9 = new ConsoleLogger('GraphQLAPI resolveConfig');
/**
 * @internal
 */
const resolveConfig = (amplify) => {
    const config = amplify.getConfig();
    if (!config.API?.GraphQL) {
        logger$9.warn('The API configuration is missing. This is likely due to Amplify.configure() not being called prior to generateClient().');
    }
    const { apiKey, customEndpoint, customEndpointRegion, defaultAuthMode, endpoint, region, } = config.API?.GraphQL ?? {};
    // TODO: re-enable when working in all test environments:
    // assertValidationError(!!endpoint, APIValidationErrorCode.NoEndpoint);
    assertValidationError(!(!customEndpoint && customEndpointRegion), APIValidationErrorCode.NoCustomEndpoint);
    return {
        apiKey,
        customEndpoint,
        customEndpointRegion,
        defaultAuthMode,
        endpoint,
        region,
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
const resolveLibraryOptions = (amplify) => {
    const headers = amplify.libraryOptions?.API?.GraphQL?.headers;
    const withCredentials = amplify.libraryOptions?.API?.GraphQL?.withCredentials;
    return { headers, withCredentials };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Checks to see if the given response or subscription message contains an
 * Unauthorized error. If it does, it changes the error message to include instructions
 * for the app developer.
 */
function repackageUnauthorizedError(content) {
    if (content.errors && Array.isArray(content.errors)) {
        content.errors.forEach(e => {
            if (isUnauthorizedError(e)) {
                e.message = 'Unauthorized';
                e.recoverySuggestion =
                    `If you're calling an Amplify-generated API, make sure ` +
                        `to set the "authMode" in generateClient({ authMode: '...' }) to the backend authorization ` +
                        `rule's auth provider ('apiKey', 'userPool', 'iam', 'oidc', 'lambda')`;
            }
        });
    }
    return content;
}
function isUnauthorizedError(error) {
    // Error pattern corresponding to appsync calls
    if (error?.originalError?.name?.startsWith('UnauthorizedException')) {
        return true;
    }
    // Error pattern corresponding to appsync subscriptions
    if (error.message?.startsWith('Connection failed:') &&
        error.message?.includes('Permission denied')) {
        return true;
    }
    return false;
}

var GraphQLAuthError;
(function (GraphQLAuthError) {
    GraphQLAuthError["NO_API_KEY"] = "No api-key configured";
    GraphQLAuthError["NO_CURRENT_USER"] = "No current user";
    GraphQLAuthError["NO_CREDENTIALS"] = "No credentials";
    GraphQLAuthError["NO_FEDERATED_JWT"] = "No federated jwt";
    GraphQLAuthError["NO_AUTH_TOKEN"] = "No auth token specified";
})(GraphQLAuthError || (GraphQLAuthError = {}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const NO_API_KEY = {
    name: 'NoApiKey',
    // ideal: No API key configured.
    message: GraphQLAuthError.NO_API_KEY,
    recoverySuggestion: 'The API request was made with `authMode: "apiKey"` but no API Key was passed into `Amplify.configure()`. Review if your API key is passed into the `Amplify.configure()` function.',
};
const NO_VALID_CREDENTIALS = {
    name: 'NoCredentials',
    // ideal: No auth credentials available.
    message: GraphQLAuthError.NO_CREDENTIALS,
    recoverySuggestion: `The API request was made with \`authMode: "iam"\` but no authentication credentials are available.

If you intended to make a request using an authenticated role, review if your user is signed in before making the request.

If you intend to make a request using an unauthenticated role or also known as "guest access", verify if "Auth.Cognito.allowGuestAccess" is set to "true" in the \`Amplify.configure()\` function.`,
};
const NO_VALID_AUTH_TOKEN = {
    name: 'NoValidAuthTokens',
    // ideal: No valid JWT auth token provided to make the API request..
    message: GraphQLAuthError.NO_FEDERATED_JWT,
    recoverySuggestion: 'If you intended to make an authenticated API request, review if the current user is signed in.',
};
const NO_SIGNED_IN_USER = {
    name: 'NoSignedUser',
    // ideal: Couldn't retrieve authentication credentials to make the API request.
    message: GraphQLAuthError.NO_CURRENT_USER,
    recoverySuggestion: 'Review the underlying exception field for more details. If you intended to make an authenticated API request, review if the current user is signed in.',
};
const NO_AUTH_TOKEN_HEADER = {
    name: 'NoAuthorizationHeader',
    // ideal: Authorization header not specified.
    message: GraphQLAuthError.NO_AUTH_TOKEN,
    recoverySuggestion: 'The API request was made with `authMode: "lambda"` but no `authToken` is set. Review if a valid authToken is passed into the request options or in the `Amplify.configure()` function.',
};
const NO_ENDPOINT = {
    name: 'NoEndpoint',
    message: 'No GraphQL endpoint configured in `Amplify.configure()`.',
    recoverySuggestion: 'Review if the GraphQL API endpoint is set in the `Amplify.configure()` function.',
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createGraphQLResultWithError = (error) => {
    return {
        data: {},
        errors: [new GraphQLError(error.message, null, null, null, null, error)],
    };
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isGraphQLResponseWithErrors(response) {
    if (!response) {
        return false;
    }
    const r = response;
    return Array.isArray(r.errors) && r.errors.length > 0;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
async function headerBasedAuth(amplify, authMode, apiKey, additionalHeaders = {}) {
    let headers = {};
    switch (authMode) {
        case 'apiKey':
            if (!apiKey) {
                throw new GraphQLApiError(NO_API_KEY);
            }
            headers = {
                'X-Api-Key': apiKey,
            };
            break;
        case 'iam': {
            const session = await amplify.Auth.fetchAuthSession();
            if (session.credentials === undefined) {
                throw new GraphQLApiError(NO_VALID_CREDENTIALS);
            }
            break;
        }
        case 'oidc':
        case 'userPool': {
            let token;
            try {
                token = (await amplify.Auth.fetchAuthSession()).tokens?.accessToken.toString();
            }
            catch (e) {
                // fetchAuthSession failed
                throw new GraphQLApiError({
                    ...NO_SIGNED_IN_USER,
                    underlyingError: e,
                });
            }
            // `fetchAuthSession()` succeeded but didn't return `tokens`.
            // This may happen when unauthenticated access is enabled and there is
            // no user signed in.
            if (!token) {
                throw new GraphQLApiError(NO_VALID_AUTH_TOKEN);
            }
            headers = {
                Authorization: token,
            };
            break;
        }
        case 'lambda':
            if (typeof additionalHeaders === 'object' &&
                !additionalHeaders.Authorization) {
                throw new GraphQLApiError(NO_AUTH_TOKEN_HEADER);
            }
            headers = {
                Authorization: additionalHeaders.Authorization,
            };
            break;
    }
    return headers;
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const USER_AGENT_HEADER = 'x-amz-user-agent';
const isAmplifyInstance = (amplify) => {
    return typeof amplify !== 'function';
};
/**
 * Export Cloud Logic APIs
 */
class InternalGraphQLAPIClass {
    constructor() {
        /**
         * @private
         */
        this.appSyncRealTime = new AWSAppSyncRealTimeProvider();
        this._api = {
            post,
            cancelREST: cancel,
            isCancelErrorREST: isCancelError,
            updateRequestToBeCancellable,
        };
    }
    getModuleName() {
        return 'InternalGraphQLAPI';
    }
    /**
     * to get the operation type
     * @param operation
     */
    getGraphqlOperationType(operation) {
        const doc = parse(operation);
        const definitions = doc.definitions;
        const [{ operation: operationType }] = definitions;
        return operationType;
    }
    /**
     * Executes a GraphQL operation
     *
     * @param options - GraphQL Options
     * @param [additionalHeaders] - headers to merge in after any `libraryConfigHeaders` set in the config
     * @returns An Observable if the query is a subscription query, else a promise of the graphql result.
     */
    graphql(amplify, { query: paramQuery, variables = {}, authMode, authToken }, additionalHeaders, customUserAgentDetails) {
        const query = typeof paramQuery === 'string'
            ? parse(paramQuery)
            : parse(print(paramQuery));
        const [operationDef = {}] = query.definitions.filter(def => def.kind === 'OperationDefinition');
        const { operation: operationType } = operationDef;
        const headers = additionalHeaders || {};
        switch (operationType) {
            case 'query':
            case 'mutation': {
                const abortController = new AbortController();
                let responsePromise;
                if (isAmplifyInstance(amplify)) {
                    responsePromise = this._graphql(amplify, { query, variables, authMode }, headers, abortController, customUserAgentDetails, authToken);
                }
                else {
                    // NOTE: this wrapper function must be await-able so the Amplify server context manager can
                    // destroy the context only after it completes
                    const wrapper = async (amplifyInstance) => {
                        const result = await this._graphql(amplifyInstance, { query, variables, authMode }, headers, abortController, customUserAgentDetails, authToken);
                        return result;
                    };
                    responsePromise = amplify(wrapper);
                }
                this._api.updateRequestToBeCancellable(responsePromise, abortController);
                return responsePromise;
            }
            case 'subscription':
                return this._graphqlSubscribe(amplify, { query, variables, authMode }, headers, customUserAgentDetails, authToken);
            default:
                throw new Error(`invalid operation type: ${operationType}`);
        }
    }
    async _graphql(amplify, { query, variables, authMode: explicitAuthMode }, additionalHeaders = {}, abortController, customUserAgentDetails, authToken) {
        const { apiKey, region, endpoint: appSyncGraphqlEndpoint, customEndpoint, customEndpointRegion, defaultAuthMode, } = resolveConfig(amplify);
        const initialAuthMode = explicitAuthMode || defaultAuthMode || 'iam';
        // identityPool is an alias for iam. TODO: remove 'iam' in v7
        const authMode = initialAuthMode === 'identityPool' ? 'iam' : initialAuthMode;
        /**
         * Retrieve library options from Amplify configuration.
         * `customHeaders` here are from the Amplify configuration options,
         * and are for non-AppSync endpoints only. These are *not* the same as
         * `additionalHeaders`, which are custom headers that are either 1)
         * included when configuring the API client or 2) passed along with
         * individual requests.
         */
        const { headers: customHeaders, withCredentials } = resolveLibraryOptions(amplify);
        /**
         * Client or request-specific custom headers that may or may not be
         * returned by a function:
         */
        let additionalCustomHeaders;
        if (typeof additionalHeaders === 'function') {
            const requestOptions = {
                method: 'POST',
                url: new AmplifyUrl(customEndpoint || appSyncGraphqlEndpoint || '').toString(),
                queryString: print(query),
            };
            additionalCustomHeaders = await additionalHeaders(requestOptions);
        }
        else {
            additionalCustomHeaders = additionalHeaders;
        }
        // if an authorization header is set, have the explicit authToken take precedence
        if (authToken) {
            additionalCustomHeaders = {
                ...additionalCustomHeaders,
                Authorization: authToken,
            };
        }
        const authHeaders = await headerBasedAuth(amplify, authMode, apiKey, additionalCustomHeaders);
        const headers = {
            ...(!customEndpoint && authHeaders),
            /**
             * Custom endpoint headers.
             * If there is both a custom endpoint and custom region present, we get the headers.
             * If there is a custom endpoint but no region, we return an empty object.
             * If neither are present, we return an empty object.
             */
            ...((customEndpoint && (customEndpointRegion ? authHeaders : {})) || {}),
            // Custom headers included in Amplify configuration options:
            ...(customHeaders &&
                (await customHeaders({
                    query: print(query),
                    variables,
                }))),
            // Custom headers from individual requests or API client configuration:
            ...additionalCustomHeaders,
            // User agent headers:
            ...(!customEndpoint && {
                [USER_AGENT_HEADER]: getAmplifyUserAgent(customUserAgentDetails),
            }),
        };
        const body = {
            query: print(query),
            variables: variables || null,
        };
        let signingServiceInfo;
        /**
         * We do not send the signing service info to the REST API under the
         * following conditions (i.e. it will not sign the request):
         *   - there is a custom endpoint but no region
         *   - the auth mode is `none`, or `apiKey`
         *   - the auth mode is a type other than the types listed below
         */
        if ((customEndpoint && !customEndpointRegion) ||
            (authMode !== 'oidc' &&
                authMode !== 'userPool' &&
                authMode !== 'iam' &&
                authMode !== 'lambda')) {
            signingServiceInfo = undefined;
        }
        else {
            signingServiceInfo = {
                service: !customEndpointRegion ? 'appsync' : 'execute-api',
                region: !customEndpointRegion ? region : customEndpointRegion,
            };
        }
        const endpoint = customEndpoint || appSyncGraphqlEndpoint;
        if (!endpoint) {
            throw createGraphQLResultWithError(new GraphQLApiError(NO_ENDPOINT));
        }
        let response;
        try {
            // 	// // See the inline doc of the REST `post()` API for possible errors to be thrown.
            // 	// // As these errors are catastrophic they should be caught and handled by GraphQL
            // 	// // API consumers.
            const { body: responseBody } = await this._api.post(amplify, {
                url: new AmplifyUrl(endpoint),
                options: {
                    headers,
                    body,
                    signingServiceInfo,
                    withCredentials,
                },
                abortController,
            });
            response = await responseBody.json();
        }
        catch (error) {
            if (this.isCancelError(error)) {
                throw error;
            }
            response = createGraphQLResultWithError(error);
        }
        if (isGraphQLResponseWithErrors(response)) {
            throw repackageUnauthorizedError(response);
        }
        return response;
    }
    /**
     * Checks to see if an error thrown is from an api request cancellation
     * @param {any} error - Any error
     * @return {boolean} - A boolean indicating if the error was from an api request cancellation
     */
    isCancelError(error) {
        return this._api.isCancelErrorREST(error);
    }
    /**
     * Cancels an inflight request. Only applicable for graphql queries and mutations
     * @param {any} request - request to cancel
     * @returns - A boolean indicating if the request was cancelled
     */
    cancel(request, message) {
        return this._api.cancelREST(request, message);
    }
    _graphqlSubscribe(amplify, { query, variables, authMode: explicitAuthMode }, additionalHeaders = {}, customUserAgentDetails, authToken) {
        const config = resolveConfig(amplify);
        const initialAuthMode = explicitAuthMode || config?.defaultAuthMode || 'iam';
        // identityPool is an alias for iam. TODO: remove 'iam' in v7
        const authMode = initialAuthMode === 'identityPool' ? 'iam' : initialAuthMode;
        /**
         * Retrieve library options from Amplify configuration.
         * `libraryConfigHeaders` are from the Amplify configuration options,
         * and will not be overwritten by other custom headers. These are *not*
         * the same as `additionalHeaders`, which are custom headers that are
         * either 1)included when configuring the API client or 2) passed along
         * with individual requests.
         */
        const { headers: libraryConfigHeaders } = resolveLibraryOptions(amplify);
        return this.appSyncRealTime
            .subscribe({
            query: print(query),
            variables,
            appSyncGraphqlEndpoint: config?.endpoint,
            region: config?.region,
            authenticationType: authMode,
            apiKey: config?.apiKey,
            additionalHeaders,
            authToken,
            libraryConfigHeaders,
        }, customUserAgentDetails)
            .pipe(catchError(e => {
            if (e.errors) {
                throw repackageUnauthorizedError(e);
            }
            throw e;
        }));
    }
}
new InternalGraphQLAPIClass();

/**
 * NOTE!
 *
 * This is used only by DataStore.
 *
 * This can probably be pruned and/or removed. Just leaving it as much of the same
 * state as possible for V6 to reduce number of potentially impactful changes to DataStore.
 */
/**
 * @deprecated
 * Use RestApi or GraphQLAPI to reduce your application bundle size
 * Export Cloud Logic APIs
 */
class InternalAPIClass {
    /**
     * Initialize API
     */
    constructor() {
        this.Cache = Cache;
        this._graphqlApi = new InternalGraphQLAPIClass();
    }
    getModuleName() {
        return 'InternalAPI';
    }
    /**
     * to get the operation type
     * @param operation
     */
    getGraphqlOperationType(operation) {
        return this._graphqlApi.getGraphqlOperationType(operation);
    }
    graphql(options, additionalHeaders, customUserAgentDetails) {
        const apiUserAgentDetails = {
            category: Category.API,
            action: ApiAction.GraphQl,
            ...customUserAgentDetails,
        };
        return this._graphqlApi.graphql(Amplify, options, additionalHeaders, apiUserAgentDetails);
    }
}
const InternalAPI = new InternalAPIClass();

// Default behavior is to use the primary auth mode for an API,
// so we are returning an empty array so that DataStore will default
// to using the primary auth mode.
const defaultAuthStrategy = () => [];

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function getProviderFromRule(rule) {
    // private with no provider means userPools
    if (rule.allow === 'private' && !rule.provider) {
        return ModelAttributeAuthProvider.USER_POOLS;
    }
    // public with no provider means apiKey
    if (rule.allow === 'public' && !rule.provider) {
        return ModelAttributeAuthProvider.API_KEY;
    }
    return rule.provider;
}
function sortAuthRulesWithPriority(rules) {
    const allowSortPriority = [
        ModelAttributeAuthAllow.CUSTOM,
        ModelAttributeAuthAllow.OWNER,
        ModelAttributeAuthAllow.GROUPS,
        ModelAttributeAuthAllow.PRIVATE,
        ModelAttributeAuthAllow.PUBLIC,
    ];
    const providerSortPriority = [
        ModelAttributeAuthProvider.FUNCTION,
        ModelAttributeAuthProvider.USER_POOLS,
        ModelAttributeAuthProvider.OIDC,
        ModelAttributeAuthProvider.IAM,
        ModelAttributeAuthProvider.API_KEY,
    ];
    return [...rules].sort((a, b) => {
        if (a.allow === b.allow) {
            return (providerSortPriority.indexOf(getProviderFromRule(a)) -
                providerSortPriority.indexOf(getProviderFromRule(b)));
        }
        return (allowSortPriority.indexOf(a.allow) - allowSortPriority.indexOf(b.allow));
    });
}
function getAuthRules({ rules, currentUser, }) {
    // Using Set to ensure uniqueness
    const authModes = new Set();
    rules.forEach(rule => {
        switch (rule.allow) {
            case ModelAttributeAuthAllow.CUSTOM:
                // custom with no provider -> function
                if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.FUNCTION) {
                    authModes.add('lambda');
                }
                break;
            case ModelAttributeAuthAllow.GROUPS:
            case ModelAttributeAuthAllow.OWNER: {
                // We shouldn't attempt User Pool or OIDC if there isn't an authenticated user
                if (currentUser) {
                    if (rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add('userPool');
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.OIDC) {
                        authModes.add('oidc');
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PRIVATE: {
                // We shouldn't attempt private if there isn't an authenticated user
                if (currentUser) {
                    // private with no provider means userPools
                    if (!rule.provider ||
                        rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add('userPool');
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.IAM) {
                        authModes.add('iam');
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PUBLIC: {
                if (rule.provider === ModelAttributeAuthProvider.IAM) {
                    authModes.add('iam');
                }
                else if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.API_KEY) {
                    // public with no provider means apiKey
                    authModes.add('apiKey');
                }
                break;
            }
        }
    });
    return Array.from(authModes);
}
/**
 * Returns an array of auth modes to try based on the schema, model, and
 * authenticated user (or lack thereof). Rules are sourced from `getAuthRules`
 * and returned in the order they ought to be attempted.
 *
 * @see sortAuthRulesWithPriority
 * @see getAuthRules
 *
 * @param param0 The `{schema, modelName}` to inspect.
 * @returns A sorted array of auth modes to attempt.
 */
const multiAuthStrategy = () => async ({ schema, modelName }) => {
    let currentUser;
    try {
        const authSession = await fetchAuthSession();
        if (authSession.tokens.accessToken) {
            // the user is authenticated
            currentUser = authSession;
        }
    }
    catch (e) {
        // No current user
    }
    const { attributes } = schema.namespaces.user.models[modelName];
    if (attributes) {
        const authAttribute = attributes.find(attr => attr.type === 'auth');
        if (authAttribute?.properties?.rules) {
            const sortedRules = sortAuthRulesWithPriority(authAttribute.properties.rules);
            return getAuthRules({ currentUser, rules: sortedRules });
        }
    }
    return [];
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$8 = new ConsoleLogger('DataStore');
const GraphQLOperationType = {
    LIST: 'query',
    CREATE: 'mutation',
    UPDATE: 'mutation',
    DELETE: 'mutation',
    GET: 'query',
};
var TransformerMutationType;
(function (TransformerMutationType) {
    TransformerMutationType["CREATE"] = "Create";
    TransformerMutationType["UPDATE"] = "Update";
    TransformerMutationType["DELETE"] = "Delete";
    TransformerMutationType["GET"] = "Get";
})(TransformerMutationType || (TransformerMutationType = {}));
const dummyMetadata = {
    _version: undefined,
    _lastChangedAt: undefined,
    _deleted: undefined,
};
const metadataFields = Object.keys(dummyMetadata);
function getMetadataFields() {
    return metadataFields;
}
function generateSelectionSet(namespace, modelDefinition) {
    const scalarFields = getScalarFields(modelDefinition);
    const nonModelFields = getNonModelFields(namespace, modelDefinition);
    const implicitOwnerField = getImplicitOwnerField(modelDefinition, scalarFields);
    let scalarAndMetadataFields = Object.values(scalarFields)
        .map(({ name }) => name)
        .concat(implicitOwnerField)
        .concat(nonModelFields);
    if (isSchemaModel(modelDefinition)) {
        scalarAndMetadataFields = scalarAndMetadataFields
            .concat(getMetadataFields())
            .concat(getConnectionFields(modelDefinition, namespace));
    }
    const result = scalarAndMetadataFields.join('\n');
    return result;
}
function getImplicitOwnerField(modelDefinition, scalarFields) {
    const ownerFields = getOwnerFields(modelDefinition);
    if (!scalarFields.owner && ownerFields.includes('owner')) {
        return ['owner'];
    }
    return [];
}
function getOwnerFields(modelDefinition) {
    const ownerFields = [];
    if (isSchemaModelWithAttributes(modelDefinition)) {
        modelDefinition.attributes.forEach(attr => {
            if (attr.properties && attr.properties.rules) {
                const rule = attr.properties.rules.find(currentRule => currentRule.allow === 'owner');
                if (rule && rule.ownerField) {
                    ownerFields.push(rule.ownerField);
                }
            }
        });
    }
    return ownerFields;
}
function getScalarFields(modelDefinition) {
    const { fields } = modelDefinition;
    const result = Object.values(fields)
        .filter(field => {
        if (isGraphQLScalarType(field.type) || isEnumFieldType(field.type)) {
            return true;
        }
        return false;
    })
        .reduce((acc, field) => {
        acc[field.name] = field;
        return acc;
    }, {});
    return result;
}
// Used for generating the selection set for queries and mutations
function getConnectionFields(modelDefinition, namespace) {
    const result = [];
    Object.values(modelDefinition.fields)
        .filter(({ association }) => association && Object.keys(association).length)
        .forEach(({ name, association }) => {
        const { connectionType } = association || {};
        switch (connectionType) {
            case 'HAS_ONE':
            case 'HAS_MANY':
                // Intentionally blank
                break;
            case 'BELONGS_TO':
                if (isTargetNameAssociation(association)) {
                    // New codegen (CPK)
                    if (association.targetNames && association.targetNames.length > 0) {
                        // Need to retrieve relations in order to get connected model keys
                        const [relations] = establishRelationAndKeys(namespace);
                        const connectedModelName = modelDefinition.fields[name].type.model;
                        const byPkIndex = relations[connectedModelName].indexes.find(([currentName]) => currentName === 'byPk');
                        const keyFields = byPkIndex && byPkIndex[1];
                        const keyFieldSelectionSet = keyFields?.join(' ');
                        // We rely on `_deleted` when we process the sync query (e.g. in batchSave in the adapters)
                        result.push(`${name} { ${keyFieldSelectionSet} _deleted }`);
                    }
                    else {
                        // backwards-compatability for schema generated prior to custom primary key support
                        result.push(`${name} { id _deleted }`);
                    }
                }
                break;
            default:
                throw new Error(`Invalid connection type ${connectionType}`);
        }
    });
    return result;
}
function getNonModelFields(namespace, modelDefinition) {
    const result = [];
    Object.values(modelDefinition.fields).forEach(({ name, type }) => {
        if (isNonModelFieldType(type)) {
            const typeDefinition = namespace.nonModels[type.nonModel];
            const scalarFields = Object.values(getScalarFields(typeDefinition)).map(({ name: currentName }) => currentName);
            const nested = [];
            Object.values(typeDefinition.fields).forEach(field => {
                const { type: fieldType, name: fieldName } = field;
                if (isNonModelFieldType(fieldType)) {
                    const nonModelTypeDefinition = namespace.nonModels[fieldType.nonModel];
                    nested.push(`${fieldName} { ${generateSelectionSet(namespace, nonModelTypeDefinition)} }`);
                }
            });
            result.push(`${name} { ${scalarFields.join(' ')} ${nested.join(' ')} }`);
        }
    });
    return result;
}
function getAuthorizationRules(modelDefinition) {
    // Searching for owner authorization on attributes
    const authConfig = []
        .concat(modelDefinition.attributes || [])
        .find(attr => attr && attr.type === 'auth');
    const { properties: { rules = [] } = {} } = authConfig || {};
    const resultRules = [];
    // Multiple rules can be declared for allow: owner
    rules.forEach(rule => {
        // setting defaults for backwards compatibility with old cli
        const { identityClaim = 'cognito:username', ownerField = 'owner', operations = ['create', 'update', 'delete', 'read'], provider = 'userPools', groupClaim = 'cognito:groups', allow: authStrategy = 'iam', groups = [], groupsField = '', } = rule;
        const isReadAuthorized = operations.includes('read');
        const isOwnerAuth = authStrategy === 'owner';
        if (!isReadAuthorized && !isOwnerAuth) {
            return;
        }
        const authRule = {
            identityClaim,
            ownerField,
            provider,
            groupClaim,
            authStrategy,
            groups,
            groupsField,
            areSubscriptionsPublic: false,
        };
        if (isOwnerAuth) {
            // look for the subscription level override
            // only pay attention to the public level
            const modelConfig = []
                .concat(modelDefinition.attributes || [])
                .find(attr => attr && attr.type === 'model');
            // find the subscriptions level. ON is default
            const { properties: { subscriptions: { level = 'on' } = {} } = {} } = modelConfig || {};
            // treat subscriptions as public for owner auth with unprotected reads
            // when `read` is omitted from `operations`
            authRule.areSubscriptionsPublic =
                !operations.includes('read') || level === 'public';
        }
        if (isOwnerAuth) {
            // owner rules has least priority
            resultRules.push(authRule);
            return;
        }
        resultRules.unshift(authRule);
    });
    return resultRules;
}
function buildSubscriptionGraphQLOperation(namespace, modelDefinition, transformerMutationType, isOwnerAuthorization, ownerField, filterArg = false) {
    const selectionSet = generateSelectionSet(namespace, modelDefinition);
    const { name: typeName } = modelDefinition;
    const opName = `on${transformerMutationType}${typeName}`;
    const docArgs = [];
    const opArgs = [];
    if (filterArg) {
        docArgs.push(`$filter: ModelSubscription${typeName}FilterInput`);
        opArgs.push('filter: $filter');
    }
    if (isOwnerAuthorization) {
        docArgs.push(`$${ownerField}: String!`);
        opArgs.push(`${ownerField}: $${ownerField}`);
    }
    const docStr = docArgs.length ? `(${docArgs.join(',')})` : '';
    const opStr = opArgs.length ? `(${opArgs.join(',')})` : '';
    return [
        transformerMutationType,
        opName,
        `subscription operation${docStr}{
			${opName}${opStr}{
				${selectionSet}
			}
		}`,
    ];
}
function buildGraphQLOperation(namespace, modelDefinition, graphQLOpType) {
    let selectionSet = generateSelectionSet(namespace, modelDefinition);
    const { name: typeName, pluralName: pluralTypeName } = modelDefinition;
    let operation;
    let documentArgs;
    let operationArgs;
    let transformerMutationType;
    switch (graphQLOpType) {
        case 'LIST':
            operation = `sync${pluralTypeName}`;
            documentArgs = `($limit: Int, $nextToken: String, $lastSync: AWSTimestamp, $filter: Model${typeName}FilterInput)`;
            operationArgs =
                '(limit: $limit, nextToken: $nextToken, lastSync: $lastSync, filter: $filter)';
            selectionSet = `items {
							${selectionSet}
						}
						nextToken
						startedAt`;
            break;
        case 'CREATE':
            operation = `create${typeName}`;
            documentArgs = `($input: Create${typeName}Input!)`;
            operationArgs = '(input: $input)';
            transformerMutationType = TransformerMutationType.CREATE;
            break;
        case 'UPDATE':
            operation = `update${typeName}`;
            documentArgs = `($input: Update${typeName}Input!, $condition: Model${typeName}ConditionInput)`;
            operationArgs = '(input: $input, condition: $condition)';
            transformerMutationType = TransformerMutationType.UPDATE;
            break;
        case 'DELETE':
            operation = `delete${typeName}`;
            documentArgs = `($input: Delete${typeName}Input!, $condition: Model${typeName}ConditionInput)`;
            operationArgs = '(input: $input, condition: $condition)';
            transformerMutationType = TransformerMutationType.DELETE;
            break;
        case 'GET':
            operation = `get${typeName}`;
            documentArgs = `($id: ID!)`;
            operationArgs = '(id: $id)';
            transformerMutationType = TransformerMutationType.GET;
            break;
        default:
            throw new Error(`Invalid graphQlOpType ${graphQLOpType}`);
    }
    return [
        [
            transformerMutationType,
            operation,
            `${GraphQLOperationType[graphQLOpType]} operation${documentArgs}{
		${operation}${operationArgs}{
			${selectionSet}
		}
	}`,
        ],
    ];
}
function createMutationInstanceFromModelOperation(relationships, modelDefinition, opType, model, element, condition, MutationEventConstructor, modelInstanceCreator, id) {
    let operation;
    switch (opType) {
        case OpType.INSERT:
            operation = TransformerMutationType.CREATE;
            break;
        case OpType.UPDATE:
            operation = TransformerMutationType.UPDATE;
            break;
        case OpType.DELETE:
            operation = TransformerMutationType.DELETE;
            break;
        default:
            throw new Error(`Invalid opType ${opType}`);
    }
    // stringify nested objects of type AWSJSON
    // this allows us to return parsed JSON to users (see `castInstanceType()` in datastore.ts),
    // but still send the object correctly over the wire
    const replacer = (k, v) => {
        const isAWSJSON = k &&
            v !== null &&
            typeof v === 'object' &&
            modelDefinition.fields[k] &&
            modelDefinition.fields[k].type === 'AWSJSON';
        if (isAWSJSON) {
            return JSON.stringify(v);
        }
        return v;
    };
    const modelId = getIdentifierValue(modelDefinition, element);
    const optionalId = OpType.INSERT && id ? { id } : {};
    const mutationEvent = modelInstanceCreator(MutationEventConstructor, {
        ...optionalId,
        data: JSON.stringify(element, replacer),
        modelId,
        model: model.name,
        operation: operation,
        condition: JSON.stringify(condition),
    });
    return mutationEvent;
}
function predicateToGraphQLCondition(predicate, modelDefinition) {
    const result = {};
    if (!predicate || !Array.isArray(predicate.predicates)) {
        return result;
    }
    // This is compatible with how the GQL Transform currently generates the Condition Input,
    // i.e. any PK and SK fields are omitted and can't be used as conditions.
    // However, I think this limits usability.
    // What if we want to delete all records where SK > some value
    // Or all records where PK = some value but SKs are different values
    // TODO: if the Transform gets updated we'll need to modify this logic to only omit
    // key fields from the predicate/condition when ALL of the keyFields are present and using `eq` operators
    const keyFields = extractPrimaryKeyFieldNames(modelDefinition);
    return predicateToGraphQLFilter(predicate, keyFields);
}
/**
 * @param predicatesGroup - Predicate Group
    @returns GQL Filter Expression from Predicate Group

    @remarks Flattens redundant list predicates
    @example

    ```js
    { and:[{ and:[{ username:  { eq: 'bob' }}] }] }
    ```
    Becomes
    ```js
    { and:[{ username: { eq: 'bob' }}] }
    ```
    */
function predicateToGraphQLFilter(predicatesGroup, fieldsToOmit = [], root = true) {
    const result = {};
    if (!predicatesGroup || !Array.isArray(predicatesGroup.predicates)) {
        return result;
    }
    const { type, predicates } = predicatesGroup;
    const isList = type === 'and' || type === 'or';
    result[type] = isList ? [] : {};
    const children = [];
    predicates.forEach(predicate => {
        if (isPredicateObj(predicate)) {
            const { field, operator, operand } = predicate;
            if (fieldsToOmit.includes(field))
                return;
            const gqlField = {
                [field]: { [operator]: operand },
            };
            children.push(gqlField);
            return;
        }
        const child = predicateToGraphQLFilter(predicate, fieldsToOmit, false);
        if (Object.keys(child).length > 0) {
            children.push(child);
        }
    });
    // flatten redundant list predicates
    if (children.length === 1) {
        const [child] = children;
        if (
        // any nested list node
        (isList && !root) ||
            // root list node where the only child is also a list node
            (isList && root && ('and' in child || 'or' in child))) {
            delete result[type];
            Object.assign(result, child);
            return result;
        }
    }
    children.forEach(child => {
        if (isList) {
            result[type].push(child);
        }
        else {
            result[type] = child;
        }
    });
    if (isList) {
        if (result[type].length === 0)
            return {};
    }
    else {
        if (Object.keys(result[type]).length === 0)
            return {};
    }
    return result;
}
/**
 *
 * @param group - selective sync predicate group
 * @returns set of distinct field names in the filter group
 */
function filterFields(group) {
    const fields = new Set();
    if (!group || !Array.isArray(group.predicates))
        return fields;
    const { predicates } = group;
    const stack = [...predicates];
    while (stack.length > 0) {
        const current = stack.pop();
        if (isPredicateObj(current)) {
            fields.add(current.field);
        }
        else if (isPredicateGroup(current)) {
            stack.push(...current.predicates);
        }
    }
    return fields;
}
/**
 *
 * @param modelDefinition
 * @returns set of field names used with dynamic auth modes configured for the provided model definition
 */
function dynamicAuthFields(modelDefinition) {
    const rules = getAuthorizationRules(modelDefinition);
    const fields = new Set();
    for (const rule of rules) {
        if (rule.groupsField && !rule.groups.length) {
            // dynamic group rule will have no values in `rule.groups`
            fields.add(rule.groupsField);
        }
        else if (rule.ownerField) {
            fields.add(rule.ownerField);
        }
    }
    return fields;
}
/**
 *
 * @param group - selective sync predicate group
 * @returns the total number of OR'd predicates in the filter group
 *
 * @example returns 2
 * ```js
 * { type: "or", predicates: [
 * { field: "username", operator: "beginsWith", operand: "a" },
 * { field: "title", operator: "contains", operand: "abc" },
 * ]}
 * ```
 */
function countFilterCombinations(group) {
    if (!group || !Array.isArray(group.predicates))
        return 0;
    let count = 0;
    const stack = [group];
    while (stack.length > 0) {
        const current = stack.pop();
        if (isPredicateGroup(current)) {
            const { predicates, type } = current;
            // ignore length = 1; groups with 1 predicate will get flattened when converted to gqlFilter
            if (type === 'or' && predicates.length > 1) {
                count += predicates.length;
            }
            stack.push(...predicates);
        }
    }
    // if we didn't encounter any OR groups, default to 1
    return count || 1;
}
/**
 *
 * @param group - selective sync predicate group
 * @returns name of repeated field | null
 *
 * @example returns "username"
 * ```js
 * { type: "and", predicates: [
 * 		{ field: "username", operator: "beginsWith", operand: "a" },
 * 		{ field: "username", operator: "contains", operand: "abc" },
 * ] }
 * ```
 */
function repeatedFieldInGroup(group) {
    if (!group || !Array.isArray(group.predicates))
        return null;
    // convert to filter in order to flatten redundant groups
    const gqlFilter = predicateToGraphQLFilter(group);
    const stack = [gqlFilter];
    const hasGroupRepeatedFields = (fields) => {
        const seen = {};
        for (const f of fields) {
            const [fieldName] = Object.keys(f);
            if (seen[fieldName]) {
                return fieldName;
            }
            seen[fieldName] = true;
        }
        return null;
    };
    while (stack.length > 0) {
        const current = stack.pop();
        const [key] = Object.keys(current);
        const values = current[key];
        if (!Array.isArray(values)) {
            return null;
        }
        // field value will be single object
        const predicateObjects = values.filter(v => !Array.isArray(Object.values(v)[0]));
        // group value will be an array
        const predicateGroups = values.filter(v => Array.isArray(Object.values(v)[0]));
        if (key === 'and') {
            const repeatedField = hasGroupRepeatedFields(predicateObjects);
            if (repeatedField) {
                return repeatedField;
            }
        }
        stack.push(...predicateGroups);
    }
    return null;
}
var RTFError;
(function (RTFError) {
    RTFError[RTFError["UnknownField"] = 0] = "UnknownField";
    RTFError[RTFError["MaxAttributes"] = 1] = "MaxAttributes";
    RTFError[RTFError["MaxCombinations"] = 2] = "MaxCombinations";
    RTFError[RTFError["RepeatedFieldname"] = 3] = "RepeatedFieldname";
    RTFError[RTFError["NotGroup"] = 4] = "NotGroup";
    RTFError[RTFError["FieldNotInType"] = 5] = "FieldNotInType";
})(RTFError || (RTFError = {}));
function generateRTFRemediation(errorType, modelDefinition, predicatesGroup) {
    const selSyncFields = filterFields(predicatesGroup);
    const selSyncFieldStr = [...selSyncFields].join(', ');
    const dynamicAuthModeFields = dynamicAuthFields(modelDefinition);
    const dynamicAuthFieldsStr = [...dynamicAuthModeFields].join(', ');
    const filterCombinations = countFilterCombinations(predicatesGroup);
    const repeatedField = repeatedFieldInGroup(predicatesGroup);
    switch (errorType) {
        case RTFError.UnknownField:
            return (`Your API was generated with an older version of the CLI that doesn't support backend subscription filtering.` +
                'To enable backend subscription filtering, upgrade your Amplify CLI to the latest version and push your app by running `amplify upgrade` followed by `amplify push`');
        case RTFError.MaxAttributes: {
            let message = `Your selective sync expression for ${modelDefinition.name} contains ${selSyncFields.size} different model fields: ${selSyncFieldStr}.\n\n`;
            if (dynamicAuthModeFields.size > 0) {
                message +=
                    `Note: the number of fields you can use with selective sync is affected by @auth rules configured on the model.\n\n` +
                        `Dynamic auth modes, such as owner auth and dynamic group auth each utilize 1 field.\n` +
                        `You currently have ${dynamicAuthModeFields.size} dynamic auth mode(s) configured on this model: ${dynamicAuthFieldsStr}.`;
            }
            return message;
        }
        case RTFError.MaxCombinations: {
            let message = `Your selective sync expression for ${modelDefinition.name} contains ${filterCombinations} field combinations (total number of predicates in an OR expression).\n\n`;
            if (dynamicAuthModeFields.size > 0) {
                message +=
                    `Note: the number of fields you can use with selective sync is affected by @auth rules configured on the model.\n\n` +
                        `Dynamic auth modes, such as owner auth and dynamic group auth factor in to the number of combinations you're using.\n` +
                        `You currently have ${dynamicAuthModeFields.size} dynamic auth mode(s) configured on this model: ${dynamicAuthFieldsStr}.`;
            }
            return message;
        }
        case RTFError.RepeatedFieldname:
            return `Your selective sync expression for ${modelDefinition.name} contains multiple entries for ${repeatedField} in the same AND group.`;
        case RTFError.NotGroup:
            return (`Your selective sync expression for ${modelDefinition.name} uses a \`not\` group. If you'd like to filter subscriptions in the backend, ` +
                `rewrite your expression using \`ne\` or \`notContains\` operators.`);
        case RTFError.FieldNotInType:
            // no remediation instructions. We'll surface the message directly
            return '';
    }
}
function getUserGroupsFromToken(token, rule) {
    // validate token against groupClaim
    let userGroups = token[rule.groupClaim] || [];
    if (typeof userGroups === 'string') {
        let parsedGroups;
        try {
            parsedGroups = JSON.parse(userGroups);
        }
        catch (e) {
            parsedGroups = userGroups;
        }
        userGroups = [].concat(parsedGroups);
    }
    return userGroups;
}
async function getModelAuthModes({ authModeStrategy, defaultAuthMode, modelName, schema, }) {
    const operations = Object.values(ModelOperation);
    const modelAuthModes = {
        CREATE: [],
        READ: [],
        UPDATE: [],
        DELETE: [],
    };
    try {
        await Promise.all(operations.map(async (operation) => {
            const authModes = await authModeStrategy({
                schema,
                modelName,
                operation,
            });
            if (typeof authModes === 'string') {
                modelAuthModes[operation] = [authModes];
            }
            else if (Array.isArray(authModes) && authModes.length) {
                modelAuthModes[operation] = authModes;
            }
            else {
                // Use default auth mode if nothing is returned from authModeStrategy
                modelAuthModes[operation] = [defaultAuthMode];
            }
        }));
    }
    catch (error) {
        logger$8.debug(`Error getting auth modes for model: ${modelName}`, error);
    }
    return modelAuthModes;
}
function getForbiddenError(error) {
    const forbiddenErrorCodes = [401, 403];
    let forbiddenError;
    if (error && error.errors) {
        forbiddenError = error.errors.find(err => forbiddenErrorCodes.includes(resolveServiceErrorStatusCode(err)));
    }
    else if (error && error.message) {
        forbiddenError = error;
    }
    if (forbiddenError) {
        return (forbiddenError.message ??
            `Request failed with status code ${resolveServiceErrorStatusCode(forbiddenError)}`);
    }
    return null;
}
function resolveServiceErrorStatusCode(error) {
    if (error?.$metadata?.httpStatusCode) {
        return Number(error?.$metadata?.httpStatusCode);
    }
    else if (error?.originalError) {
        return resolveServiceErrorStatusCode(error?.originalError);
    }
    else {
        return null;
    }
}
function getClientSideAuthError(error) {
    const clientSideAuthErrors = Object.values(GraphQLAuthError);
    const clientSideError = error &&
        error.message &&
        clientSideAuthErrors.find(clientError => error.message.includes(clientError));
    return clientSideError || null;
}
async function getTokenForCustomAuth(authMode, amplifyConfig = {}) {
    if (authMode === 'lambda') {
        const { authProviders: { functionAuthProvider } = { functionAuthProvider: null }, } = amplifyConfig;
        if (functionAuthProvider && typeof functionAuthProvider === 'function') {
            try {
                const { token } = await functionAuthProvider();
                return token;
            }
            catch (error) {
                throw new Error(`Error retrieving token from \`functionAuthProvider\`: ${error}`);
            }
        }
        else {
            // TODO: add docs link once available
            throw new Error('You must provide a `functionAuthProvider` function to `DataStore.configure` when using lambda');
        }
    }
}
// Util that takes a modelDefinition and model and returns either the id value(s) or the custom primary key value(s)
function getIdentifierValue(modelDefinition, model) {
    const pkFieldNames = extractPrimaryKeyFieldNames(modelDefinition);
    const idOrPk = pkFieldNames.map(f => model[f]).join(IDENTIFIER_KEY_SEPARATOR);
    return idOrPk;
}

const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return wrap(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        const returnVal = await target[targetFuncName](...args);
        if (isWrite)
            await tx.done;
        return returnVal;
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Defines a relationship from a LOCAL model.field to a REMOTE model.field and helps
 * navigate the relationship, providing a simplified peek at the relationship details
 * pertinent to setting FK's and constructing join conditions.
 *
 * Because I mean, relationships are tough.
 *
 */
class ModelRelationship {
    /**
     * @param modelDefinition The "local" model.
     * @param field The "local" model field.
     */
    constructor(model, field) {
        if (!isFieldAssociation(model.schema, field)) {
            throw new Error(`${model.schema.name}.${field} is not a relationship.`);
        }
        this.localModel = model;
        this._field = field;
    }
    /**
     * Returns a ModelRelationship for the the given model and field if the pair
     * indicates a relationship to another model. Else, returns `null`.
     *
     * @param model The model the relationship field exists in.
     * @param field The field that may relates the local model to the remote model.
     */
    static from(model, field) {
        if (isFieldAssociation(model.schema, field)) {
            return new this(model, field);
        }
        else {
            return null;
        }
    }
    /**
     * Enumerates all valid `ModelRelationship`'s on the given model.
     *
     * @param model The model definition to enumerate relationships of.
     */
    static allFrom(model) {
        const relationships = [];
        for (const field of Object.keys(model.schema.fields)) {
            const relationship = ModelRelationship.from(model, field);
            relationship && relationships.push(relationship);
        }
        return relationships;
    }
    get localDefinition() {
        return this.localModel.schema;
    }
    /**
     * The virtual/computed field on the local model that should contain
     * the related model.
     */
    get field() {
        return this._field;
    }
    /**
     * The constructor that can be used to query DataStore or create instance for
     * the local model.
     */
    get localConstructor() {
        return this.localModel.builder;
    }
    /**
     * The name/type of the relationship the local model has with the remote model
     * via the defined local model field.
     */
    get type() {
        return this.localAssocation.connectionType;
    }
    /**
     * Raw details about the local FK as-is from the local model's field definition in
     * the schema. This field requires interpretation.
     *
     * @see localJoinFields
     * @see localAssociatedWith
     */
    get localAssocation() {
        return this.localDefinition.fields[this.field].association;
    }
    /**
     * The field names on the local model that can be used to query or queried to match
     * with instances of the remote model.
     *
     * Fields are returned in-order to match the order of `this.remoteKeyFields`.
     */
    get localJoinFields() {
        /**
         * This is relatively straightforward, actually.
         *
         * If we have explicitly stated targetNames, codegen is telling us authoritatively
         * to use those fields for this relationship. The local model "points to" fields
         * in the remote one.
         *
         * In other cases, the remote model points to this one's
         */
        if (this.localAssocation.targetName) {
            // This case is theoretically unnecessary going forward.
            return [this.localAssocation.targetName];
        }
        else if (this.localAssocation.targetNames) {
            return this.localAssocation.targetNames;
        }
        else {
            return this.localPKFields;
        }
    }
    /**
     * The field names on the local model that uniquely identify it.
     *
     * These fields may or may not be relevant to the join fields.
     */
    get localPKFields() {
        return this.localModel.pkField;
    }
    get remoteDefinition() {
        return this.remoteModelType.modelConstructor?.schema;
    }
    get remoteModelType() {
        return this.localDefinition.fields[this.field].type;
    }
    /**
     * Constructor that can be used to query DataStore or create instances for
     * the remote model.
     */
    get remoteModelConstructor() {
        return this.remoteModelType.modelConstructor.builder;
    }
    /**
     * The field names on the remote model that uniquely identify it.
     *
     * These fields may or may not be relevant to the join fields.
     */
    get remotePKFields() {
        return this.remoteModelType.modelConstructor?.pkField || ['id'];
    }
    /**
     * The `associatedWith` fields from the local perspective.
     *
     * When present, these fields indicate which fields on the remote model to use
     * when looking for a remote association and/or determining the final remote
     * key fields.
     */
    get localAssociatedWith() {
        if (this.localAssocation.connectionType === 'HAS_MANY' ||
            this.localAssocation.connectionType === 'HAS_ONE') {
            // This de-arraying is theoretically unnecessary going forward.
            return Array.isArray(this.localAssocation.associatedWith)
                ? this.localAssocation.associatedWith
                : [this.localAssocation.associatedWith];
        }
        else {
            return undefined;
        }
    }
    /**
     * The `remote` model's associated field's `assocation` metadata, if
     * present.
     *
     * This is used when determining if the remote model's associated field
     * specifies which FK fields to use. If this value is `undefined`, the
     * name of the remote field (`this.localAssociatedWith`) *is* the remote
     * key field.
     */
    get explicitRemoteAssociation() {
        if (this.localAssociatedWith) {
            if (this.localAssociatedWith.length === 1) {
                return this.remoteDefinition.fields[this.localAssociatedWith[0]]
                    ?.association;
            }
            else {
                return undefined;
            }
        }
    }
    /**
     * The field names on the remote model that can used to query or queried to match
     * with instances of the local model.
     *
     * Fields are returned in-order to match the order of `this.localKeyFields`.
     */
    get remoteJoinFields() {
        /**
         * If the local relationship explicitly names "associated with" fields, we
         * need to see if this points direction to a reciprocating assocation. If it
         * does, the remote assocation indicates what fields to use.
         */
        if (this.explicitRemoteAssociation?.targetName) {
            // This case is theoretically unnecessary going forward.
            return [this.explicitRemoteAssociation.targetName];
        }
        else if (this.explicitRemoteAssociation?.targetNames) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            return this.explicitRemoteAssociation?.targetNames;
        }
        else if (this.localAssociatedWith) {
            return this.localAssociatedWith;
        }
        else {
            return this.remotePKFields;
        }
    }
    /**
     * Whether this relationship everything necessary to get, set, and query from
     * the perspective of the local model provided at instantiation.
     */
    get isComplete() {
        return this.localJoinFields.length > 0 && this.remoteJoinFields.length > 0;
    }
    /**
     * Creates an FK mapper object with respect to the given related instance.
     *
     * E.g., if the local FK fields are `[parentId, parentName]` and point to
     * `[customId, name]` on the remote model, `createLocalFKObject(remote)`
     * will return:
     *
     * ```
     * {
     * 	parentId: remote.customId,
     * 	parentName: remote.name
     * }
     * ```
     *
     * @param remote The remote related instance.
     */
    createLocalFKObject(remote) {
        const fk = {};
        for (let i = 0; i < this.localJoinFields.length; i++) {
            fk[this.localJoinFields[i]] = remote[this.remoteJoinFields[i]];
        }
        return fk;
    }
    /**
     * Creates an query mapper object to help fetch the remote instance(s) or
     * `null` if any of the necessary local fields are `null` or `undefined`.
     *
     * E.g., if the local FK fields are `[parentId, parentName]` and point to
     * `[customId, name]` on the remote model, `createLocalFKObject(remote)`
     * will return:
     *
     * ```
     * {
     * 	customId: local.parentId
     * 	name: local.parentName
     * }
     * ```
     *
     * If the local fields are not populated, returns
     *
     * @param local The local instance.
     */
    createRemoteQueryObject(local) {
        const query = {};
        for (let i = 0; i < this.remoteJoinFields.length; i++) {
            const localValue = local[this.localJoinFields[i]];
            if (localValue === null || localValue === undefined)
                return null;
            query[this.remoteJoinFields[i]] = local[this.localJoinFields[i]];
        }
        return query;
    }
}

const logger$7 = new ConsoleLogger('DataStore');
const DB_NAME$1 = 'amplify-datastore';
class StorageAdapterBase {
    constructor() {
        this.dbName = DB_NAME$1;
    }
    /**
     * Initializes local DB
     *
     * @param theSchema
     * @param namespaceResolver
     * @param modelInstanceCreator
     * @param getModelConstructorByModelName
     * @param sessionId
     */
    async setUp(theSchema, namespaceResolver, modelInstanceCreator, getModelConstructorByModelName, sessionId) {
        await this.preSetUpChecks();
        if (!this.initPromise) {
            this.initPromise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        }
        else {
            await this.initPromise;
            return;
        }
        if (sessionId) {
            this.dbName = `${DB_NAME$1}-${sessionId}`;
        }
        this.schema = theSchema;
        this.namespaceResolver = namespaceResolver;
        this.modelInstanceCreator = modelInstanceCreator;
        this.getModelConstructorByModelName = getModelConstructorByModelName;
        try {
            if (!this.db) {
                this.db = await this.initDb();
                this.resolve();
            }
        }
        catch (error) {
            this.reject(error);
        }
    }
    /**
     * @param modelConstructor
     * @returns local DB table name
     */
    getStorenameForModel(modelConstructor) {
        const namespace = this.namespaceResolver(modelConstructor);
        const { name: modelName } = modelConstructor;
        return getStorename(namespace, modelName);
    }
    /**
     *
     * @param model - instantiated model record
     * @returns the record's primary key values
     */
    getIndexKeyValuesFromModel(model) {
        const modelConstructor = Object.getPrototypeOf(model)
            .constructor;
        const namespaceName = this.namespaceResolver(modelConstructor);
        const keys = getIndexKeys(this.schema.namespaces[namespaceName], modelConstructor.name);
        return extractPrimaryKeyValues(model, keys);
    }
    /**
     * Common metadata for `save` operation
     * used by individual storage adapters
     *
     * @param model
     */
    saveMetadata(model) {
        const modelConstructor = Object.getPrototypeOf(model)
            .constructor;
        const storeName = this.getStorenameForModel(modelConstructor);
        const namespaceName = this.namespaceResolver(modelConstructor);
        const connectedModels = traverseModel(modelConstructor.name, model, this.schema.namespaces[namespaceName], this.modelInstanceCreator, this.getModelConstructorByModelName);
        const set = new Set();
        const connectionStoreNames = Object.values(connectedModels).map(({ modelName, item, instance }) => {
            const resolvedStoreName = getStorename(namespaceName, modelName);
            set.add(resolvedStoreName);
            const keys = getIndexKeys(this.schema.namespaces[namespaceName], modelName);
            return { storeName: resolvedStoreName, item, instance, keys };
        });
        const modelKeyValues = this.getIndexKeyValuesFromModel(model);
        return { storeName, set, connectionStoreNames, modelKeyValues };
    }
    /**
     * Enforces conditional save. Throws if condition is not met.
     * used by individual storage adapters
     *
     * @param model
     */
    validateSaveCondition(condition, fromDB) {
        if (!(condition && fromDB)) {
            return;
        }
        const predicates = ModelPredicateCreator.getPredicates(condition);
        const { predicates: predicateObjs, type } = predicates;
        const isValid = validatePredicate(fromDB, type, predicateObjs);
        if (!isValid) {
            const msg = 'Conditional update failed';
            logger$7.error(msg, { model: fromDB, condition: predicateObjs });
            throw new Error(msg);
        }
    }
    /**
     * Instantiate models from POJO records returned from the database
     *
     * @param namespaceName - string model namespace
     * @param srcModelName - string model name
     * @param records - array of uninstantiated records
     * @returns
     */
    async load(namespaceName, srcModelName, records) {
        const namespace = this.schema.namespaces[namespaceName];
        const relations = namespace.relationships[srcModelName].relationTypes;
        const connectionStoreNames = relations.map(({ modelName }) => {
            return getStorename(namespaceName, modelName);
        });
        const modelConstructor = this.getModelConstructorByModelName(namespaceName, srcModelName);
        if (connectionStoreNames.length === 0) {
            return records.map(record => this.modelInstanceCreator(modelConstructor, record));
        }
        return records.map(record => this.modelInstanceCreator(modelConstructor, record));
    }
    /**
     * Extracts operands from a predicate group into an array of key values
     * Used in the query method
     *
     * @param predicates - predicate group
     * @param keyPath - string array of key names ['id', 'sortKey']
     * @returns string[] of key values
     *
     * @example
     * ```js
     * { and:[{ id: { eq: 'abc' }}, { sortKey: { eq: 'def' }}] }
     * ```
     * Becomes
     * ```
     * ['abc', 'def']
     * ```
     */
    keyValueFromPredicate(predicates, keyPath) {
        const { predicates: predicateObjs } = predicates;
        if (predicateObjs.length !== keyPath.length) {
            return;
        }
        const keyValues = [];
        for (const key of keyPath) {
            const predicateObj = predicateObjs.find(p => 
            // it's a relevant predicate object only if it's an equality
            // operation for a key field from the key:
            isPredicateObj(p) &&
                p.field === key &&
                p.operator === 'eq' &&
                p.operand !== null &&
                p.operand !== undefined);
            predicateObj && keyValues.push(predicateObj.operand);
        }
        return keyValues.length === keyPath.length ? keyValues : undefined;
    }
    /**
     * Common metadata for `query` operation
     * used by individual storage adapters
     *
     * @param modelConstructor
     * @param predicate
     * @param pagination
     */
    queryMetadata(modelConstructor, predicate, pagination) {
        const storeName = this.getStorenameForModel(modelConstructor);
        const namespaceName = this.namespaceResolver(modelConstructor);
        const predicates = predicate && ModelPredicateCreator.getPredicates(predicate);
        const keyPath = getIndexKeys(this.schema.namespaces[namespaceName], modelConstructor.name);
        const queryByKey = predicates && this.keyValueFromPredicate(predicates, keyPath);
        const hasSort = pagination && pagination.sort;
        const hasPagination = pagination && pagination.limit;
        return {
            storeName,
            namespaceName,
            queryByKey,
            predicates,
            hasSort,
            hasPagination,
        };
    }
    /**
     * Delete record
     * Cascades to related records (for Has One and Has Many relationships)
     *
     * @param modelOrModelConstructor
     * @param condition
     * @returns
     */
    async delete(modelOrModelConstructor, condition) {
        await this.preOpCheck();
        const deleteQueue = [];
        if (isModelConstructor(modelOrModelConstructor)) {
            const modelConstructor = modelOrModelConstructor;
            const namespace = this.namespaceResolver(modelConstructor);
            const models = await this.query(modelConstructor, condition);
            if (condition !== undefined) {
                await this.deleteTraverse(models, modelConstructor, namespace, deleteQueue);
                await this.deleteItem(deleteQueue);
                const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
                return [models, deletedModels];
            }
            else {
                await this.deleteTraverse(models, modelConstructor, namespace, deleteQueue);
                await this.deleteItem(deleteQueue);
                const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
                return [models, deletedModels];
            }
        }
        else {
            const model = modelOrModelConstructor;
            const modelConstructor = Object.getPrototypeOf(model)
                .constructor;
            const namespaceName = this.namespaceResolver(modelConstructor);
            const storeName = this.getStorenameForModel(modelConstructor);
            if (condition) {
                const keyValues = this.getIndexKeyValuesFromModel(model);
                const fromDB = await this._get(storeName, keyValues);
                if (fromDB === undefined) {
                    const msg = 'Model instance not found in storage';
                    logger$7.warn(msg, { model });
                    return [[model], []];
                }
                const predicates = ModelPredicateCreator.getPredicates(condition);
                const { predicates: predicateObjs, type } = predicates;
                const isValid = validatePredicate(fromDB, type, predicateObjs);
                if (!isValid) {
                    const msg = 'Conditional update failed';
                    logger$7.error(msg, { model: fromDB, condition: predicateObjs });
                    throw new Error(msg);
                }
                await this.deleteTraverse([model], modelConstructor, namespaceName, deleteQueue);
            }
            else {
                await this.deleteTraverse([model], modelConstructor, namespaceName, deleteQueue);
            }
            await this.deleteItem(deleteQueue);
            const deletedModels = deleteQueue.reduce((acc, { items }) => acc.concat(items), []);
            return [[model], deletedModels];
        }
    }
    /**
     * Recursively traverse relationship graph and add
     * all Has One and Has Many relations to `deleteQueue` param
     *
     * Actual deletion of records added to `deleteQueue` occurs in the `delete` method
     *
     * @param models
     * @param modelConstructor
     * @param namespace
     * @param deleteQueue
     */
    async deleteTraverse(models, modelConstructor, namespace, deleteQueue) {
        const cascadingRelationTypes = ['HAS_ONE', 'HAS_MANY'];
        for await (const model of models) {
            const modelDefinition = this.schema.namespaces[namespace].models[modelConstructor.name];
            const modelMeta = {
                builder: modelConstructor,
                schema: modelDefinition,
                pkField: extractPrimaryKeyFieldNames(modelDefinition),
            };
            const relationships = ModelRelationship.allFrom(modelMeta).filter(r => cascadingRelationTypes.includes(r.type));
            for await (const r of relationships) {
                const queryObject = r.createRemoteQueryObject(model);
                if (queryObject !== null) {
                    const relatedRecords = await this.query(r.remoteModelConstructor, ModelPredicateCreator.createFromFlatEqualities(r.remoteDefinition, queryObject));
                    await this.deleteTraverse(relatedRecords, r.remoteModelConstructor, namespace, deleteQueue);
                }
            }
        }
        deleteQueue.push({
            storeName: getStorename(namespace, modelConstructor.name),
            items: models,
        });
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$6 = new ConsoleLogger('DataStore');
/**
 * The point after which queries composed of multiple simple OR conditions
 * should scan-and-filter instead of individual queries for each condition.
 *
 * At some point, this should be configurable and/or dynamic based on table
 * size and possibly even on observed average seek latency. For now, it's
 * based on an manual "binary search" for the breakpoint as measured in the
 * unit test suite. This isn't necessarily optimal. But, it's at least derived
 * empirically, rather than theoretically and without any verification!
 *
 * REMEMBER! If you run more realistic benchmarks and update this value, update
 * this comment so the validity and accuracy of future query tuning exercises
 * can be compared to the methods used to derive the current value. E.g.,
 *
 * 1. In browser benchmark > unit test benchmark
 * 2. Multi-browser benchmark > single browser benchmark
 * 3. Benchmarks of various table sizes > static table size benchmark
 *
 * etc...
 *
 */
const MULTI_OR_CONDITION_SCAN_BREAKPOINT = 7;
//
const DB_VERSION = 3;
class IndexedDBAdapter extends StorageAdapterBase {
    constructor() {
        super(...arguments);
        this.safariCompatabilityMode = false;
        /**
         * Checks the given path against the browser's IndexedDB implementation for
         * necessary compatibility transformations, applying those transforms if needed.
         *
         * @param `keyArr` strings to compatibilize for browser-indexeddb index operations
         * @returns An array or string, depending on and given key,
         * that is ensured to be compatible with the IndexedDB implementation's nuances.
         */
        this.canonicalKeyPath = (keyArr) => {
            if (this.safariCompatabilityMode) {
                return keyArr.length > 1 ? keyArr : keyArr[0];
            }
            return keyArr;
        };
        // #endregion
    }
    // checks are called by StorageAdapterBase class
    async preSetUpChecks() {
        await this.checkPrivate();
        await this.setSafariCompatabilityMode();
    }
    async preOpCheck() {
        await this.checkPrivate();
    }
    /**
     * Initialize IndexedDB database
     * Create new DB if one doesn't exist
     * Upgrade outdated DB
     *
     * Called by `StorageAdapterBase.setUp()`
     *
     * @returns IDB Database instance
     */
    async initDb() {
        return openDB(this.dbName, DB_VERSION, {
            upgrade: async (db, oldVersion, newVersion, txn) => {
                // create new database
                if (oldVersion === 0) {
                    Object.keys(this.schema.namespaces).forEach(namespaceName => {
                        const namespace = this.schema.namespaces[namespaceName];
                        Object.keys(namespace.models).forEach(modelName => {
                            const storeName = getStorename(namespaceName, modelName);
                            this.createObjectStoreForModel(db, namespaceName, storeName, modelName);
                        });
                    });
                    return;
                }
                // migrate existing database to latest schema
                if ((oldVersion === 1 || oldVersion === 2) && newVersion === 3) {
                    try {
                        for (const storeName of txn.objectStoreNames) {
                            const origStore = txn.objectStore(storeName);
                            // rename original store
                            const tmpName = `tmp_${storeName}`;
                            origStore.name = tmpName;
                            const { namespaceName, modelName } = this.getNamespaceAndModelFromStorename(storeName);
                            const modelInCurrentSchema = modelName in this.schema.namespaces[namespaceName].models;
                            if (!modelInCurrentSchema) {
                                // delete original
                                db.deleteObjectStore(tmpName);
                                continue;
                            }
                            const newStore = this.createObjectStoreForModel(db, namespaceName, storeName, modelName);
                            let cursor = await origStore.openCursor();
                            let count = 0;
                            // Copy data from original to new
                            while (cursor && cursor.value) {
                                // we don't pass key, since they are all new entries in the new store
                                await newStore.put(cursor.value);
                                cursor = await cursor.continue();
                                count++;
                            }
                            // delete original
                            db.deleteObjectStore(tmpName);
                            logger$6.debug(`${count} ${storeName} records migrated`);
                        }
                        // add new models created after IndexedDB, but before migration
                        // this case may happen when a user has not opened an app for
                        // some time and a new model is added during that time
                        Object.keys(this.schema.namespaces).forEach(namespaceName => {
                            const namespace = this.schema.namespaces[namespaceName];
                            const objectStoreNames = new Set(txn.objectStoreNames);
                            Object.keys(namespace.models)
                                .map(modelName => {
                                return [modelName, getStorename(namespaceName, modelName)];
                            })
                                .filter(([, storeName]) => !objectStoreNames.has(storeName))
                                .forEach(([modelName, storeName]) => {
                                this.createObjectStoreForModel(db, namespaceName, storeName, modelName);
                            });
                        });
                    }
                    catch (error) {
                        logger$6.error('Error migrating IndexedDB data', error);
                        txn.abort();
                        throw error;
                    }
                }
            },
        });
    }
    async _get(storeOrStoreName, keyArr) {
        let index;
        if (typeof storeOrStoreName === 'string') {
            const storeName = storeOrStoreName;
            index = this.db.transaction(storeName, 'readonly').store.index('byPk');
        }
        else {
            const store = storeOrStoreName;
            index = store.index('byPk');
        }
        const result = await index.get(this.canonicalKeyPath(keyArr));
        return result;
    }
    async clear() {
        await this.checkPrivate();
        this.db?.close();
        await deleteDB(this.dbName);
        this.db = undefined;
        this.initPromise = undefined;
    }
    async save(model, condition) {
        await this.checkPrivate();
        const { storeName, set, connectionStoreNames, modelKeyValues } = this.saveMetadata(model);
        const tx = this.db.transaction([storeName, ...Array.from(set.values())], 'readwrite');
        const store = tx.objectStore(storeName);
        const fromDB = await this._get(store, modelKeyValues);
        this.validateSaveCondition(condition, fromDB);
        const result = [];
        for await (const resItem of connectionStoreNames) {
            const { storeName: storeNameForRestItem, item, instance, keys } = resItem;
            const storeForRestItem = tx.objectStore(storeNameForRestItem);
            const itemKeyValues = keys.map(key => item[key]);
            const fromDBForRestItem = (await this._get(storeForRestItem, itemKeyValues));
            const opType = fromDBForRestItem ? OpType.UPDATE : OpType.INSERT;
            if (keysEqual(itemKeyValues, modelKeyValues) ||
                opType === OpType.INSERT) {
                const key = await storeForRestItem
                    .index('byPk')
                    .getKey(this.canonicalKeyPath(itemKeyValues));
                await storeForRestItem.put(item, key);
                result.push([instance, opType]);
            }
        }
        await tx.done;
        return result;
    }
    async query(modelConstructor, predicate, pagination) {
        await this.checkPrivate();
        const { storeName, namespaceName, queryByKey, predicates, hasSort, hasPagination, } = this.queryMetadata(modelConstructor, predicate, pagination);
        const records = (await (async () => {
            //
            // NOTE: @svidgen explored removing this and letting query() take care of automatic
            // index leveraging. This would eliminate some amount of very similar code.
            // But, getAll is slightly slower than get()
            //
            // On Chrome:
            //   ~700ms vs ~1175ms per 10k reads.
            //
            // You can (and should) check my work here:
            // 	https://gist.github.com/svidgen/74e55d573b19c3e5432b1b5bdf0f4d96
            //
            if (queryByKey) {
                const record = await this.getByKey(storeName, queryByKey);
                return record ? [record] : [];
            }
            if (predicates) {
                const filtered = await this.filterOnPredicate(storeName, predicates);
                return this.inMemoryPagination(filtered, pagination);
            }
            if (hasSort) {
                const all = await this.getAll(storeName);
                return this.inMemoryPagination(all, pagination);
            }
            if (hasPagination) {
                return this.enginePagination(storeName, pagination);
            }
            return this.getAll(storeName);
        })());
        return this.load(namespaceName, modelConstructor.name, records);
    }
    async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
        await this.checkPrivate();
        const storeName = this.getStorenameForModel(modelConstructor);
        const cursor = await this.db
            .transaction([storeName], 'readonly')
            .objectStore(storeName)
            .openCursor(undefined, firstOrLast === QueryOne.FIRST ? 'next' : 'prev');
        const result = cursor ? cursor.value : undefined;
        return result && this.modelInstanceCreator(modelConstructor, result);
    }
    async batchSave(modelConstructor, items) {
        await this.checkPrivate();
        if (items.length === 0) {
            return [];
        }
        const modelName = modelConstructor.name;
        const namespaceName = this.namespaceResolver(modelConstructor);
        const storeName = this.getStorenameForModel(modelConstructor);
        const result = [];
        const txn = this.db.transaction(storeName, 'readwrite');
        const { store } = txn;
        for (const item of items) {
            const model = this.modelInstanceCreator(modelConstructor, item);
            const connectedModels = traverseModel(modelName, model, this.schema.namespaces[namespaceName], this.modelInstanceCreator, this.getModelConstructorByModelName);
            const keyValues = this.getIndexKeyValuesFromModel(model);
            const { _deleted } = item;
            const index = store.index('byPk');
            const key = await index.getKey(this.canonicalKeyPath(keyValues));
            if (!_deleted) {
                const { instance } = connectedModels.find(({ instance: connectedModelInstance }) => {
                    const instanceKeyValues = this.getIndexKeyValuesFromModel(connectedModelInstance);
                    return keysEqual(instanceKeyValues, keyValues);
                });
                result.push([
                    instance,
                    key ? OpType.UPDATE : OpType.INSERT,
                ]);
                await store.put(instance, key);
            }
            else {
                result.push([item, OpType.DELETE]);
                if (key) {
                    await store.delete(key);
                }
            }
        }
        await txn.done;
        return result;
    }
    async deleteItem(deleteQueue) {
        const connectionStoreNames = deleteQueue.map(({ storeName }) => {
            return storeName;
        });
        const tx = this.db.transaction([...connectionStoreNames], 'readwrite');
        for await (const deleteItem of deleteQueue) {
            const { storeName, items } = deleteItem;
            const store = tx.objectStore(storeName);
            for await (const item of items) {
                if (item) {
                    let key;
                    if (typeof item === 'object') {
                        const keyValues = this.getIndexKeyValuesFromModel(item);
                        key = await store
                            .index('byPk')
                            .getKey(this.canonicalKeyPath(keyValues));
                    }
                    else {
                        const itemKey = item.toString();
                        key = await store.index('byPk').getKey(itemKey);
                    }
                    if (key !== undefined) {
                        await store.delete(key);
                    }
                }
            }
        }
    }
    // #region platform-specific helper methods
    async checkPrivate() {
        const isPrivate = await isPrivateMode();
        if (isPrivate) {
            logger$6.error("IndexedDB not supported in this browser's private mode");
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject("IndexedDB not supported in this browser's private mode");
        }
        else {
            return Promise.resolve();
        }
    }
    /**
     * Whether the browser's implementation of IndexedDB is coercing single-field
     * indexes to a scalar key.
     *
     * If this returns `true`, we need to treat indexes containing a single field
     * as scalars.
     *
     * See PR description for reference:
     * https://github.com/aws-amplify/amplify-js/pull/10527
     */
    async setSafariCompatabilityMode() {
        this.safariCompatabilityMode = await isSafariCompatabilityMode();
        if (this.safariCompatabilityMode === true) {
            logger$6.debug('IndexedDB Adapter is running in Safari Compatability Mode');
        }
    }
    getNamespaceAndModelFromStorename(storeName) {
        const [namespaceName, ...modelNameArr] = storeName.split('_');
        return {
            namespaceName,
            modelName: modelNameArr.join('_'),
        };
    }
    createObjectStoreForModel(db, namespaceName, storeName, modelName) {
        const store = db.createObjectStore(storeName, {
            autoIncrement: true,
        });
        const { indexes } = this.schema.namespaces[namespaceName].relationships[modelName];
        indexes.forEach(([idxName, keyPath, options]) => {
            store.createIndex(idxName, keyPath, options);
        });
        return store;
    }
    async getByKey(storeName, keyValue) {
        return (await this._get(storeName, keyValue));
    }
    async getAll(storeName) {
        return this.db.getAll(storeName);
    }
    /**
     * Tries to generate an index fetcher for the given predicates. Assumes
     * that the given predicate conditions are contained by an AND group and
     * should therefore all match a single record.
     *
     * @param storeName The table to query.
     * @param predicates The predicates to try to AND together.
     * @param transaction
     */
    matchingIndexQueries(storeName, predicates, transaction) {
        // could be expanded later to include `exec()` and a `cardinality` estimate?
        const queries = [];
        const predicateIndex = new Map();
        for (const predicate of predicates) {
            predicateIndex.set(String(predicate.field), predicate);
        }
        const store = transaction.objectStore(storeName);
        for (const name of store.indexNames) {
            const idx = store.index(name);
            const keypath = Array.isArray(idx.keyPath) ? idx.keyPath : [idx.keyPath];
            const matchingPredicateValues = [];
            for (const field of keypath) {
                const p = predicateIndex.get(field);
                if (p && p.operand !== null && p.operand !== undefined) {
                    matchingPredicateValues.push(p.operand);
                }
                else {
                    break;
                }
            }
            // if we have a matching predicate field for each component of this index,
            // we can build a query for it. otherwise, we can't.
            if (matchingPredicateValues.length === keypath.length) {
                // re-create a transaction, because the transaction used to fetch the
                // indexes may no longer be active.
                queries.push(() => this.db
                    .transaction(storeName)
                    .objectStore(storeName)
                    .index(name)
                    .getAll(this.canonicalKeyPath(matchingPredicateValues)));
            }
        }
        return queries;
    }
    async baseQueryIndex(storeName, predicates, transaction) {
        let { predicates: predicateObjs, type } = predicates;
        // the predicate objects we care about tend to be nested at least
        // one level down: `{and: {or: {and: { <the predicates we want> }}}}`
        // so, we unpack and/or groups until we find a group with more than 1
        // child OR a child that is not a group (and is therefore a predicate "object").
        while (predicateObjs.length === 1 &&
            isPredicateGroup(predicateObjs[0]) &&
            predicateObjs[0].type !== 'not') {
            ({ type } = predicateObjs[0]);
            predicateObjs = predicateObjs[0].predicates;
        }
        const fieldPredicates = predicateObjs.filter(p => isPredicateObj(p) && p.operator === 'eq');
        // several sub-queries could occur here. explicitly start a txn here to avoid
        // opening/closing multiple txns.
        const txn = transaction || this.db.transaction(storeName);
        let result = {};
        // `or` conditions, if usable, need to generate multiple queries. this is unlike
        // `and` conditions, which should just be combined.
        if (type === 'or') {
            /**
             * Base queries for each child group.
             *
             * For each child group, if it's an AND condition that results in a single
             * subordinate "base query", we can use it. if it's any more complicated
             * than that, it's not a simple join condition we want to use.
             */
            const groupQueries = await Promise.all(predicateObjs
                .filter(o => isPredicateGroup(o) && o.type === 'and')
                .map(o => this.baseQueryIndex(storeName, o, txn))).then(queries => queries
                .filter(q => q.indexedQueries.length === 1)
                .map(i => i.indexedQueries));
            /**
             * Base queries for each simple child "object" (field condition).
             */
            const objectQueries = predicateObjs
                .filter(o => isPredicateObj(o))
                .map(o => this.matchingIndexQueries(storeName, [o], txn));
            const indexedQueries = [...groupQueries, ...objectQueries]
                .map(q => q[0])
                .filter(i => i);
            // if, after hunting for base queries, we don't have exactly 1 base query
            // for each child group + object, stop trying to optimize. we're not dealing
            // with a simple query that fits the intended optimization path.
            if (predicateObjs.length > indexedQueries.length) {
                result = {
                    groupType: null,
                    indexedQueries: [],
                };
            }
            else {
                result = {
                    groupType: 'or',
                    indexedQueries,
                };
            }
        }
        else if (type === 'and') {
            // our potential indexes or lacks thereof.
            // note that we're only optimizing for `eq` right now.
            result = {
                groupType: type,
                indexedQueries: this.matchingIndexQueries(storeName, fieldPredicates, txn),
            };
        }
        else {
            result = {
                groupType: null,
                indexedQueries: [],
            };
        }
        // Explicitly wait for txns from index queries to complete before proceding.
        // This helps ensure IndexedDB is in a stable, ready state. Else, subseqeuent
        // qeuries can sometimes appear to deadlock (at least in FakeIndexedDB).
        // (Unless we were *given* the transaction -- we'll assume the parent handles it.)
        if (!transaction)
            await txn.done;
        return result;
    }
    async filterOnPredicate(storeName, predicates) {
        const { predicates: predicateObjs, type } = predicates;
        const { groupType, indexedQueries } = await this.baseQueryIndex(storeName, predicates);
        // where we'll accumulate candidate results, which will be filtered at the end.
        let candidateResults;
        // semi-naive implementation:
        if (groupType === 'and' && indexedQueries.length > 0) {
            // each condition must be satsified, we can form a base set with any
            // ONE of those conditions and then filter.
            candidateResults = await indexedQueries[0]();
        }
        else if (groupType === 'or' &&
            indexedQueries.length > 0 &&
            indexedQueries.length <= MULTI_OR_CONDITION_SCAN_BREAKPOINT) {
            // NOTE: each condition implies a potentially distinct set. we only benefit
            // from using indexes here if EVERY condition uses an index. if any one
            // index requires a table scan, we gain nothing from the indexes.
            // NOTE: results must be DISTINCT-ified if we leverage indexes.
            const distinctResults = new Map();
            for (const query of indexedQueries) {
                const resultGroup = await query();
                for (const item of resultGroup) {
                    const distinctificationString = JSON.stringify(item);
                    distinctResults.set(distinctificationString, item);
                }
            }
            // we could conceivably check for special conditions and return early here.
            // but, this is simpler and has not yet had a measurable performance impact.
            candidateResults = Array.from(distinctResults.values());
        }
        else {
            // nothing intelligent we can do with `not` groups unless or until we start
            // smashing comparison operators against indexes -- at which point we could
            // perform some reversal here.
            candidateResults = (await this.getAll(storeName));
        }
        const filtered = predicateObjs
            ? candidateResults.filter(m => validatePredicate(m, type, predicateObjs))
            : candidateResults;
        return filtered;
    }
    inMemoryPagination(records, pagination) {
        return inMemoryPagination(records, pagination);
    }
    async enginePagination(storeName, pagination) {
        let result;
        if (pagination) {
            const { page = 0, limit = 0 } = pagination;
            const initialRecord = Math.max(0, page * limit) || 0;
            let cursor = await this.db
                .transaction(storeName)
                .objectStore(storeName)
                .openCursor();
            if (cursor && initialRecord > 0) {
                await cursor.advance(initialRecord);
            }
            const pageResults = [];
            const hasLimit = typeof limit === 'number' && limit > 0;
            while (cursor && cursor.value) {
                pageResults.push(cursor.value);
                if (hasLimit && pageResults.length === limit) {
                    break;
                }
                cursor = await cursor.continue();
            }
            result = pageResults;
        }
        else {
            result = (await this.db.getAll(storeName));
        }
        return result;
    }
}
var IndexedDBAdapter$1 = new IndexedDBAdapter();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class InMemoryStore {
    constructor() {
        this.db = new Map();
        this.getAllKeys = async () => {
            return Array.from(this.db.keys());
        };
        this.multiGet = async (keys) => {
            return keys.reduce((res, k) => {
                res.push([k, this.db.get(k)]);
                return res;
            }, []);
        };
        this.multiRemove = async (keys, callback) => {
            keys.forEach(k => this.db.delete(k));
            typeof callback === 'function' && callback();
        };
        this.multiSet = async (entries, callback) => {
            entries.forEach(([key, value]) => {
                this.setItem(key, value);
            });
            typeof callback === 'function' && callback();
        };
        this.setItem = async (key, value) => {
            return this.db.set(key, value);
        };
        this.removeItem = async (key) => {
            return this.db.delete(key);
        };
        this.getItem = async (key) => {
            return this.db.get(key);
        };
    }
}
function createInMemoryStore() {
    return new InMemoryStore();
}

const DB_NAME = '@AmplifyDatastore';
const COLLECTION = 'Collection';
const DATA = 'Data';
const monotonicFactoriesMap = new Map();
class AsyncStorageDatabase {
    constructor() {
        /**
         * Maps storeNames to a map of ulid->id
         */
        this._collectionInMemoryIndex = new Map();
        this.storage = createInMemoryStore();
    }
    /**
     * Collection index is map of stores (i.e. sync, metadata, mutation event, and data)
     * @param storeName {string} - Name of the store
     * @returns Map of ulid->id
     */
    getCollectionIndex(storeName) {
        if (!this._collectionInMemoryIndex.has(storeName)) {
            this._collectionInMemoryIndex.set(storeName, new Map());
        }
        return this._collectionInMemoryIndex.get(storeName);
    }
    /**
     * Return ULID for store if it exists, otherwise create a new one
     * @param storeName {string} - Name of the store
     * @returns ulid
     */
    getMonotonicFactory(storeName) {
        if (!monotonicFactoriesMap.has(storeName)) {
            monotonicFactoriesMap.set(storeName, monotonicUlidFactory());
        }
        return monotonicFactoriesMap.get(storeName);
    }
    async init() {
        this._collectionInMemoryIndex.clear();
        const allKeys = await this.storage.getAllKeys();
        const keysForCollectionEntries = [];
        for (const key of allKeys) {
            const [dbName, storeName, recordType, ulidOrId, id] = key.split('::');
            if (dbName === DB_NAME) {
                if (recordType === DATA) {
                    let ulid;
                    if (id === undefined) {
                        // It is an old entry (without ulid). Need to migrate to new key format
                        const resolvedId = ulidOrId;
                        const newUlid = this.getMonotonicFactory(storeName)();
                        const oldKey = this.getLegacyKeyForItem(storeName, resolvedId);
                        const newKey = this.getKeyForItem(storeName, resolvedId, newUlid);
                        const item = await this.storage.getItem(oldKey);
                        await this.storage.setItem(newKey, item);
                        await this.storage.removeItem(oldKey);
                        ulid = newUlid;
                    }
                    else {
                        ulid = ulidOrId;
                    }
                    this.getCollectionIndex(storeName).set(id, ulid);
                }
                else if (recordType === COLLECTION) {
                    keysForCollectionEntries.push(key);
                }
            }
        }
        if (keysForCollectionEntries.length > 0) {
            await this.storage.multiRemove(keysForCollectionEntries);
        }
    }
    async save(item, storeName, keys, keyValuesPath) {
        const idxName = indexNameFromKeys(keys);
        const ulid = this.getCollectionIndex(storeName)?.get(idxName) ||
            this.getMonotonicFactory(storeName)();
        // Retrieve db key for item
        const itemKey = this.getKeyForItem(storeName, keyValuesPath, ulid);
        // Set key in collection index
        this.getCollectionIndex(storeName)?.set(keyValuesPath, ulid);
        // Save item in db
        await this.storage.setItem(itemKey, JSON.stringify(item));
    }
    async batchSave(storeName, items, keys) {
        if (items.length === 0) {
            return [];
        }
        const result = [];
        const collection = this.getCollectionIndex(storeName);
        const keysToDelete = new Set();
        const keysToSave = new Set();
        const allItemsKeys = [];
        const itemsMap = {};
        /* Populate allItemKeys, keysToDelete, and keysToSave */
        for (const item of items) {
            // Extract keys from concatenated key path, map to item values
            const keyValues = keys.map(field => item[field]);
            const { _deleted } = item;
            // If id is in the store, retrieve, otherwise generate new ULID
            const ulid = collection.get(keyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR)) ||
                this.getMonotonicFactory(storeName)();
            // Generate the "longer key" for the item
            const key = this.getKeyForItem(storeName, keyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR), ulid);
            allItemsKeys.push(key);
            itemsMap[key] = { ulid, model: item };
            if (_deleted) {
                keysToDelete.add(key);
            }
            else {
                keysToSave.add(key);
            }
        }
        const existingRecordsMap = await this.storage.multiGet(allItemsKeys);
        const existingRecordsKeys = existingRecordsMap
            .filter(([, v]) => !!v)
            .reduce((set, [k]) => set.add(k), new Set());
        // Delete
        await new Promise((resolve, reject) => {
            if (keysToDelete.size === 0) {
                resolve();
                return;
            }
            const keysToDeleteArray = Array.from(keysToDelete);
            keysToDeleteArray.forEach(key => {
                // key: full db key
                // keys: PK and/or SK keys
                const primaryKeyValues = keys
                    .map(field => itemsMap[key].model[field])
                    .join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                collection.delete(primaryKeyValues);
            });
            this.storage.multiRemove(keysToDeleteArray, (errors) => {
                if (errors && errors.length > 0) {
                    reject(errors);
                }
                else {
                    resolve();
                }
            });
        });
        // Save
        await new Promise((resolve, reject) => {
            if (keysToSave.size === 0) {
                resolve();
                return;
            }
            const entriesToSet = Array.from(keysToSave).map(key => [
                key,
                JSON.stringify(itemsMap[key].model),
            ]);
            keysToSave.forEach(key => {
                const { model, ulid } = itemsMap[key];
                // Retrieve values from model, use as key for collection index
                const keyValues = keys
                    .map(field => model[field])
                    .join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                collection.set(keyValues, ulid);
            });
            this.storage.multiSet(entriesToSet, (errors) => {
                if (errors && errors.length > 0) {
                    reject(errors);
                }
                else {
                    resolve();
                }
            });
        });
        for (const key of allItemsKeys) {
            if (keysToDelete.has(key) && existingRecordsKeys.has(key)) {
                result.push([itemsMap[key].model, OpType.DELETE]);
            }
            else if (keysToSave.has(key)) {
                result.push([
                    itemsMap[key].model,
                    existingRecordsKeys.has(key) ? OpType.UPDATE : OpType.INSERT,
                ]);
            }
        }
        return result;
    }
    async get(keyValuePath, storeName) {
        const ulid = this.getCollectionIndex(storeName).get(keyValuePath);
        const itemKey = this.getKeyForItem(storeName, keyValuePath, ulid);
        const recordAsString = await this.storage.getItem(itemKey);
        const record = recordAsString && JSON.parse(recordAsString);
        return record;
    }
    async getOne(firstOrLast, storeName) {
        const collection = this.getCollectionIndex(storeName);
        const [itemId, ulid] = firstOrLast === QueryOne.FIRST
            ? (() => {
                let resolvedId, resolvedUlid;
                // eslint-disable-next-line no-unreachable-loop
                for ([resolvedId, resolvedUlid] of collection)
                    break; // Get first element of the set
                return [resolvedId, resolvedUlid];
            })()
            : (() => {
                let resolvedId, resolvedUlid;
                for ([resolvedId, resolvedUlid] of collection)
                    ; // Get last element of the set
                return [resolvedId, resolvedUlid];
            })();
        const itemKey = this.getKeyForItem(storeName, itemId, ulid);
        const itemString = itemKey && (await this.storage.getItem(itemKey));
        const result = itemString ? JSON.parse(itemString) || undefined : undefined;
        return result;
    }
    /**
     * This function gets all the records stored in async storage for a particular storeName
     * It then loads all the records for that filtered set of keys using multiGet()
     */
    async getAll(storeName, pagination) {
        const collection = this.getCollectionIndex(storeName);
        const { page = 0, limit = 0 } = pagination || {};
        const start = Math.max(0, page * limit) || 0;
        const end = limit > 0 ? start + limit : undefined;
        const keysForStore = [];
        let count = 0;
        for (const [id, ulid] of collection) {
            count++;
            if (count <= start) {
                continue;
            }
            keysForStore.push(this.getKeyForItem(storeName, id, ulid));
            if (count === end) {
                break;
            }
        }
        const storeRecordStrings = await this.storage.multiGet(keysForStore);
        const records = storeRecordStrings
            .filter(([, value]) => value)
            .map(([, value]) => JSON.parse(value));
        return records;
    }
    async delete(key, storeName) {
        const ulid = this.getCollectionIndex(storeName).get(key);
        const itemKey = this.getKeyForItem(storeName, key, ulid);
        this.getCollectionIndex(storeName).delete(key);
        await this.storage.removeItem(itemKey);
    }
    /**
     * Clear the AsyncStorage of all DataStore entries
     */
    async clear() {
        const allKeys = await this.storage.getAllKeys();
        const allDataStoreKeys = allKeys.filter(key => key.startsWith(DB_NAME));
        await this.storage.multiRemove(allDataStoreKeys);
        this._collectionInMemoryIndex.clear();
    }
    getKeyForItem(storeName, id, ulid) {
        return `${this.getKeyPrefixForStoreItems(storeName)}::${ulid}::${id}`;
    }
    getLegacyKeyForItem(storeName, id) {
        return `${this.getKeyPrefixForStoreItems(storeName)}::${id}`;
    }
    getKeyPrefixForStoreItems(storeName) {
        return `${DB_NAME}::${storeName}::${DATA}`;
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class AsyncStorageAdapter extends StorageAdapterBase {
    async preSetUpChecks() {
        // no-ops for AsyncStorageAdapter
    }
    async preOpCheck() {
        // no-ops for AsyncStorageAdapter
    }
    /**
     * Open AsyncStorage database
     * Create new DB if one doesn't exist
     *
     * Called by `StorageAdapterBase.setUp()`
     *
     * @returns AsyncStorageDatabase instance
     */
    async initDb() {
        const db = new AsyncStorageDatabase();
        await db.init();
        return db;
    }
    async clear() {
        await this.db.clear();
        this.db = undefined;
        this.initPromise = undefined;
    }
    async batchSave(modelConstructor, items) {
        if (items.length === 0) {
            return [];
        }
        const modelName = modelConstructor.name;
        const namespaceName = this.namespaceResolver(modelConstructor);
        const storeName = getStorename(namespaceName, modelName);
        const keys = getIndexKeys(this.schema.namespaces[namespaceName], modelName);
        const batch = [];
        for (const item of items) {
            const model = this.modelInstanceCreator(modelConstructor, item);
            const connectedModels = traverseModel(modelName, model, this.schema.namespaces[namespaceName], this.modelInstanceCreator, this.getModelConstructorByModelName);
            const keyValuesPath = this.getIndexKeyValuesPath(model);
            const { instance } = connectedModels.find(({ instance: connectedModelInstance }) => {
                const instanceKeyValuesPath = this.getIndexKeyValuesPath(connectedModelInstance);
                return keysEqual([instanceKeyValuesPath], [keyValuesPath]);
            });
            batch.push(instance);
        }
        return this.db.batchSave(storeName, batch, keys);
    }
    async _get(storeName, keyArr) {
        const itemKeyValuesPath = keyArr.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
        return (await this.db.get(itemKeyValuesPath, storeName));
    }
    async save(model, condition) {
        const { storeName, connectionStoreNames, modelKeyValues } = this.saveMetadata(model);
        const fromDB = await this._get(storeName, modelKeyValues);
        this.validateSaveCondition(condition, fromDB);
        const result = [];
        for await (const resItem of connectionStoreNames) {
            const { storeName: storeNameForRestItem, item, instance, keys } = resItem;
            const itemKeyValues = keys.map(key => item[key]);
            const fromDBForRestItem = (await this._get(storeNameForRestItem, itemKeyValues));
            const opType = fromDBForRestItem ? OpType.UPDATE : OpType.INSERT;
            if (keysEqual(itemKeyValues, modelKeyValues) ||
                opType === OpType.INSERT) {
                await this.db.save(item, storeNameForRestItem, keys, itemKeyValues.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR));
                result.push([instance, opType]);
            }
        }
        return result;
    }
    async query(modelConstructor, predicate, pagination) {
        const { storeName, namespaceName, queryByKey, predicates, hasSort, hasPagination, } = this.queryMetadata(modelConstructor, predicate, pagination);
        const records = (await (async () => {
            if (queryByKey) {
                const keyValues = queryByKey.join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
                const record = await this.getByKey(storeName, keyValues);
                return record ? [record] : [];
            }
            if (predicates) {
                const filtered = await this.filterOnPredicate(storeName, predicates);
                return this.inMemoryPagination(filtered, pagination);
            }
            if (hasSort || hasPagination) {
                const all = await this.getAll(storeName);
                return this.inMemoryPagination(all, pagination);
            }
            return this.getAll(storeName);
        })());
        return this.load(namespaceName, modelConstructor.name, records);
    }
    async getByKey(storeName, keyValuePath) {
        return (await this.db.get(keyValuePath, storeName));
    }
    async getAll(storeName) {
        return this.db.getAll(storeName);
    }
    async filterOnPredicate(storeName, predicates) {
        const { predicates: predicateObjs, type } = predicates;
        const all = (await this.getAll(storeName));
        const filtered = predicateObjs
            ? all.filter(m => validatePredicate(m, type, predicateObjs))
            : all;
        return filtered;
    }
    inMemoryPagination(records, pagination) {
        return inMemoryPagination(records, pagination);
    }
    async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
        const storeName = this.getStorenameForModel(modelConstructor);
        const result = (await this.db.getOne(firstOrLast, storeName));
        return result && this.modelInstanceCreator(modelConstructor, result);
    }
    async deleteItem(deleteQueue) {
        for await (const deleteItem of deleteQueue) {
            const { storeName, items } = deleteItem;
            for await (const item of items) {
                if (item) {
                    if (typeof item === 'object') {
                        const keyValuesPath = this.getIndexKeyValuesPath(item);
                        await this.db.delete(keyValuesPath, storeName);
                    }
                }
            }
        }
    }
    // #region platform-specific helper methods
    /**
     * Retrieves concatenated primary key values from a model
     *
     * @param model
     * @returns
     */
    getIndexKeyValuesPath(model) {
        return this.getIndexKeyValuesFromModel(model).join(DEFAULT_PRIMARY_KEY_VALUE_SEPARATOR);
    }
}
var AsyncStorageAdapter$1 = new AsyncStorageAdapter();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const getDefaultAdapter = () => {
    if ((window.indexedDB) || (isWebWorker() && self.indexedDB)) {
        return IndexedDBAdapter$1;
    }
    return AsyncStorageAdapter$1;
};

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$5 = new ConsoleLogger('DataStore');
class StorageClass {
    constructor(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId) {
        this.schema = schema;
        this.namespaceResolver = namespaceResolver;
        this.getModelConstructorByModelName = getModelConstructorByModelName;
        this.modelInstanceCreator = modelInstanceCreator;
        this.adapter = adapter;
        this.sessionId = sessionId;
        this.adapter = this.adapter || getDefaultAdapter();
        this.pushStream = new Subject();
    }
    static getNamespace() {
        const namespace = {
            name: STORAGE,
            relationships: {},
            enums: {},
            models: {},
            nonModels: {},
        };
        return namespace;
    }
    async init() {
        if (this.initialized !== undefined) {
            await this.initialized;
            return;
        }
        logger$5.debug('Starting Storage');
        let resolve;
        let reject;
        this.initialized = new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
        });
        this.adapter.setUp(this.schema, this.namespaceResolver, this.modelInstanceCreator, this.getModelConstructorByModelName, this.sessionId).then(resolve, reject);
        await this.initialized;
    }
    async save(model, condition, mutator, patchesTuple) {
        await this.init();
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        const result = await this.adapter.save(model, condition);
        result.forEach(r => {
            const [savedElement, opType] = r;
            // truthy when save is called by the Merger
            const syncResponse = !!mutator;
            let updateMutationInput;
            // don't attempt to calc mutation input when storage.save
            // is called by Merger, i.e., when processing an AppSync response
            if ((opType === OpType.UPDATE || opType === OpType.INSERT) &&
                !syncResponse) {
                //
                // TODO: LOOK!!!
                // the `model` used here is in effect regardless of what model
                // comes back from adapter.save().
                // Prior to fix, SQLite adapter had been returning two models
                // of different types, resulting in invalid outbox entries.
                //
                // the bug is essentially fixed in SQLite adapter.
                // leaving as-is, because it's currently unclear whether anything
                // depends on this remaining as-is.
                //
                updateMutationInput = this.getChangedFieldsInput(model, savedElement, patchesTuple);
                // // an update without changed user fields
                // => don't create mutationEvent
                if (updateMutationInput === null) {
                    return result;
                }
            }
            const element = updateMutationInput || savedElement;
            const modelConstructor = Object.getPrototypeOf(savedElement)
                .constructor;
            this.pushStream.next({
                model: modelConstructor,
                opType,
                element,
                mutator,
                condition: (condition &&
                    ModelPredicateCreator.getPredicates(condition, false)) ||
                    null,
                savedElement,
            });
        });
        return result;
    }
    async delete(modelOrModelConstructor, condition, mutator) {
        await this.init();
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        let models;
        let deleted;
        [models, deleted] = await this.adapter.delete(modelOrModelConstructor, condition);
        const modelConstructor = isModelConstructor(modelOrModelConstructor)
            ? modelOrModelConstructor
            : Object.getPrototypeOf(modelOrModelConstructor || {})
                .constructor;
        const namespaceName = this.namespaceResolver(modelConstructor);
        const modelDefinition = this.schema.namespaces[namespaceName].models[modelConstructor.name];
        const modelIds = new Set(models.map(model => {
            const modelId = getIdentifierValue(modelDefinition, model);
            return modelId;
        }));
        if (!isModelConstructor(modelOrModelConstructor) &&
            !Array.isArray(deleted)) {
            deleted = [deleted];
        }
        deleted.forEach(model => {
            const resolvedModelConstructor = Object.getPrototypeOf(model)
                .constructor;
            let theCondition;
            if (!isModelConstructor(modelOrModelConstructor)) {
                const modelId = getIdentifierValue(modelDefinition, model);
                theCondition = modelIds.has(modelId)
                    ? ModelPredicateCreator.getPredicates(condition, false)
                    : undefined;
            }
            this.pushStream.next({
                model: resolvedModelConstructor,
                opType: OpType.DELETE,
                element: model,
                mutator,
                condition: theCondition || null,
            });
        });
        return [models, deleted];
    }
    async query(modelConstructor, predicate, pagination) {
        await this.init();
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        return this.adapter.query(modelConstructor, predicate, pagination);
    }
    async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
        await this.init();
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        return this.adapter.queryOne(modelConstructor, firstOrLast);
    }
    observe(modelConstructor, predicate, skipOwn) {
        const listenToAll = !modelConstructor;
        const { predicates, type } = (predicate && ModelPredicateCreator.getPredicates(predicate, false)) ||
            {};
        let result = this.pushStream
            .pipe(filter(({ mutator }) => {
            return !skipOwn || mutator !== skipOwn;
        }))
            .pipe(map(({ mutator: _mutator, ...message }) => message));
        if (!listenToAll) {
            result = result.pipe(filter(({ model, element }) => {
                if (modelConstructor !== model) {
                    return false;
                }
                if (!!predicates && !!type) {
                    return validatePredicate(element, type, predicates);
                }
                return true;
            }));
        }
        return result;
    }
    async clear(completeObservable = true) {
        this.initialized = undefined;
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        await this.adapter.clear();
        if (completeObservable) {
            this.pushStream.complete();
        }
    }
    async batchSave(modelConstructor, items, mutator) {
        await this.init();
        if (!this.adapter) {
            throw new Error('Storage adapter is missing');
        }
        const result = await this.adapter.batchSave(modelConstructor, items);
        result.forEach(([element, opType]) => {
            this.pushStream.next({
                model: modelConstructor,
                opType,
                element,
                mutator,
                condition: null,
            });
        });
        return result;
    }
    // returns null if no user fields were changed (determined by value comparison)
    getChangedFieldsInput(model, originalElement, patchesTuple) {
        const containsPatches = patchesTuple && patchesTuple.length;
        if (!containsPatches) {
            return null;
        }
        const [patches, source] = patchesTuple;
        const updatedElement = {};
        // extract array of updated fields from patches
        const updatedFields = patches.map(patch => patch.path && patch.path[0]);
        // check model def for association and replace with targetName if exists
        const modelConstructor = Object.getPrototypeOf(model)
            .constructor;
        const namespace = this.namespaceResolver(modelConstructor);
        const { fields } = this.schema.namespaces[namespace].models[modelConstructor.name];
        const { primaryKey, compositeKeys = [] } = this.schema.namespaces[namespace].keys?.[modelConstructor.name] || {};
        // set original values for these fields
        updatedFields.forEach((field) => {
            const targetNames = isTargetNameAssociation(fields[field]?.association);
            if (Array.isArray(targetNames)) {
                // if field refers to a belongsTo relation, use the target field instead
                for (const targetName of targetNames) {
                    // check field values by value. Ignore unchanged fields
                    if (!valuesEqual(source[targetName], originalElement[targetName])) {
                        // if the field was updated to 'undefined', replace with 'null' for compatibility with JSON and GraphQL
                        updatedElement[targetName] =
                            originalElement[targetName] === undefined
                                ? null
                                : originalElement[targetName];
                        for (const fieldSet of compositeKeys) {
                            // include all of the fields that comprise the composite key
                            if (fieldSet.has(targetName)) {
                                for (const compositeField of fieldSet) {
                                    updatedElement[compositeField] =
                                        originalElement[compositeField];
                                }
                            }
                        }
                    }
                }
            }
            else {
                // Backwards compatibility pre-CPK
                // if field refers to a belongsTo relation, use the target field instead
                const key = targetNames || field;
                // check field values by value. Ignore unchanged fields
                if (!valuesEqual(source[key], originalElement[key])) {
                    // if the field was updated to 'undefined', replace with 'null' for compatibility with JSON and GraphQL
                    updatedElement[key] =
                        originalElement[key] === undefined ? null : originalElement[key];
                    for (const fieldSet of compositeKeys) {
                        // include all of the fields that comprise the composite key
                        if (fieldSet.has(key)) {
                            for (const compositeField of fieldSet) {
                                updatedElement[compositeField] =
                                    originalElement[compositeField];
                            }
                        }
                    }
                }
            }
        });
        // Exit early when there are no changes introduced in the update mutation
        if (Object.keys(updatedElement).length === 0) {
            return null;
        }
        // include field(s) from custom PK if one is specified for the model
        if (primaryKey && primaryKey.length) {
            for (const pkField of primaryKey) {
                updatedElement[pkField] = originalElement[pkField];
            }
        }
        const { id, _version, _lastChangedAt, _deleted } = originalElement;
        // For update mutations we only want to send fields with changes
        // and the required internal fields
        return {
            ...updatedElement,
            id,
            _version,
            _lastChangedAt,
            _deleted,
        };
    }
}
class ExclusiveStorage {
    constructor(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId) {
        this.mutex = new Mutex();
        this.storage = new StorageClass(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, adapter, sessionId);
    }
    runExclusive(fn) {
        return this.mutex.runExclusive(fn.bind(this, this.storage));
    }
    async save(model, condition, mutator, patchesTuple) {
        return this.runExclusive(storage => storage.save(model, condition, mutator, patchesTuple));
    }
    async delete(modelOrModelConstructor, condition, mutator) {
        return this.runExclusive(storage => {
            if (isModelConstructor(modelOrModelConstructor)) {
                const modelConstructor = modelOrModelConstructor;
                return storage.delete(modelConstructor, condition, mutator);
            }
            else {
                const model = modelOrModelConstructor;
                return storage.delete(model, condition, mutator);
            }
        });
    }
    async query(modelConstructor, predicate, pagination) {
        return this.runExclusive(storage => storage.query(modelConstructor, predicate, pagination));
    }
    async queryOne(modelConstructor, firstOrLast = QueryOne.FIRST) {
        return this.runExclusive(storage => storage.queryOne(modelConstructor, firstOrLast));
    }
    static getNamespace() {
        return StorageClass.getNamespace();
    }
    observe(modelConstructor, predicate, skipOwn) {
        return this.storage.observe(modelConstructor, predicate, skipOwn);
    }
    async clear() {
        await this.runExclusive(storage => storage.clear());
    }
    batchSave(modelConstructor, items) {
        return this.storage.batchSave(modelConstructor, items);
    }
    async init() {
        return this.storage.init();
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ReachabilityMonitor = new Reachability().networkMonitor();

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const RECONNECTING_IN = 5000; // 5s this may be configurable in the future
class DataStoreConnectivity {
    constructor() {
        this.connectionStatus = {
            online: false,
        };
    }
    status() {
        if (this.observer) {
            throw new Error('Subscriber already exists');
        }
        return new Observable(observer => {
            this.observer = observer;
            // Will be used to forward socket connection changes, enhancing Reachability
            this.subscription = ReachabilityMonitor.subscribe(({ online }) => {
                this.connectionStatus.online = online;
                const observerResult = { ...this.connectionStatus }; // copyOf status
                observer.next(observerResult);
            });
            return () => {
                clearTimeout(this.timeout);
                this.unsubscribe();
            };
        });
    }
    unsubscribe() {
        if (this.subscription) {
            clearTimeout(this.timeout);
            this.subscription.unsubscribe();
        }
    }
    // for consistency with other background processors.
    async stop() {
        this.unsubscribe();
    }
    socketDisconnected() {
        if (this.observer && typeof this.observer.next === 'function') {
            this.observer.next({ online: false }); // Notify network issue from the socket
            this.timeout = setTimeout(() => {
                const observerResult = { ...this.connectionStatus }; // copyOf status
                this.observer.next(observerResult);
            }, RECONNECTING_IN); // giving time for socket cleanup and network status stabilization
        }
    }
}

// https://github.com/aws-amplify/amplify-js/blob/datastore-docs/packages/datastore/docs/sync-engine.md#merger
class ModelMerger {
    constructor(outbox, ownSymbol) {
        this.outbox = outbox;
        this.ownSymbol = ownSymbol;
    }
    /**
     *
     * @param storage Storage adapter that contains the data.
     * @param model The model from an outbox mutation.
     * @returns The type of operation (INSERT/UPDATE/DELETE)
     */
    async merge(storage, model, modelDefinition) {
        let result;
        const mutationsForModel = await this.outbox.getForModel(storage, model, modelDefinition);
        const isDelete = model._deleted;
        if (mutationsForModel.length === 0) {
            if (isDelete) {
                result = OpType.DELETE;
                await storage.delete(model, undefined, this.ownSymbol);
            }
            else {
                [[, result]] = await storage.save(model, undefined, this.ownSymbol);
            }
        }
        return result;
    }
    async mergePage(storage, modelConstructor, items, modelDefinition) {
        const itemsMap = new Map();
        for (const item of items) {
            // merge items by model id. Latest record for a given id remains.
            const modelId = getIdentifierValue(modelDefinition, item);
            itemsMap.set(modelId, item);
        }
        const page = [...itemsMap.values()];
        return storage.batchSave(modelConstructor, page, this.ownSymbol);
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO: Persist deleted ids
// https://github.com/aws-amplify/amplify-js/blob/datastore-docs/packages/datastore/docs/sync-engine.md#outbox
class MutationEventOutbox {
    constructor(schema, _MutationEvent, modelInstanceCreator, ownSymbol) {
        this.schema = schema;
        this._MutationEvent = _MutationEvent;
        this.modelInstanceCreator = modelInstanceCreator;
        this.ownSymbol = ownSymbol;
    }
    async enqueue(storage, mutationEvent) {
        await storage.runExclusive(async (s) => {
            const mutationEventModelDefinition = this.schema.namespaces[SYNC].models.MutationEvent;
            // `id` is the key for the record in the mutationEvent;
            // `modelId` is the key for the actual record that was mutated
            const predicate = ModelPredicateCreator.createFromAST(mutationEventModelDefinition, {
                and: [
                    { modelId: { eq: mutationEvent.modelId } },
                    { id: { ne: this.inProgressMutationEventId } },
                ],
            });
            // Check if there are any other records with same id
            const [first] = await s.query(this._MutationEvent, predicate);
            // No other record with same modelId, so enqueue
            if (first === undefined) {
                await s.save(mutationEvent, undefined, this.ownSymbol);
                return;
            }
            // There was an enqueued mutation for the modelId, so continue
            const { operation: incomingMutationType } = mutationEvent;
            if (first.operation === TransformerMutationType.CREATE) {
                if (incomingMutationType === TransformerMutationType.DELETE) {
                    await s.delete(this._MutationEvent, predicate);
                }
                else {
                    // first gets updated with the incoming mutation's data, condition intentionally skipped
                    // we need to merge the fields for a create and update mutation to prevent
                    // data loss, since update mutations only include changed fields
                    const merged = this.mergeUserFields(first, mutationEvent);
                    await s.save(this._MutationEvent.copyOf(first, draft => {
                        draft.data = merged.data;
                    }), undefined, this.ownSymbol);
                }
            }
            else {
                const { condition: incomingConditionJSON } = mutationEvent;
                const incomingCondition = JSON.parse(incomingConditionJSON);
                let merged;
                // If no condition
                if (Object.keys(incomingCondition).length === 0) {
                    merged = this.mergeUserFields(first, mutationEvent);
                    // delete all for model
                    await s.delete(this._MutationEvent, predicate);
                }
                merged = merged || mutationEvent;
                // Enqueue new one
                await s.save(merged, undefined, this.ownSymbol);
            }
        });
    }
    async dequeue(storage, record, recordOp) {
        const head = await this.peek(storage);
        if (record) {
            await this.syncOutboxVersionsOnDequeue(storage, record, head, recordOp);
        }
        if (head) {
            await storage.delete(head);
        }
        this.inProgressMutationEventId = undefined;
        return head;
    }
    /**
     * Doing a peek() implies that the mutation goes "inProgress"
     *
     * @param storage
     */
    async peek(storage) {
        const head = await storage.queryOne(this._MutationEvent, QueryOne.FIRST);
        this.inProgressMutationEventId = head ? head.id : undefined;
        return head;
    }
    async getForModel(storage, model, userModelDefinition) {
        const mutationEventModelDefinition = this.schema.namespaces[SYNC].models.MutationEvent;
        const modelId = getIdentifierValue(userModelDefinition, model);
        const mutationEvents = await storage.query(this._MutationEvent, ModelPredicateCreator.createFromAST(mutationEventModelDefinition, {
            and: { modelId: { eq: modelId } },
        }));
        return mutationEvents;
    }
    async getModelIds(storage) {
        const mutationEvents = await storage.query(this._MutationEvent);
        const result = new Set();
        mutationEvents.forEach(({ modelId }) => result.add(modelId));
        return result;
    }
    // applies _version from the AppSync mutation response to other items
    // in the mutation queue with the same id
    // see https://github.com/aws-amplify/amplify-js/pull/7354 for more details
    async syncOutboxVersionsOnDequeue(storage, record, head, recordOp) {
        if (head?.operation !== recordOp) {
            return;
        }
        const { _version, _lastChangedAt, _deleted, ..._incomingData } = record;
        const incomingData = this.removeTimestampFields(head.model, _incomingData);
        const data = JSON.parse(head.data);
        if (!data) {
            return;
        }
        const { _version: __version, _lastChangedAt: __lastChangedAt, _deleted: __deleted, ..._outgoingData } = data;
        const outgoingData = this.removeTimestampFields(head.model, _outgoingData);
        // Don't sync the version when the data in the response does not match the data
        // in the request, i.e., when there's a handled conflict
        //
        // NOTE: `incomingData` contains all the fields in the record received from AppSync
        // and `outgoingData` only contains updated fields sent to AppSync
        // If all send data isn't matched in the returned data then the update was rejected
        // by AppSync and we should not update the version on other outbox entries for this
        // object
        if (!directedValueEquality(outgoingData, incomingData, true)) {
            return;
        }
        const mutationEventModelDefinition = this.schema.namespaces[SYNC].models.MutationEvent;
        const userModelDefinition = this.schema.namespaces.user.models[head.model];
        const recordId = getIdentifierValue(userModelDefinition, record);
        const predicate = ModelPredicateCreator.createFromAST(mutationEventModelDefinition, {
            and: [
                { modelId: { eq: recordId } },
                { id: { ne: this.inProgressMutationEventId } },
            ],
        });
        const outdatedMutations = await storage.query(this._MutationEvent, predicate);
        if (!outdatedMutations.length) {
            return;
        }
        const reconciledMutations = outdatedMutations.map(m => {
            const oldData = JSON.parse(m.data);
            const newData = { ...oldData, _version, _lastChangedAt };
            return this._MutationEvent.copyOf(m, draft => {
                draft.data = JSON.stringify(newData);
            });
        });
        await storage.delete(this._MutationEvent, predicate);
        await Promise.all(reconciledMutations.map(async (m) => storage.save(m, undefined, this.ownSymbol)));
    }
    mergeUserFields(previous, current) {
        const { _version, _lastChangedAt, _deleted, ...previousData } = JSON.parse(previous.data);
        const { _version: __version, _lastChangedAt: __lastChangedAt, _deleted: __deleted, ...currentData } = JSON.parse(current.data);
        const data = JSON.stringify({
            _version,
            _lastChangedAt,
            _deleted,
            ...previousData,
            ...currentData,
        });
        return this.modelInstanceCreator(this._MutationEvent, {
            ...current,
            data,
        });
    }
    /*
    if a model is using custom timestamp fields
    the custom field names will be stored in the model attributes

    e.g.
    "attributes": [
    {
            "type": "model",
            "properties": {
                "timestamps": {
                    "createdAt": "createdOn",
                    "updatedAt": "updatedOn"
                }
            }
    }
    ]
    */
    removeTimestampFields(model, record) {
        const CREATED_AT_DEFAULT_KEY = 'createdAt';
        const UPDATED_AT_DEFAULT_KEY = 'updatedAt';
        let createdTimestampKey = CREATED_AT_DEFAULT_KEY;
        let updatedTimestampKey = UPDATED_AT_DEFAULT_KEY;
        const modelAttributes = this.schema.namespaces[USER].models[model].attributes?.find(attr => attr.type === 'model');
        const timestampFieldsMap = modelAttributes?.properties?.timestamps;
        if (timestampFieldsMap) {
            createdTimestampKey = timestampFieldsMap[CREATED_AT_DEFAULT_KEY];
            updatedTimestampKey = timestampFieldsMap[UPDATED_AT_DEFAULT_KEY];
        }
        delete record[createdTimestampKey];
        delete record[updatedTimestampKey];
        return record;
    }
}

const connectionTimeout = error => /^Connection failed: Connection Timeout/.test(error.message);
const serverError = error => resolveServiceErrorStatusCode(error) >= 500;
const mutationErrorMap = {
    BadModel: () => false,
    BadRecord: error => {
        const { message } = error;
        return (/^Cannot return \w+ for [\w-_]+ type/.test(message) ||
            /^Variable '.+' has coerced Null value for NonNull type/.test(message)); // newly required field, out of date client
    },
    ConfigError: () => false,
    Transient: error => connectionTimeout(error) || serverError(error),
    Unauthorized: error => error.message === 'Unauthorized' ||
        resolveServiceErrorStatusCode(error) === 401,
};
const subscriptionErrorMap = {
    BadModel: () => false,
    BadRecord: () => false,
    ConfigError: () => false,
    Transient: observableError => {
        const error = unwrapObservableError(observableError);
        return connectionTimeout(error) || serverError(error);
    },
    Unauthorized: observableError => {
        const error = unwrapObservableError(observableError);
        return /Connection failed.+Unauthorized/.test(error.message);
    },
};
const syncErrorMap = {
    BadModel: () => false,
    BadRecord: error => /^Cannot return \w+ for [\w-_]+ type/.test(error.message),
    ConfigError: () => false,
    Transient: error => connectionTimeout(error) || serverError(error),
    Unauthorized: error => error.errorType === 'Unauthorized',
};
/**
 * Get the first error reason of an observable.
 * Allows for error maps to be easily applied to observable errors
 *
 * @param observableError an error from ZenObservable subscribe error callback
 */
function unwrapObservableError(observableError) {
    const { errors: [error], } = (observableError);
    return error;
}
function getMutationErrorType(error) {
    return mapErrorToType(mutationErrorMap, error);
}
function getSubscriptionErrorType(error) {
    return mapErrorToType(subscriptionErrorMap, error);
}
function getSyncErrorType(error) {
    return mapErrorToType(syncErrorMap, error);
}
/**
 * Categorizes an error with a broad error type, intended to make
 * customer error handling code simpler.
 * @param errorMap Error names and a list of patterns that indicate them (each pattern as a regex or function)
 * @param error The underying error to categorize.
 */
function mapErrorToType(errorMap, error) {
    const errorTypes = [...Object.keys(errorMap)];
    for (const errorType of errorTypes) {
        const matcher = errorMap[errorType];
        if (matcher?.(error)) {
            return errorType;
        }
    }
    return 'Unknown';
}

const MAX_ATTEMPTS = 10;
const logger$4 = new ConsoleLogger('DataStore');
class MutationProcessor {
    constructor(schema, storage, userClasses, outbox, modelInstanceCreator, _MutationEvent, amplifyConfig = {}, authModeStrategy, errorHandler, conflictHandler, amplifyContext) {
        this.schema = schema;
        this.storage = storage;
        this.userClasses = userClasses;
        this.outbox = outbox;
        this.modelInstanceCreator = modelInstanceCreator;
        this._MutationEvent = _MutationEvent;
        this.amplifyConfig = amplifyConfig;
        this.authModeStrategy = authModeStrategy;
        this.errorHandler = errorHandler;
        this.conflictHandler = conflictHandler;
        this.amplifyContext = amplifyContext;
        this.typeQuery = new WeakMap();
        this.processing = false;
        this.runningProcesses = new BackgroundProcessManager();
        this.amplifyContext.InternalAPI =
            this.amplifyContext.InternalAPI || InternalAPI;
        this.generateQueries();
    }
    generateQueries() {
        Object.values(this.schema.namespaces).forEach(namespace => {
            Object.values(namespace.models)
                .filter(({ syncable }) => syncable)
                .forEach(model => {
                const [createMutation] = buildGraphQLOperation(namespace, model, 'CREATE');
                const [updateMutation] = buildGraphQLOperation(namespace, model, 'UPDATE');
                const [deleteMutation] = buildGraphQLOperation(namespace, model, 'DELETE');
                this.typeQuery.set(model, [
                    createMutation,
                    updateMutation,
                    deleteMutation,
                ]);
            });
        });
    }
    isReady() {
        return this.observer !== undefined;
    }
    start() {
        this.runningProcesses = new BackgroundProcessManager();
        const observable = new Observable(observer => {
            this.observer = observer;
            try {
                this.resume();
            }
            catch (error) {
                logger$4.error('mutations processor start error', error);
                throw error;
            }
            return this.runningProcesses.addCleaner(async () => {
                // The observer has unsubscribed and/or `stop()` has been called.
                this.removeObserver();
                this.pause();
            });
        });
        return observable;
    }
    async stop() {
        this.removeObserver();
        await this.runningProcesses.close();
        await this.runningProcesses.open();
    }
    removeObserver() {
        this.observer?.complete?.();
        this.observer = undefined;
    }
    async resume() {
        if (this.runningProcesses.isOpen) {
            await this.runningProcesses.add(async (onTerminate) => {
                if (this.processing ||
                    !this.isReady() ||
                    !this.runningProcesses.isOpen) {
                    return;
                }
                this.processing = true;
                let head;
                const namespaceName = USER;
                // start to drain outbox
                while (this.processing &&
                    this.runningProcesses.isOpen &&
                    (head = await this.outbox.peek(this.storage)) !== undefined) {
                    const { model, operation, data, condition } = head;
                    const modelConstructor = this.userClasses[model];
                    let result = undefined;
                    let opName = undefined;
                    let modelDefinition = undefined;
                    try {
                        const modelAuthModes = await getModelAuthModes({
                            authModeStrategy: this.authModeStrategy,
                            defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
                            modelName: model,
                            schema: this.schema,
                        });
                        const operationAuthModes = modelAuthModes[operation.toUpperCase()];
                        let authModeAttempts = 0;
                        const authModeRetry = async () => {
                            try {
                                logger$4.debug(`Attempting mutation with authMode: ${operationAuthModes[authModeAttempts]}`);
                                const response = await this.jitteredRetry(namespaceName, model, operation, data, condition, modelConstructor, this._MutationEvent, head, operationAuthModes[authModeAttempts], onTerminate);
                                logger$4.debug(`Mutation sent successfully with authMode: ${operationAuthModes[authModeAttempts]}`);
                                return response;
                            }
                            catch (error) {
                                authModeAttempts++;
                                if (authModeAttempts >= operationAuthModes.length) {
                                    logger$4.debug(`Mutation failed with authMode: ${operationAuthModes[authModeAttempts - 1]}`);
                                    try {
                                        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                                        await this.errorHandler({
                                            recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                            localModel: null,
                                            message: error.message,
                                            model: modelConstructor.name,
                                            operation: opName,
                                            errorType: getMutationErrorType(error),
                                            process: ProcessName.sync,
                                            remoteModel: null,
                                            cause: error,
                                        });
                                    }
                                    catch (e) {
                                        logger$4.error('Mutation error handler failed with:', e);
                                    }
                                    throw error;
                                }
                                logger$4.debug(`Mutation failed with authMode: ${operationAuthModes[authModeAttempts - 1]}. Retrying with authMode: ${operationAuthModes[authModeAttempts]}`);
                                return authModeRetry();
                            }
                        };
                        [result, opName, modelDefinition] = await authModeRetry();
                    }
                    catch (error) {
                        if (error.message === 'Offline' ||
                            error.message === 'RetryMutation') {
                            continue;
                        }
                    }
                    if (result === undefined) {
                        logger$4.debug('done retrying');
                        await this.storage.runExclusive(async (storage) => {
                            await this.outbox.dequeue(storage);
                        });
                        continue;
                    }
                    const record = result.data[opName];
                    let hasMore = false;
                    await this.storage.runExclusive(async (storage) => {
                        // using runExclusive to prevent possible race condition
                        // when another record gets enqueued between dequeue and peek
                        await this.outbox.dequeue(storage, record, operation);
                        hasMore = (await this.outbox.peek(storage)) !== undefined;
                    });
                    this.observer?.next?.({
                        operation,
                        modelDefinition,
                        model: record,
                        hasMore,
                    });
                }
                // pauses itself
                this.pause();
            }, 'mutation resume loop');
        }
    }
    async jitteredRetry(namespaceName, model, operation, data, condition, modelConstructor, MutationEventCtor, mutationEvent, authMode, onTerminate) {
        return retry(async (retriedModel, retriedOperation, retriedData, retriedCondition, retriedModelConstructor, retiredMutationEventCtor, retiredMutationEvent) => {
            const [query, variables, graphQLCondition, opName, modelDefinition] = this.createQueryVariables(namespaceName, retriedModel, retriedOperation, retriedData, retriedCondition);
            const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
            const tryWith = {
                query,
                variables,
                authMode,
                authToken,
            };
            let attempt = 0;
            const opType = this.opTypeFromTransformerOperation(retriedOperation);
            const customUserAgentDetails = {
                category: Category.DataStore,
                action: DataStoreAction.GraphQl,
            };
            do {
                try {
                    const result = (await this.amplifyContext.InternalAPI.graphql(tryWith, undefined, customUserAgentDetails));
                    // Use `as any` because TypeScript doesn't seem to like passing tuples
                    // through generic params.
                    return [result, opName, modelDefinition];
                }
                catch (err) {
                    if (err.errors && err.errors.length > 0) {
                        const [error] = err.errors;
                        const { originalError: { code = null } = {} } = error;
                        if (error.errorType === 'Unauthorized') {
                            throw new NonRetryableError('Unauthorized');
                        }
                        if (error.message === 'Network Error' ||
                            code === 'ERR_NETWORK' // refers to axios timeout error caused by device's bad network condition
                        ) {
                            if (!this.processing) {
                                throw new NonRetryableError('Offline');
                            }
                            // TODO: Check errors on different env (react-native or other browsers)
                            throw new Error('Network Error');
                        }
                        if (error.errorType === 'ConflictUnhandled') {
                            // TODO: add on ConflictConditionalCheck error query last from server
                            attempt++;
                            let retryWith;
                            if (attempt > MAX_ATTEMPTS) {
                                retryWith = DISCARD;
                            }
                            else {
                                try {
                                    retryWith = await this.conflictHandler({
                                        modelConstructor: retriedModelConstructor,
                                        localModel: this.modelInstanceCreator(retriedModelConstructor, variables.input),
                                        remoteModel: this.modelInstanceCreator(retriedModelConstructor, error.data),
                                        operation: opType,
                                        attempts: attempt,
                                    });
                                }
                                catch (caughtErr) {
                                    logger$4.warn('conflict trycatch', caughtErr);
                                    continue;
                                }
                            }
                            if (retryWith === DISCARD) {
                                // Query latest from server and notify merger
                                const [[, builtOpName, builtQuery]] = buildGraphQLOperation(this.schema.namespaces[namespaceName], modelDefinition, 'GET');
                                const newAuthToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
                                const serverData = (await this.amplifyContext.InternalAPI.graphql({
                                    query: builtQuery,
                                    variables: { id: variables.input.id },
                                    authMode,
                                    authToken: newAuthToken,
                                }, undefined, customUserAgentDetails));
                                // onTerminate cancel graphql()
                                return [serverData, builtOpName, modelDefinition];
                            }
                            const namespace = this.schema.namespaces[namespaceName];
                            // convert retry with to tryWith
                            const updatedMutation = createMutationInstanceFromModelOperation(namespace.relationships, modelDefinition, opType, retriedModelConstructor, retryWith, graphQLCondition, retiredMutationEventCtor, this.modelInstanceCreator, retiredMutationEvent.id);
                            await this.storage.save(updatedMutation);
                            throw new NonRetryableError('RetryMutation');
                        }
                        else {
                            try {
                                this.errorHandler({
                                    recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                    localModel: variables.input,
                                    message: error.message,
                                    operation: retriedOperation,
                                    errorType: getMutationErrorType(error),
                                    errorInfo: error.errorInfo,
                                    process: ProcessName.mutate,
                                    cause: error,
                                    remoteModel: error.data
                                        ? this.modelInstanceCreator(retriedModelConstructor, error.data)
                                        : null,
                                });
                            }
                            catch (caughtErr) {
                                logger$4.warn('Mutation error handler failed with:', caughtErr);
                            }
                            finally {
                                // Return empty tuple, dequeues the mutation
                                // eslint-disable-next-line no-unsafe-finally
                                return error.data
                                    ? [
                                        { data: { [opName]: error.data } },
                                        opName,
                                        modelDefinition,
                                    ]
                                    : [];
                            }
                        }
                    }
                    else {
                        // Catch-all for client-side errors that don't come back in the `GraphQLError` format.
                        // These errors should not be retried.
                        throw new NonRetryableError(err);
                    }
                }
                // eslint-disable-next-line no-unmodified-loop-condition
            } while (tryWith);
        }, [
            model,
            operation,
            data,
            condition,
            modelConstructor,
            MutationEventCtor,
            mutationEvent,
        ], safeJitteredBackoff, onTerminate);
    }
    createQueryVariables(namespaceName, model, operation, data, condition) {
        const modelDefinition = this.schema.namespaces[namespaceName].models[model];
        const { primaryKey } = this.schema.namespaces[namespaceName].keys[model];
        const auth = modelDefinition.attributes?.find(a => a.type === 'auth');
        const ownerFields = auth?.properties?.rules
            .map(rule => rule.ownerField)
            .filter(f => f) || ['owner'];
        const queriesTuples = this.typeQuery.get(modelDefinition);
        const [, opName, query] = queriesTuples.find(([transformerMutationType]) => transformerMutationType === operation);
        const { _version, ...parsedData } = JSON.parse(data);
        // include all the fields that comprise a custom PK if one is specified
        const deleteInput = {};
        if (primaryKey && primaryKey.length) {
            for (const pkField of primaryKey) {
                deleteInput[pkField] = parsedData[pkField];
            }
        }
        else {
            deleteInput[ID] = parsedData.id;
        }
        let mutationInput;
        if (operation === TransformerMutationType.DELETE) {
            // For DELETE mutations, only the key(s) are included in the input
            mutationInput = deleteInput;
        }
        else {
            // Otherwise, we construct the mutation input with the following logic
            mutationInput = {};
            const modelFields = Object.values(modelDefinition.fields);
            for (const { name, type, association, isReadOnly } of modelFields) {
                // omit readonly fields. cloud storage doesn't need them and won't take them!
                if (isReadOnly) {
                    continue;
                }
                // omit owner fields if it's `null`. cloud storage doesn't allow it.
                if (ownerFields.includes(name) && parsedData[name] === null) {
                    continue;
                }
                // model fields should be stripped out from the input
                if (isModelFieldType(type)) {
                    // except for belongs to relations - we need to replace them with the correct foreign key(s)
                    if (isTargetNameAssociation(association) &&
                        association.connectionType === 'BELONGS_TO') {
                        const targetNames = extractTargetNamesFromSrc(association);
                        if (targetNames) {
                            // instead of including the connected model itself, we add its key(s) to the mutation input
                            for (const targetName of targetNames) {
                                mutationInput[targetName] = parsedData[targetName];
                            }
                        }
                    }
                    continue;
                }
                // scalar fields / non-model types
                if (operation === TransformerMutationType.UPDATE) {
                    if (!Object.prototype.hasOwnProperty.call(parsedData, name)) {
                        // for update mutations - strip out a field if it's unchanged
                        continue;
                    }
                }
                // all other fields are added to the input object
                mutationInput[name] = parsedData[name];
            }
        }
        // Build mutation variables input object
        const input = {
            ...mutationInput,
            _version,
        };
        const graphQLCondition = JSON.parse(condition);
        const variables = {
            input,
            ...(operation === TransformerMutationType.CREATE
                ? {}
                : {
                    condition: Object.keys(graphQLCondition).length > 0
                        ? graphQLCondition
                        : null,
                }),
        };
        return [query, variables, graphQLCondition, opName, modelDefinition];
    }
    opTypeFromTransformerOperation(operation) {
        switch (operation) {
            case TransformerMutationType.CREATE:
                return OpType.INSERT;
            case TransformerMutationType.DELETE:
                return OpType.DELETE;
            case TransformerMutationType.UPDATE:
                return OpType.UPDATE;
            case TransformerMutationType.GET: // Intentionally blank
                break;
            default:
                throw new Error(`Invalid operation ${operation}`);
        }
        // because it makes TS happy ...
        return undefined;
    }
    pause() {
        this.processing = false;
    }
}
const MAX_RETRY_DELAY_MS = 5 * 60 * 1000;
const originalJitteredBackoff = jitteredBackoff$1(MAX_RETRY_DELAY_MS);
/**
 * @private
 * Internal use of Amplify only.
 *
 * Wraps the jittered backoff calculation to retry Network Errors indefinitely.
 * Backs off according to original jittered retry logic until the original retry
 * logic hits its max. After this occurs, if the error is a Network Error, we
 * ignore the attempt count and return MAX_RETRY_DELAY_MS to retry forever (until
 * the request succeeds).
 *
 * @param attempt ignored
 * @param _args ignored
 * @param error tested to see if `.message` is 'Network Error'
 * @returns number | false :
 */
const safeJitteredBackoff = (attempt, _args, error) => {
    const attemptResult = originalJitteredBackoff(attempt);
    // If this is the last attempt and it is a network error, we retry indefinitively every 5 minutes
    if (attemptResult === false &&
        (error || {}).message === 'Network Error') {
        return MAX_RETRY_DELAY_MS;
    }
    return attemptResult;
};

const logger$3 = new ConsoleLogger('DataStore');
var CONTROL_MSG;
(function (CONTROL_MSG) {
    CONTROL_MSG["CONNECTED"] = "CONNECTED";
})(CONTROL_MSG || (CONTROL_MSG = {}));
var USER_CREDENTIALS;
(function (USER_CREDENTIALS) {
    USER_CREDENTIALS[USER_CREDENTIALS["none"] = 0] = "none";
    USER_CREDENTIALS[USER_CREDENTIALS["unauth"] = 1] = "unauth";
    USER_CREDENTIALS[USER_CREDENTIALS["auth"] = 2] = "auth";
})(USER_CREDENTIALS || (USER_CREDENTIALS = {}));
class SubscriptionProcessor {
    constructor(schema, syncPredicates, amplifyConfig = {}, authModeStrategy, errorHandler, amplifyContext = {
        InternalAPI,
    }) {
        this.schema = schema;
        this.syncPredicates = syncPredicates;
        this.amplifyConfig = amplifyConfig;
        this.authModeStrategy = authModeStrategy;
        this.errorHandler = errorHandler;
        this.amplifyContext = amplifyContext;
        this.typeQuery = new WeakMap();
        this.buffer = [];
        this.runningProcesses = new BackgroundProcessManager();
    }
    buildSubscription(namespace, model, transformerMutationType, userCredentials, oidcTokenPayload, authMode, filterArg = false) {
        const { aws_appsync_authenticationType } = this.amplifyConfig;
        const { isOwner, ownerField, ownerValue } = this.getAuthorizationInfo(model, userCredentials, aws_appsync_authenticationType, oidcTokenPayload, authMode) || {};
        const [opType, opName, query] = buildSubscriptionGraphQLOperation(namespace, model, transformerMutationType, isOwner, ownerField, filterArg);
        return { authMode, opType, opName, query, isOwner, ownerField, ownerValue };
    }
    getAuthorizationInfo(model, userCredentials, defaultAuthType, oidcTokenPayload, authMode) {
        const rules = getAuthorizationRules(model);
        // Return null if user doesn't have proper credentials for private API with IAM auth
        const iamPrivateAuth = authMode === 'iam' &&
            rules.find(rule => rule.authStrategy === 'private' && rule.provider === 'iam');
        if (iamPrivateAuth && userCredentials === USER_CREDENTIALS.unauth) {
            return null;
        }
        // Group auth should take precedence over owner auth, so we are checking
        // if rule(s) have group authorization as well as if either the Cognito or
        // OIDC token has a groupClaim. If so, we are returning auth info before
        // any further owner-based auth checks.
        const groupAuthRules = rules.filter(rule => rule.authStrategy === 'groups' &&
            ['userPools', 'oidc'].includes(rule.provider));
        const validGroup = (authMode === 'oidc' || authMode === 'userPool') &&
            // eslint-disable-next-line array-callback-return
            groupAuthRules.find(groupAuthRule => {
                // validate token against groupClaim
                if (oidcTokenPayload) {
                    const oidcUserGroups = getUserGroupsFromToken(oidcTokenPayload, groupAuthRule);
                    return [...oidcUserGroups].find(userGroup => {
                        return groupAuthRule.groups.find(group => group === userGroup);
                    });
                }
            });
        if (validGroup) {
            return {
                authMode,
                isOwner: false,
            };
        }
        let ownerAuthInfo;
        if (ownerAuthInfo) {
            return ownerAuthInfo;
        }
        // Owner auth needs additional values to be returned in order to create the subscription with
        // the correct parameters so we are getting the owner value from the OIDC token via the
        // identityClaim from the auth rule.
        const oidcOwnerAuthRules = authMode === 'oidc' || authMode === 'userPool'
            ? rules.filter(rule => rule.authStrategy === 'owner' &&
                (rule.provider === 'oidc' || rule.provider === 'userPools'))
            : [];
        oidcOwnerAuthRules.forEach(ownerAuthRule => {
            const ownerValue = oidcTokenPayload?.[ownerAuthRule.identityClaim];
            const singleOwner = model.fields[ownerAuthRule.ownerField]?.isArray !== true;
            const isOwnerArgRequired = singleOwner && !ownerAuthRule.areSubscriptionsPublic;
            if (ownerValue) {
                ownerAuthInfo = {
                    authMode,
                    isOwner: isOwnerArgRequired,
                    ownerField: ownerAuthRule.ownerField,
                    ownerValue: String(ownerValue),
                };
            }
        });
        if (ownerAuthInfo) {
            return ownerAuthInfo;
        }
        // Fallback: return authMode or default auth type
        return {
            authMode: authMode || defaultAuthType,
            isOwner: false,
        };
    }
    hubQueryCompletionListener(completed, capsule) {
        const { payload: { event }, } = capsule;
        if (event === CONTROL_MSG$1.SUBSCRIPTION_ACK) {
            completed();
        }
    }
    start() {
        this.runningProcesses =
            this.runningProcesses || new BackgroundProcessManager();
        const ctlObservable = new Observable(observer => {
            const promises = [];
            // Creating subs for each model/operation combo so they can be unsubscribed
            // independently, since the auth retry behavior is asynchronous.
            let subscriptions = {};
            let oidcTokenPayload;
            let userCredentials = USER_CREDENTIALS.none;
            this.runningProcesses.add(async () => {
                try {
                    // retrieving current AWS Credentials
                    const credentials = (await fetchAuthSession()).tokens?.accessToken;
                    userCredentials = credentials
                        ? USER_CREDENTIALS.auth
                        : USER_CREDENTIALS.unauth;
                }
                catch (err) {
                    // best effort to get AWS credentials
                }
                try {
                    // retrieving current token info from Cognito UserPools
                    const session = await fetchAuthSession();
                    oidcTokenPayload = session.tokens?.idToken?.payload;
                }
                catch (err) {
                    // best effort to get jwt from Cognito
                }
                Object.values(this.schema.namespaces).forEach(namespace => {
                    Object.values(namespace.models)
                        .filter(({ syncable }) => syncable)
                        .forEach(modelDefinition => this.runningProcesses.isOpen &&
                        this.runningProcesses.add(async () => {
                            const modelAuthModes = await getModelAuthModes({
                                authModeStrategy: this.authModeStrategy,
                                defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
                                modelName: modelDefinition.name,
                                schema: this.schema,
                            });
                            // subscriptions are created only based on the READ auth mode(s)
                            const readAuthModes = modelAuthModes.READ;
                            subscriptions = {
                                ...subscriptions,
                                [modelDefinition.name]: {
                                    [TransformerMutationType.CREATE]: [],
                                    [TransformerMutationType.UPDATE]: [],
                                    [TransformerMutationType.DELETE]: [],
                                },
                            };
                            const operations = [
                                TransformerMutationType.CREATE,
                                TransformerMutationType.UPDATE,
                                TransformerMutationType.DELETE,
                            ];
                            const operationAuthModeAttempts = {
                                [TransformerMutationType.CREATE]: 0,
                                [TransformerMutationType.UPDATE]: 0,
                                [TransformerMutationType.DELETE]: 0,
                            };
                            const predicatesGroup = ModelPredicateCreator.getPredicates(this.syncPredicates.get(modelDefinition), false);
                            const addFilterArg = predicatesGroup !== undefined;
                            // Retry subscriptions that failed for one of the following reasons:
                            // 1. unauthorized - retry with next auth mode (if available)
                            // 2. RTF error - retry without sending filter arg. (filtering will fall back to clientside)
                            const subscriptionRetry = async (operation, addFilter = addFilterArg) => {
                                const { opType: transformerMutationType, opName, query, isOwner, ownerField, ownerValue, authMode, } = this.buildSubscription(namespace, modelDefinition, operation, userCredentials, oidcTokenPayload, readAuthModes[operationAuthModeAttempts[operation]], addFilter);
                                const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
                                const variables = {};
                                const customUserAgentDetails = {
                                    category: Category.DataStore,
                                    action: DataStoreAction.Subscribe,
                                };
                                if (addFilter && predicatesGroup) {
                                    variables.filter =
                                        predicateToGraphQLFilter(predicatesGroup);
                                }
                                if (isOwner) {
                                    if (!ownerValue) {
                                        observer.error('Owner field required, sign in is needed in order to perform this operation');
                                        return;
                                    }
                                    variables[ownerField] = ownerValue;
                                }
                                logger$3.debug(`Attempting ${operation} subscription with authMode: ${readAuthModes[operationAuthModeAttempts[operation]]}`);
                                const queryObservable = this.amplifyContext.InternalAPI.graphql({
                                    query,
                                    variables,
                                    ...{ authMode },
                                    authToken,
                                }, undefined, customUserAgentDetails);
                                let subscriptionReadyCallback;
                                // TODO: consider onTerminate.then(() => API.cancel(...))
                                subscriptions[modelDefinition.name][transformerMutationType].push(queryObservable.subscribe({
                                    next: result => {
                                        const { data, errors } = result;
                                        if (Array.isArray(errors) && errors.length > 0) {
                                            const messages = errors.map(({ message }) => message);
                                            logger$3.warn(`Skipping incoming subscription. Messages: ${messages.join('\n')}`);
                                            this.drainBuffer();
                                            return;
                                        }
                                        const resolvedPredicatesGroup = ModelPredicateCreator.getPredicates(this.syncPredicates.get(modelDefinition), false);
                                        const { [opName]: record } = data;
                                        // checking incoming subscription against syncPredicate.
                                        // once AppSync implements filters on subscriptions, we'll be
                                        // able to set these when establishing the subscription instead.
                                        // Until then, we'll need to filter inbound
                                        if (this.passesPredicateValidation(record, resolvedPredicatesGroup)) {
                                            this.pushToBuffer(transformerMutationType, modelDefinition, record);
                                        }
                                        this.drainBuffer();
                                    },
                                    error: async (subscriptionError) => {
                                        const { errors: [{ message = '' } = {}], } = (subscriptionError);
                                        const isRTFError = 
                                        // only attempt catch if a filter variable was added to the subscription query
                                        addFilter &&
                                            this.catchRTFError(message, modelDefinition, predicatesGroup);
                                        // Catch RTF errors
                                        if (isRTFError) {
                                            // Unsubscribe and clear subscription array for model/operation
                                            subscriptions[modelDefinition.name][transformerMutationType].forEach(subscription => subscription.unsubscribe());
                                            subscriptions[modelDefinition.name][transformerMutationType] = [];
                                            // retry subscription connection without filter
                                            subscriptionRetry(operation, false);
                                            return;
                                        }
                                        if (message.includes(CONTROL_MSG$1.REALTIME_SUBSCRIPTION_INIT_ERROR) ||
                                            message.includes(CONTROL_MSG$1.CONNECTION_FAILED)) {
                                            // Unsubscribe and clear subscription array for model/operation
                                            subscriptions[modelDefinition.name][transformerMutationType].forEach(subscription => subscription.unsubscribe());
                                            subscriptions[modelDefinition.name][transformerMutationType] = [];
                                            operationAuthModeAttempts[operation]++;
                                            if (operationAuthModeAttempts[operation] >=
                                                readAuthModes.length) {
                                                // last auth mode retry. Continue with error
                                                logger$3.debug(`${operation} subscription failed with authMode: ${readAuthModes[operationAuthModeAttempts[operation] - 1]}`);
                                            }
                                            else {
                                                // retry with different auth mode. Do not trigger
                                                // observer error or error handler
                                                logger$3.debug(`${operation} subscription failed with authMode: ${readAuthModes[operationAuthModeAttempts[operation] - 1]}. Retrying with authMode: ${readAuthModes[operationAuthModeAttempts[operation]]}`);
                                                subscriptionRetry(operation);
                                                return;
                                            }
                                        }
                                        logger$3.warn('subscriptionError', message);
                                        try {
                                            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                                            await this.errorHandler({
                                                recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                                localModel: null,
                                                message,
                                                model: modelDefinition.name,
                                                operation,
                                                errorType: getSubscriptionErrorType(subscriptionError),
                                                process: ProcessName.subscribe,
                                                remoteModel: null,
                                                cause: subscriptionError,
                                            });
                                        }
                                        catch (e) {
                                            logger$3.error('Subscription error handler failed with:', e);
                                        }
                                        if (typeof subscriptionReadyCallback === 'function') {
                                            subscriptionReadyCallback();
                                        }
                                        if (message.includes('"errorType":"Unauthorized"') ||
                                            message.includes('"errorType":"OperationDisabled"')) {
                                            return;
                                        }
                                        observer.error(message);
                                    },
                                }));
                                promises.push((async () => {
                                    let boundFunction;
                                    let removeBoundFunctionListener;
                                    await new Promise(resolve => {
                                        subscriptionReadyCallback = resolve;
                                        boundFunction = this.hubQueryCompletionListener.bind(this, resolve);
                                        removeBoundFunctionListener = Hub.listen('api', boundFunction);
                                    });
                                    removeBoundFunctionListener();
                                })());
                            };
                            operations.forEach(op => subscriptionRetry(op));
                        }));
                });
                this.runningProcesses.isOpen &&
                    this.runningProcesses.add(() => Promise.all(promises).then(() => {
                        observer.next(CONTROL_MSG.CONNECTED);
                    }));
            }, 'subscription processor new subscriber');
            return this.runningProcesses.addCleaner(async () => {
                Object.keys(subscriptions).forEach(modelName => {
                    subscriptions[modelName][TransformerMutationType.CREATE].forEach(subscription => {
                        subscription.unsubscribe();
                    });
                    subscriptions[modelName][TransformerMutationType.UPDATE].forEach(subscription => {
                        subscription.unsubscribe();
                    });
                    subscriptions[modelName][TransformerMutationType.DELETE].forEach(subscription => {
                        subscription.unsubscribe();
                    });
                });
            });
        });
        const dataObservable = new Observable(observer => {
            this.dataObserver = observer;
            this.drainBuffer();
            return this.runningProcesses.addCleaner(async () => {
                this.dataObserver = null;
            });
        });
        return [ctlObservable, dataObservable];
    }
    async stop() {
        await this.runningProcesses.close();
        await this.runningProcesses.open();
    }
    passesPredicateValidation(record, predicatesGroup) {
        if (!predicatesGroup) {
            return true;
        }
        const { predicates, type } = predicatesGroup;
        return validatePredicate(record, type, predicates);
    }
    pushToBuffer(transformerMutationType, modelDefinition, data) {
        this.buffer.push([transformerMutationType, modelDefinition, data]);
    }
    drainBuffer() {
        if (this.dataObserver) {
            this.buffer.forEach(data => {
                this.dataObserver.next(data);
            });
            this.buffer = [];
        }
    }
    /**
     * @returns true if the service returned an RTF subscription error
     * @remarks logs a warning with remediation instructions
     *
     */
    catchRTFError(message, modelDefinition, predicatesGroup) {
        const header = 'Backend subscriptions filtering error.\n' +
            'Subscriptions filtering will be applied clientside.\n';
        const messageErrorTypeMap = {
            'UnknownArgument: Unknown field argument filter': RTFError.UnknownField,
            'Filters exceed maximum attributes limit': RTFError.MaxAttributes,
            'Filters combination exceed maximum limit': RTFError.MaxCombinations,
            'filter uses same fieldName multiple time': RTFError.RepeatedFieldname,
            "The variables input contains a field name 'not'": RTFError.NotGroup,
            'The variables input contains a field that is not defined for input object type': RTFError.FieldNotInType,
        };
        const [_errorMsg, errorType] = Object.entries(messageErrorTypeMap).find(([errorMsg]) => message.includes(errorMsg)) || [];
        if (errorType !== undefined) {
            const remediationMessage = generateRTFRemediation(errorType, modelDefinition, predicatesGroup);
            logger$3.warn(`${header}\n${message}\n${remediationMessage}`);
            return true;
        }
        return false;
    }
}

const opResultDefaults = {
    items: [],
    nextToken: null,
    startedAt: null,
};
const logger$2 = new ConsoleLogger('DataStore');
class SyncProcessor {
    constructor(schema, syncPredicates, amplifyConfig = {}, authModeStrategy, errorHandler, amplifyContext) {
        this.schema = schema;
        this.syncPredicates = syncPredicates;
        this.amplifyConfig = amplifyConfig;
        this.authModeStrategy = authModeStrategy;
        this.errorHandler = errorHandler;
        this.amplifyContext = amplifyContext;
        this.typeQuery = new WeakMap();
        this.runningProcesses = new BackgroundProcessManager();
        amplifyContext.InternalAPI = amplifyContext.InternalAPI || InternalAPI;
        this.generateQueries();
    }
    generateQueries() {
        Object.values(this.schema.namespaces).forEach(namespace => {
            Object.values(namespace.models)
                .filter(({ syncable }) => syncable)
                .forEach(model => {
                const [[, ...opNameQuery]] = buildGraphQLOperation(namespace, model, 'LIST');
                this.typeQuery.set(model, opNameQuery);
            });
        });
    }
    graphqlFilterFromPredicate(model) {
        if (!this.syncPredicates) {
            return null;
        }
        const predicatesGroup = ModelPredicateCreator.getPredicates(this.syncPredicates.get(model), false);
        if (!predicatesGroup) {
            return null;
        }
        return predicateToGraphQLFilter(predicatesGroup);
    }
    async retrievePage(modelDefinition, lastSync, nextToken, limit = null, filter, onTerminate) {
        const [opName, query] = this.typeQuery.get(modelDefinition);
        const variables = {
            limit,
            nextToken,
            lastSync,
            filter,
        };
        const modelAuthModes = await getModelAuthModes({
            authModeStrategy: this.authModeStrategy,
            defaultAuthMode: this.amplifyConfig.aws_appsync_authenticationType,
            modelName: modelDefinition.name,
            schema: this.schema,
        });
        // sync only needs the READ auth mode(s)
        const readAuthModes = modelAuthModes.READ;
        let authModeAttempts = 0;
        const authModeRetry = async () => {
            if (!this.runningProcesses.isOpen) {
                throw new Error('sync.retreievePage termination was requested. Exiting.');
            }
            try {
                logger$2.debug(`Attempting sync with authMode: ${readAuthModes[authModeAttempts]}`);
                const response = await this.jitteredRetry({
                    query,
                    variables,
                    opName,
                    modelDefinition,
                    authMode: readAuthModes[authModeAttempts],
                    onTerminate,
                });
                logger$2.debug(`Sync successful with authMode: ${readAuthModes[authModeAttempts]}`);
                return response;
            }
            catch (error) {
                authModeAttempts++;
                if (authModeAttempts >= readAuthModes.length) {
                    const authMode = readAuthModes[authModeAttempts - 1];
                    logger$2.debug(`Sync failed with authMode: ${authMode}`, error);
                    if (getClientSideAuthError(error) || getForbiddenError(error)) {
                        // return empty list of data so DataStore will continue to sync other models
                        logger$2.warn(`User is unauthorized to query ${opName} with auth mode ${authMode}. No data could be returned.`);
                        return {
                            data: {
                                [opName]: opResultDefaults,
                            },
                        };
                    }
                    throw error;
                }
                logger$2.debug(`Sync failed with authMode: ${readAuthModes[authModeAttempts - 1]}. Retrying with authMode: ${readAuthModes[authModeAttempts]}`);
                return authModeRetry();
            }
        };
        const { data } = await authModeRetry();
        const { [opName]: opResult } = data;
        const { items, nextToken: newNextToken, startedAt } = opResult;
        return {
            nextToken: newNextToken,
            startedAt,
            items,
        };
    }
    async jitteredRetry({ query, variables, opName, modelDefinition, authMode, onTerminate, }) {
        return jitteredExponentialRetry(async (retriedQuery, retriedVariables) => {
            try {
                const authToken = await getTokenForCustomAuth(authMode, this.amplifyConfig);
                const customUserAgentDetails = {
                    category: Category.DataStore,
                    action: DataStoreAction.GraphQl,
                };
                return await this.amplifyContext.InternalAPI.graphql({
                    query: retriedQuery,
                    variables: retriedVariables,
                    authMode,
                    authToken,
                }, undefined, customUserAgentDetails);
                // TODO: onTerminate.then(() => API.cancel(...))
            }
            catch (error) {
                // Catch client-side (GraphQLAuthError) & 401/403 errors here so that we don't continue to retry
                const clientOrForbiddenErrorMessage = getClientSideAuthError(error) || getForbiddenError(error);
                if (clientOrForbiddenErrorMessage) {
                    logger$2.error('Sync processor retry error:', error);
                    throw new NonRetryableError(clientOrForbiddenErrorMessage);
                }
                const hasItems = Boolean(error?.data?.[opName]?.items);
                const unauthorized = error?.errors &&
                    error.errors.some(err => err.errorType === 'Unauthorized');
                const otherErrors = error?.errors &&
                    error.errors.filter(err => err.errorType !== 'Unauthorized');
                const result = error;
                if (hasItems) {
                    result.data[opName].items = result.data[opName].items.filter(item => item !== null);
                }
                if (hasItems && otherErrors?.length) {
                    await Promise.all(otherErrors.map(async (err) => {
                        try {
                            // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                            await this.errorHandler({
                                recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                localModel: null,
                                message: err.message,
                                model: modelDefinition.name,
                                operation: opName,
                                errorType: getSyncErrorType(err),
                                process: ProcessName.sync,
                                remoteModel: null,
                                cause: err,
                            });
                        }
                        catch (e) {
                            logger$2.error('Sync error handler failed with:', e);
                        }
                    }));
                    Hub.dispatch('datastore', {
                        event: 'nonApplicableDataReceived',
                        data: {
                            errors: otherErrors,
                            modelName: modelDefinition.name,
                        },
                    });
                }
                /**
                 * Handle $util.unauthorized() in resolver request mapper, which responses with something
                 * like this:
                 *
                 * ```
                 * {
                 * 	data: { syncYourModel: null },
                 * 	errors: [
                 * 		{
                 * 			path: ['syncLegacyJSONComments'],
                 * 			data: null,
                 * 			errorType: 'Unauthorized',
                 * 			errorInfo: null,
                 * 			locations: [{ line: 2, column: 3, sourceName: null }],
                 * 			message:
                 * 				'Not Authorized to access syncYourModel on type Query',
                 * 			},
                 * 		],
                 * 	}
                 * ```
                 *
                 * The correct handling for this is to signal that we've encountered a non-retryable error,
                 * since the server has responded with an auth error and *NO DATA* at this point.
                 */
                if (unauthorized) {
                    this.errorHandler({
                        recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                        localModel: null,
                        message: error.message,
                        model: modelDefinition.name,
                        operation: opName,
                        errorType: getSyncErrorType(error.errors[0]),
                        process: ProcessName.sync,
                        remoteModel: null,
                        cause: error,
                    });
                    throw new NonRetryableError(error);
                }
                if (result.data?.[opName]?.items?.length) {
                    return result;
                }
                throw error;
            }
        }, [query, variables], undefined, onTerminate);
    }
    start(typesLastSync) {
        const { maxRecordsToSync, syncPageSize } = this.amplifyConfig;
        const parentPromises = new Map();
        const observable = new Observable(observer => {
            const sortedTypesLastSyncs = Object.values(this.schema.namespaces).reduce((map, namespace) => {
                for (const modelName of Array.from(namespace.modelTopologicalOrdering.keys())) {
                    const typeLastSync = typesLastSync.get(namespace.models[modelName]);
                    map.set(namespace.models[modelName], typeLastSync);
                }
                return map;
            }, new Map());
            const allModelsReady = Array.from(sortedTypesLastSyncs.entries())
                .filter(([{ syncable }]) => syncable)
                .map(([modelDefinition, [namespace, lastSync]]) => this.runningProcesses.isOpen &&
                this.runningProcesses.add(async (onTerminate) => {
                    let done = false;
                    let nextToken = null;
                    let startedAt = null;
                    let items = null;
                    let recordsReceived = 0;
                    const filter = this.graphqlFilterFromPredicate(modelDefinition);
                    const parents = this.schema.namespaces[namespace].modelTopologicalOrdering.get(modelDefinition.name);
                    const promises = parents.map(parent => parentPromises.get(`${namespace}_${parent}`));
                    // eslint-disable-next-line no-async-promise-executor
                    const promise = new Promise(async (resolve) => {
                        await Promise.all(promises);
                        do {
                            /**
                             * If `runningProcesses` is not open, it means that the sync processor has been
                             * stopped (for example by calling `DataStore.clear()` upstream) and has not yet
                             * finished terminating and/or waiting for its background processes to complete.
                             */
                            if (!this.runningProcesses.isOpen) {
                                logger$2.debug(`Sync processor has been stopped, terminating sync for ${modelDefinition.name}`);
                                resolve();
                                return;
                            }
                            const limit = Math.min(maxRecordsToSync - recordsReceived, syncPageSize);
                            /**
                             * It's possible that `retrievePage` will fail.
                             * If it does fail, continue merging the rest of the data,
                             * and invoke the error handler for non-applicable data.
                             */
                            try {
                                ({ items, nextToken, startedAt } = await this.retrievePage(modelDefinition, lastSync, nextToken, limit, filter, onTerminate));
                            }
                            catch (error) {
                                try {
                                    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
                                    await this.errorHandler({
                                        recoverySuggestion: 'Ensure app code is up to date, auth directives exist and are correct on each model, and that server-side data has not been invalidated by a schema change. If the problem persists, search for or create an issue: https://github.com/aws-amplify/amplify-js/issues',
                                        localModel: null,
                                        message: error.message,
                                        model: modelDefinition.name,
                                        operation: null,
                                        errorType: getSyncErrorType(error),
                                        process: ProcessName.sync,
                                        remoteModel: null,
                                        cause: error,
                                    });
                                }
                                catch (e) {
                                    logger$2.error('Sync error handler failed with:', e);
                                }
                                /**
                                 * If there's an error, this model fails, but the rest of the sync should
                                 * continue. To facilitate this, we explicitly mark this model as `done`
                                 * with no items and allow the loop to continue organically. This ensures
                                 * all callbacks (subscription messages) happen as normal, so anything
                                 * waiting on them knows the model is as done as it can be.
                                 */
                                done = true;
                                items = [];
                            }
                            recordsReceived += items.length;
                            done =
                                nextToken === null || recordsReceived >= maxRecordsToSync;
                            observer.next({
                                namespace,
                                modelDefinition,
                                items,
                                done,
                                startedAt,
                                isFullSync: !lastSync,
                            });
                        } while (!done);
                        resolve();
                    });
                    parentPromises.set(`${namespace}_${modelDefinition.name}`, promise);
                    await promise;
                }, `adding model ${modelDefinition.name}`));
            Promise.all(allModelsReady).then(() => {
                observer.complete();
            });
        });
        return observable;
    }
    async stop() {
        logger$2.debug('stopping sync processor');
        await this.runningProcesses.close();
        await this.runningProcesses.open();
        logger$2.debug('sync processor stopped');
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger$1 = new ConsoleLogger('DataStore');
const ownSymbol = Symbol('sync');
var ControlMessage;
(function (ControlMessage) {
    ControlMessage["SYNC_ENGINE_STORAGE_SUBSCRIBED"] = "storageSubscribed";
    ControlMessage["SYNC_ENGINE_SUBSCRIPTIONS_ESTABLISHED"] = "subscriptionsEstablished";
    ControlMessage["SYNC_ENGINE_SYNC_QUERIES_STARTED"] = "syncQueriesStarted";
    ControlMessage["SYNC_ENGINE_SYNC_QUERIES_READY"] = "syncQueriesReady";
    ControlMessage["SYNC_ENGINE_MODEL_SYNCED"] = "modelSynced";
    ControlMessage["SYNC_ENGINE_OUTBOX_MUTATION_ENQUEUED"] = "outboxMutationEnqueued";
    ControlMessage["SYNC_ENGINE_OUTBOX_MUTATION_PROCESSED"] = "outboxMutationProcessed";
    ControlMessage["SYNC_ENGINE_OUTBOX_STATUS"] = "outboxStatus";
    ControlMessage["SYNC_ENGINE_NETWORK_STATUS"] = "networkStatus";
    ControlMessage["SYNC_ENGINE_READY"] = "ready";
})(ControlMessage || (ControlMessage = {}));
class SyncEngine {
    getModelSyncedStatus(modelConstructor) {
        return this.modelSyncedStatus.get(modelConstructor);
    }
    constructor(schema, namespaceResolver, modelClasses, userModelClasses, storage, modelInstanceCreator, conflictHandler, errorHandler, syncPredicates, amplifyConfig = {}, authModeStrategy, amplifyContext, connectivityMonitor) {
        this.schema = schema;
        this.namespaceResolver = namespaceResolver;
        this.modelClasses = modelClasses;
        this.userModelClasses = userModelClasses;
        this.storage = storage;
        this.modelInstanceCreator = modelInstanceCreator;
        this.syncPredicates = syncPredicates;
        this.amplifyConfig = amplifyConfig;
        this.authModeStrategy = authModeStrategy;
        this.amplifyContext = amplifyContext;
        this.connectivityMonitor = connectivityMonitor;
        this.online = false;
        this.modelSyncedStatus = new WeakMap();
        this.connectionDisrupted = false;
        this.runningProcesses = new BackgroundProcessManager();
        this.waitForSleepState = new Promise(resolve => {
            this.syncQueriesObservableStartSleeping = resolve;
        });
        const MutationEventCtor = this.modelClasses
            .MutationEvent;
        this.outbox = new MutationEventOutbox(this.schema, MutationEventCtor, modelInstanceCreator, ownSymbol);
        this.modelMerger = new ModelMerger(this.outbox, ownSymbol);
        this.syncQueriesProcessor = new SyncProcessor(this.schema, this.syncPredicates, this.amplifyConfig, this.authModeStrategy, errorHandler, this.amplifyContext);
        this.subscriptionsProcessor = new SubscriptionProcessor(this.schema, this.syncPredicates, this.amplifyConfig, this.authModeStrategy, errorHandler, this.amplifyContext);
        this.mutationsProcessor = new MutationProcessor(this.schema, this.storage, this.userModelClasses, this.outbox, this.modelInstanceCreator, MutationEventCtor, this.amplifyConfig, this.authModeStrategy, errorHandler, conflictHandler, this.amplifyContext);
        this.datastoreConnectivity =
            this.connectivityMonitor || new DataStoreConnectivity();
    }
    start(params) {
        return new Observable(observer => {
            logger$1.log('starting sync engine...');
            let subscriptions = [];
            this.runningProcesses.add(async () => {
                try {
                    await this.setupModels(params);
                }
                catch (err) {
                    observer.error(err);
                    return;
                }
                // this is awaited at the bottom. so, we don't need to register
                // this explicitly with the context. it's already contained.
                const startPromise = new Promise((resolve, reject) => {
                    const doneStarting = resolve;
                    const failedStarting = reject;
                    this.datastoreConnectivity.status().subscribe(async ({ online }) => this.runningProcesses.isOpen &&
                        this.runningProcesses.add(async (onTerminate) => {
                            // From offline to online
                            if (online && !this.online) {
                                this.online = online;
                                observer.next({
                                    type: ControlMessage.SYNC_ENGINE_NETWORK_STATUS,
                                    data: {
                                        active: this.online,
                                    },
                                });
                                this.stopDisruptionListener = this.startDisruptionListener();
                                // #region GraphQL Subscriptions
                                const [ctlSubsObservable, dataSubsObservable] = this.subscriptionsProcessor.start();
                                try {
                                    await new Promise((_resolve, _reject) => {
                                        onTerminate.then(_reject);
                                        const ctlSubsSubscription = ctlSubsObservable.subscribe({
                                            next: msg => {
                                                if (msg === CONTROL_MSG.CONNECTED) {
                                                    _resolve();
                                                }
                                            },
                                            error: err => {
                                                _reject(err);
                                                const handleDisconnect = this.disconnectionHandler();
                                                handleDisconnect(err);
                                            },
                                        });
                                        subscriptions.push(ctlSubsSubscription);
                                    });
                                }
                                catch (err) {
                                    observer.error(err);
                                    failedStarting();
                                    return;
                                }
                                logger$1.log('Realtime ready');
                                observer.next({
                                    type: ControlMessage.SYNC_ENGINE_SUBSCRIPTIONS_ESTABLISHED,
                                });
                                // #endregion
                                // #region Base & Sync queries
                                try {
                                    await new Promise((_resolve, _reject) => {
                                        const syncQuerySubscription = this.syncQueriesObservable().subscribe({
                                            next: message => {
                                                const { type } = message;
                                                if (type ===
                                                    ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY) {
                                                    _resolve();
                                                }
                                                observer.next(message);
                                            },
                                            complete: () => {
                                                _resolve();
                                            },
                                            error: error => {
                                                _reject(error);
                                            },
                                        });
                                        if (syncQuerySubscription) {
                                            subscriptions.push(syncQuerySubscription);
                                        }
                                    });
                                }
                                catch (error) {
                                    observer.error(error);
                                    failedStarting();
                                    return;
                                }
                                // #endregion
                                // #region process mutations (outbox)
                                subscriptions.push(this.mutationsProcessor
                                    .start()
                                    .subscribe(({ modelDefinition, model: item, hasMore }) => this.runningProcesses.add(async () => {
                                    const modelConstructor = this.userModelClasses[modelDefinition.name];
                                    const model = this.modelInstanceCreator(modelConstructor, item);
                                    await this.storage.runExclusive(storage => this.modelMerger.merge(storage, model, modelDefinition));
                                    observer.next({
                                        type: ControlMessage.SYNC_ENGINE_OUTBOX_MUTATION_PROCESSED,
                                        data: {
                                            model: modelConstructor,
                                            element: model,
                                        },
                                    });
                                    observer.next({
                                        type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
                                        data: {
                                            isEmpty: !hasMore,
                                        },
                                    });
                                }, 'mutation processor event')));
                                // #endregion
                                // #region Merge subscriptions buffer
                                subscriptions.push(dataSubsObservable.subscribe(([_transformerMutationType, modelDefinition, item]) => this.runningProcesses.add(async () => {
                                    const modelConstructor = this.userModelClasses[modelDefinition.name];
                                    const model = this.modelInstanceCreator(modelConstructor, item);
                                    await this.storage.runExclusive(storage => this.modelMerger.merge(storage, model, modelDefinition));
                                }, 'subscription dataSubsObservable event')));
                                // #endregion
                            }
                            else if (!online) {
                                this.online = online;
                                observer.next({
                                    type: ControlMessage.SYNC_ENGINE_NETWORK_STATUS,
                                    data: {
                                        active: this.online,
                                    },
                                });
                                subscriptions.forEach(sub => {
                                    sub.unsubscribe();
                                });
                                subscriptions = [];
                            }
                            doneStarting();
                        }, 'datastore connectivity event'));
                });
                this.storage
                    .observe(null, null, ownSymbol)
                    .pipe(filter(({ model }) => {
                    const modelDefinition = this.getModelDefinition(model);
                    return modelDefinition.syncable === true;
                }))
                    .subscribe({
                    next: async ({ opType, model, element, condition }) => this.runningProcesses.add(async () => {
                        const namespace = this.schema.namespaces[this.namespaceResolver(model)];
                        const MutationEventConstructor = this.modelClasses
                            .MutationEvent;
                        const modelDefinition = this.getModelDefinition(model);
                        const graphQLCondition = predicateToGraphQLCondition(condition, modelDefinition);
                        const mutationEvent = createMutationInstanceFromModelOperation(namespace.relationships, this.getModelDefinition(model), opType, model, element, graphQLCondition, MutationEventConstructor, this.modelInstanceCreator);
                        await this.outbox.enqueue(this.storage, mutationEvent);
                        observer.next({
                            type: ControlMessage.SYNC_ENGINE_OUTBOX_MUTATION_ENQUEUED,
                            data: {
                                model,
                                element,
                            },
                        });
                        observer.next({
                            type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
                            data: {
                                isEmpty: false,
                            },
                        });
                        await startPromise;
                        // Set by the this.datastoreConnectivity.status().subscribe() loop
                        if (this.online) {
                            this.mutationsProcessor.resume();
                        }
                    }, 'storage event'),
                });
                observer.next({
                    type: ControlMessage.SYNC_ENGINE_STORAGE_SUBSCRIBED,
                });
                const hasMutationsInOutbox = (await this.outbox.peek(this.storage)) === undefined;
                observer.next({
                    type: ControlMessage.SYNC_ENGINE_OUTBOX_STATUS,
                    data: {
                        isEmpty: hasMutationsInOutbox,
                    },
                });
                await startPromise;
                observer.next({
                    type: ControlMessage.SYNC_ENGINE_READY,
                });
            }, 'sync start');
        });
    }
    async getModelsMetadataWithNextFullSync(currentTimeStamp) {
        const modelLastSync = new Map((await this.runningProcesses.add(() => this.getModelsMetadata(), 'sync/index getModelsMetadataWithNextFullSync')).map(({ namespace, model, lastSync, lastFullSync, fullSyncInterval }) => {
            const nextFullSync = lastFullSync + fullSyncInterval;
            const syncFrom = !lastFullSync || nextFullSync < currentTimeStamp
                ? 0 // perform full sync if expired
                : lastSync; // perform delta sync
            return [
                this.schema.namespaces[namespace].models[model],
                [namespace, syncFrom],
            ];
        }));
        return modelLastSync;
    }
    syncQueriesObservable() {
        if (!this.online) {
            return of({}); // TODO(v6): fix this
        }
        return new Observable(observer => {
            let syncQueriesSubscription;
            this.runningProcesses.isOpen &&
                this.runningProcesses.add(async (onTerminate) => {
                    let terminated = false;
                    while (!observer.closed && !terminated) {
                        const count = new WeakMap();
                        const modelLastSync = await this.getModelsMetadataWithNextFullSync(Date.now());
                        const paginatingModels = new Set(modelLastSync.keys());
                        let lastFullSyncStartedAt;
                        let syncInterval;
                        let start;
                        let syncDuration;
                        let lastStartedAt;
                        await new Promise((resolve, _reject) => {
                            if (!this.runningProcesses.isOpen)
                                resolve();
                            onTerminate.then(() => {
                                resolve();
                            });
                            syncQueriesSubscription = this.syncQueriesProcessor
                                .start(modelLastSync)
                                .subscribe({
                                next: async ({ namespace, modelDefinition, items, done, startedAt, isFullSync, }) => {
                                    const modelConstructor = this.userModelClasses[modelDefinition.name];
                                    if (!count.has(modelConstructor)) {
                                        count.set(modelConstructor, {
                                            new: 0,
                                            updated: 0,
                                            deleted: 0,
                                        });
                                        start = getNow();
                                        lastStartedAt =
                                            lastStartedAt === undefined
                                                ? startedAt
                                                : Math.max(lastStartedAt, startedAt);
                                    }
                                    /**
                                     * If there are mutations in the outbox for a given id, those need to be
                                     * merged individually. Otherwise, we can merge them in batches.
                                     */
                                    await this.storage.runExclusive(async (storage) => {
                                        const idsInOutbox = await this.outbox.getModelIds(storage);
                                        const oneByOne = [];
                                        const page = items.filter(item => {
                                            const itemId = getIdentifierValue(modelDefinition, item);
                                            if (!idsInOutbox.has(itemId)) {
                                                return true;
                                            }
                                            oneByOne.push(item);
                                            return false;
                                        });
                                        const opTypeCount = [];
                                        for (const item of oneByOne) {
                                            const opType = await this.modelMerger.merge(storage, item, modelDefinition);
                                            if (opType !== undefined) {
                                                opTypeCount.push([item, opType]);
                                            }
                                        }
                                        opTypeCount.push(...(await this.modelMerger.mergePage(storage, modelConstructor, page, modelDefinition)));
                                        const counts = count.get(modelConstructor);
                                        opTypeCount.forEach(([, opType]) => {
                                            switch (opType) {
                                                case OpType.INSERT:
                                                    counts.new++;
                                                    break;
                                                case OpType.UPDATE:
                                                    counts.updated++;
                                                    break;
                                                case OpType.DELETE:
                                                    counts.deleted++;
                                                    break;
                                                default:
                                                    throw new Error(`Invalid opType ${opType}`);
                                            }
                                        });
                                    });
                                    if (done) {
                                        const { name: modelName } = modelDefinition;
                                        // #region update last sync for type
                                        let modelMetadata = await this.getModelMetadata(namespace, modelName);
                                        const { lastFullSync, fullSyncInterval } = modelMetadata;
                                        syncInterval = fullSyncInterval;
                                        lastFullSyncStartedAt =
                                            lastFullSyncStartedAt === undefined
                                                ? lastFullSync
                                                : Math.max(lastFullSyncStartedAt, isFullSync ? startedAt : lastFullSync);
                                        modelMetadata = this.modelClasses
                                            .ModelMetadata.copyOf(modelMetadata, draft => {
                                            draft.lastSync = startedAt;
                                            draft.lastFullSync = isFullSync
                                                ? startedAt
                                                : modelMetadata.lastFullSync;
                                        });
                                        await this.storage.save(modelMetadata, undefined, ownSymbol);
                                        // #endregion
                                        const counts = count.get(modelConstructor);
                                        this.modelSyncedStatus.set(modelConstructor, true);
                                        observer.next({
                                            type: ControlMessage.SYNC_ENGINE_MODEL_SYNCED,
                                            data: {
                                                model: modelConstructor,
                                                isFullSync,
                                                isDeltaSync: !isFullSync,
                                                counts,
                                            },
                                        });
                                        paginatingModels.delete(modelDefinition);
                                        if (paginatingModels.size === 0) {
                                            syncDuration = getNow() - start;
                                            resolve();
                                            observer.next({
                                                type: ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY,
                                            });
                                            syncQueriesSubscription.unsubscribe();
                                        }
                                    }
                                },
                                error: error => {
                                    observer.error(error);
                                },
                            });
                            observer.next({
                                type: ControlMessage.SYNC_ENGINE_SYNC_QUERIES_STARTED,
                                data: {
                                    models: Array.from(paginatingModels).map(({ name }) => name),
                                },
                            });
                        });
                        // null is cast to 0 resulting in unexpected behavior.
                        // undefined in arithmetic operations results in NaN also resulting in unexpected behavior.
                        // If lastFullSyncStartedAt is null this is the first sync.
                        // Assume lastStartedAt is is also newest full sync.
                        let msNextFullSync;
                        if (!lastFullSyncStartedAt) {
                            msNextFullSync = syncInterval - syncDuration;
                        }
                        else {
                            msNextFullSync =
                                lastFullSyncStartedAt +
                                    syncInterval -
                                    (lastStartedAt + syncDuration);
                        }
                        logger$1.debug(`Next fullSync in ${msNextFullSync / 1000} seconds. (${new Date(Date.now() + msNextFullSync)})`);
                        // TODO: create `BackgroundProcessManager.sleep()` ... but, need to put
                        // a lot of thought into what that contract looks like to
                        //  support possible use-cases:
                        //
                        //  1. non-cancelable
                        //  2. cancelable, unsleep on exit()
                        //  3. cancelable, throw Error on exit()
                        //  4. cancelable, callback first on exit()?
                        //  5. ... etc. ? ...
                        //
                        // TLDR; this is a lot of complexity here for a sleep(),
                        // but, it's not clear to me yet how to support an
                        // extensible, centralized cancelable `sleep()` elegantly.
                        await this.runningProcesses.add(async (onRunningProcessTerminate) => {
                            let unsleep;
                            const sleep = new Promise(resolve => {
                                unsleep = resolve;
                                setTimeout(unsleep, msNextFullSync);
                            });
                            onRunningProcessTerminate.then(() => {
                                terminated = true;
                                this.syncQueriesObservableStartSleeping();
                                unsleep();
                            });
                            this.unsleepSyncQueriesObservable = unsleep;
                            this.syncQueriesObservableStartSleeping();
                            return sleep;
                        }, 'syncQueriesObservable sleep');
                        this.unsleepSyncQueriesObservable = null;
                        this.waitForSleepState = new Promise(resolve => {
                            this.syncQueriesObservableStartSleeping = resolve;
                        });
                    }
                }, 'syncQueriesObservable main');
        });
    }
    disconnectionHandler() {
        return (msg) => {
            // This implementation is tied to AWSAppSyncRealTimeProvider 'Connection closed', 'Timeout disconnect' msg
            if (CONTROL_MSG$1.CONNECTION_CLOSED === msg ||
                CONTROL_MSG$1.TIMEOUT_DISCONNECT === msg) {
                this.datastoreConnectivity.socketDisconnected();
            }
        };
    }
    unsubscribeConnectivity() {
        this.datastoreConnectivity.unsubscribe();
    }
    /**
     * Stops all subscription activities and resolves when all activies report
     * that they're disconnected, done retrying, etc..
     */
    async stop() {
        logger$1.debug('stopping sync engine');
        /**
         * Gracefully disconnecting subscribers first just prevents *more* work
         * from entering the pipelines.
         */
        this.unsubscribeConnectivity();
        /**
         * Stop listening for websocket connection disruption
         */
        this.stopDisruptionListener && this.stopDisruptionListener();
        /**
         * aggressively shut down any lingering background processes.
         * some of this might be semi-redundant with unsubscribing. however,
         * unsubscribing doesn't allow us to wait for settling.
         * (Whereas `stop()` does.)
         */
        await this.mutationsProcessor.stop();
        await this.subscriptionsProcessor.stop();
        await this.datastoreConnectivity.stop();
        await this.syncQueriesProcessor.stop();
        await this.runningProcesses.close();
        await this.runningProcesses.open();
        logger$1.debug('sync engine stopped and ready to restart');
    }
    async setupModels(params) {
        const { fullSyncInterval } = params;
        const ModelMetadataConstructor = this.modelClasses
            .ModelMetadata;
        const models = [];
        let savedModel;
        Object.values(this.schema.namespaces).forEach(namespace => {
            Object.values(namespace.models)
                .filter(({ syncable }) => syncable)
                .forEach(model => {
                models.push([namespace.name, model]);
                if (namespace.name === USER) {
                    const modelConstructor = this.userModelClasses[model.name];
                    this.modelSyncedStatus.set(modelConstructor, false);
                }
            });
        });
        const promises = models.map(async ([namespace, model]) => {
            const modelMetadata = await this.getModelMetadata(namespace, model.name);
            const syncPredicate = ModelPredicateCreator.getPredicates(this.syncPredicates.get(model), false);
            const lastSyncPredicate = syncPredicate
                ? JSON.stringify(syncPredicate)
                : null;
            if (modelMetadata === undefined) {
                [[savedModel]] = await this.storage.save(this.modelInstanceCreator(ModelMetadataConstructor, {
                    model: model.name,
                    namespace,
                    lastSync: null,
                    fullSyncInterval,
                    lastFullSync: null,
                    lastSyncPredicate,
                }), undefined, ownSymbol);
            }
            else {
                const prevSyncPredicate = modelMetadata.lastSyncPredicate
                    ? modelMetadata.lastSyncPredicate
                    : null;
                const syncPredicateUpdated = prevSyncPredicate !== lastSyncPredicate;
                [[savedModel]] = await this.storage.save(ModelMetadataConstructor.copyOf(modelMetadata, draft => {
                    draft.fullSyncInterval = fullSyncInterval;
                    // perform a base sync if the syncPredicate changed in between calls to DataStore.start
                    // ensures that the local store contains all the data specified by the syncExpression
                    if (syncPredicateUpdated) {
                        draft.lastSync = null;
                        draft.lastFullSync = null;
                        draft.lastSyncPredicate = lastSyncPredicate;
                    }
                }));
            }
            return savedModel;
        });
        const result = {};
        for (const modelMetadata of await Promise.all(promises)) {
            const { model: modelName } = modelMetadata;
            result[modelName] = modelMetadata;
        }
        return result;
    }
    async getModelsMetadata() {
        const ModelMetadataCtor = this.modelClasses
            .ModelMetadata;
        const modelsMetadata = await this.storage.query(ModelMetadataCtor);
        return modelsMetadata;
    }
    async getModelMetadata(namespace, model) {
        const ModelMetadataCtor = this.modelClasses
            .ModelMetadata;
        const predicate = ModelPredicateCreator.createFromAST(this.schema.namespaces[SYNC].models[ModelMetadataCtor.name], { and: [{ namespace: { eq: namespace } }, { model: { eq: model } }] });
        const [modelMetadata] = await this.storage.query(ModelMetadataCtor, predicate, {
            page: 0,
            limit: 1,
        });
        return modelMetadata;
    }
    getModelDefinition(modelConstructor) {
        const namespaceName = this.namespaceResolver(modelConstructor);
        const modelDefinition = this.schema.namespaces[namespaceName].models[modelConstructor.name];
        return modelDefinition;
    }
    static getNamespace() {
        const namespace = {
            name: SYNC,
            relationships: {},
            enums: {
                OperationType: {
                    name: 'OperationType',
                    values: ['CREATE', 'UPDATE', 'DELETE'],
                },
            },
            nonModels: {},
            models: {
                MutationEvent: {
                    name: 'MutationEvent',
                    pluralName: 'MutationEvents',
                    syncable: false,
                    fields: {
                        id: {
                            name: 'id',
                            type: 'ID',
                            isRequired: true,
                            isArray: false,
                        },
                        model: {
                            name: 'model',
                            type: 'String',
                            isRequired: true,
                            isArray: false,
                        },
                        data: {
                            name: 'data',
                            type: 'String',
                            isRequired: true,
                            isArray: false,
                        },
                        modelId: {
                            name: 'modelId',
                            type: 'String',
                            isRequired: true,
                            isArray: false,
                        },
                        operation: {
                            name: 'operation',
                            type: {
                                enum: 'Operationtype',
                            },
                            isArray: false,
                            isRequired: true,
                        },
                        condition: {
                            name: 'condition',
                            type: 'String',
                            isArray: false,
                            isRequired: true,
                        },
                    },
                },
                ModelMetadata: {
                    name: 'ModelMetadata',
                    pluralName: 'ModelsMetadata',
                    syncable: false,
                    fields: {
                        id: {
                            name: 'id',
                            type: 'ID',
                            isRequired: true,
                            isArray: false,
                        },
                        namespace: {
                            name: 'namespace',
                            type: 'String',
                            isRequired: true,
                            isArray: false,
                        },
                        model: {
                            name: 'model',
                            type: 'String',
                            isRequired: true,
                            isArray: false,
                        },
                        lastSync: {
                            name: 'lastSync',
                            type: 'Int',
                            isRequired: false,
                            isArray: false,
                        },
                        lastFullSync: {
                            name: 'lastFullSync',
                            type: 'Int',
                            isRequired: false,
                            isArray: false,
                        },
                        fullSyncInterval: {
                            name: 'fullSyncInterval',
                            type: 'Int',
                            isRequired: true,
                            isArray: false,
                        },
                        lastSyncPredicate: {
                            name: 'lastSyncPredicate',
                            type: 'String',
                            isRequired: false,
                            isArray: false,
                        },
                    },
                },
            },
        };
        return namespace;
    }
    /**
     * listen for websocket connection disruption
     *
     * May indicate there was a period of time where messages
     * from AppSync were missed. A sync needs to be triggered to
     * retrieve the missed data.
     */
    startDisruptionListener() {
        return Hub.listen('api', (data) => {
            if (data.source === 'PubSub' &&
                data.payload.event === CONNECTION_STATE_CHANGE) {
                const connectionState = data.payload.data
                    .connectionState;
                switch (connectionState) {
                    // Do not need to listen for ConnectionDisruptedPendingNetwork
                    // Normal network reconnection logic will handle the sync
                    case ConnectionState.ConnectionDisrupted:
                        this.connectionDisrupted = true;
                        break;
                    case ConnectionState.Connected:
                        if (this.connectionDisrupted) {
                            this.scheduleSync();
                        }
                        this.connectionDisrupted = false;
                        break;
                }
            }
        });
    }
    /*
     * Schedule a sync to start when syncQueriesObservable enters sleep state
     * Start sync immediately if syncQueriesObservable is already in sleep state
     */
    scheduleSync() {
        return (this.runningProcesses.isOpen &&
            this.runningProcesses.add(() => this.waitForSleepState.then(() => {
                // unsleepSyncQueriesObservable will be set if waitForSleepState has resolved
                this.unsleepSyncQueriesObservable();
            })));
    }
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const ops = [...comparisonKeys];
/**
 * A map from keys (exposed to customers) to the internal predicate data
 * structures invoking code should not muck with.
 */
const predicateInternalsMap = new Map();
/**
 * Creates a link between a key (and generates a key if needed) and an internal
 * `GroupCondition`, which allows us to return a key object instead of the gory
 * conditions details to customers/invoking code.
 *
 * @param condition The internal condition to keep hidden.
 * @param key The object DataStore will use to find the internal condition.
 * If no key is given, an empty one is created.
 */
const registerPredicateInternals = (condition, key) => {
    const finalKey = key || new PredicateInternalsKey();
    predicateInternalsMap.set(finalKey, condition);
    return finalKey;
};
/**
 * Takes a key object from `registerPredicateInternals()` to fetch an internal
 * `GroupCondition` object, which can then be used to query storage or
 * test/match objects.
 *
 * This indirection exists to hide `GroupCondition` from public interfaces, since
 * `GroupCondition` contains extra methods and properties that public callers
 * should not use.
 *
 * @param key A key object previously returned by `registerPredicateInternals()`
 */
const internals = (key) => {
    if (!predicateInternalsMap.has(key)) {
        throw new Error("Invalid predicate. Terminate your predicate with a valid condition (e.g., `p => p.field.eq('value')`) or pass `Predicates.ALL`.");
    }
    return predicateInternalsMap.get(key);
};
/**
 * Maps operators to negated operators.
 * Used to facilitate propagation of negation down a tree of conditions.
 */
const negations = {
    and: 'or',
    or: 'and',
    not: 'and',
    eq: 'ne',
    ne: 'eq',
    gt: 'le',
    ge: 'lt',
    lt: 'ge',
    le: 'gt',
    contains: 'notContains',
    notContains: 'contains',
};
/**
 * A condition that can operate against a single "primitive" field of a model or item.
 * @member field The field of *some record* to test against.
 * @member operator The equality or comparison operator to use.
 * @member operands The operands for the equality/comparison check.
 */
class FieldCondition {
    constructor(field, operator, operands) {
        this.field = field;
        this.operator = operator;
        this.operands = operands;
        this.validate();
    }
    /**
     * Creates a copy of self.
     * @param extract Not used. Present only to fulfill the `UntypedCondition` interface.
     * @returns A new, identitical `FieldCondition`.
     */
    copy() {
        return [
            new FieldCondition(this.field, this.operator, [...this.operands]),
            undefined,
        ];
    }
    /**
     * Produces a tree structure similar to a graphql condition. The returned
     * structure is "dumb" and is intended for another query/condition
     * generation mechanism to interpret, such as the cloud or storage query
     * builders.
     *
     * E.g.,
     *
     * ```json
     * {
     * 	"name": {
     * 		"eq": "robert"
     * 	}
     * }
     * ```
     */
    toAST() {
        return {
            [this.field]: {
                [this.operator]: this.operator === 'between'
                    ? [this.operands[0], this.operands[1]]
                    : this.operands[0],
            },
        };
    }
    /**
     * Produces a new condition (`FieldCondition` or `GroupCondition`) that
     * matches the opposite of this condition.
     *
     * Intended to be used when applying De Morgan's Law, which can be done to
     * produce more efficient queries against the storage layer if a negation
     * appears in the query tree.
     *
     * For example:
     *
     * 1. `name.eq('robert')` becomes `name.ne('robert')`
     * 2. `price.between(100, 200)` becomes `m => m.or(m => [m.price.lt(100), m.price.gt(200)])`
     *
     * @param model The model meta to use when construction a new `GroupCondition`
     * for cases where the negation requires multiple `FieldCondition`'s.
     */
    negated(model) {
        if (this.operator === 'between') {
            return new GroupCondition(model, undefined, undefined, 'or', [
                new FieldCondition(this.field, 'lt', [this.operands[0]]),
                new FieldCondition(this.field, 'gt', [this.operands[1]]),
            ]);
        }
        else if (this.operator === 'beginsWith') {
            // beginsWith negation doesn't have a good, safe optimation right now.
            // just re-wrap it in negation. The adapter will have to scan-and-filter,
            // as is likely optimal for negated beginsWith conditions *anyway*.
            return new GroupCondition(model, undefined, undefined, 'not', [
                new FieldCondition(this.field, 'beginsWith', [this.operands[0]]),
            ]);
        }
        else {
            return new FieldCondition(this.field, negations[this.operator], this.operands);
        }
    }
    /**
     * Not implemented. Not needed. GroupCondition instead consumes FieldConditions and
     * transforms them into legacy predicates. (*For now.*)
     * @param storage N/A. If ever implemented, the storage adapter to query.
     * @returns N/A. If ever implemented, return items from `storage` that match.
     */
    async fetch() {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('No implementation needed [yet].');
    }
    /**
     * Determins whether a given item matches the expressed condition.
     * @param item The item to test.
     * @returns `Promise<boolean>`, `true` if matches; `false` otherwise.
     */
    async matches(item) {
        const v = item[this.field];
        const operations = {
            eq: () => v === this.operands[0],
            ne: () => v !== this.operands[0],
            gt: () => v > this.operands[0],
            ge: () => v >= this.operands[0],
            lt: () => v < this.operands[0],
            le: () => v <= this.operands[0],
            contains: () => v?.indexOf(this.operands[0]) > -1,
            notContains: () => (!v ? true : v.indexOf(this.operands[0]) === -1),
            beginsWith: () => v?.startsWith(this.operands[0]),
            between: () => v >= this.operands[0] && v <= this.operands[1],
        };
        const operation = operations[this.operator];
        if (operation) {
            const result = operation();
            return result;
        }
        else {
            throw new Error(`Invalid operator given: ${this.operator}`);
        }
    }
    /**
     * Checks `this.operands` for compatibility with `this.operator`.
     */
    validate() {
        /**
         * Creates a validator that checks for a particular `operands` count.
         * Throws an exception if the `count` disagrees with `operands.length`.
         * @param count The number of `operands` expected.
         */
        const argumentCount = count => {
            const argsClause = count === 1 ? 'argument is' : 'arguments are';
            return () => {
                if (this.operands.length !== count) {
                    return `Exactly ${count} ${argsClause} required.`;
                }
            };
        };
        // NOTE: validations should return a message on failure.
        // hence, they should be "joined" together with logical OR's
        // as seen in the `between:` entry.
        const validations = {
            eq: argumentCount(1),
            ne: argumentCount(1),
            gt: argumentCount(1),
            ge: argumentCount(1),
            lt: argumentCount(1),
            le: argumentCount(1),
            contains: argumentCount(1),
            notContains: argumentCount(1),
            beginsWith: argumentCount(1),
            between: () => argumentCount(2)() ||
                (this.operands[0] > this.operands[1]
                    ? 'The first argument must be less than or equal to the second argument.'
                    : null),
        };
        const validate = validations[this.operator];
        if (validate) {
            const e = validate();
            if (typeof e === 'string')
                throw new Error(`Incorrect usage of \`${this.operator}()\`: ${e}`);
        }
        else {
            throw new Error(`Non-existent operator: \`${this.operator}()\``);
        }
    }
}
/**
 * Small utility function to generate a monotonically increasing ID.
 * Used by GroupCondition to help keep track of which group is doing what,
 * when, and where during troubleshooting.
 */
const getGroupId = (() => {
    let seed = 1;
    return () => `group_${seed++}`;
})();
/**
 * A set of sub-conditions to operate against a model, optionally scoped to
 * a specific field, combined with the given operator (one of `and`, `or`, or `not`).
 * @member groupId Used to distinguish between GroupCondition instances for
 * debugging and troublehsooting.
 * @member model A metadata object that tells GroupCondition what to query and how.
 * @member field The field on the model that the sub-conditions apply to.
 * @member operator How to group child conditions together.
 * @member operands The child conditions.
 */
class GroupCondition {
    constructor(
    /**
     * The `ModelMeta` of the model to query and/or filter against.
     * Expected to contain:
     *
     * ```js
     * {
     * 	builder: ModelConstructor,
     * 	schema: SchemaModel,
     * 	pkField: string[]
     * }
     * ```
     */
    model, 
    /**
     * If populated, this group specifices a condition on a relationship.
     *
     * If `field` does *not* point to a related model, that's an error. It
     * could indicate that the `GroupCondition` was instantiated with bad
     * data, or that the model metadata is incorrect.
     */
    field, 
    /**
     * If a `field` is given, whether the relationship is a `HAS_ONE`,
     * 'HAS_MANY`, or `BELONGS_TO`.
     *
     * TODO: Remove this and replace with derivation using
     * `ModelRelationship.from(this.model, this.field).relationship`;
     */
    relationshipType, 
    /**
     *
     */
    operator, 
    /**
     *
     */
    operands, 
    /**
     * Whether this GroupCondition is the result of an optimize call.
     *
     * This is used to guard against infinitely fetch -> optimize -> fetch
     * recursion.
     */
    isOptimized = false) {
        this.model = model;
        this.field = field;
        this.relationshipType = relationshipType;
        this.operator = operator;
        this.operands = operands;
        this.isOptimized = isOptimized;
        // `groupId` was used for development/debugging.
        // Should we leave this in for future troubleshooting?
        this.groupId = getGroupId();
    }
    /**
     * Returns a copy of a GroupCondition, which also returns the copy of a
     * given reference node to "extract".
     * @param extract A node of interest. Its copy will *also* be returned if the node exists.
     * @returns [The full copy, the copy of `extract` | undefined]
     */
    copy(extract) {
        const copied = new GroupCondition(this.model, this.field, this.relationshipType, this.operator, []);
        let extractedCopy = extract === this ? copied : undefined;
        this.operands.forEach(o => {
            const [operandCopy, extractedFromOperand] = o.copy(extract);
            copied.operands.push(operandCopy);
            extractedCopy = extractedCopy || extractedFromOperand;
        });
        return [copied, extractedCopy];
    }
    /**
     * Creates a new `GroupCondition` that contains only the local field conditions,
     * omitting related model conditions. That resulting `GroupCondition` can be
     * used to produce predicates that are compatible with the storage adapters and
     * Cloud storage.
     *
     * @param negate Whether the condition tree should be negated according
     * to De Morgan's law.
     */
    withFieldConditionsOnly(negate) {
        const negateChildren = negate !== (this.operator === 'not');
        return new GroupCondition(this.model, undefined, undefined, (negate ? negations[this.operator] : this.operator), this.operands
            .filter(o => o instanceof FieldCondition)
            .map(o => negateChildren ? o.negated(this.model) : o));
    }
    /**
     * Returns a version of the predicate tree with unnecessary logical groups
     * condensed and merged together. This is intended to create a dense tree
     * with leaf nodes (`FieldCondition`'s) aggregated under as few group conditions
     * as possible for the most efficient fetching possible -- it allows `fetch()`.
     *
     * E.g. a grouping like this:
     *
     * ```yaml
     * and:
     * 	and:
     * 		id:
     * 			eq: "abc"
     * 	and:
     * 		name:
     * 			eq: "xyz"
     * ```
     *
     * Will become this:
     *
     * ```yaml
     * and:
     * 	id:
     * 		eq: "abc"
     * 	name:
     * 		eq: "xyz"
     * ```
     *
     * This allows `fetch()` to pass both the `id` and `name` conditions to the adapter
     * together, which can then decide what index to use based on both fields together.
     *
     * @param preserveNode Whether to preserve the current node and to explicitly not eliminate
     * it during optimization. Used internally to preserve the root node and children of
     * `not` groups. `not` groups will always have a single child, so there's nothing to
     * optimize below a `not` (for now), and it makes the query logic simpler later.
     */
    optimized(preserveNode = true) {
        const operands = this.operands.map(o => o instanceof GroupCondition ? o.optimized(this.operator === 'not') : o);
        // we're only collapsing and/or groups that contains a single child for now,
        // because they're much more common and much more trivial to collapse. basically,
        // an `and`/`or` that contains a single child doesn't require the layer of
        // logical grouping.
        if (!preserveNode &&
            ['and', 'or'].includes(this.operator) &&
            !this.field &&
            operands.length === 1) {
            const operand = operands[0];
            if (operand instanceof FieldCondition) {
                // between conditions should NOT be passed up the chain. if they
                // need to be *negated* later, it is important that they be properly
                // contained in an AND group. when de morgan's law is applied, the
                // conditions are reversed and the AND group flips to an OR. this
                // doesn't work right if the a `between` doesn't live in an AND group.
                if (operand.operator !== 'between') {
                    return operand;
                }
            }
            else {
                return operand;
            }
        }
        return new GroupCondition(this.model, this.field, this.relationshipType, this.operator, operands, true);
    }
    /**
     * Fetches matching records from a given storage adapter using legacy predicates (for now).
     * @param storage The storage adapter this predicate will query against.
     * @param breadcrumb For debugging/troubleshooting. A list of the `groupId`'s this
     * GroupdCondition.fetch is nested within.
     * @param negate Whether to match on the `NOT` of `this`.
     * @returns An `Promise` of `any[]` from `storage` matching the child conditions.
     */
    async fetch(storage, breadcrumb = [], negate = false) {
        if (!this.isOptimized) {
            return this.optimized().fetch(storage);
        }
        const resultGroups = [];
        const operator = (negate ? negations[this.operator] : this.operator);
        const negateChildren = negate !== (this.operator === 'not');
        /**
         * Conditions that must be branched out and used to generate a base, "candidate"
         * result set.
         *
         * If `field` is populated, these groups select *related* records, and the base,
         * candidate results are selected to match those.
         */
        const groups = this.operands.filter(op => op instanceof GroupCondition);
        /**
         * Simple conditions that must match the target model of `this`.
         */
        const conditions = this.operands.filter(op => op instanceof FieldCondition);
        for (const g of groups) {
            const relatives = await g.fetch(storage, [...breadcrumb, this.groupId], negateChildren);
            // no relatives -> no need to attempt to perform a "join" query for
            // candidate results:
            //
            // select a.* from a,b where b.id in EMPTY_SET ==> EMPTY_SET
            //
            // Additionally, the entire (sub)-query can be short-circuited if
            // the operator is `AND`. Illustrated in SQL:
            //
            // select a.* from a where
            //   id in [a,b,c]
            //     AND                        <
            //   id in EMTPY_SET            <<< Look!
            //     AND                        <
            //   id in [x,y,z]
            //
            // YIELDS: EMPTY_SET           // <-- Easy peasy. Lemon squeezy.
            //
            if (relatives.length === 0) {
                // aggressively short-circuit as soon as we know the group condition will fail
                if (operator === 'and') {
                    return [];
                }
                // less aggressive short-circuit if we know the relatives will produce no
                // candidate results; but aren't sure yet how this affects the group condition.
                resultGroups.push([]);
                continue;
            }
            if (g.field) {
                // `relatives` are actual relatives. We'll skim them for FK query values.
                // Use the relatives to add candidate result sets (`resultGroups`)
                const relationship = ModelRelationship.from(this.model, g.field);
                if (relationship) {
                    const allJoinConditions = [];
                    for (const relative of relatives) {
                        const relativeConditions = [];
                        for (let i = 0; i < relationship.localJoinFields.length; i++) {
                            relativeConditions.push({
                                [relationship.localJoinFields[i]]: {
                                    eq: relative[relationship.remoteJoinFields[i]],
                                },
                            });
                        }
                        allJoinConditions.push({ and: relativeConditions });
                    }
                    const predicate = ModelPredicateCreator.createFromAST(this.model.schema, {
                        or: allJoinConditions,
                    });
                    resultGroups.push(await storage.query(this.model.builder, predicate));
                }
                else {
                    throw new Error('Missing field metadata.');
                }
            }
            else {
                // relatives are not actually relatives. they're candidate results.
                resultGroups.push(relatives);
            }
        }
        // if conditions is empty at this point, child predicates found no matches.
        // i.e., we can stop looking and return empty.
        if (conditions.length > 0) {
            const predicate = this.withFieldConditionsOnly(negateChildren).toStoragePredicate();
            resultGroups.push(await storage.query(this.model.builder, predicate));
        }
        else if (conditions.length === 0 && resultGroups.length === 0) {
            resultGroups.push(await storage.query(this.model.builder));
        }
        // PK might be a single field, like `id`, or it might be several fields.
        // so, we'll need to extract the list of PK fields from an object
        // and stringify the list for easy comparison / merging.
        const getPKValue = item => JSON.stringify(this.model.pkField.map(name => item[name]));
        // will be used for intersecting or unioning results
        let resultIndex;
        if (operator === 'and') {
            if (resultGroups.length === 0) {
                return [];
            }
            // for each group, we intersect, removing items from the result index
            // that aren't present in each subsequent group.
            for (const group of resultGroups) {
                if (resultIndex === undefined) {
                    resultIndex = new Map(group.map(item => [getPKValue(item), item]));
                }
                else {
                    const intersectWith = new Map(group.map(item => [getPKValue(item), item]));
                    for (const k of resultIndex.keys()) {
                        if (!intersectWith.has(k)) {
                            resultIndex.delete(k);
                        }
                    }
                }
            }
        }
        else if (operator === 'or' || operator === 'not') {
            // it's OK to handle NOT here, because NOT must always only negate
            // a single child predicate. NOT logic will have been distributed down
            // to the leaf conditions already.
            resultIndex = new Map();
            // just merge the groups, performing DISTINCT-ification by ID.
            for (const group of resultGroups) {
                for (const item of group) {
                    resultIndex.set(getPKValue(item), item);
                }
            }
        }
        return Array.from(resultIndex?.values() || []);
    }
    /**
     * Determines whether a single item matches the conditions of `this`.
     * When checking the target `item`'s properties, each property will be `await`'d
     * to ensure lazy-loading is respected where applicable.
     * @param item The item to match against.
     * @param ignoreFieldName Tells `match()` that the field name has already been dereferenced.
     * (Used for iterating over children on HAS_MANY checks.)
     * @returns A boolean (promise): `true` if matched, `false` otherwise.
     */
    async matches(item, ignoreFieldName = false) {
        const itemToCheck = this.field && !ignoreFieldName ? await item[this.field] : item;
        // if there is no item to check, we can stop recursing immediately.
        // a condition cannot match against an item that does not exist. this
        // can occur when `item.field` is optional in the schema.
        if (!itemToCheck) {
            return false;
        }
        if (this.relationshipType === 'HAS_MANY' &&
            typeof itemToCheck[Symbol.asyncIterator] === 'function') {
            for await (const singleItem of itemToCheck) {
                if (await this.matches(singleItem, true)) {
                    return true;
                }
            }
            return false;
        }
        if (this.operator === 'or') {
            return asyncSome(this.operands, c => c.matches(itemToCheck));
        }
        else if (this.operator === 'and') {
            return asyncEvery(this.operands, c => c.matches(itemToCheck));
        }
        else if (this.operator === 'not') {
            if (this.operands.length !== 1) {
                throw new Error('Invalid arguments! `not()` accepts exactly one predicate expression.');
            }
            return !(await this.operands[0].matches(itemToCheck));
        }
        else {
            throw new Error('Invalid group operator!');
        }
    }
    /**
     * Tranfsorm to a AppSync GraphQL compatible AST.
     * (Does not support filtering in nested types.)
     */
    toAST() {
        if (this.field)
            throw new Error('Nested type conditions are not supported!');
        return {
            [this.operator]: this.operands.map(operand => operand.toAST()),
        };
    }
    /**
     * Turn this predicate group into something a storage adapter
     * understands how to use.
     */
    toStoragePredicate() {
        return ModelPredicateCreator.createFromAST(this.model.schema, this.toAST());
    }
    /**
     * A JSON representation that's good for debugging.
     */
    toJSON() {
        return {
            ...this,
            model: this.model.schema.name,
        };
    }
}
/**
 * Creates a "seed" predicate that can be used to build an executable condition.
 * This is used in `query()`, for example, to seed customer- E.g.,
 *
 * ```
 * const p = predicateFor({builder: modelConstructor, schema: modelSchema, pkField: string[]});
 * p.and(child => [
 *   child.field.eq('whatever'),
 *   child.childModel.childField.eq('whatever else'),
 *   child.childModel.or(child => [
 *     child.otherField.contains('x'),
 *     child.otherField.contains('y'),
 *     child.otherField.contains('z'),
 *   ])
 * ])
 * ```
 *
 * `predicateFor()` returns objecst with recursive getters. To facilitate this,
 * a `query` and `tail` can be provided to "accumulate" nested conditions.
 *
 * @param ModelType The ModelMeta used to build child properties.
 * @param field Scopes the query branch to a field.
 * @param query A base query to build on. Omit to start a new query.
 * @param tail The point in an existing `query` to attach new conditions to.
 * @returns A ModelPredicate (builder) that customers can create queries with.
 * (As shown in function description.)
 */
function recursivePredicateFor(ModelType, allowRecursion = true, field, query, tail) {
    // to be used if we don't have a base query or tail to build onto
    const starter = new GroupCondition(ModelType, field, undefined, 'and', []);
    const baseCondition = query && tail ? query : starter;
    const tailCondition = query && tail ? tail : starter;
    // our eventual return object, which can be built upon.
    // next steps will be to add or(), and(), not(), and field.op() methods.
    const link = {};
    // so it can be looked up later with in the internals when processing conditions.
    registerPredicateInternals(baseCondition, link);
    const copyLink = () => {
        const [copiedQuery, newTail] = baseCondition.copy(tailCondition);
        const newLink = recursivePredicateFor(ModelType, allowRecursion, undefined, copiedQuery, newTail);
        return { query: copiedQuery, newTail, newLink };
    };
    // Adds .or() and .and() methods to the link.
    // TODO: If revisiting this code, consider writing a Proxy instead.
    ['and', 'or'].forEach(op => {
        link[op] = (builder) => {
            // or() and and() will return a copy of the original link
            // to head off mutability concerns.
            const { query: copiedLinkQuery, newTail } = copyLink();
            const childConditions = builder(recursivePredicateFor(ModelType, allowRecursion));
            if (!Array.isArray(childConditions)) {
                throw new Error(`Invalid predicate. \`${op}\` groups must return an array of child conditions.`);
            }
            // the customer will supply a child predicate, which apply to the `model.field`
            // of the tail GroupCondition.
            newTail?.operands.push(new GroupCondition(ModelType, field, undefined, op, childConditions.map(c => internals(c))));
            // FinalPredicate
            return registerPredicateInternals(copiedLinkQuery);
        };
    });
    // TODO: If revisiting this code, consider proxy.
    link.not = (builder) => {
        // not() will return a copy of the original link
        // to head off mutability concerns.
        const { query: copiedLinkQuery, newTail } = copyLink();
        // unlike and() and or(), the customer will supply a "singular" child predicate.
        // the difference being: not() does not accept an array of predicate-like objects.
        // it negates only a *single* predicate subtree.
        newTail?.operands.push(new GroupCondition(ModelType, field, undefined, 'not', [
            internals(builder(recursivePredicateFor(ModelType, allowRecursion))),
        ]));
        // A `FinalModelPredicate`.
        // Return a thing that can no longer be extended, but instead used to `async filter(items)`
        // or query storage: `.__query.fetch(storage)`.
        return registerPredicateInternals(copiedLinkQuery);
    };
    // For each field on the model schema, we want to add a getter
    // that creates the appropriate new `link` in the query chain.
    // TODO: If revisiting, consider a proxy.
    for (const fieldName in ModelType.schema.allFields) {
        Object.defineProperty(link, fieldName, {
            enumerable: true,
            get: () => {
                const def = ModelType.schema.allFields[fieldName];
                if (!def.association) {
                    // we're looking at a value field. we need to return a
                    // "field matcher object", which contains all of the comparison
                    // functions ('eq', 'ne', 'gt', etc.), scoped to operate
                    // against the target field (fieldName).
                    return ops.reduce((fieldMatcher, operator) => {
                        return {
                            ...fieldMatcher,
                            // each operator on the fieldMatcher objcect is a function.
                            // when the customer calls the function, it returns a new link
                            // in the chain -- for now -- this is the "leaf" link that
                            // cannot be further extended.
                            [operator]: (...operands) => {
                                // build off a fresh copy of the existing `link`, just in case
                                // the same link is being used elsewhere by the customer.
                                const { query: copiedLinkQuery, newTail } = copyLink();
                                // normalize operands. if any of the values are `undefiend`, use
                                // `null` instead, because that's what will be stored cross-platform.
                                const normalizedOperands = operands.map(o => o === undefined ? null : o);
                                // add the given condition to the link's TAIL node.
                                // remember: the base link might go N nodes deep! e.g.,
                                newTail?.operands.push(new FieldCondition(fieldName, operator, normalizedOperands));
                                // A `FinalModelPredicate`.
                                // Return a thing that can no longer be extended, but instead used to `async filter(items)`
                                // or query storage: `.__query.fetch(storage)`.
                                return registerPredicateInternals(copiedLinkQuery);
                            },
                        };
                    }, {});
                }
                else {
                    if (!allowRecursion) {
                        throw new Error('Predication on releated models is not supported in this context.');
                    }
                    else if (def.association.connectionType === 'BELONGS_TO' ||
                        def.association.connectionType === 'HAS_ONE' ||
                        def.association.connectionType === 'HAS_MANY') {
                        // the use has just typed '.someRelatedModel'. we need to given them
                        // back a predicate chain.
                        const relatedMeta = def.type.modelConstructor;
                        if (!relatedMeta) {
                            throw new Error('Related model metadata is missing. This is a bug! Please report it.');
                        }
                        // `Model.reletedModelField` returns a copy of the original link,
                        // and will contains copies of internal GroupConditions
                        // to head off mutability concerns.
                        const [newquery, oldtail] = baseCondition.copy(tailCondition);
                        const newtail = new GroupCondition(relatedMeta, fieldName, def.association.connectionType, 'and', []);
                        // `oldtail` here refers to the *copy* of the old tail.
                        // so, it's safe to modify at this point. and we need to modify
                        // it to push the *new* tail onto the end of it.
                        oldtail.operands.push(newtail);
                        const newlink = recursivePredicateFor(relatedMeta, allowRecursion, undefined, newquery, newtail);
                        return newlink;
                    }
                    else {
                        throw new Error("Related model definition doesn't have a typedef. This is a bug! Please report it.");
                    }
                }
            },
        });
    }
    return link;
}
function predicateFor(ModelType) {
    // the cast here is just a cheap way to reduce the surface area from
    // the recursive type.
    return recursivePredicateFor(ModelType, false);
}

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isNode = () => typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null;

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
sn(true);
T();
const logger = new ConsoleLogger('DataStore');
monotonicUlidFactory(Date.now());
const SETTING_SCHEMA_VERSION = 'schemaVersion';
let schema;
const modelNamespaceMap = new WeakMap();
/**
 * Stores data for crafting the correct update mutation input for a model.
 *
 * - `Patch[]` - array of changed fields and metadata.
 * - `PersistentModel` - the source model, used for diffing object-type fields.
 */
const modelPatchesMap = new WeakMap();
const getModelDefinition = (modelConstructor) => {
    const namespace = modelNamespaceMap.get(modelConstructor);
    const definition = namespace
        ? schema.namespaces[namespace].models[modelConstructor.name]
        : undefined;
    return definition;
};
/**
 * Determines whether the given object is a Model Constructor that DataStore can
 * safely use to construct objects and discover related metadata.
 *
 * @param obj The object to test.
 */
const isValidModelConstructor = (obj) => {
    return isModelConstructor(obj) && modelNamespaceMap.has(obj);
};
const namespaceResolver = modelConstructor => {
    const resolver = modelNamespaceMap.get(modelConstructor);
    if (!resolver) {
        throw new Error(`Namespace Resolver for '${modelConstructor.name}' not found! This is probably a bug in '@amplify-js/datastore'.`);
    }
    return resolver;
};
/**
 * Creates a predicate without any conditions that can be passed to customer
 * code to have conditions added to it.
 *
 * For example, in this query:
 *
 * ```ts
 * await DataStore.query(
 * 	Model,
 * 	item => item.field.eq('value')
 * );
 * ```
 *
 * `buildSeedPredicate(Model)` is used to create `item`, which is passed to the
 * predicate function, which in turn uses that "seed" predicate (`item`) to build
 * a predicate tree.
 *
 * @param modelConstructor The model the predicate will query.
 */
const buildSeedPredicate = (modelConstructor) => {
    if (!modelConstructor)
        throw new Error('Missing modelConstructor');
    const modelSchema = getModelDefinition(modelConstructor);
    if (!modelSchema)
        throw new Error('Missing modelSchema');
    const pks = extractPrimaryKeyFieldNames(modelSchema);
    if (!pks)
        throw new Error('Could not determine PK');
    return recursivePredicateFor({
        builder: modelConstructor,
        schema: modelSchema,
        pkField: pks,
    });
};
// exporting syncClasses for testing outbox.test.ts
// TODO(eslint): refactor not to export non-constant
// eslint-disable-next-line import/no-mutable-exports
let syncClasses;
let userClasses;
let dataStoreClasses;
let storageClasses;
/**
 * Describes whether and to what a model is attached for lazy loading purposes.
 */
var ModelAttachment;
(function (ModelAttachment) {
    /**
     * Model doesn't lazy load from any data source.
     *
     * Related entity properties provided at instantiation are returned
     * via the respective lazy interfaces when their properties are invoked.
     */
    ModelAttachment["Detached"] = "Detached";
    /**
     * Model lazy loads from the global DataStore.
     */
    ModelAttachment["DataStore"] = "DataStore";
    /**
     * Demonstrative. Not yet implemented.
     */
    ModelAttachment["API"] = "API";
})(ModelAttachment || (ModelAttachment = {}));
/**
 * Tells us which data source a model is attached to (lazy loads from).
 *
 * If `Deatched`, the model's lazy properties will only ever return properties
 * from memory provided at construction time.
 */
const attachedModelInstances = new WeakMap();
/**
 * Registers a model instance against a data source (DataStore, API, or
 * Detached/None).
 *
 * The API option is demonstrative. Lazy loading against API is not yet
 * implemented.
 *
 * @param result A model instance or array of instances
 * @param attachment A ModelAttachment data source
 * @returns passes the `result` back through after attachment
 */
function attached(result, attachment) {
    if (Array.isArray(result)) {
        result.map(record => attached(record, attachment));
    }
    else {
        result && attachedModelInstances.set(result, attachment);
    }
    return result;
}
/**
 * Throws an exception if the schema has *not* been initialized
 * by `initSchema()`.
 *
 * **To be called before trying to access schema.**
 *
 * Currently this only needs to be called in `start()` and `clear()` because
 * all other functions will call start first.
 */
const checkSchemaInitialized = () => {
    {
        const message = 'Schema is not initialized. DataStore will not function as expected. This could happen if you have multiple versions of DataStore installed. Please see https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js/#check-for-duplicate-versions';
        logger.error(message);
        throw new Error(message);
    }
};
/**
 * Collection of instantiated models to allow storage of metadata apart from
 * the model visible to the consuming app -- in case the app doesn't have
 * metadata fields (_version, _deleted, etc.) exposed on the model itself.
 */
const instancesMetadata = new WeakSet();
function modelInstanceCreator(ModelConstructor, init) {
    instancesMetadata.add(init);
    return new ModelConstructor(init);
}
/**
 * Records the patches (as if against an empty object) used to initialize
 * an instance of a Model. This can be used for determining which fields to
 * send to the cloud durnig a CREATE mutation.
 */
const initPatches = new WeakMap();
function isQueryOne(obj) {
    return typeof obj === 'string';
}
function defaultConflictHandler(conflictData) {
    const { localModel, modelConstructor, remoteModel } = conflictData;
    const { _version } = remoteModel;
    return modelInstanceCreator(modelConstructor, { ...localModel, _version });
}
function defaultErrorHandler(error) {
    logger.warn(error);
}
function getModelConstructorByModelName(namespaceName, modelName) {
    let result;
    switch (namespaceName) {
        case DATASTORE:
            result = dataStoreClasses[modelName];
            break;
        case USER:
            result = userClasses[modelName];
            break;
        case SYNC:
            result = syncClasses[modelName];
            break;
        case STORAGE:
            result = storageClasses[modelName];
            break;
        default:
            throw new Error(`Invalid namespace: ${namespaceName}`);
    }
    if (isValidModelConstructor(result)) {
        return result;
    }
    else {
        const msg = `Model name is not valid for namespace. modelName: ${modelName}, namespace: ${namespaceName}`;
        logger.error(msg);
        throw new Error(msg);
    }
}
/**
 * Queries the DataStore metadata tables to see if they are the expected
 * version. If not, clobbers the whole DB. If so, leaves them alone.
 * Otherwise, simply writes the schema version.
 *
 * SIDE EFFECT:
 * 1. Creates a transaction
 * 1. Updates data.
 *
 * @param storage Storage adapter containing the metadata.
 * @param version The expected schema version.
 */
async function checkSchemaVersion(storage, version) {
    const SettingCtor = dataStoreClasses.Setting;
    const modelDefinition = schema.namespaces[DATASTORE].models.Setting;
    await storage.runExclusive(async (s) => {
        const [schemaVersionSetting] = await s.query(SettingCtor, ModelPredicateCreator.createFromAST(modelDefinition, {
            and: { key: { eq: SETTING_SCHEMA_VERSION } },
        }), { page: 0, limit: 1 });
        if (schemaVersionSetting !== undefined &&
            schemaVersionSetting.value !== undefined) {
            const storedValue = JSON.parse(schemaVersionSetting.value);
            if (storedValue !== version) {
                await s.clear(false);
            }
        }
        else {
            await s.save(modelInstanceCreator(SettingCtor, {
                key: SETTING_SCHEMA_VERSION,
                value: JSON.stringify(version),
            }));
        }
    });
}
let syncSubscription;
var DataStoreState;
(function (DataStoreState) {
    DataStoreState["NotRunning"] = "Not Running";
    DataStoreState["Starting"] = "Starting";
    DataStoreState["Running"] = "Running";
    DataStoreState["Stopping"] = "Stopping";
    DataStoreState["Clearing"] = "Clearing";
})(DataStoreState || (DataStoreState = {}));
// TODO: How can we get rid of the non-null assertions?
// https://github.com/aws-amplify/amplify-js/pull/10477/files#r1007363485
class DataStore {
    constructor() {
        // reference to configured category instances. Used for preserving SSR context
        this.InternalAPI = InternalAPI;
        this.Cache = Cache;
        // Non-null assertions (bang operator) have been added to most of these properties
        // to make TS happy. These properties are all expected to be set immediately after
        // construction.
        // TODO: Refactor to use proper DI if possible. If not possible, change these to
        // optionals and implement conditional checks throughout. Rinse/repeat on all
        // sync engine processors, storage engine, adapters, etc..
        this.amplifyConfig = {};
        this.syncPredicates = new WeakMap();
        // object that gets passed to descendent classes. Allows us to pass these down by reference
        this.amplifyContext = {
            InternalAPI: this.InternalAPI,
        };
        /**
         * **IMPORTANT!**
         *
         * Accumulator for background things that can **and MUST** be called when
         * DataStore stops.
         *
         * These jobs **MUST** be *idempotent promises* that resolve ONLY
         * once the intended jobs are completely finished and/or otherwise destroyed
         * and cleaned up with ZERO outstanding:
         *
         * 1. side effects (e.g., state changes)
         * 1. callbacks
         * 1. subscriptions
         * 1. calls to storage
         * 1. *etc.*
         *
         * Methods that create pending promises, subscriptions, callbacks, or any
         * type of side effect **MUST** be registered with the manager. And, a new
         * manager must be created after each `exit()`.
         *
         * Failure to comply will put DataStore into a highly unpredictable state
         * when it needs to stop or clear -- which occurs when restarting with new
         * sync expressions, during testing, and potentially during app code
         * recovery handling, etc..
         *
         * It is up to the discretion of each disposer whether to wait for job
         * completion or to cancel operations and issue failures *as long as the
         * disposer returns in a reasonable amount of time.*
         *
         * (Reasonable = *seconds*, not minutes.)
         */
        this.runningProcesses = new BackgroundProcessManager();
        /**
         * Indicates what state DataStore is in.
         *
         * Not [yet?] used for actual state management; but for messaging
         * when errors occur, to help troubleshoot.
         */
        this.state = DataStoreState.NotRunning;
        /**
         * If not already done:
         * 1. Attaches and initializes storage.
         * 2. Loads the schema and records metadata.
         * 3. If `this.amplifyConfig.aws_appsync_graphqlEndpoint` contains a URL,
         * attaches a sync engine, starts it, and subscribes.
         */
        this.start = async () => {
            return this.runningProcesses
                .add(async () => {
                this.state = DataStoreState.Starting;
                if (this.initialized === undefined) {
                    logger.debug('Starting DataStore');
                    this.initialized = new Promise((resolve, reject) => {
                        this.initResolve = resolve;
                        this.initReject = reject;
                    });
                }
                else {
                    await this.initialized;
                    return;
                }
                this.storage = new ExclusiveStorage(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, this.storageAdapter, this.sessionId);
                await this.storage.init();
                checkSchemaInitialized();
                await checkSchemaVersion(this.storage, schema.version);
                const { aws_appsync_graphqlEndpoint } = this.amplifyConfig;
                if (aws_appsync_graphqlEndpoint) {
                    logger.debug('GraphQL endpoint available', aws_appsync_graphqlEndpoint);
                    this.syncPredicates = await this.processSyncExpressions();
                    this.sync = new SyncEngine(schema, namespaceResolver, syncClasses, userClasses, this.storage, modelInstanceCreator, this.conflictHandler, this.errorHandler, this.syncPredicates, this.amplifyConfig, this.authModeStrategy, this.amplifyContext, this.connectivityMonitor);
                    const fullSyncIntervalInMilliseconds = this.fullSyncInterval * 1000 * 60; // fullSyncInterval from param is in minutes
                    syncSubscription = this.sync
                        .start({ fullSyncInterval: fullSyncIntervalInMilliseconds })
                        .subscribe({
                        next: ({ type, data }) => {
                            /**
                             * In Node, we need to wait for queries to be synced to prevent returning empty arrays.
                             * In non-Node environments (the browser or React Native), we can begin returning data
                             * once subscriptions are in place.
                             */
                            const readyType = isNode()
                                ? ControlMessage.SYNC_ENGINE_SYNC_QUERIES_READY
                                : ControlMessage.SYNC_ENGINE_STORAGE_SUBSCRIBED;
                            if (type === readyType) {
                                this.initResolve();
                            }
                            Hub.dispatch('datastore', {
                                event: type,
                                data,
                            });
                        },
                        error: err => {
                            logger.warn('Sync error', err);
                            this.initReject();
                        },
                    });
                }
                else {
                    logger.warn("Data won't be synchronized. No GraphQL endpoint configured. Did you forget `Amplify.configure(awsconfig)`?", {
                        config: this.amplifyConfig,
                    });
                    this.initResolve();
                }
                await this.initialized;
                this.state = DataStoreState.Running;
            }, 'datastore start')
                .catch(this.handleAddProcError('DataStore.start()'));
        };
        this.query = async (modelConstructor, identifierOrCriteria, paginationProducer) => {
            return this.runningProcesses
                .add(async () => {
                await this.start();
                let result;
                if (!this.storage) {
                    throw new Error('No storage to query');
                }
                // #region Input validation
                if (!isValidModelConstructor(modelConstructor)) {
                    const msg = 'Constructor is not for a valid model';
                    logger.error(msg, { modelConstructor });
                    throw new Error(msg);
                }
                if (typeof identifierOrCriteria === 'string') {
                    if (paginationProducer !== undefined) {
                        logger.warn('Pagination is ignored when querying by id');
                    }
                }
                const modelDefinition = getModelDefinition(modelConstructor);
                if (!modelDefinition) {
                    throw new Error('Invalid model definition provided!');
                }
                const pagination = this.processPagination(modelDefinition, paginationProducer);
                const keyFields = extractPrimaryKeyFieldNames(modelDefinition);
                if (isQueryOne(identifierOrCriteria)) {
                    if (keyFields.length > 1) {
                        const msg = errorMessages.queryByPkWithCompositeKeyPresent;
                        logger.error(msg, { keyFields });
                        throw new Error(msg);
                    }
                    const predicate = ModelPredicateCreator.createFromFlatEqualities(modelDefinition, { [keyFields[0]]: identifierOrCriteria });
                    result = await this.storage.query(modelConstructor, predicate, pagination);
                }
                else {
                    // Object is being queried using object literal syntax
                    if (isIdentifierObject(identifierOrCriteria, modelDefinition)) {
                        const predicate = ModelPredicateCreator.createForPk(modelDefinition, identifierOrCriteria);
                        result = await this.storage.query(modelConstructor, predicate, pagination);
                    }
                    else if (!identifierOrCriteria ||
                        isPredicatesAll(identifierOrCriteria)) {
                        result = await this.storage?.query(modelConstructor, undefined, pagination);
                    }
                    else {
                        const seedPredicate = recursivePredicateFor({
                            builder: modelConstructor,
                            schema: modelDefinition,
                            pkField: extractPrimaryKeyFieldNames(modelDefinition),
                        });
                        const predicate = internals(identifierOrCriteria(seedPredicate));
                        result = (await predicate.fetch(this.storage));
                        result = inMemoryPagination(result, pagination);
                    }
                }
                // #endregion
                const returnOne = isQueryOne(identifierOrCriteria) ||
                    isIdentifierObject(identifierOrCriteria, modelDefinition);
                return attached(returnOne ? result[0] : result, ModelAttachment.DataStore);
            }, 'datastore query')
                .catch(this.handleAddProcError('DataStore.query()'));
        };
        this.save = async (model, condition) => {
            return this.runningProcesses
                .add(async () => {
                await this.start();
                if (!this.storage) {
                    throw new Error('No storage to save to');
                }
                // Immer patches for constructing a correct update mutation input
                // Allows us to only include changed fields for updates
                const updatedPatchesTuple = modelPatchesMap.get(model);
                // Immer patches for initial object construction. These are used if
                // there are no `update` patches under the assumption we're performing
                // a CREATE and wish to send only explicitly specified fields to the cloud.
                const initPatchesTuple = initPatches.has(model)
                    ? [initPatches.get(model), {}]
                    : undefined;
                // favor update patches over init/create patches, because init patches
                // are ALWAYS present, whereas update patches are only present if copyOf
                // was used to create the instance.
                const patchesTuple = updatedPatchesTuple || initPatchesTuple;
                const modelConstructor = model
                    ? model.constructor
                    : undefined;
                if (!isValidModelConstructor(modelConstructor)) {
                    const msg = 'Object is not an instance of a valid model';
                    logger.error(msg, { model });
                    throw new Error(msg);
                }
                const modelDefinition = getModelDefinition(modelConstructor);
                if (!modelDefinition) {
                    throw new Error('Model Definition could not be found for model');
                }
                const modelMeta = {
                    builder: modelConstructor,
                    schema: modelDefinition,
                    pkField: extractPrimaryKeyFieldNames(modelDefinition),
                };
                await this.storage.runExclusive(async (s) => {
                    // no enforcement for HAS_MANY on save, because the ~related~ entities
                    // hold the FK in that case.
                    const nonHasManyRelationships = ModelRelationship.allFrom(modelMeta).filter(r => r.type === 'BELONGS_TO');
                    for (const relationship of nonHasManyRelationships) {
                        const queryObject = relationship.createRemoteQueryObject(model);
                        if (queryObject !== null) {
                            const related = await s.query(relationship.remoteModelConstructor, ModelPredicateCreator.createFromFlatEqualities(relationship.remoteDefinition, queryObject));
                            if (related.length === 0) {
                                throw new Error([
                                    `Data integrity error. You tried to save a ${modelDefinition.name} (${JSON.stringify(model)})`,
                                    `but the instance assigned to the "${relationship.field}" property`,
                                    `does not exist in the local database. If you're trying to create the related`,
                                    `"${relationship.remoteDefinition?.name}", you must save it independently first.`,
                                ].join(' '));
                            }
                        }
                    }
                });
                const producedCondition = condition
                    ? internals(condition(predicateFor(modelMeta))).toStoragePredicate()
                    : undefined;
                const [savedModel] = await this.storage.runExclusive(async (s) => {
                    await s.save(model, producedCondition, undefined, patchesTuple);
                    return s.query(modelConstructor, ModelPredicateCreator.createForPk(modelDefinition, model));
                });
                return attached(savedModel, ModelAttachment.DataStore);
            }, 'datastore save')
                .catch(this.handleAddProcError('DataStore.save()'));
        };
        this.setConflictHandler = (config) => {
            const { DataStore: configDataStore } = config;
            const conflictHandlerIsDefault = () => this.conflictHandler === defaultConflictHandler;
            if (configDataStore && configDataStore.conflictHandler) {
                return configDataStore.conflictHandler;
            }
            if (conflictHandlerIsDefault() && config.conflictHandler) {
                return config.conflictHandler;
            }
            return this.conflictHandler || defaultConflictHandler;
        };
        this.setErrorHandler = (config) => {
            const { DataStore: configDataStore } = config;
            const errorHandlerIsDefault = () => this.errorHandler === defaultErrorHandler;
            if (configDataStore && configDataStore.errorHandler) {
                return configDataStore.errorHandler;
            }
            if (errorHandlerIsDefault() && config.errorHandler) {
                return config.errorHandler;
            }
            return this.errorHandler || defaultErrorHandler;
        };
        this.delete = async (modelOrConstructor, identifierOrCriteria) => {
            return this.runningProcesses
                .add(async () => {
                await this.start();
                if (!this.storage) {
                    throw new Error('No storage to delete from');
                }
                let condition;
                if (!modelOrConstructor) {
                    const msg = 'Model or Model Constructor required';
                    logger.error(msg, { modelOrConstructor });
                    throw new Error(msg);
                }
                if (isValidModelConstructor(modelOrConstructor)) {
                    const modelConstructor = modelOrConstructor;
                    if (!identifierOrCriteria) {
                        const msg = 'Id to delete or criteria required. Do you want to delete all? Pass Predicates.ALL';
                        logger.error(msg, { identifierOrCriteria });
                        throw new Error(msg);
                    }
                    const modelDefinition = getModelDefinition(modelConstructor);
                    if (!modelDefinition) {
                        throw new Error('Could not find model definition for modelConstructor.');
                    }
                    if (typeof identifierOrCriteria === 'string') {
                        const keyFields = extractPrimaryKeyFieldNames(modelDefinition);
                        if (keyFields.length > 1) {
                            const msg = errorMessages.deleteByPkWithCompositeKeyPresent;
                            logger.error(msg, { keyFields });
                            throw new Error(msg);
                        }
                        condition = ModelPredicateCreator.createFromFlatEqualities(modelDefinition, { [keyFields[0]]: identifierOrCriteria });
                    }
                    else {
                        if (isIdentifierObject(identifierOrCriteria, modelDefinition)) {
                            condition = ModelPredicateCreator.createForPk(modelDefinition, identifierOrCriteria);
                        }
                        else {
                            condition = internals(identifierOrCriteria(predicateFor({
                                builder: modelConstructor,
                                schema: modelDefinition,
                                pkField: extractPrimaryKeyFieldNames(modelDefinition),
                            }))).toStoragePredicate();
                        }
                        if (!condition ||
                            !ModelPredicateCreator.isValidPredicate(condition)) {
                            const msg = 'Criteria required. Do you want to delete all? Pass Predicates.ALL';
                            logger.error(msg, { condition });
                            throw new Error(msg);
                        }
                    }
                    const [deleted] = await this.storage.delete(modelConstructor, condition);
                    return attached(deleted, ModelAttachment.DataStore);
                }
                else {
                    const model = modelOrConstructor;
                    const modelConstructor = Object.getPrototypeOf(model || {})
                        .constructor;
                    if (!isValidModelConstructor(modelConstructor)) {
                        const msg = 'Object is not an instance of a valid model';
                        logger.error(msg, { model });
                        throw new Error(msg);
                    }
                    const modelDefinition = getModelDefinition(modelConstructor);
                    if (!modelDefinition) {
                        throw new Error('Could not find model definition for modelConstructor.');
                    }
                    const pkPredicate = ModelPredicateCreator.createForPk(modelDefinition, model);
                    if (identifierOrCriteria) {
                        if (typeof identifierOrCriteria !== 'function') {
                            const msg = 'Invalid criteria';
                            logger.error(msg, { identifierOrCriteria });
                            throw new Error(msg);
                        }
                        condition = internals(identifierOrCriteria(predicateFor({
                            builder: modelConstructor,
                            schema: modelDefinition,
                            pkField: extractPrimaryKeyFieldNames(modelDefinition),
                        }))).toStoragePredicate();
                    }
                    else {
                        condition = pkPredicate;
                    }
                    const [[deleted]] = await this.storage.delete(model, condition);
                    return attached(deleted, ModelAttachment.DataStore);
                }
            }, 'datastore delete')
                .catch(this.handleAddProcError('DataStore.delete()'));
        };
        this.observe = (modelOrConstructor, identifierOrCriteria) => {
            let executivePredicate;
            const modelConstructor = modelOrConstructor && isValidModelConstructor(modelOrConstructor)
                ? modelOrConstructor
                : undefined;
            if (modelOrConstructor && modelConstructor === undefined) {
                const model = modelOrConstructor;
                const resolvedModelConstructor = model && Object.getPrototypeOf(model).constructor;
                if (isValidModelConstructor(resolvedModelConstructor)) {
                    if (identifierOrCriteria) {
                        logger.warn('idOrCriteria is ignored when using a model instance', {
                            model,
                            identifierOrCriteria,
                        });
                    }
                    return this.observe(resolvedModelConstructor, model.id);
                }
                else {
                    const msg = 'The model is not an instance of a PersistentModelConstructor';
                    logger.error(msg, { model });
                    throw new Error(msg);
                }
            }
            // observe should not accept object literal syntax
            if (identifierOrCriteria &&
                modelConstructor &&
                isIdentifierObject(identifierOrCriteria, getModelDefinition(modelConstructor))) {
                const msg = errorMessages.observeWithObjectLiteral;
                logger.error(msg, { objectLiteral: identifierOrCriteria });
                throw new Error(msg);
            }
            if (identifierOrCriteria !== undefined && modelConstructor === undefined) {
                const msg = 'Cannot provide criteria without a modelConstructor';
                logger.error(msg, identifierOrCriteria);
                throw new Error(msg);
            }
            if (modelConstructor && !isValidModelConstructor(modelConstructor)) {
                const msg = 'Constructor is not for a valid model';
                logger.error(msg, { modelConstructor });
                throw new Error(msg);
            }
            if (modelConstructor && typeof identifierOrCriteria === 'string') {
                const buildIdPredicate = seed => seed.id.eq(identifierOrCriteria);
                executivePredicate = internals(buildIdPredicate(buildSeedPredicate(modelConstructor)));
            }
            else if (modelConstructor && typeof identifierOrCriteria === 'function') {
                executivePredicate = internals(identifierOrCriteria(buildSeedPredicate(modelConstructor)));
            }
            return new Observable(observer => {
                let source;
                this.runningProcesses
                    .add(async () => {
                    await this.start();
                    // Filter the events returned by Storage according to namespace,
                    // append original element data, and subscribe to the observable
                    source = this.storage.observe(modelConstructor)
                        .pipe(filter(({ model }) => namespaceResolver(model) === USER))
                        .subscribe({
                        next: item => this.runningProcesses.isOpen &&
                            this.runningProcesses.add(async () => {
                                // the `element` doesn't necessarily contain all item details or
                                // have related records attached consistently with that of a query()
                                // result item. for consistency, we attach them here.
                                let message = item;
                                // as long as we're not dealing with a DELETE, we need to fetch a fresh
                                // item from storage to ensure it's fully populated.
                                if (item.opType !== 'DELETE') {
                                    const modelDefinition = getModelDefinition(item.model);
                                    const keyFields = extractPrimaryKeyFieldNames(modelDefinition);
                                    const primaryKeysAndValues = extractPrimaryKeysAndValues(item.element, keyFields);
                                    const freshElement = await this.query(item.model, primaryKeysAndValues);
                                    message = {
                                        ...message,
                                        element: freshElement,
                                    };
                                }
                                if (!executivePredicate ||
                                    (await executivePredicate.matches(message.element))) {
                                    observer.next(message);
                                }
                            }, 'datastore observe message handler'),
                        error: err => {
                            observer.error(err);
                        },
                        complete: () => {
                            observer.complete();
                        },
                    });
                }, 'datastore observe observable initialization')
                    .catch(this.handleAddProcError('DataStore.observe()'))
                    .catch(error => {
                    observer.error(error);
                });
                // better than no cleaner, but if the subscriber is handling the
                // complete() message async and not registering with the context,
                // this will still be problematic.
                return this.runningProcesses.addCleaner(async () => {
                    if (source) {
                        source.unsubscribe();
                    }
                }, 'DataStore.observe() cleanup');
            });
        };
        this.observeQuery = (model, criteria, options) => {
            return new Observable(observer => {
                const items = new Map();
                const itemsChanged = new Map();
                let deletedItemIds = [];
                let handle;
                // let predicate: ModelPredicate<T> | undefined;
                let executivePredicate;
                /**
                 * As the name suggests, this geneates a snapshot in the form of
                 * 	`{items: T[], isSynced: boolean}`
                 * and sends it to the observer.
                 *
                 * SIDE EFFECT: The underlying generation and emission methods may touch:
                 * `items`, `itemsChanged`, and `deletedItemIds`.
                 *
                 * Refer to `generateSnapshot` and `emitSnapshot` for more details.
                 */
                const generateAndEmitSnapshot = () => {
                    const snapshot = generateSnapshot();
                    emitSnapshot(snapshot);
                };
                // a mechanism to return data after X amount of seconds OR after the
                // "limit" (itemsChanged >= this.syncPageSize) has been reached, whichever comes first
                const limitTimerRace = new DeferredCallbackResolver({
                    callback: generateAndEmitSnapshot,
                    errorHandler: observer.error,
                    maxInterval: 2000,
                });
                const { sort } = options || {};
                const sortOptions = sort ? { sort } : undefined;
                const modelDefinition = getModelDefinition(model);
                if (!modelDefinition) {
                    throw new Error('Could not find model definition.');
                }
                if (model && typeof criteria === 'function') {
                    executivePredicate = internals(criteria(buildSeedPredicate(model)));
                }
                else if (isPredicatesAll(criteria)) {
                    executivePredicate = undefined;
                }
                this.runningProcesses
                    .add(async () => {
                    try {
                        // first, query and return any locally-available records
                        (await this.query(model, criteria, sortOptions)).forEach(item => {
                            const itemModelDefinition = getModelDefinition(model);
                            const idOrPk = getIdentifierValue(itemModelDefinition, item);
                            items.set(idOrPk, item);
                        });
                        // Observe the model and send a stream of updates (debounced).
                        // We need to post-filter results instead of passing criteria through
                        // to have visibility into items that move from in-set to out-of-set.
                        // We need to explicitly remove those items from the existing snapshot.
                        handle = this.observe(model).subscribe(({ element, model: observedModel, opType }) => this.runningProcesses.isOpen &&
                            this.runningProcesses.add(async () => {
                                const itemModelDefinition = getModelDefinition(observedModel);
                                const idOrPk = getIdentifierValue(itemModelDefinition, element);
                                if (executivePredicate &&
                                    !(await executivePredicate.matches(element))) {
                                    if (opType === 'UPDATE' &&
                                        (items.has(idOrPk) || itemsChanged.has(idOrPk))) {
                                        // tracking as a "deleted item" will include the item in
                                        // page limit calculations and ensure it is removed from the
                                        // final items collection, regardless of which collection(s)
                                        // it is currently in. (I mean, it could be in both, right!?)
                                        deletedItemIds.push(idOrPk);
                                    }
                                    else {
                                        // ignore updates for irrelevant/filtered items.
                                        return;
                                    }
                                }
                                // Flag items which have been recently deleted
                                // NOTE: Merging of separate operations to the same model instance is handled upstream
                                // in the `mergePage` method within src/sync/merger.ts. The final state of a model instance
                                // depends on the LATEST record (for a given id).
                                if (opType === 'DELETE') {
                                    deletedItemIds.push(idOrPk);
                                }
                                else {
                                    itemsChanged.set(idOrPk, element);
                                }
                                const isSynced = this.sync?.getModelSyncedStatus(observedModel) ?? false;
                                const limit = itemsChanged.size - deletedItemIds.length >=
                                    this.syncPageSize;
                                if (limit || isSynced) {
                                    limitTimerRace.resolve();
                                }
                                // kicks off every subsequent race as results sync down
                                limitTimerRace.start();
                            }, 'handle observeQuery observed event'));
                        // returns a set of initial/locally-available results
                        generateAndEmitSnapshot();
                    }
                    catch (err) {
                        observer.error(err);
                    }
                }, 'datastore observequery startup')
                    .catch(this.handleAddProcError('DataStore.observeQuery()'))
                    .catch(error => {
                    observer.error(error);
                });
                /**
                 * Combines the `items`, `itemsChanged`, and `deletedItemIds` collections into
                 * a snapshot in the form of `{ items: T[], isSynced: boolean}`.
                 *
                 * SIDE EFFECT: The shared `items` collection is recreated.
                 */
                const generateSnapshot = () => {
                    const isSynced = this.sync?.getModelSyncedStatus(model) ?? false;
                    const itemsArray = [
                        ...Array.from(items.values()),
                        ...Array.from(itemsChanged.values()),
                    ];
                    items.clear();
                    itemsArray.forEach(item => {
                        const itemModelDefinition = getModelDefinition(model);
                        const idOrPk = getIdentifierValue(itemModelDefinition, item);
                        items.set(idOrPk, item);
                    });
                    // remove deleted items from the final result set
                    deletedItemIds.forEach(idOrPk => items.delete(idOrPk));
                    const snapshot = Array.from(items.values());
                    // we sort after we merge the snapshots (items, itemsChanged)
                    // otherwise, the merge may not
                    if (options?.sort) {
                        sortItems(snapshot);
                    }
                    return {
                        items: snapshot,
                        isSynced,
                    };
                };
                /**
                 * Emits the list of items to the observer.
                 *
                 * SIDE EFFECT: `itemsChanged` and `deletedItemIds` are cleared to prepare
                 * for the next snapshot.
                 *
                 * @param snapshot The generated items data to emit.
                 */
                const emitSnapshot = (snapshot) => {
                    // send the generated snapshot to the primary subscription.
                    // NOTE: This observer's handler *could* be async ...
                    observer.next(snapshot);
                    // reset the changed items sets
                    itemsChanged.clear();
                    deletedItemIds = [];
                };
                /**
                 * Sorts an `Array` of `T` according to the sort instructions given in the
                 * original  `observeQuery()` call.
                 *
                 * @param itemsToSort A array of model type.
                 */
                const sortItems = (itemsToSort) => {
                    const sortingModelDefinition = getModelDefinition(model);
                    const pagination = this.processPagination(sortingModelDefinition, options);
                    const sortPredicates = ModelSortPredicateCreator.getPredicates(pagination.sort);
                    if (sortPredicates.length) {
                        const compareFn = sortCompareFunction(sortPredicates);
                        itemsToSort.sort(compareFn);
                    }
                };
                /**
                 * Force one last snapshot when the model is fully synced.
                 *
                 * This reduces latency for that last snapshot, which will otherwise
                 * wait for the configured timeout.
                 *
                 * @param payload The payload from the Hub event.
                 */
                const hubCallback = ({ payload }) => {
                    const { event, data } = payload;
                    if (event === ControlMessage.SYNC_ENGINE_MODEL_SYNCED &&
                        data?.model?.name === model.name) {
                        generateAndEmitSnapshot();
                        hubRemove();
                    }
                };
                const hubRemove = Hub.listen('datastore', hubCallback);
                return this.runningProcesses.addCleaner(async () => {
                    if (handle) {
                        handle.unsubscribe();
                    }
                }, 'datastore observequery cleaner');
            });
        };
        this.configure = (config = {}) => {
            this.amplifyContext.InternalAPI = this.InternalAPI;
            const { DataStore: configDataStore, authModeStrategyType: configAuthModeStrategyType, maxRecordsToSync: configMaxRecordsToSync, syncPageSize: configSyncPageSize, fullSyncInterval: configFullSyncInterval, syncExpressions: configSyncExpressions, authProviders: configAuthProviders, storageAdapter: configStorageAdapter, ...configFromAmplify } = config;
            const currentAppSyncConfig = Amplify.getConfig().API?.GraphQL;
            const appSyncConfig = {
                aws_appsync_graphqlEndpoint: currentAppSyncConfig?.endpoint,
                aws_appsync_authenticationType: currentAppSyncConfig?.defaultAuthMode,
                aws_appsync_region: currentAppSyncConfig?.region,
                aws_appsync_apiKey: currentAppSyncConfig?.apiKey,
            };
            this.amplifyConfig = {
                ...this.amplifyConfig,
                ...configFromAmplify,
                ...(currentAppSyncConfig && appSyncConfig),
            };
            this.conflictHandler = this.setConflictHandler(config);
            this.errorHandler = this.setErrorHandler(config);
            const authModeStrategyType = (configDataStore && configDataStore.authModeStrategyType) ||
                configAuthModeStrategyType ||
                AuthModeStrategyType.DEFAULT;
            switch (authModeStrategyType) {
                case AuthModeStrategyType.MULTI_AUTH:
                    this.authModeStrategy = multiAuthStrategy(this.amplifyContext);
                    break;
                case AuthModeStrategyType.DEFAULT:
                    this.authModeStrategy = defaultAuthStrategy;
                    break;
                default:
                    this.authModeStrategy = defaultAuthStrategy;
                    break;
            }
            // store on config object, so that Sync, Subscription, and Mutation processors can have access
            this.amplifyConfig.authProviders =
                (configDataStore && configDataStore.authProviders) || configAuthProviders;
            this.syncExpressions =
                (configDataStore && configDataStore.syncExpressions) ||
                    configSyncExpressions ||
                    this.syncExpressions;
            this.maxRecordsToSync =
                (configDataStore && configDataStore.maxRecordsToSync) ||
                    configMaxRecordsToSync ||
                    this.maxRecordsToSync ||
                    10000;
            // store on config object, so that Sync, Subscription, and Mutation processors can have access
            this.amplifyConfig.maxRecordsToSync = this.maxRecordsToSync;
            this.syncPageSize =
                (configDataStore && configDataStore.syncPageSize) ||
                    configSyncPageSize ||
                    this.syncPageSize ||
                    1000;
            // store on config object, so that Sync, Subscription, and Mutation processors can have access
            this.amplifyConfig.syncPageSize = this.syncPageSize;
            this.fullSyncInterval =
                (configDataStore && configDataStore.fullSyncInterval) ||
                    configFullSyncInterval ||
                    this.fullSyncInterval ||
                    24 * 60; // 1 day
            this.storageAdapter =
                (configDataStore && configDataStore.storageAdapter) ||
                    configStorageAdapter ||
                    this.storageAdapter ||
                    undefined;
            this.sessionId = this.retrieveSessionId();
        };
    }
    getModuleName() {
        return 'DataStore';
    }
    /**
     * Builds a function to capture `BackgroundManagerNotOpenError`'s to produce friendlier,
     * more instructive errors for customers.
     *
     * @param operation The name of the operation (usually a Datastore method) the customer
     * tried to call.
     */
    handleAddProcError(operation) {
        /**
         * If the tested error is a `BackgroundManagerNotOpenError`, it will be captured
         * and replaced with a friendlier message that instructs the App Developer.
         *
         * @param err An error to test.
         */
        const handler = (err) => {
            if (err.message.startsWith('BackgroundManagerNotOpenError')) {
                throw new Error([
                    `DataStoreStateError: Tried to execute \`${operation}\` while DataStore was "${this.state}".`,
                    `This can only be done while DataStore is "Started" or "Stopped". To remedy:`,
                    'Ensure all calls to `stop()` and `clear()` have completed first.',
                    'If this is not possible, retry the operation until it succeeds.',
                ].join('\n'));
            }
            else {
                throw err;
            }
        };
        return handler;
    }
    /**
     * Clears all data from storage and removes all data, schema info, other
     * initialization details, and then stops DataStore.
     *
     * That said, reinitialization is required after clearing. This can be done
     * by explicitiliy calling `start()` or any method that implicitly starts
     * DataStore, such as `query()`, `save()`, or `delete()`.
     */
    async clear() {
        checkSchemaInitialized();
        this.state = DataStoreState.Clearing;
        await this.runningProcesses.close();
        if (this.storage === undefined) {
            // connect to storage so that it can be cleared without fully starting DataStore
            this.storage = new ExclusiveStorage(schema, namespaceResolver, getModelConstructorByModelName, modelInstanceCreator, this.storageAdapter, this.sessionId);
            await this.storage.init();
        }
        if (syncSubscription && !syncSubscription.closed) {
            syncSubscription.unsubscribe();
        }
        if (this.sync) {
            await this.sync.stop();
        }
        await this.storage.clear();
        this.initialized = undefined; // Should re-initialize when start() is called.
        this.storage = undefined;
        this.sync = undefined;
        this.syncPredicates = new WeakMap();
        await this.runningProcesses.open();
        this.state = DataStoreState.NotRunning;
    }
    /**
     * Stops all DataStore sync activities.
     *
     * TODO: "Waits for graceful termination of
     * running queries and terminates subscriptions."
     */
    async stop() {
        this.state = DataStoreState.Stopping;
        await this.runningProcesses.close();
        if (syncSubscription && !syncSubscription.closed) {
            syncSubscription.unsubscribe();
        }
        if (this.sync) {
            await this.sync.stop();
        }
        this.initialized = undefined; // Should re-initialize when start() is called.
        this.sync = undefined;
        await this.runningProcesses.open();
        this.state = DataStoreState.NotRunning;
    }
    /**
     * Validates given pagination input from a query and creates a pagination
     * argument for use against the storage layer.
     *
     * @param modelDefinition
     * @param paginationProducer
     */
    processPagination(modelDefinition, paginationProducer) {
        let sortPredicate;
        const { limit, page, sort } = paginationProducer || {};
        if (limit === undefined && page === undefined && sort === undefined) {
            return undefined;
        }
        if (page !== undefined && limit === undefined) {
            throw new Error('Limit is required when requesting a page');
        }
        if (page !== undefined) {
            if (typeof page !== 'number') {
                throw new Error('Page should be a number');
            }
            if (page < 0) {
                throw new Error("Page can't be negative");
            }
        }
        if (limit !== undefined) {
            if (typeof limit !== 'number') {
                throw new Error('Limit should be a number');
            }
            if (limit < 0) {
                throw new Error("Limit can't be negative");
            }
        }
        if (sort) {
            sortPredicate = ModelSortPredicateCreator.createFromExisting(modelDefinition, sort);
        }
        return {
            limit,
            page,
            sort: sortPredicate,
        };
    }
    /**
     * Examines the configured `syncExpressions` and produces a WeakMap of
     * SchemaModel -> predicate to use during sync.
     */
    async processSyncExpressions() {
        if (!this.syncExpressions || !this.syncExpressions.length) {
            return new WeakMap();
        }
        const syncPredicates = await Promise.all(this.syncExpressions.map(async (syncExpression) => {
            const { modelConstructor, conditionProducer } = await syncExpression;
            const modelDefinition = getModelDefinition(modelConstructor);
            // conditionProducer is either a predicate, e.g. (c) => c.field.eq(1)
            // OR a function/promise that returns a predicate
            const condition = await this.unwrapPromise(conditionProducer);
            if (isPredicatesAll(condition)) {
                return [modelDefinition, null];
            }
            const predicate = internals(condition(predicateFor({
                builder: modelConstructor,
                schema: modelDefinition,
                pkField: extractPrimaryKeyFieldNames(modelDefinition),
            }))).toStoragePredicate();
            return [modelDefinition, predicate];
        }));
        return this.weakMapFromEntries(syncPredicates);
    }
    async unwrapPromise(conditionProducer) {
        try {
            const condition = await conditionProducer();
            return condition || conditionProducer;
        }
        catch (error) {
            if (error instanceof TypeError) {
                return conditionProducer;
            }
            throw error;
        }
    }
    weakMapFromEntries(entries) {
        return entries.reduce((map, [modelDefinition, predicate]) => {
            if (map.has(modelDefinition)) {
                const { name } = modelDefinition;
                logger.warn(`You can only utilize one Sync Expression per model.
          Subsequent sync expressions for the ${name} model will be ignored.`);
                return map;
            }
            if (predicate) {
                map.set(modelDefinition, predicate);
            }
            return map;
        }, new WeakMap());
    }
    /**
     * A session ID to allow CMS to open databases against multiple apps.
     * This session ID is only expected be set by AWS Amplify Studio.
     */
    retrieveSessionId() {
        try {
            const sessionId = sessionStorage.getItem('datastoreSessionId');
            if (sessionId) {
                const { aws_appsync_graphqlEndpoint } = this.amplifyConfig;
                const appSyncUrl = aws_appsync_graphqlEndpoint.split('/')[2];
                const [appSyncId] = appSyncUrl.split('.');
                return `${sessionId}-${appSyncId}`;
            }
        }
        catch { }
        return undefined;
    }
}
const instance = new DataStore();
instance.configure({});
Hub.listen('core', capsule => {
    if (capsule.payload.event === 'configure') {
        instance.configure({});
    }
});

var FormFieldType$1;
(function (FormFieldType) {
    FormFieldType["Text"] = "text";
    FormFieldType["Number"] = "number";
    FormFieldType["Date"] = "date";
    FormFieldType["Boolean"] = "boolean";
    FormFieldType["Object"] = "object";
    FormFieldType["List"] = "list";
})(FormFieldType$1 || (FormFieldType$1 = {}));
var DynamicInput = function (_a) {
    var data = _a.data, path = _a.path, onChange = _a.onChange, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, id = _a.id;
    var getValue = useCallback(function (obj, path) {
        try {
            var value = path.split(".").reduce(function (acc, part) { return acc && acc[part]; }, obj);
            // Handle different types based on the FormFieldType
            if (type === FormFieldType$1.Number) {
                var numberValue = parseFloat(value);
                return isNaN(numberValue) ? null : numberValue;
            }
            else if (type === FormFieldType$1.Boolean) {
                if (typeof value === "boolean") {
                    return value;
                }
                return value === "true" ? true : false;
            }
            else if (type === FormFieldType$1.Date) {
                var dateValue = new Date(value);
                return isNaN(dateValue.getTime()) ? null : dateValue;
            }
            else if (type === FormFieldType$1.Text) {
                return value;
            }
            // Default case
            return value;
        }
        catch (error) {
            console.error("Error getting value for path: ".concat(path), error);
            return undefined;
        }
    }, [type]);
    var setValue = function (obj, path, value) {
        var _a;
        var _b = path.split("."), head = _b[0], rest = _b.slice(1);
        return __assign(__assign({}, obj), (_a = {}, _a[head] = rest.length
            ? setValue(obj[head] || {}, rest.join("."), value)
            : value, _a));
    };
    var _c = useState(getValue(data, path) || ""), inputValue = _c[0], setInputValue = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    useEffect(function () {
        var value = getValue(data, path);
        setInputValue(value !== undefined ? value : "");
        setError(value === undefined ? "Invalid path: ".concat(path) : null);
    }, [data, path, getValue]);
    var handleChange = function (event) {
        var newValue;
        if (type === FormFieldType$1.Number) {
            var numberValue = parseFloat(event.target.value);
            if (isNaN(numberValue)) {
                setError("Invalid number value");
                return;
            }
            newValue = numberValue;
        }
        else if (type === FormFieldType$1.Boolean) {
            newValue = event.target.checked;
        }
        else if (type === FormFieldType$1.Date) {
            var dateValue = new Date(event.target.value);
            if (isNaN(dateValue.getTime())) {
                setError("Invalid date value");
                return;
            }
            newValue = dateValue;
        }
        else {
            newValue = event.target.value;
        }
        setInputValue(newValue);
        try {
            var updatedData = setValue(data, path, newValue);
            onChange(updatedData);
            setError(null);
        }
        catch (error) {
            console.error("Error setting value for path: ".concat(path), error);
            setError("Unable to set value for path: ".concat(path));
        }
    };
    var labelId = id || path;
    return (React.createElement(Flex, { direction: "column" },
        type === FormFieldType$1.Boolean ? (React.createElement(SwitchField, { id: labelId, label: label, isChecked: inputValue, onChange: handleChange })) : null,
        (type === FormFieldType$1.Text || type === FormFieldType$1.Number || type === FormFieldType$1.Date) ? (React.createElement(React.Fragment, null,
            React.createElement(Text, { as: "label", htmlFor: labelId }, label || path.split('.').pop()),
            React.createElement(Input, { id: labelId, "aria-label": label || path, value: inputValue, onChange: handleChange, placeholder: path, type: type, hasError: !!error, name: path }),
            error && React.createElement(Text, { color: "red" }, error))) : null));
};

var FormFieldType;
(function (FormFieldType) {
    FormFieldType["Text"] = "text";
    FormFieldType["Number"] = "number";
    FormFieldType["Date"] = "date";
    FormFieldType["Boolean"] = "boolean";
    FormFieldType["Object"] = "object";
    FormFieldType["List"] = "list";
})(FormFieldType || (FormFieldType = {}));
var DynamicForm = function (_a) {
    var data = _a.data, onChange = _a.onChange, onSubmit = _a.onSubmit, _b = _a.options, options = _b === void 0 ? {} : _b, resource = _a.resource, model = _a.model;
    var _c = useState(false), isNewRecord = _c[0], setIsNewRecord = _c[1];
    useEffect(function () {
        setIsNewRecord(!data.id);
    }, [data]);
    var renderFormFields = function (obj, parentKey) {
        if (parentKey === void 0) { parentKey = ""; }
        return Object.entries(obj).flatMap(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            var fullPath = parentKey ? "".concat(parentKey, ".").concat(key) : key;
            var fieldOptions = options[fullPath] || {};
            var fieldType = fieldOptions.type || (resource && ((_b = resource.fields[fullPath]) === null || _b === void 0 ? void 0 : _b.type)) || FormFieldType.Text;
            var fieldLabel = fieldOptions.label || key;
            if (typeof value === "object" && value !== null) {
                if (Array.isArray(value)) {
                    return [
                        React.createElement(Flex, { key: fullPath, direction: "column", gap: "0.5rem" },
                            React.createElement("strong", null, fieldLabel),
                            value.map(function (item, index) { return (React.createElement(Flex, { key: "".concat(fullPath, ".").concat(index), direction: "column", gap: "0.5rem" },
                                React.createElement("strong", null, "".concat(fieldLabel, " ").concat(index + 1)),
                                renderFormFields(item, "".concat(fullPath, ".").concat(index)))); }))
                    ];
                }
                else {
                    return [
                        React.createElement(Flex, { key: fullPath, direction: "column", gap: "0.5rem" },
                            React.createElement("strong", null, fieldLabel),
                            renderFormFields(value, fullPath))
                    ];
                }
            }
            return [
                React.createElement(DynamicInput, { key: fullPath, data: data, path: fullPath, onChange: onChange, label: fieldLabel, type: fieldType, id: fullPath })
            ];
        });
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var original, draft, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (onSubmit) {
                        onSubmit(data);
                        return [2 /*return*/];
                    }
                    if (!model) {
                        console.error("Model is not defined");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    if (!model || typeof model.save !== 'function') {
                        console.error("Model is not properly defined");
                        return [2 /*return*/];
                    }
                    if (!isNewRecord) return [3 /*break*/, 3];
                    return [4 /*yield*/, model.save(data)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    if (!data.id) return [3 /*break*/, 6];
                    return [4 /*yield*/, model.query(data.id)];
                case 4:
                    original = _a.sent();
                    if (!original) return [3 /*break*/, 6];
                    draft = __assign(__assign({}, original), data);
                    return [4 /*yield*/, model.save(draft)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    console.log(isNewRecord ? "New record created" : "Record updated successfully");
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error("Error saving record:", error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var toDelete, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!model || isNewRecord) {
                        console.error("Cannot delete: Model is not defined or record is new");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, instance.query(model, data.id)];
                case 2:
                    toDelete = _a.sent();
                    if (!toDelete) return [3 /*break*/, 4];
                    return [4 /*yield*/, instance.delete(toDelete)];
                case 3:
                    _a.sent();
                    console.log("Record deleted successfully");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error deleting record:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(Flex, { direction: "column", gap: "1rem", "data-testid": "dynamic-form" },
        renderFormFields(data),
        React.createElement(Flex, { gap: "1rem" },
            React.createElement(Button, { className: "rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300", onClick: handleSave }, isNewRecord ? "Create" : "Update"),
            !isNewRecord && React.createElement(Button, { onClick: handleDelete }, "Delete"))));
};

var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed top-0 left-0 right-0 bottom-0 bg-gray-900/80 backdrop-blur-sm" },
        React.createElement("div", { className: "fixed inset-0", onClick: onClose }),
        React.createElement("div", { className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-md shadow-lg p-5" },
            React.createElement("div", { className: "flex justify-between items-center rounded-t-md mx-auto pb-4 bg-white" },
                React.createElement("h2", { className: "text-xl font-bold" }, title),
                React.createElement(Button, { onClick: onClose, testId: "top-right-close", className: "text-gray-500 hover:text-gray-700" }, "\u00D7")),
            React.createElement("div", { className: "flex justify-between items-center mx-auto pb-4 bg-white" }, children))));
};

var SortableTable = function (_a) {
    var data = _a.data, columns = _a.columns, _b = _a.filter, filter = _b === void 0 ? false : _b, filterBy = _a.filterBy, dataTestId = _a["data-testid"];
    var _c = useState(null), sortColumn = _c[0], setSortColumn = _c[1];
    var _d = useState("asc"), sortDirection = _d[0], setSortDirection = _d[1];
    var _e = useState(""), filterValue = _e[0], setFilterValue = _e[1];
    var filteredAndSortedData = useMemo(function () {
        var result = data;
        if (filter && filterValue) {
            result = result.filter(function (row) {
                if (filterBy) {
                    return String(row[filterBy]).toLowerCase().includes(filterValue.toLowerCase());
                }
                else {
                    return Object.values(row).some(function (value) {
                        return String(value).toLowerCase().includes(filterValue.toLowerCase());
                    });
                }
            });
        }
        if (sortColumn) {
            result = __spreadArray([], result, true).sort(function (a, b) {
                if (a[sortColumn] < b[sortColumn])
                    return sortDirection === "asc" ? -1 : 1;
                if (a[sortColumn] > b[sortColumn])
                    return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }
        return result;
    }, [data, sortColumn, sortDirection, filter, filterValue, filterBy]);
    var handleSort = function (columnKey) {
        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }
        else {
            setSortColumn(columnKey);
            setSortDirection("asc");
        }
    };
    return (React.createElement(Table, { "data-testid": dataTestId },
        React.createElement(TableHead, null,
            React.createElement(TableRow, null, columns.map(function (column) { return (React.createElement(TableCell, { key: column.key, onClick: function () { return handleSort(column.key); } }, column.headerTemplate ? (column.headerTemplate(column, { sortColumn: sortColumn, sortDirection: sortDirection })) : (React.createElement(React.Fragment, null,
                column.label,
                " ",
                sortColumn === column.key && (sortDirection === "asc" ? "▲" : "▼"))))); })),
            filter && (React.createElement(TableRow, null,
                React.createElement(TableCell, { colSpan: columns.length },
                    React.createElement("input", { type: "text", placeholder: "Filter by ".concat(filterBy || "all columns"), value: filterValue, onChange: function (e) { return setFilterValue(e.target.value); }, style: { width: "100%", padding: "8px", boxSizing: "border-box" } }))))),
        React.createElement(TableBody, null, filteredAndSortedData.map(function (row, index) { return (React.createElement(TableRow, { key: index }, columns.map(function (column) { return (React.createElement(TableCell, { key: column.key }, column.template ? column.template(row) : row[column.key])); }))); }))));
};

var DataTable = function (_a) {
    var model = _a.model, columns = _a.columns, client = _a.client, _b = _a.subscribe, subscribe = _b === void 0 ? false : _b;
    var _c = useState([]), data = _c[0], setData = _c[1];
    var _d = useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var _e = useState(null), editingRecord = _e[0], setEditingRecord = _e[1];
    var _f = useState(null), subscription = _f[0], setSubscription = _f[1];
    var _g = useState(false), initatedSub = _g[0], setInitiatedSub = _g[1];
    var fetchData = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var records, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.models[model].list({})];
                case 1:
                    records = (_a.sent()).data;
                    setData(records);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error fetching data:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [client.models, model]);
    useEffect(function () {
        fetchData();
        if (subscribe && !initatedSub) {
            var sub = client.models[model].observeQuery().subscribe({
                next: function () { return fetchData(); },
                error: function (error) { return console.error("Subscription error:", error); },
            });
            setSubscription(sub);
            setInitiatedSub(true);
        }
        return function () {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
    }, [client.models, fetchData, model, subscribe, subscription, initatedSub]);
    var handleCreate = function () {
        setEditingRecord(null);
        setIsModalOpen(true);
    };
    var handleEdit = function (record) {
        setEditingRecord(record);
        setIsModalOpen(true);
    };
    var handleCloseModal = function () {
        setIsModalOpen(false);
        setEditingRecord(null);
    };
    var handleSave = function (newData) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!editingRecord) return [3 /*break*/, 2];
                    return [4 /*yield*/, client.models[model].update(__assign({ id: editingRecord.id }, newData))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, client.models[model].create(newData)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    fetchData();
                    handleCloseModal();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error saving data:", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var tableColumns = __spreadArray(__spreadArray([], columns, true), [
        {
            key: "actions",
            label: "Actions",
            template: function (record) { return (React.createElement(Button, { onClick: function () { return handleEdit(record); } }, "Edit")); },
        },
    ], false);
    return (React.createElement("div", null,
        React.createElement(Button, { "data-testid": "create-record-button", onClick: handleCreate }, "Create New Record"),
        React.createElement(SortableTable, { data: data, columns: tableColumns }),
        React.createElement(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: editingRecord ? "Edit Record" : "Create New Record" },
            React.createElement(DynamicForm, { data: editingRecord || {}, onChange: setEditingRecord, onSubmit: handleSave, model: client.models[model] }))));
};

var DynamicComponent = function (_a) {
    var options = _a.options;
    var component = options.component, props = options.props, children = options.children;
    // Check if the component exists in Amplify UI
    if (!(component in UI)) {
        console.error("Component ".concat(component, " not found in Amplify UI"));
        return null;
    }
    var Component = UI[component];
    // If props contain children and there are no nested components, pass props directly
    if (props.children && !children) {
        return React.createElement(Component, __assign({}, props));
    }
    // Render children if they exist
    var renderedChildren = children === null || children === void 0 ? void 0 : children.map(function (child, index) { return (React.createElement(DynamicComponent, { key: index, options: child })); });
    // Remove children from props to avoid conflicts
    props.children; var restProps = __rest(props, ["children"]);
    return React.createElement(Component, __assign({}, restProps), renderedChildren);
};

var MenuLinks = function (_a) {
    var items = _a.items, label = _a.label, onNavigate = _a.onNavigate;
    var handleClick = function (item) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!item.preloadData) return [3 /*break*/, 2];
                    return [4 /*yield*/, item.preloadData()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!onNavigate) return [3 /*break*/, 4];
                    return [4 /*yield*/, onNavigate(item.path, item.params)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    window.location.href = item.path;
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "mb-2" },
        label ? React.createElement("span", { className: "text-lg" }, label) : null,
        React.createElement("nav", { className: "grid grid-cols-1" }, items.map(function (item, index) { return (React.createElement("div", { key: item.path },
            React.createElement(Link, { className: "min-w-full m-2", onClick: function () { return handleClick(item); } },
                item.icon && React.createElement("i", { className: "m-2 ".concat(item.icon) }),
                item.label),
            index < items.length - 1 && (React.createElement(Divider, { className: "divide-red-500", size: "small", orientation: "horizontal" })))); }))));
};

var MultiSelectField = function (_a) {
    var options = _a.options, onChange = _a.onChange, label = _a.label;
    var _b = useState([]), selectedOptions = _b[0], setSelectedOptions = _b[1];
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var wrapperRef = useRef(null);
    useEffect(function () {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    var handleChange = function (value) {
        var updatedSelection = selectedOptions.includes(value)
            ? selectedOptions.filter(function (item) { return item !== value; })
            : __spreadArray(__spreadArray([], selectedOptions, true), [value], false);
        setSelectedOptions(updatedSelection);
        onChange(updatedSelection);
    };
    var toggleOptions = function () {
        setIsOpen(!isOpen);
    };
    var getSelectedLabels = function () {
        return selectedOptions
            .map(function (value) { var _a; return (_a = options.find(function (option) { return option.value === value; })) === null || _a === void 0 ? void 0 : _a.label; })
            .filter(Boolean)
            .join(", ");
    };
    return (React.createElement(Flex, { direction: "column", style: { position: "relative", overflow: "visible" }, ref: wrapperRef },
        React.createElement(Text, null, label),
        React.createElement(Flex, { direction: "row", alignItems: "center" },
            React.createElement(View, { width: "100%", onClick: toggleOptions, style: { cursor: "pointer" } },
                React.createElement(Input, { readOnly: true, value: getSelectedLabels(), placeholder: "Select options", style: { cursor: "pointer" } })),
            React.createElement(Button, { onClick: toggleOptions, variation: "primary" }, isOpen ? "▲" : "▼")),
        React.createElement(View, { style: {
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                right: 0,
                maxHeight: "200px",
                overflowY: "auto",
                backgroundColor: "var(--amplify-colors-background-secondary)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? "visible" : "hidden",
                transition: "opacity 0.2s, visibility 0.2s",
                zIndex: 10,
            } },
            React.createElement(Flex, { direction: "column", padding: "medium" }, options.map(function (option) { return (React.createElement(CheckboxField, { key: option.value, label: option.label, name: option.value, value: option.value, checked: selectedOptions.includes(option.value), onChange: function () { return handleChange(option.value); } })); })))));
};

function OrderedList(_a) {
    var value = _a.value, onOrderChange = _a.onOrderChange;
    var _b = useState(false), dragging = _b[0], setDragging = _b[1];
    var dragItem = React.useRef(null);
    var dragNode = React.useRef(null);
    var items = useState(value.map(function (item, index) { return (__assign(__assign({}, item), { order: index })); }))[0];
    var _c = useState(null), draggedIndex = _c[0], setDraggedIndex = _c[1];
    var handleDragStart = function (e, index) {
        dragItem.current = index;
        dragNode.current = e.target;
        e.dataTransfer.setData("text/plain", index.toString());
        dragNode.current.addEventListener("dragend", handleDragEnd);
        setTimeout(function () {
            setDragging(true);
        }, 0);
        setDraggedIndex(index);
    };
    var handleDragOver = function (e) {
        e.preventDefault();
    };
    var getTargetIndex = function (e) {
        var targetElement = e.target;
        var cardElement = targetElement.closest("[data-index]");
        if (cardElement) {
            return parseInt(cardElement.getAttribute("data-index") || "-1", 10);
        }
        return -1;
    };
    var handleDrop = function (e, targetIndex) {
        e.preventDefault();
        var draggedIndex = Number(e.dataTransfer.getData("text/plain"));
        if (draggedIndex === targetIndex)
            return;
        var newItems = __spreadArray([], value, true);
        var draggedItem = newItems.splice(draggedIndex, 1)[0];
        newItems.splice(targetIndex, 0, draggedItem);
        // Ensure all properties are preserved while updating order
        var reorderedItems = newItems.map(function (item, index) { return (__assign(__assign({}, item), { order: index })); });
        onOrderChange === null || onOrderChange === void 0 ? void 0 : onOrderChange(reorderedItems);
    };
    var handleDragEnter = function (e) {
        var targetIndex = getTargetIndex(e);
        if (targetIndex !== -1 && dragItem.current !== null && dragItem.current !== targetIndex) {
            handleDrop(e, targetIndex);
        }
    };
    var handleDragEnd = function (e) {
        var _a;
        var finalTargetIndex = getTargetIndex(e);
        if (finalTargetIndex !== -1 && dragItem.current !== null && dragItem.current !== finalTargetIndex) {
            handleDrop(e, finalTargetIndex);
        }
        setDragging(false);
        setDraggedIndex(null);
        (_a = dragNode.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("dragend", handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    };
    return (React.createElement(Flex, { direction: "column" }, items.map(function (item, index) { return (React.createElement(Card, { key: index, variation: "outlined", padding: "1rem", marginBottom: "0.5rem", "data-index": index, style: {
            opacity: dragging && draggedIndex === index ? 0.5 : 1,
            border: dragging && draggedIndex === index ? "2px dashed #007bff" : undefined
        }, "aria-grabbed": dragging && draggedIndex === index, "aria-dropeffect": "move" },
        React.createElement(Flex, { alignItems: "center" },
            React.createElement(View, { as: "div", padding: "0.5rem", marginRight: "0.5rem", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", draggable: true, onDragStart: function (e) { return handleDragStart(e, index); }, onDragOver: handleDragOver, onDragEnter: handleDragEnter, onTouchStart: function (e) { return handleDragStart(e, index); }, "aria-label": "Drag handle" },
                React.createElement(Icon, { ariaLabel: "Drag handle", viewBox: { width: 24, height: 24 }, paths: [
                        { d: "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" },
                    ] })),
            React.createElement(Flex, { direction: "column", style: { userSelect: "none" } }, Object.entries(item).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (key !== "order" && React.createElement("p", { key: key }, "".concat(key, ": ").concat(value)));
            }))))); })));
}

var Panel = function (_a) {
    var id = _a.id, title = _a.title, minWidth = _a.minWidth, minHeight = _a.minHeight, children = _a.children;
    return (React.createElement(View, { as: "div", id: id, className: "".concat(minWidth, " ").concat(minHeight), backgroundColor: "var(--amplify-colors-background-secondary)", padding: "1rem", borderRadius: "medium" },
        React.createElement(View, { as: "h2", marginBottom: "1rem", fontSize: "xl", fontWeight: "bold" }, title),
        React.createElement(View, { as: "div", className: "panel-body" }, React.Children.map(children, function (child) {
            if (React.isValidElement(child) && (child.type === SortableTable || child.type === DynamicForm)) {
                return child;
            }
            return null;
        }))));
};

var Popover = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, children = _a.children, anchorEl = _a.anchorEl;
    var popoverRef = useRef(null);
    var _b = useState({ top: 0, left: 0 }), position = _b[0], setPosition = _b[1];
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (visible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [visible, onClose]);
    useEffect(function () {
        if (anchorEl && popoverRef.current) {
            var anchorRect = anchorEl.getBoundingClientRect();
            var popoverRect = popoverRef.current.getBoundingClientRect();
            setPosition({
                top: anchorRect.bottom + window.scrollY,
                left: anchorRect.left + window.scrollX - (popoverRect.width - anchorRect.width) / 2,
            });
        }
    }, [anchorEl, visible]);
    if (!visible)
        return null;
    return (React.createElement(View, { ref: popoverRef, className: "fixed z-10 bg-white border border-gray-200 rounded shadow-lg p-4", style: {
            top: "".concat(position.top, "px"),
            left: "".concat(position.left, "px"),
        } }, children));
};

export { Autocomplete, Chip, ColorSelection, Dashboard, DataTable, DynamicComponent, DynamicForm, DynamicInput, FormFieldType, MenuLinks, Modal, MultiSelectField, OrderedList, Panel, Popover, SortableTable };
//# sourceMappingURL=index.js.map
