import { FunctionComponent, useContext, useMemo } from 'react';
import { List } from '@chakra-ui/react';
import { v4 } from 'uuid';
import CurrentUserDetail from '../CurrentUserDetail';
import currentUserDetails from './currentUserDetails';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';

const CurrentUserDetails: FunctionComponent = () => {
  const memoizedDetails = useMemo(() => currentUserDetails, []);
  const { currentUser } = useContext(AuthenticationContext);

  return (
    <List variant={`filled`}>
      {memoizedDetails.map((memoizedDetail, index) => {
        const { objectKey, icon, text } = memoizedDetail;
        const isLastChild = index === memoizedDetails.length + 1;
        const isFirstChild = index === 0;

        return (
          <CurrentUserDetail
            dividerProps={{
              mb: isLastChild ? undefined : 1,
            }}
            mb={isLastChild ? undefined : 1}
            mt={isFirstChild ? undefined : 1}
            key={v4()}
            objectKey={objectKey}
            icon={icon}
            text={text}
            currentUser={currentUser}
            textTransform={objectKey === `role` ? `capitalize` : undefined}
          />
        );
      })}
    </List>
  );
};

export default CurrentUserDetails;
