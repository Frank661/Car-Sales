import React from 'react';

const AddedFeature = props => {

  const removeFeature = e => {
    console.log("props.feature", props.feature.id)
    e.preventDefault();
    props.removeNewFeature(props.feature)
  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;