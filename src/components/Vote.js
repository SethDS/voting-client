/**
 * Created by Seth on 6/23/2017.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({

    mixins: [PureRenderMixin],

   getPair: function(){
       return this.props.pair || [];
   },
    isDisabled: function(){
       return !!this.props.hasVoted;
    },
    hasVotedFor: function(entry){
        return this.props.hasVoted === entry;
    },
    render: function(){
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key="disabled"
                        disabled = {this.isDisabled()}
                        onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.hasVoted(entry) ?
                        <div className="label">Voted</div> :
                    null}
                </button>
            )}
        </div>
    }


});