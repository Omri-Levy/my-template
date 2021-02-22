import React, { useContext, useMemo } from 'react';
import Page from '../Page';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { v4 } from 'uuid';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import currentUserDetails from './currentUserDetails';

const Profile: React.FunctionComponent = () => {
	const { currentUser } = useContext(AuthenticationContext);
	const memoizedDetails = useMemo(() => currentUserDetails, []);

	return (
		<Page title={`Profile`}>
			<List variant={`filled`}>
				{memoizedDetails.map((memoizedDetail) => {
					const {icon, text, key} = memoizedDetail;

					return (
						<ListItem
							key={v4()}
							textTransform={key === `role` ? `capitalize` : undefined}
						>
							<ListIcon as={icon} color={`gray.300`}/>
							{text}: {currentUser && currentUser[key]}
						</ListItem>
					);

				})}
			</List>
		</Page>
	);
};

export default Profile;
