import { ProjectState, ProjectAction} from "../../types";

const initialState: ProjectState[] = [
    { id: "1", title: "Convert storage pickers to ARG", content: "blah blah blah" },
    { id: "2", title: "Filter ADLS gen2 accounts", content: "blah blah blah" },
    { id: "3", title: "Versioning GA", content: "blah blah blah" }
];

export function projectReducer(state = initialState, action: ProjectAction): ProjectState[] {
    return state;
}

export default projectReducer;

