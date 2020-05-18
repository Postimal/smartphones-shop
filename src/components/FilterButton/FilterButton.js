import React from 'react';
import { connect } from 'react-redux';

const FilterButton = ({ color, value, active, onClick }) => {
  return (
    <div className="color-tab">
      <button id={`${color}`} type="button" name="Color" value={`${color}`} disabled={active} onClick={onClick}>
        <span style={{ background: `${value}` }} />
      </button>

    </div>
  );
};


const mapStateToProps = (state, ownProps) => ({
  active: state.filterReducer === ownProps.filter,
});

const mapDipatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({
    type: 'FILTER_SMARTPHONES',
    filter: ownProps.filter,
  }),
});

export default connect(mapStateToProps, mapDipatchToProps)(FilterButton);
