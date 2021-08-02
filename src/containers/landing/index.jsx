import React from 'react';

import * as RepoOwner from "../../constants/repoOwner";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.transformIncomingProps();
  }

  transformIncomingProps = props => {
    const state = {};

    state['source_repo_name'] = '';

    return state;
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.updateState('source_repo_name', value)
  }

  handleSubmit = () => {
    this.props.history.push(`/${this.state.source_repo_name}`);
  }

  render(){
    return (
      <section className='app'>
        <div className='app-sandbox'>
          <div className='app-sandbox-content text-center'>
            <h2 className='app-header'>Enter Source Repository Name</h2>
  
            <div className='margin-auto'>
              <label className='landing-interval-label'>{`${RepoOwner.REPO_OWNER}`}</label>
              <input
                className='landing-interval-input'
                type='text'
                onChange={this.handleChange}
                value={this.state.source_repo_name}/>
              <button className='landing-interval-button' onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
  
        </div>
      </section>
    )
  }
}

export default LandingPage;