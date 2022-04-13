// utils/makeCardHash.ts
import pagarme from 'pagarme';

function makeCardHash(
  cardNumber,
  cardHolderName,
  cardExpirationDate,
  cardSecurityCode,
) {
  pagarme.client
    .connect({ encryption_key: 'ek_test_tCfJlQgsixx459ghdFQ918tvQjrvwp' }) // Chave de teste, colocar em um .env
    .then(client => {
      return client.security.encrypt({
        card_number: cardNumber,
        card_holder_name: cardHolderName,
        card_expiration_date: cardExpirationDate,
        card_cvv: cardSecurityCode,
      });
    })
    .then(card_hash => console.log(card_hash));
}

export default makeCardHash;
