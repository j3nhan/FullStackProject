import React from 'react';

class LoadingPage extends React.Component {
  render() {
    return(
      <div>
        <div>
          <div className="loading">
            <img src={"images/loadingpedals.gif"} alt="pedals" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingPage;