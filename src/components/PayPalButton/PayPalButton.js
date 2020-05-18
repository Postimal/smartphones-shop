import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log('The payment was succeeded!', payment);
      // dac tutaj jakies clearCart
    };

    const onCancel = data => {
      console.log('The payment was cancelled!', data);
      
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
