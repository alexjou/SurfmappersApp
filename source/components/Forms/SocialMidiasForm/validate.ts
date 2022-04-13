import * as Yup from 'yup';

const socialMediasValidation = {
  socialMedias: Yup.object().shape({
    website: Yup.string(),
    facebook: Yup.string(),
    instagram: Yup.string(),
    surfArt: Yup.string(),
  }),
};

export default socialMediasValidation;
