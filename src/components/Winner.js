/**
 * Created by Seth on 6/23/2017.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({

    mixins: [PureRenderMixin],

    render: function(){
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});