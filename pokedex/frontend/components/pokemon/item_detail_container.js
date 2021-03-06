import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail  from './item_detail';



const mapStatetoProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.match.params.itemId)
});


export default connect(
  mapStatetoProps,
  null
  )(ItemDetail);
