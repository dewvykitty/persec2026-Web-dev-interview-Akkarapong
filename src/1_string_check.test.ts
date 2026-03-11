import { describe, it, expect, test } from 'vitest';
import { checkString } from './1_string_check.js';

describe("inputCheck", () =>{
    it("() should be true", () =>{
        expect(checkString("()")).toBe(true);
    })
    it("([]] should be false", () =>{
        expect(checkString("([]]")).toBe(false);
    })
    it("([{}]) should be true", () =>{
        expect(checkString("([{}])")).toBe(true);
    })
    it("([{}]]] should be false", () =>{
        expect(checkString("([{}]]]")).toBe(false);
    })
    it("(]}]) should be false", () =>{
        expect(checkString("(]}])")).toBe(false);
    })
    it("([)] should be false", () =>{
        expect(checkString("([)]")).toBe(false);
    })
    it("{ should be false", () =>{
        expect(checkString("{")).toBe(false);
    })
})