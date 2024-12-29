'use strict';

var React = require('react');
var UI = require('@aws-amplify/ui-react');
var router = require('next/router');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var UI__namespace = /*#__PURE__*/_interopNamespaceDefault(UI);

function Autocomplete(_a) {
    var options = _a.options, displayProperty = _a.displayProperty, valueProperty = _a.valueProperty, value = _a.value, onChange = _a.onChange, label = _a.label;
    var _b = React.useState(""), inputValue = _b[0], setInputValue = _b[1];
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = React.useState(options), filteredOptions = _d[0], setFilteredOptions = _d[1];
    React.useEffect(function () {
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
    return (React.createElement(UI.Flex, { direction: "column", position: "relative" },
        label && React.createElement(UI.Text, null, label),
        React.createElement(UI.Input, { value: inputValue, onChange: handleInputChange, onFocus: handleInputFocus, onBlur: handleInputBlur, placeholder: "Type to search..." }),
        isOpen && (React.createElement(UI.View, { position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", borderWidth: "1px", borderStyle: "solid", borderColor: "gray.300", borderRadius: "md", maxHeight: "200px" }, filteredOptions.map(function (option, index) { return (React.createElement(UI.Button, { key: String(option[valueProperty]), onClick: function () { return handleOptionSelect(option); }, width: "100%", justifyContent: "flex-start", backgroundColor: index % 2 === 0 ? "gray.100" : "white" }, String(option[displayProperty]))); })))));
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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Chip = function (_a) {
    var value = _a.value, onChange = _a.onChange, options = _a.options, label = _a.label;
    var _b = React.useState([]), chips = _b[0], setChips = _b[1];
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
            React.createElement(UI.Autocomplete, { label: label, options: options, value: value, onChange: function (e) { return onChange(e.target.value); }, onKeyDown: handleKeyDown, onSelect: handleOnSelect })));
    }
    return (React.createElement("div", null,
        renderChips(),
        React.createElement(UI.Input, { value: value, onChange: function (e) { return onChange(e.target.value); }, onKeyDown: handleKeyDown })));
};

var ColorSelection = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.output, output = _b === void 0 ? "hex" : _b, className = _a.className;
    var _c = React.useState(false); _c[0]; var setIsOpen = _c[1];
    React.useRef(null);
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
    var data = _a.data, path = _a.path, onChange = _a.onChange, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b;
    var getValue = React.useCallback(function (obj, path) {
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
    var _c = React.useState(getValue(data, path) || ""), inputValue = _c[0], setInputValue = _c[1];
    var _d = React.useState(null), error = _d[0], setError = _d[1];
    React.useEffect(function () {
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
    return (React.createElement(UI.Flex, { direction: "column" },
        type === FormFieldType$1.Boolean ? (React.createElement(UI.SwitchField, { label: label, isChecked: inputValue, onChange: handleChange })) : null,
        (type === FormFieldType$1.Text || type === FormFieldType$1.Number) ? (React.createElement(React.Fragment, null,
            label && React.createElement(UI.Text, null, label),
            React.createElement(UI.Input, { value: inputValue, onChange: handleChange, placeholder: path, type: type, hasError: !!error }),
            error && React.createElement(UI.Text, { color: "red" }, error))) : null));
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
    var _c = React.useState(false), isNewRecord = _c[0], setIsNewRecord = _c[1];
    React.useEffect(function () {
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
                        React.createElement(UI.Flex, { key: fullPath, direction: "column", gap: "0.5rem" },
                            React.createElement("strong", null, fieldLabel),
                            value.map(function (item, index) { return (React.createElement(UI.Flex, { key: "".concat(fullPath, ".").concat(index), direction: "column", gap: "0.5rem" },
                                React.createElement("strong", null, "".concat(fieldLabel, " ").concat(index + 1)),
                                renderFormFields(item, "".concat(fullPath, ".").concat(index)))); }))
                    ];
                }
                else {
                    return [
                        React.createElement(UI.Flex, { key: fullPath, direction: "column", gap: "0.5rem" },
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
        var newRecord, original, error_1;
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
                    if (!isNewRecord) return [3 /*break*/, 3];
                    return [4 /*yield*/, model.create(data)];
                case 2:
                    newRecord = _a.sent();
                    console.log("New record created:", newRecord.data);
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, model.query(model, data.id)];
                case 4:
                    original = _a.sent();
                    if (!original) return [3 /*break*/, 6];
                    return [4 /*yield*/, model.update(data)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    console.log("Record saved successfully");
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
                    return [4 /*yield*/, model.query(model, data.id)];
                case 2:
                    toDelete = _a.sent();
                    if (!toDelete) return [3 /*break*/, 4];
                    return [4 /*yield*/, model.delete(toDelete)];
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
    return (React.createElement(UI.Flex, { direction: "column", gap: "1rem" },
        renderFormFields(data),
        React.createElement(UI.Flex, { gap: "1rem" },
            React.createElement(UI.Button, { className: "rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300", onClick: handleSave }, isNewRecord ? "Create" : "Update"),
            !isNewRecord && React.createElement(UI.Button, { onClick: handleDelete }, "Delete"))));
};

var SortableTable = function (_a) {
    var data = _a.data, columns = _a.columns, _b = _a.filter, filter = _b === void 0 ? false : _b, filterBy = _a.filterBy;
    var _c = React.useState(null), sortColumn = _c[0], setSortColumn = _c[1];
    var _d = React.useState("asc"), sortDirection = _d[0], setSortDirection = _d[1];
    var _e = React.useState(""), filterValue = _e[0], setFilterValue = _e[1];
    var filteredAndSortedData = React.useMemo(function () {
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
    return (React.createElement(UI.Table, null,
        React.createElement(UI.TableHead, null,
            React.createElement(UI.TableRow, null, columns.map(function (column) { return (React.createElement(UI.TableCell, { key: column.key, onClick: function () { return handleSort(column.key); } }, column.headerTemplate ? (column.headerTemplate(column, { sortColumn: sortColumn, sortDirection: sortDirection })) : (React.createElement(React.Fragment, null,
                column.label,
                " ",
                sortColumn === column.key && (sortDirection === "asc" ? "▲" : "▼"))))); })),
            filter && (React.createElement(UI.TableRow, null,
                React.createElement(UI.TableCell, { colSpan: columns.length },
                    React.createElement("input", { type: "text", placeholder: "Filter by ".concat(filterBy || "all columns"), value: filterValue, onChange: function (e) { return setFilterValue(e.target.value); }, style: { width: "100%", padding: "8px", boxSizing: "border-box" } }))))),
        React.createElement(UI.TableBody, null, filteredAndSortedData.map(function (row, index) { return (React.createElement(UI.TableRow, { key: index }, columns.map(function (column) { return (React.createElement(UI.TableCell, { key: column.key }, column.template ? column.template(row) : row[column.key])); }))); }))));
};

var Panel = function (_a) {
    var id = _a.id, title = _a.title, minWidth = _a.minWidth, minHeight = _a.minHeight, children = _a.children;
    return (React.createElement(UI.View, { as: "div", id: id, className: "".concat(minWidth, " ").concat(minHeight), backgroundColor: "var(--amplify-colors-background-secondary)", padding: "1rem", borderRadius: "medium" },
        React.createElement(UI.View, { as: "h2", marginBottom: "1rem", fontSize: "xl", fontWeight: "bold" }, title),
        React.createElement(UI.View, { as: "div", className: "panel-body" }, React.Children.map(children, function (child) {
            if (React.isValidElement(child) && (child.type === SortableTable || child.type === DynamicForm)) {
                return child;
            }
            return null;
        }))));
};

var Dashboard = function (_a) {
    var panels = _a.panels;
    return (React.createElement(UI.View, { as: "div", className: "dashboard-container" }, panels.map(function (panel) { return (React.createElement(Panel, { key: panel.id, id: panel.id, title: panel.title, minWidth: panel.minWidth, minHeight: panel.minHeight, location: panel.location }, panel.content)); })));
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
                React.createElement(UI.Button, { onClick: onClose, testId: "top-right-close", className: "text-gray-500 hover:text-gray-700" }, "\u00D7")),
            React.createElement("div", { className: "flex justify-between items-center mx-auto pb-4 bg-white" }, children))));
};

var DataTable = function (_a) {
    var model = _a.model, columns = _a.columns, client = _a.client, _b = _a.subscribe, subscribe = _b === void 0 ? false : _b;
    var _c = React.useState([]), data = _c[0], setData = _c[1];
    var _d = React.useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var _e = React.useState(null), editingRecord = _e[0], setEditingRecord = _e[1];
    var _f = React.useState(null), subscription = _f[0], setSubscription = _f[1];
    var _g = React.useState(false), initatedSub = _g[0], setInitiatedSub = _g[1];
    var fetchData = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
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
    React.useEffect(function () {
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
            template: function (record) { return (React.createElement(UI.Button, { onClick: function () { return handleEdit(record); } }, "Edit")); },
        },
    ], false);
    return (React.createElement("div", null,
        React.createElement(UI.Button, { onClick: handleCreate }, "Create New Record"),
        React.createElement(SortableTable, { data: data, columns: tableColumns }),
        React.createElement(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: editingRecord ? "Edit Record" : "Create New Record" },
            React.createElement(DynamicForm, { data: editingRecord || {}, onChange: setEditingRecord, onSubmit: handleSave, model: client.models[model] }))));
};

var DynamicComponent = function (_a) {
    var options = _a.options;
    var component = options.component, props = options.props, children = options.children;
    // Check if the component exists in Amplify UI
    if (!(component in UI__namespace)) {
        console.error("Component ".concat(component, " not found in Amplify UI"));
        return null;
    }
    var Component = UI__namespace[component];
    // Render children if they exist
    var renderedChildren = children === null || children === void 0 ? void 0 : children.map(function (child, index) { return (React.createElement(DynamicComponent, __assign({ key: index }, child))); });
    return React.createElement(Component, __assign({}, props), renderedChildren);
};

var MenuLinks = function (_a) {
    var items = _a.items, label = _a.label;
    var router$1 = router.useRouter();
    var handleClick = React.useCallback(function (item) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!item.preloadData) return [3 /*break*/, 2];
                    return [4 /*yield*/, item.preloadData()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, router$1.push({
                        pathname: item.path,
                        query: item.params,
                    })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [router$1]);
    return (React.createElement("div", { className: "mb-2" },
        label ? React.createElement("span", { className: "text-lg" }, label) : null,
        React.createElement("nav", { className: "grid grid-cols-1" }, items.map(function (item, index) { return (React.createElement(React.Fragment, { key: item.path },
            React.createElement(UI.Link, { className: "min-w-full m-2", onClick: function () { return handleClick(item); } },
                item.icon && React.createElement("i", { className: "m-2 ".concat(item.icon) }),
                item.label),
            index < items.length - 1 && (React.createElement(UI.Divider, { className: "divide-red-500", size: "small", orientation: "horizontal" })))); }))));
};

var MultiSelectField = function (_a) {
    var options = _a.options, onChange = _a.onChange, label = _a.label;
    var _b = React.useState([]), selectedOptions = _b[0], setSelectedOptions = _b[1];
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var wrapperRef = React.useRef(null);
    React.useEffect(function () {
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
    return (React.createElement(UI.Flex, { direction: "column", style: { position: "relative", overflow: "visible" }, ref: wrapperRef },
        React.createElement(UI.Text, null, label),
        React.createElement(UI.Flex, { direction: "row", alignItems: "center" },
            React.createElement(UI.View, { width: "100%", onClick: toggleOptions, style: { cursor: "pointer" } },
                React.createElement(UI.Input, { readOnly: true, value: getSelectedLabels(), placeholder: "Select options", style: { cursor: "pointer" } })),
            React.createElement(UI.Button, { onClick: toggleOptions, variation: "primary" }, isOpen ? "▲" : "▼")),
        React.createElement(UI.View, { style: {
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
            React.createElement(UI.Flex, { direction: "column", padding: "medium" }, options.map(function (option) { return (React.createElement(UI.CheckboxField, { key: option.value, label: option.label, name: option.value, value: option.value, checked: selectedOptions.includes(option.value), onChange: function () { return handleChange(option.value); } })); })))));
};

var OrderedList = function (_a) {
    var value = _a.value, onOrderChange = _a.onOrderChange;
    var _b = React.useState(false), dragging = _b[0], setDragging = _b[1];
    var dragItem = React.useRef(null);
    var dragNode = React.useRef(null);
    var _c = React.useState(value.map(function (item, index) { return (__assign(__assign({}, item), { order: index })); })), items = _c[0], setItems = _c[1];
    var _d = React.useState(null), draggedIndex = _d[0], setDraggedIndex = _d[1];
    var handleDragStart = function (e, index) {
        dragItem.current = index;
        dragNode.current = e.target;
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
    var handleDrop = function (targetIndex) {
        var currentItem = dragItem.current;
        if (currentItem !== null && currentItem !== targetIndex) {
            var newItems = __spreadArray([], items, true);
            var reorderedItem = newItems.splice(currentItem, 1)[0];
            newItems.splice(targetIndex, 0, reorderedItem);
            var updatedItems = newItems.map(function (item, index) { return (__assign(__assign({}, item), { order: index })); });
            setItems(updatedItems);
            if (onOrderChange) {
                var orderedItems = updatedItems.map(function (_a) {
                    var order = _a.order;
                    return ({ order: order });
                });
                onOrderChange(orderedItems);
            }
            dragItem.current = targetIndex;
        }
    };
    var handleDragEnter = function (e) {
        var targetIndex = getTargetIndex(e);
        if (targetIndex !== -1 && dragItem.current !== null && dragItem.current !== targetIndex) {
            handleDrop(targetIndex);
        }
    };
    var handleDragEnd = function (e) {
        var _a;
        var finalTargetIndex = getTargetIndex(e);
        if (finalTargetIndex !== -1 && dragItem.current !== null && dragItem.current !== finalTargetIndex) {
            handleDrop(finalTargetIndex);
        }
        setDragging(false);
        setDraggedIndex(null);
        (_a = dragNode.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("dragend", handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    };
    return (React.createElement(UI.Flex, { direction: "column" }, items.map(function (item, index) { return (React.createElement(UI.Card, { key: index, variation: "outlined", padding: "1rem", marginBottom: "0.5rem", "data-index": index, style: {
            opacity: dragging && draggedIndex === index ? 0.5 : 1,
            border: dragging && draggedIndex === index ? "2px dashed #007bff" : undefined
        }, "aria-grabbed": dragging && draggedIndex === index, "aria-dropeffect": "move" },
        React.createElement(UI.Flex, { alignItems: "center" },
            React.createElement(UI.View, { as: "div", padding: "0.5rem", marginRight: "0.5rem", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", draggable: true, onDragStart: function (e) { return handleDragStart(e, index); }, onDragOver: handleDragOver, onDragEnter: handleDragEnter, onTouchStart: function (e) { return handleDragStart(e, index); }, "aria-label": "Drag handle" },
                React.createElement(UI.Icon, { ariaLabel: "Drag handle", viewBox: { width: 24, height: 24 }, paths: [
                        { d: "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" },
                    ] })),
            React.createElement(UI.Flex, { direction: "column", style: { userSelect: "none" } }, Object.entries(item).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (key !== "order" && React.createElement("p", { key: key }, "".concat(key, ": ").concat(value)));
            }))))); })));
};

var Popover = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, children = _a.children, anchorEl = _a.anchorEl;
    var popoverRef = React.useRef(null);
    var _b = React.useState({ top: 0, left: 0 }), position = _b[0], setPosition = _b[1];
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    return (React.createElement(UI.View, { ref: popoverRef, className: "fixed z-10 bg-white border border-gray-200 rounded shadow-lg p-4", style: {
            top: "".concat(position.top, "px"),
            left: "".concat(position.left, "px"),
        } }, children));
};

exports.Autocomplete = Autocomplete;
exports.Chip = Chip;
exports.ColorSelection = ColorSelection;
exports.Dashboard = Dashboard;
exports.DataTable = DataTable;
exports.DynamicComponent = DynamicComponent;
exports.DynamicForm = DynamicForm;
exports.DynamicInput = DynamicInput;
exports.MenuLinks = MenuLinks;
exports.Modal = Modal;
exports.MultiSelectField = MultiSelectField;
exports.OrderedList = OrderedList;
exports.Panel = Panel;
exports.Popover = Popover;
exports.Table = SortableTable;
//# sourceMappingURL=index.js.map
