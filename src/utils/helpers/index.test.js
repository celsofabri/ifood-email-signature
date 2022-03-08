import { phoneNumberMasked } from 'utils/helpers'

describe('helpers', () => {
  describe('phone masked', () => {
    it('should receive a number and mask on brazilian cellphone format with 9 digits', () => {
      const tel = '41999999999';
      const phoneMasked = phoneNumberMasked(tel);

      expect(phoneMasked).toEqual('41 99999-9999');
    });
  });
});
