import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';
import { addNewFeature } from '../actions/index'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} addNewFeature={props.addNewFeature} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { addNewFeature }
)(AdditionalFeatures);