import operate from '../logic/Operate';

describe('Test operations', () => {
  test('should return total when operation is addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('should return correct subtractions results when operation is subtraction', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });
  test('should return multiplication results when operation is multiplication', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('should return division results when operation is division', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
  test('should return modulus results when operation is modulus', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });
});
