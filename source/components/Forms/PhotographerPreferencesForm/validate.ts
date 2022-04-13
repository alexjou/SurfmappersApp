import * as Yup from 'yup';

const photographerPreferencesValidation = {
  photographerPreferences: Yup.object().shape({
    currency: Yup.string().required('Campo obrigatório'),
    defaultPhotoPrice: Yup.string().required('Campo obrigatório'),
    allowPromotions: Yup.boolean().required('Campo obrigatório'),
    favoriteBeaches: Yup.array().required('Campo obrigatório'),
    equipment: Yup.string().required('Campo obrigatório'),
    shirtSize: Yup.string().required('Campo obrigatório'),
  }),
};

export default photographerPreferencesValidation;
