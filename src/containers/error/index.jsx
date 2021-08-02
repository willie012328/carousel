import React from 'react';
import { Link } from 'react-router-dom';

const ErrorgPage = (props) => {
  return (
    <section className='app'>
      <div className='app-sandbox'>
        <div className='app-sandbox-content text-center'>
          <h2 className='app-header'>Error</h2>
          <h2 className='app-header'>Code: {props.status}</h2>

          <div className='margin-auto'>
            <p>Error Content: {props.data}</p>
            <p>Please make sure source repository exists or check out you network connection.</p>
            <Link className="button-like-link" to="/" replace>Back to Landing Page</Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ErrorgPage;