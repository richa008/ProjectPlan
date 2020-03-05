import React from 'react';

export interface SignInState {
    title: string;
    content: string;
}
class CreateProject extends React.Component<SignInState> {
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;