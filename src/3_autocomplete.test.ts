import { describe, it, expect } from 'vitest';
import { autocomplete } from './3_autocomplete.js';

const items = ['Mother', 'Think', 'Worthy', 'Apple', 'Android'];

describe('autocomplete', () => {
  it('search "th" and need 3 results should be "Think", "Mother", "Worthy"', () => {
    expect(autocomplete('th', items, 3)).toEqual(['Think', 'Mother', 'Worthy']);
  });
  it('search "th" and need 2 results should be "Think", "Mother"', () => {
    expect(autocomplete('th', items, 2)).toEqual(['Think', 'Mother']);
  });
});
