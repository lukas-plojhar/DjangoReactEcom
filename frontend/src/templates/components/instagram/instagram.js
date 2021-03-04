import React, { Component } from "react";
import "./assets/css/instagram.css";

export default class instagram extends Component {
  render() {
    return (
      <div className="instagram-iframe-container">
        <div className="container">
          <div className="iframe-content">
            <h1>Ohlasy ze sociálních sítí</h1>
            <iframe
              title="Shopify"
              src="https://widget.stackla.com/widget/show/?wid=5f3eda3414466&amp;ct=&amp;ttl=60&amp;unique_id=1"
              frameBorder="0"
              id="stack-widget-embed-73379"
              scrolling="no"
              width="100%"
              allowtransparency="true"
              height="434"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
