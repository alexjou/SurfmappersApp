import * as Yup from 'yup';

const userTypeValidation = {
  userType: Yup.object().shape({
    userTypeSwitch: Yup.string().required('Campo obrigatório'),
  }),
};

export default userTypeValidation;
