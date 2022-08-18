"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSlippagePercentage = void 0;
const percentage_1 = require("../public/utils/models/percentage");
exports.defaultSlippagePercentage = percentage_1.Percentage.fromFraction(1, 1000); // 0.1%
