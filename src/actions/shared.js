import { getInitialData } from '../utils/api';
import { receiverUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';


const AUTHED_ID = 'tylermcginnis';

const handleInitialData = () => {
	return (dispatch) => {
		return getInitialData()
			.then(({users, polls}) => {
				dispatch(receiverUsers(users));
				dispatch(receivePolls(polls));
				dispatch(setAuthedUser(AUTHED_ID));
			})
	}
};

module.exports = {
	handleInitialData
}