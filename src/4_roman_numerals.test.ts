import { describe, it, expect } from 'vitest';
import { convertRomanNumeralsToNumber, convertNumberToRomanNumerals } from './4_roman_numerals.js';

describe('convertRomanNumeralsToNumber', () => {
    it('Should be 1989', () => {
        expect(convertRomanNumeralsToNumber('MCMLXXXIX')).toBe(1989);
    });
    it('Should be 2000', () => {
        expect(convertRomanNumeralsToNumber('MM')).toBe(2000);
    });
    it('Should be 68', () => {
        expect(convertRomanNumeralsToNumber('LXVIII')).toBe(68);
    });
    it('Should be 109', () => {
        expect(convertRomanNumeralsToNumber('CIX')).toBe(109);
    });
});

describe('convertNumberToRomanNumerals', () => {
    it('Should be MCMLXXXIX', () => {
        expect(convertNumberToRomanNumerals(1989)).toBe('MCMLXXXIX');
    });
    it('Should be MM', () => {
        expect(convertNumberToRomanNumerals(2000)).toBe('MM');
    });
    it('Should be LXVIII', () => {
        expect(convertNumberToRomanNumerals(68)).toBe('LXVIII');
    });
    it('Should be CIX', () => {
        expect(convertNumberToRomanNumerals(109)).toBe('CIX');
    });``
});