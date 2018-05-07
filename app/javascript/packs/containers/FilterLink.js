import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/*
const Link = ({ active, children, onClick }) => (
  <button onClick={ onClick } disabled={ active } style={ button_style } >
    { children }
  </button>
)

activeは、mapStateToPropsによって更新
onClickは、mapDispatchToPropsによってイベントをアサイン
*/

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
