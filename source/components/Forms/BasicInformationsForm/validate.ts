import * as Yup from 'yup';

const basicInformationValidation = {
  basicInformation: Yup.object().shape({
    // username: Yup.string().required('Campo obrigatório'),
    // name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido'),
    // .required('Campo obrigatório'),
    document: Yup.string().min(11, 'CPF inválido'),
    // .required('Campo obrigatório'),
    // birthdate: Yup.string().required('Campo obrigatório'),
    ddd_phone: Yup.string().min(2, 'DDD inválido'),
    // .required('Campo obrigatório'),
    // phoneNumber: Yup.string().required('Campo obrigatório'),
  }),
};

export default basicInformationValidation;
