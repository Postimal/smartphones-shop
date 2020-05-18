import React from 'react';
import FilterButton from 'components/FilterButton/FilterButton';
import { connect } from 'react-redux';

import { AVAILABLE_FILTERS } from '../../data/constants/index';
import './ColorFilterablePanel.scss';

const FilterList = ({ onClick, allColors }) => {
  const colors = [...new Set(allColors.flat(1))];

  return (
    <div className="color-filter-container">
      <h5 className="color-filter__title">Color</h5>
      <div className="colors-panel">
        {colors && colors.map(color =><FilterButton color key={color} value={color} filter={`SHOW_${color.toUpperCase()}`} />)}
        <button className="colors-panel__button-clear-all" onClick={onClick} filter={AVAILABLE_FILTERS.SHOW_ALL}>Clear Filter</button>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  active: state.filterReducer === 'SHOW_ALL',
  allColors: state.smartphonesReducer.smartphones.map(item => item.colors),
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({
    type: 'FILTER_SMARTPHONES',
    filter: 'SHOW_ALL',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);

