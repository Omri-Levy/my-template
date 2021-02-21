import React, { useContext } from 'react';
import Page from '../Page';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { FaAt, FaIdCard, FaSignature, FaUserTag } from 'react-icons/fa';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';

const Profile: React.FunctionComponent = () => {
	const { currentUser } = useContext(AuthenticationContext);

	return (
		<Page title={`Profile`}>
			<List variant={`filled`}>
				<ListItem key={v4()}>
					<ListIcon as={FaIdCard} color={`gray.300`}/>
					ID: {currentUser?.id}
				</ListItem>
				<ListItem key={v4()}>
					<ListIcon as={FaSignature} color={`gray.300`}/>
		Full Name: {currentUser?.fullName}
				</ListItem>
				<ListItem key={v4()}>
					<ListIcon as={FaAt} color={`gray.300`}/>
		Email: {currentUser?.email}
				</ListItem>
				<ListItem key={v4()} textTransform={`capitalize`}>
					<ListIcon as={FaUserTag} color={`gray.300`}/>
		Role: {currentUser?.role}
				</ListItem>
			</List>
		</Page>
	);
};
export default Profile;
