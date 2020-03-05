import { AuthState, AuthAction} from "../../types";

const initialState: AuthState = {};

export function authReducer(state = initialState, action: AuthAction): AuthState {
    return state;
}

export default authReducer;

