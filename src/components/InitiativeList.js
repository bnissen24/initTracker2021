import React from 'react';
import { connect } from "react-redux";

const renderList = (characterList, currentTurn) => {
  return characterList.sort((a, b) => {
    return b.initiative - a.initiative;
  }).map((char, index) => {
    let classes = 'list-group-item d-flex justify-content-between align-items-center';
    if (currentTurn === index) {
      classes = classes.concat(' active');
    }
    return (
      <li className={classes}
          key={index}>
        { char.name }
        <span className="badge badge-primary badge-pull">
          { char.initiative }
          </span>
      </li>
    );
  });
};

const InitiativeList = (props) => {
  const characterList = renderList(props.characters, props.currentTurn);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center"
           style={{ marginBottom: '15px' }}>
        <button type="button"
                className="btn btn-primary">
          Previous
        </button>
        <button type="button"
                className="btn btn-primary">
          Next
        </button>
      </div>

      <ul className="list-group">
        { characterList }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    currentTurn: state.turn.current,
  };
};

export default connect(mapStateToProps)(InitiativeList);