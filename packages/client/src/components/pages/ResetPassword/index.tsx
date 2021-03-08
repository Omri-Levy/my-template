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
    <Page title={`Reset Password`} icon={FaRedoAlt}>
      {status !== 200 ? <TemporaryLinkExpired /> : <ResetPasswordForm />}
    </Page>
  );
};

export default ResetPassword;
