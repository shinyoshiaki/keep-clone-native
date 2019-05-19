export interface StateUser {
  name?: string;
  session?: string;
  code?: string;
}

const initialState: StateUser = {};

export const doLogin = (name: string, session: string, code: string) => {
  const type = "USER_LOGIN" as const;
  return { type, payload: { name, session, code } };
};

type Actions = ReturnType<typeof doLogin>;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        ...action.payload
      } as StateUser;
    }
    default:
      return state;
  }
}
