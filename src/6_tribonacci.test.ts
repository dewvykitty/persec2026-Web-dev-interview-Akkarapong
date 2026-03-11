import { describe, it, expect } from 'vitest';
import { tribonacci } from './6_tribonacci.js';

describe ('tribonacci', () => {
    it('Should be []', () => {
        expect(tribonacci([], 0)).toEqual([]);
    });
    it('Should be [5]', () => {
        expect(tribonacci([5,2,0], 1)).toEqual([5]);
    });
    it('Should be [0,0]', () => {
        expect(tribonacci([1], 2)).toEqual([0,0]);
    });
    it('Should be [3,4,1,8,13]', () => {
        expect(tribonacci([3,4,1], 5)).toEqual([3,4,1,8,13]);
    });
    it('Should be [1,3,5,9,17]', () => {
        expect(tribonacci([1,3,5], 5)).toEqual([1,3,5,9,17]);
    });
    it('Should be [2,2,2]', () => {
        expect(tribonacci([2,2,2], 3)).toEqual([2,2,2]);
    });
    it('Should be [10,10,10,30]', () => {
        expect(tribonacci([10,10,10], 4)).toEqual([10,10,10,30]);
    });
});