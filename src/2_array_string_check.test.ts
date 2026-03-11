import { describe, it, expect } from 'vitest';
import { checkArrayString } from './2_array_string_check.js';

describe("arrayStringCheck", () =>{
    it('sort array string ["SG20", "TH2", "TH19"]', () =>{
        expect(checkArrayString(["TH19", "SG20", "TH2"])).toEqual(["SG20", "TH2", "TH19"]);
    })
    it('sort array string ["TH1", "TH3Netflix", "TH7", "TH10"]', () =>{
        expect(checkArrayString(["TH10", "TH3Netflix" , "TH1", "TH7"])).toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
    })
})