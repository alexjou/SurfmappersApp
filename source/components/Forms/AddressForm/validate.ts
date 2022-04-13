import * as Yup from 'yup';

const addressValidation = {
  address: Yup.object().shape({
    zipCode: Yup.string().min(8, 'CEP inválido'),
    // .required('Campo obrigatório'),
    // city: Yup.string().required('Campo obrigatório'),
    // street: Yup.string().required('Campo obrigatório'),
    // number: Yup.string().required('Campo obrigatório'),
    // neighbourhood: Yup.string().required('Campo obrigatório'),
    // state: Yup.string().required('Campo obrigatório'),
    // country: Yup.string().required('Campo obrigatório'),
  }),
};

export default addressValidation;
