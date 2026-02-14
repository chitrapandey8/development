"use strict";
//variable decleration
Object.defineProperty(exports, "__esModule", { value: true });
const isobj = (arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg != null) {
        return { arg, isObject: true };
    }
    return { arg, isObject: false };
};
console.log(isobj({ name: "JS" }), isobj([56]), isobj(true), isobj(null));
//# sourceMappingURL=main.js.map