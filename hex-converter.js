// hex-converter - convert hexadecimal number in browser.
// Copyright (C) 2024-2025  Yu Hongbo, CNOCTAVE

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.HexConverter = factory());
}(this, function () {
    /**
     * 十六进制转换工具类
     */
    class HexConverter {
        /**
         * 将数字转换为十六进制字符串
         * @param {number} num - 要转换的数字
         * @returns {string} 十六进制字符串
         */
        static int2hex(num) {
            if (typeof num !== 'number' || isNaN(num)) {
                throw new TypeError('Expected a number');
            }
            return num.toString(16);
        }

        /**
         * 将十六进制字符串转换为数字
         * @param {string} hex - 十六进制字符串
         * @returns {number} 转换后的数字
         */
        static hex2int(hex) {
            if (typeof hex !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (!/^[0-9a-f]+$/i.test(hex)) {
                throw new Error('Invalid hex string');
            }
            return parseInt(hex, 16);
        }

        /**
         * 将十六进制字符串转换为二进制字符串
         * @param {string} hex - 十六进制字符串
         * @returns {string} 二进制字符串
         */
        static hex2bin(hex) {
            if (typeof hex !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (!/^[0-9a-f]+$/i.test(hex)) {
                throw new Error('Invalid hex string');
            }
            return parseInt(hex, 16).toString(2);
        }

        /**
         * 将二进制字符串转换为十六进制字符串
         * @param {string} bin - 二进制字符串
         * @returns {string} 十六进制字符串
         */
        static bin2hex(bin) {
            if (typeof bin !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (!/^[01]+$/.test(bin)) {
                throw new Error('Invalid binary string');
            }
            return parseInt(bin, 2).toString(16);
        }

        /**
         * 将十六进制字符串转换为八进制字符串
         * @param {string} hex - 十六进制字符串
         * @returns {string} 八进制字符串
         */
        static hex2oct(hex) {
            if (typeof hex !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (!/^[0-9a-f]+$/i.test(hex)) {
                throw new Error('Invalid hex string');
            }
            return parseInt(hex, 16).toString(8);
        }

        /**
         * 将八进制字符串转换为十六进制字符串
         * @param {string} oct - 八进制字符串
         * @returns {string} 十六进制字符串
         */
        static oct2hex(oct) {
            if (typeof oct !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (!/^[0-7]+$/.test(oct)) {
                throw new Error('Invalid octal string');
            }
            return parseInt(oct, 8).toString(16);
        }

        /**
         * 将十六进制字符串转换为任意进制字符串
         * @param {string} hex - 十六进制字符串
         * @param {number} radix - 目标进制(2-36)
         * @returns {string} 目标进制字符串
         */
        static hex2any(hex, radix) {
            if (typeof hex !== 'string') {
                throw new TypeError('Expected a hex string');
            }
            if (!/^[0-9a-f]+$/i.test(hex)) {
                throw new Error('Invalid hex string');
            }
            if (typeof radix !== 'number' || radix < 2 || radix > 36) {
                throw new RangeError('Radix must be between 2 and 36');
            }
            return parseInt(hex, 16).toString(radix);
        }

        /**
         * 将任意进制字符串转换为十六进制字符串
         * @param {string} str - 要转换的字符串
         * @param {number} fromRadix - 原始进制(2-36)
         * @returns {string} 十六进制字符串
         */
        static any2hex(str, fromRadix) {
            if (typeof str !== 'string') {
                throw new TypeError('Expected a string');
            }
            if (typeof fromRadix !== 'number' || fromRadix < 2 || fromRadix > 36) {
                throw new RangeError('Radix must be between 2 and 36');
            }
            
            // 验证字符串是否匹配指定的进制字符集
            const validChars = '0123456789abcdefghijklmnopqrstuvwxyz'.substring(0, fromRadix);
            const regex = new RegExp(`^[${validChars}]+$`, 'i');
            if (!regex.test(str)) {
                throw new Error(`String contains invalid characters for radix ${fromRadix}`);
            }

            return parseInt(str, fromRadix).toString(16);
        }
    }

    return HexConverter;
}));