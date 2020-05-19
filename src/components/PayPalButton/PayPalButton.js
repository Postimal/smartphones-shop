import React from 'react';
import { connect } from 'react-redux';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Toast from 'light-toast';
import { clearCart } from 'data/actions/smartphones.actions';


class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log('The payment was succeeded!', payment);
      Toast.info('The payment was succeeded! Thank You!', 2000, () => {
        this.props.clearCart();
      });
    };

    const onCancel = data => {
      console.log('The payment was cancelled!', data);
      Toast.info('The payment was cancelled!', 2000, () => {
        this.props.clearCart();
      });
    };

    const onError = err => {
      console.log('Error!', err);
    };

    const env = 'sandbox';
    const currency = 'USD';

    const client = {
      sandbox: process.env.REACT_APP_SANDBOX_ID,
      production: 'YOUR-PRODUCTION-APP-ID',
    };

    return (
      <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    );
  }
}
const mapDispatchToProps = {
  clearCart,
};

export default connect(null, mapDispatchToProps)(MyApp);

