import React from 'react';

class Gallery extends React.component {
  render() {
    return(
      <ul className="image-gallery">
        <li>{this.props.images}</li>
      </ul>
    )
  }
}

export default Gallery;
