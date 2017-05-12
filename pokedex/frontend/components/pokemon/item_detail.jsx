import React from 'react';


class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.item.happiness }</h1>
      </div>
    );
  }
}


export default ItemDetail;
