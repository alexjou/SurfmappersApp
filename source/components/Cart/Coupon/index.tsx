import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import translate from '../../../locales';
import CouponInputDialog from '../Dialogs/CouponInputDialog';
import {
  CouponCall,
  CouponCallTexts,
  CouponContainer,
  CouponContent,
  CouponSubtitle,
  CouponTitle,
} from './styles';

const Coupon: React.FC = ({ activeCoupon, refetch }) => {
  const [showCouponInput, setCouponInputVisibility] = useState(false);

  return (
    <CouponContainer>
      <CouponContent
        activeOpacity={0.9}
        onPress={() => setCouponInputVisibility(true)}
      >
        <CouponCall>
          <MaterialIcons name="tag-plus-outline" size={32} color="gray" />
          <CouponCallTexts>
            <CouponTitle>{translate('coupon')}</CouponTitle>
            <CouponSubtitle>
              {activeCoupon || translate('coupon_code')}
            </CouponSubtitle>
          </CouponCallTexts>
        </CouponCall>

        <MaterialIcons name="chevron-right" size={32} color="gray" />
      </CouponContent>
      <CouponInputDialog
        isVisible={showCouponInput}
        setVisibility={setCouponInputVisibility}
        refetch={refetch}
      />
    </CouponContainer>
  );
};

export default Coupon;
