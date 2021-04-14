import React from 'react';
import { connect } from "react-redux";

import AddPlayer from "./AddPlayer";

class TeamList extends React.Component {

  renderList() {
    let characterList = this.props[this.props.stateList];

    return characterList.map((char, index) => {
      return (
        <li className="list-group-item" key={index}>
          { char.name }
          <button type="button"
                  className="btn btn-danger float-right">
            Delete
          </button>
        </li>
      );
    })
  }

  render() {
    const characterList = this.renderList();

    return (
      <div className="card">
        <h3>{this.props.title} List</h3>
        <AddPlayer />
        <ul className="list-group">
          { characterList }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.characters.players,
    enemies: state.characters.enemies,
  };
};

export default connect(mapStateToProps)(TeamList);
