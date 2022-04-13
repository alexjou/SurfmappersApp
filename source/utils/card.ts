const flagAmerican = require('../assets/icons/flags/american.png');
const flagAura = require('../assets/icons/flags/aura.png');
const flagDiners = require('../assets/icons/flags/diners.png');
const flagDiscover = require('../assets/icons/flags/discover.png');
const flagElo = require('../assets/icons/flags/elo.png');
const flagHiper = require('../assets/icons/flags/hiper.png');
const flagJbc = require('../assets/icons/flags/jbc.png');
const flagMastercard = require('../assets/icons/flags/mastercard.png');
const flagVisa = require('../assets/icons/flags/visa.png');
const flagDefault = require('../assets/icons/flags/default.png');

const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercard = /^(5[1-5]\d{4}|677189)\d{10}$/;
const american = /^3[47]\d{13}$/;
const aura = /^(5078\d{2})(\d{2})(\d{11})$/;
const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
const elo =
  /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/;
const diners = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
const hipercard = /^(606282\d{10}(\d{3})?)|(3841\d{15})$/;
const jbc = /^(?:2131|1800|35\d{3})\d{11}$/;

export const CARDS = {
  Visa: {
    name: 'Visa',
    pattern: visa,
    brand: flagVisa,
    brandName: 'Visa',
  },
  MasterCard: {
    name: 'Mastercard',
    pattern: mastercard,
    brand: flagMastercard,
    brandName: 'MasterCard',
  },
  Amex: {
    name: 'American Express',
    pattern: american,
    brand: flagAmerican,
    brandName: 'Amex',
  },
  Aura: {
    name: 'Aura',
    pattern: aura,
    brand: flagAura,
    brandName: 'Aura',
  },
  Elo: {
    name: 'ELO',
    pattern: elo,
    brand: flagElo,
    brandName: 'Elo',
  },
  Discover: {
    name: 'Discover',
    pattern: discover,
    brand: flagDiscover,
    brandName: 'Discover',
  },
  Diners: {
    name: 'Diners Club',
    pattern: diners,
    brand: flagDiners,
    brandName: 'Diners',
  },
  Hipercard: {
    name: 'Hipercard',
    pattern: hipercard,
    brand: flagHiper,
    brandName: 'Hipercard',
  },
  Jcb: {
    name: 'JCB',
    pattern: jbc,
    brand: flagJbc,
    brandName: 'Jcb',
  },
  no_brand: {
    brand: flagDefault,
  },
};

class Card {
  brandFromNumber(number: string) {
    const value = number.replace(/\s/g, '');
    let brand = 'no_brand';

    Object.keys(CARDS).forEach(key => {
      if (
        value.length === 16 &&
        CARDS[key].pattern &&
        CARDS[key].pattern.test(String(value))
      ) {
        console.log('CARDKEY', key);
        brand = CARDS[key].brandName;
        console.log('brand aqui', brand);
      }
    });

    return brand;
  }

  brandFromBrandName(brandName: string) {
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i].brandName === brandName) {
        return CARDS[i].brand;
      }
    }
    return null;
  }

  nameFromNumber(number: number) {
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i].pattern.test(String(number))) {
        return CARDS[i].name;
      }
    }
    return '';
  }

  nameFromBrand(brand: string) {
    const card = CARDS.find(o => o.brandName === brand);
    return card ? card.name : 'Cartão não definido';
  }

  brandNameFromNumber(number: string) {
    const value = number.replace(/\s/g, '');
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i].pattern.test(String(value))) {
        return CARDS[i].brandName;
      }
    }
    return '';
  }

  validDateIsValid(date: string) {
    const reDate = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return reDate.test(date);
  }

  brandFromName(name: string) {
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i].name == name) {
        return CARDS[i].brand;
      }
    }
    return '';
  }
}

export default new Card();
