import { describe, it, expect } from 'vitest';
import { positiveIntSort } from './5_positive_int_sort.js';

describe('positiveIntSort', () => {
    it('Should be 8300', () => {
        expect(positiveIntSort(3008)).toBe(8300);
    });
    it('Should be 1989', () => {
        expect(positiveIntSort(1989)).toBe(9981);
    });
    it('Should be 2679', () => {
        expect(positiveIntSort(2679)).toBe(9762);
    });
    it('Should be 9163', () => {
        expect(positiveIntSort(9163)).toBe(9631);
    });
});