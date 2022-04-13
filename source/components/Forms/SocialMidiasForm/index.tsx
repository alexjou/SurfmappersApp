import React from 'react';
import FormInput from '@components/FormInput';

const SocialMidiasForm: React.FC = () => {
  return (
    <>
      <FormInput
        name="socialMedias.website"
        label="Website"
        placeholder="Link"
      />
      <FormInput
        name="socialMedias.facebook"
        label="Facebook"
        placeholder="Link"
      />
      <FormInput
        name="socialMedias.instagram"
        label="Instagram"
        placeholder="Usuário"
      />
      <FormInput
        name="socialMedias.surfArt"
        label="Link da SurfArt"
        placeholder="Link"
      />
    </>
  );
};

export default SocialMidiasForm;
