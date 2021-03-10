import { Helmet } from 'react-helmet-async';
import { FunctionComponent, memo } from 'react';

/**
 * a wrapper component for react-helmet-async Helmet component.
 */
const Head: FunctionComponent = () => (
  <Helmet>
    <title>My Template</title>
  </Helmet>
);
export default memo(Head);
