import AwesomeComponent from './AwesomeComponent.jsx';
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

describe('The AwesomeComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AwesomeComponent />);
    });

    describe('initial state', () => {
        it('should have 0 likes', () => {
            let likesCount = wrapper.instance().state.likesCount;
            expect(likesCount).toBe(0);
        });
    });

    describe('onLike handler', () => {
        it('should exist', () => {
            let onLikeHandler = wrapper.instance().onLike;
            expect(onLikeHandler).toExist();
        });

        it('should increment the likesCount by 1', () => {
            let initialLikes = wrapper.instance().state.likesCount;

            wrapper.find('#like').simulate('click');

            let afterLikes = wrapper.instance().state.likesCount;

            expect(afterLikes).toBe(initialLikes + 1);
        });
    });

    describe('when rendered', () => {
        it('should display the number of likes', () => {
            let likesCountElem = wrapper.find('.likes-count');

            expect(likesCountElem).toExist();
            expect(likesCountElem.text()).toBe('0');
        });

        it('should display a button to like the item', () => {
            let likeButton = wrapper.find('#like');
            expect(likeButton).toExist();

            let isButton = likeButton.is('button');
            expect(isButton).toBe(true);
        });
    });
});
