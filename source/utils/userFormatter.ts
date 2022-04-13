import { currencys } from '../data/currencys';

const formatUserToPytonAPI = user => {
  return {
    contactInfo: {
      city: user?.address?.city,
      country: user?.address?.country,
      neighborhood: user?.address?.neighbourhood,
      state: user?.address?.state,
      street_number: user?.address?.number,
      address_number: user?.address?.number,
      address: user?.address?.street,
      zipcode: user?.address?.zipCode,
      birthday: user?.basicInformation?.birthdate,
      email: user?.basicInformation?.email,
      is_photographer: user?.userType?.userTypeSwitch === 'Photographer',
      last_name: user?.basicInformation?.last_name,
      first_name: user?.basicInformation?.first_name,
      cpf: user?.basicInformation?.cpf,
      ddd: user?.basicInformation?.ddd_phone,
      phone: parseInt(
        user?.basicInformation?.phoneNumber.replace(/ /g, ''),
        10,
      ),
      complement: '',
    },

    settings: {
      preferences: {
        skills: {
          type: user?.aboutPhotographer?.type,
          techniques: user?.aboutPhotographer?.techniques,
        },
        allow_promotions:
          user?.photographerPreferences?.allowPromotions || false,
        preference_currency:
          currencys[user?.photographerPreferences?.currency] || 'R$',
        favorite_beaches: user?.photographerPreferences?.favoriteBeaches,
        equipment: user?.photographerPreferences?.equipment,
        shirt_size: user?.photographerPreferences?.shirtSize,
        album_defaults: {
          enable_discounts: true,
          allow_promotions: true,
          photo_price: user?.photographerPreferences?.defaultPhotoPrice,
          discounts: [
            {
              quantity: 3,
              percentage: 30,
            },
            {
              quantity: 5,
              percentage: 40,
            },
            {
              quantity: 10,
              percentage: 60,
            },
          ],
        },
      },
    },
    othersData: {
      surfart_link: user?.socialMedias?.surfArt,
      username: user?.basicInformation?.username,
      website: user?.socialMedias?.website,
      instagram: user?.socialMedias?.instagram,
      facebook: user?.socialMedias?.facebook,
    },
  };
};

export default formatUserToPytonAPI;
