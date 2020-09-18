import React from 'react';
import { css } from 'linaria';
import { useStore } from 'effector-react';
import { useTheme } from '@geist-ui/react';

import { ProgressLoader } from '../../../lib/progress-loader';
import { $isAppLoading } from '../../core/app-loading';

const appLoaderIndicator = css`
  position: fixed;
  top: 0;
  z-index: 1002;
`;

export const AppLoaderIndicator = () => {
  const isLoading = useStore($isAppLoading);
  const {
    palette: { success },
  } = useTheme();

  if (isLoading) {
    return <ProgressLoader className={appLoaderIndicator} color={success} />;
  }

  return null;
};
