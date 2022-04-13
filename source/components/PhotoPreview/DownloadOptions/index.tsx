// eslint-disable-next-line no-use-before-define
/* eslint-disable */
import React from 'react';
import translate from '@locales/index';
import theme from '@styles/theme/theme';
import {gql, useQuery} from '@apollo/client';
import {downloadPhoto} from '../../../utils/downloadPhoto';

import {
  AddCartButtonText,
  ArrowIcon,
  Container,
  PhotoDownloadButton,
  PhotoInformations,
  SequenceDownloadButton,
  TextBold,
} from './styles';

interface IDataProps {
  data1: string;
  id: string;
}

const DownloadOptions: React.FC<any> = ({data1, id}: IDataProps) => {
  const query = gql`
    query GetRawFile($id: ID) {
      photo(id: $id) {
        id
        spot {
          id
          name
        }
        time(format: "YYYY-MM-DD")
        number
        file {
          raw
        }
      }
    }
  `;

  const queryVariables = {
    variables: {
      id: id,
    },
  };

  const { data } = useQuery(query, queryVariables);
  console.log('DOWNLOAD', data);
  return (
    <Container>
      <PhotoInformations>
        <TextBold>#004</TextBold>
      </PhotoInformations>
      <PhotoDownloadButton onPress={() => downloadPhoto(data?.photo)}>
        <AddCartButtonText number={0}>
          {translate('photo_download')}
        </AddCartButtonText>
        <ArrowIcon color="white" />
      </PhotoDownloadButton>
    </Container>
  );
};

export default DownloadOptions;
