/**
 * Created by Seth on 6/23/2017.
 */
import React from 'react';

export default React.createClass({
    render: function(){
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});