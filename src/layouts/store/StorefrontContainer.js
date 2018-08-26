import { connect } from 'react-redux';
import Store from './Store';

const mapStateToProps = (state, ownProps) => {
  return {
      user: state.user.data,
      contract: ownProps.contract,
      account: ownProps.account,
      ipfs: ownProps.ipfs,
      owners: state.layouts.owners,
      privilege: state.layouts.privilege,
      errorMsg: state.layouts.errorMsg,
      owner_stores: state.layouts.owner_stores,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewProduct: async function() {

    },
  }
}

const StorefrontContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);

export default StorefrontContainer;