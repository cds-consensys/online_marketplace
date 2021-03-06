/*eslint no-useless-constructor: 0*/

import React, { Component } from 'react';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let owners = this.props.owners;
        return (
            <div>
                <form id='addressForm'>
                    <label>To add a new owner, please enter in the address</label>
                    <input type="text" id="newStoreOwner"/>
                    <br/>
                    <input type="submit" onClick={this.props.addOwner}/>
                </form>
                {
                    owners.length
                    ? <div>
                        <br/>
                        <strong>Please see below for a list of store owner addresses.</strong>
                        <ul>
                        {owners.map((owner, idx) => {
                            return <li key={idx} >{owner}</li>
                        })}
                        </ul>
                    </div>
                    : null
                }
                <div>If there are issues with the contract, you can disable payments and withdrawals through the below buttons.</div>
                <button onClick={this.props.isSafe}>Enable Payments and Withdrawals</button>
                <button id='disablePaymentsAndWithdrawals' onClick={this.props.isEmergency}>Disable Payments and Withdrawals</button>
            </div>
        )
    }
}

export default AdminDashboard;