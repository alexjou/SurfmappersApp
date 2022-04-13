/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { Formik, FormikProps } from 'formik';
import { Keyboard, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Yup from 'yup';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BasicInformationsForm from '@components/Forms/BasicInformationsForm';
import AboutPhotographerForm from '@components/Forms/AboutPhotographerForm';
import AddressForm from '@components/Forms/AddressForm';
import PhotographerPreferencesForm from '@components/Forms/PhotographerPreferencesForm';
import SocialMidiasForm from '@components/Forms/SocialMidiasForm';
import UserTypeSwitch from '@components/Forms/UserTypeSwitch';
import Button from '@components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import basicInformationValidation from '@components/Forms/BasicInformationsForm/validate';
import addressValidation from '@components/Forms/AddressForm/validate';
import aboutPhotographerValidation from '@components/Forms/AboutPhotographerForm/validate';
import photographerPreferencesValidation from '@components/Forms/PhotographerPreferencesForm/validate';
import { socialMediasPhotographerValidation } from '@components/Forms/SocialMidiasForm/validate';
import userTypeValidation from '@components/Forms/UserTypeSwitch/validate';
import translate from '@locales/index';
import { PythonApi } from '@services/api';
import DataPlaceholder from '@components/DataPlaceholder';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import {
  Divider,
  RoundContainer,
  Row,
  SectionButton,
  SectionText,
  StepText,
} from './styles';

const ProfileEditorPhotographer: React.FC = ({ user }) => {
  const navigation = useNavigation();
  const [loadingSend, setLoadingSend] = useState(false);
  const [activeSection, setActiveSection] = useState(undefined);
  const [inputWithValue, setInputsWithValue] = useState([]);
  const [inputs, setInputs] = useState([]);

  const formRef = useRef(null);

  useEffect(() => {
    if (user) {
      checkInputsValues(formRef.current.values);
    }
  }, [user]);

  const formCollapses = [
    {
      name: translate('basicInformation'),
      component: <BasicInformationsForm />,
      validation: basicInformationValidation,
      section: 'basicInformation',
    },
    {
      name: translate('aboutPhotographer'),
      component: <AboutPhotographerForm />,
      section: 'aboutPhotographer',
      // validation: aboutPhotographerValidation,
    },
    {
      name: translate('address'),
      component: <AddressForm />,
      section: 'address',
      validation: addressValidation,
    },
    {
      name: translate('photographerPreferences'),
      component: <PhotographerPreferencesForm />,
      // validation: photographerPreferencesValidation,
      section: 'photographerPreferences',
    },
    {
      name: translate('socialMedias'),
      component: <SocialMidiasForm />,
      section: 'socialMedias',
      // validation: socialMediasPhotographerValidation,
    },
    {
      name: translate('userType'),
      component: (
        <View style={{ alignItems: 'center' }}>
          <>
            <UserTypeSwitch />
          </>
        </View>
      ),
      section: 'userType',
      validation: userTypeValidation,
    },
  ];

  const checkInputsValues = useCallback(
    data => {
      if (data) {
        const keys = Object.keys(data);
        const sections = keys.map(key => data[key]);
        const allValidations = formCollapses.reduce(
          (x, y) => ({ ...x, ...y.validation }),
          {},
        );
        const nInputsWithValue = sections.map((section, index) => {
          if (!section) {
            return null;
          }
          const sectionKey = keys[index];

          const sectionKeys = Object.keys(section);
          return sectionKeys.filter(sKey => {
            const isRequired =
              allValidations[sectionKey]?.fields[sKey]?.exclusiveTests
                ?.required;
            return (
              sKey !== '__typename' &&
              (typeof section[sKey] === 'boolean'
                ? true
                : !isRequired || !!section[sKey])
            );
          })?.length;
        });
        setInputsWithValue(nInputsWithValue);
        const nInputs = sections.map(section => {
          if (!section) {
            return null;
          }
          const sectionKeys = Object.keys(section).filter(
            key => key !== '__typename',
          );
          return sectionKeys?.length;
        });
        setInputs(nInputs);
      }
    },
    [formCollapses],
  );

  const renderSectionTitle = useCallback(
    (section, index, errors) => {
      return (
        <>
          {index > 0 && <Divider />}
          <SectionButton
            onPress={() => {
              if (activeSection === index) {
                setActiveSection(undefined);
              } else {
                setActiveSection(index);
              }
            }}
          >
            <Row>
              <MaterialIcons
                style={{ marginRight: 8 }}
                name={activeSection === index ? 'chevron-up' : 'chevron-down'}
                size={24}
              />
              <SectionText>{section.name}</SectionText>
            </Row>
            {/* <Row>
              <StepText>{`(${inputWithValue[index] || 0}/${
                inputs[index] || 0
              })`}</StepText>
              {inputWithValue[index] === inputs[index] &&
              !errors[section.section] ? (
                <RoundContainer correct>
                  <MaterialIcons name="check" color="white" size={20} />
                </RoundContainer>
              ) : (
                <RoundContainer correct={false}>
                  <MaterialIcons name="close" color="white" size={20} />
                </RoundContainer>
              )}
            </Row> */}
          </SectionButton>
        </>
      );
    },
    [activeSection, inputWithValue, inputs],
  );

  const renderContent = section => (
    <View style={{ paddingHorizontal: 16 }}>{section.component}</View>
  );

  const onSend = useCallback(
    async data => {
      setLoadingSend(true);
      try {
        await PythonApi.User.updateUserData(data);

        await PythonApi.User.updatePhotographerPreferences(data);

        Toast.show(translate('editSuccess'));
        navigation.goBack();
      } catch (e) {
        Toast.show(translate('editFailed'));
      }
      setLoadingSend(false);
    },
    [user, navigation],
  );

  const validations = useMemo(() => {
    const allValidations = formCollapses.reduce(
      (x, y) => ({ ...x, ...y.validation }),
      {},
    );
    return Yup.object().shape(allValidations);
  }, []);

  if (user && !loadingSend) {
    const {
      __typename,
      name,
      username,
      email,
      birthdate,
      allowPromotions,
      contactInfo: { phoneNumber, taxPayerId, address },
      settings,
      socialNetworks,
    } = user;

    return (
      <Formik
        innerRef={formRef}
        validateOnBlur
        validate={checkInputsValues}
        validationSchema={validations}
        validateOnChange={false}
        validateOnMount
        onSubmit={data => {
          onSend(data);
        }}
        initialValues={{
          basicInformation: {
            name,
            username,
            email,
            document: taxPayerId.toString(),
            birthdate,
            ddd_phone: phoneNumber?.toString().slice(0, 2),
            phoneNumber: phoneNumber?.toString().slice(2),
          },
          aboutPhotographer: {
            type: settings?.skills?.type,
            techniques: settings?.skills?.techniques,
          },
          address: {
            ...address,
            zipCode: address?.zipCode?.toString(),
            number: address?.number?.toString(),
          },
          photographerPreferences: {
            ...user.userOptions,
            allowPromotions: settings?.allowPromotions || false,
            favoriteBeaches: settings?.favoriteBeaches || [],
            currency: settings?.currency || 'BRL',
            defaultPhotoPrice: settings?.albumDefaults?.photoPrice.toString(),
            equipment: settings?.equipment,
            shirtSize: settings?.shirtSize,
          },
          socialMedias: socialNetworks,
          userType: {
            userTypeSwitch: __typename,
          },
        }}
      >
        {(props: FormikProps) => (
          <>
            <Accordion
              activeSections={[activeSection]}
              renderHeader={() => <View />}
              sections={formCollapses}
              renderSectionTitle={(section, index) =>
                renderSectionTitle(section, index, props.errors)
              }
              renderContent={renderContent}
            />
            <Button
              style={{ marginHorizontal: 16, marginVertical: 32 }}
              title={translate('saveInformation')}
              onPress={() => {
                Keyboard.dismiss();
                checkInputsValues(props.values);
                props.handleSubmit();
                if (props.errors && Object.keys(props.errors)?.length > 0) {
                  Toast.show(
                    'Existem campos com problemas, por favor, corrija-os.',
                  );
                }
              }}
            />
          </>
        )}
      </Formik>
    );
  }
  return <DataPlaceholder type="profileEdit" />;
};

export default ProfileEditorPhotographer;
