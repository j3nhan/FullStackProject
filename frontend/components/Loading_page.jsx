import React from 'react';

class LoadingPage extends React.Component {
  render() {
    return(
      <div>
        <div>
          <img src={"images/loadingpage.gif"} alt="circles" />
          <img src={"images/loadingpedals.gif"} alt="pedals" />
        </div>
      </div>
    );
  }
}

export default LoadingPage;