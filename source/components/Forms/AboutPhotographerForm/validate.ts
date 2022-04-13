import * as Yup from 'yup';

const aboutPhotographerValidation = {
  aboutPhotographer: Yup.object().shape({
    type: Yup.string().required('Campo obrigatório'),
    techniques: Yup.array().required('Campo obrigatório'),
  }),
};

export default aboutPhotographerValidation;
