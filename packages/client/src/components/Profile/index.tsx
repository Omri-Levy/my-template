import { useContext, useMemo, FunctionComponent } from 'react';
import Page from '../Page';
import { List } from '@chakra-ui/react';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import currentUserDetails from './currentUserDetails';
import CurrentUserDetail from './CurrentUserDetail';
import { v4 } from 'uuid';

const Profile: FunctionComponent = () => {
	const { currentUser } = useContext(AuthenticationContext);
	const memoizedDetails = useMemo(() => currentUserDetails, []);

	return (
		<Page title={`Profile`}>
			<List variant={`filled`}>
				{memoizedDetails.map((memoizedDetail) => {
					const {objectKey, icon, text} = memoizedDetail;

					return (
						<CurrentUserDetail
							key={v4()}
							objectKey={objectKey}
							icon={icon}
							text={text}
							currentUser={currentUser!}
						/>
					);

				})}
			</List>
		</Page>
	);
};

export default Profile;
