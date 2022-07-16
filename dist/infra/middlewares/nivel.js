"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nivel(nivelList) {
    return (req, res, next) => {
        var _a, _b;
        if (typeof ((_a = req.user) === null || _a === void 0 ? void 0 : _a.nivel) === "undefined") {
            return res.status(401).json("Sem nivel de acesso");
        }
        if (!nivelList.includes((_b = req.user) === null || _b === void 0 ? void 0 : _b.nivel)) {
            return res.status(401).json("Sem nivel de acesso");
        }
        return next();
    };
}
exports.default = nivel;
