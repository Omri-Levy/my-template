import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { FaRedoAlt } from 'react-icons/all';
import { useParams } from 'react-router-dom';
import Page from '../Page';
import ResetPasswordForm from '../../forms/ResetPasswordForm';
import validateResetPasswordToken from './validateResetPasswordToken';
import TemporaryLinkExpired from './TemproaryLinkExpired';
import { Params } from './types';

const ResetPassword: FunctionComponent = () => {
  const params: Params = useParams();
  const [status, setStatus] = useState<number>();
  const isMounted = useRef(true);
  const isSuccess = status === 200;
  const title = isSuccess ? `Reset Password` : `Temporary link expired`;

  useEffect(() => {
    if (isMounted) {
      (async () => {
        const { token } = params;
        const verifyToken = validateResetPasswordToken(token);
        const res = await verifyToken();

        setStatus(res.status);
      })();
    }

    return () => {
      isMounted.current = false;
    };
  }, [params]);

  return (
    <Page title={title} icon={FaRedoAlt}>
      {isSuccess ? <ResetPasswordForm /> : <TemporaryLinkExpired />}
    </Page>
  );
};

export default ResetPassword;
