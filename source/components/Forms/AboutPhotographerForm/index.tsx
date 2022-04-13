import React from 'react';
import FormSelect from '@components/FormSelect';
import MultiSelect from '@components/FormMultiSelect';
import translate from '@locales/index';

const AboutPhotographerForm: React.FC = () => {
  const photographerTypes = [
    'Fotógrafo de surfe freesurfe',
    'Fotógrafo surfe profissional',
    'Fotógrafo outros nichos',
    'Fotografia é hobbie',
    'Na água',
    'Sou Surfista',
    'não sou fotógrafo',
  ];
  const photoTechs = [
    {
      label: 'Foto dentro d’água',
      value: 'water-in',
    },
    {
      label: 'Foto fora d’água',
      value: 'water-out',
    },
    {
      label: 'Vídeo',
      value: 'video',
    },
    {
      label: 'Drone / Aérea',
      value: 'drone',
    },
    {
      label: 'Paisagem',
      value: 'landscape',
    },
    {
      label: 'Mergulho',
      value: 'Mergulho',
    },
    {
      label: 'Ondas gigantes',
      value: 'Ondas gigantes',
    },
  ];
  return (
    <>
      <FormSelect
        name="aboutPhotographer.type"
        label={translate('photographerType')}
        items={photographerTypes}
      />
      <MultiSelect
        name="aboutPhotographer.techniques"
        label={translate('photographerTechniques')}
        items={photoTechs}
      />
    </>
  );
};

export default AboutPhotographerForm;
