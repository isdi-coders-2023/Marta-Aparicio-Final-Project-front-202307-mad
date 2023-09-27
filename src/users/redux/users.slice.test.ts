import UserReducer, { UsersState, actions } from './users.slice'; // Import usersReducer

const mockInitialState: UsersState = {
  token: 'initialToken',
  id: 'initialId',
} as UsersState;

describe('Given pet slice', () => {
  describe('When we use the query pet method', () => {
    test('Then it should return the state token and id modified', () => {
      const newState = UserReducer(mockInitialState, actions.logoutUser());
      expect(newState.token).toEqual(undefined);
      expect(newState.id).toEqual(undefined);
    });
  });
});
