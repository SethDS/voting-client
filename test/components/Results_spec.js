/**
 * Created by Seth on 7/5/2017.
 */
import React from 'react';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results';
import {expect} from 'chai';

describe('Results', () => {

    it('renders entries with vote counts or zero', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        const tally = Map({'Trainspotting' : 5});
        const component = renderIntoDocument(
            <Results pair={pair} tally={tally} />
        );

        const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
        const [train, days] = entries.map(e => e.textContent);

        expect(entries.length).to.equal(2);
        expect(train).to.contain('Trainspotting');
        expect(train).to.contain('5');
        expect(days).to.contain('28 Days Later');
        expect(days).to.contain('0');
    });

    it('invokes the next callback when next button is clicked', () => {
         
    })

});