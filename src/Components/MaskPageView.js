import React, { Component } from "react";
import ItemsView from "./ItemsView";
import SelectItemsCard from "./SelectItemsCard";
import SelectItemsCard2 from "./SelectItemsCard2";
import SelectItemsCard3 from "./SelectItemsCard3";
import PropTypes from "prop-types";

class MaskPageView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  render() {
    return (
      <div>
        <ItemsView />
        <SelectItemsCard />
        <SelectItemsCard2 />
        <SelectItemsCard3 />
      </div>
    );
  }
}

export default MaskPageView;
