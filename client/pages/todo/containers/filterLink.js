import {
  connect,
} from 'react-redux';
import {
  setVisibilityFilter,
} from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.todoReducers.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;