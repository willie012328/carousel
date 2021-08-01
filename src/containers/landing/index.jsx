import React from 'react';

import * as RepoOwner from "../../constants/repoOwner";

const LandingPage = () => {
  return (
    <section className='app'>
      <div className='app-sandbox'>
        <div className='app-sandbox-content text-center'>
          <h2 className='app-header'>Enter Source Repository Name</h2>

          <div className='margin-auto'>
            <span className='landing-interval-label'>{`${RepoOwner.REPO_OWNER}`}</span>
            <input
              className='landing-interval-input'
              type='text'/>
            <button className='landing-interval-button'>Submit</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LandingPage;