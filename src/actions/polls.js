const RECEIVE_POLLS = 'RECEIVE_POLLS';

const receivePolls = (polls) => {
	return {
		type: RECEIVE_POLLS,
		polls,
	}
};

module.exports = {
	RECEIVE_POLLS,
	receivePolls
}