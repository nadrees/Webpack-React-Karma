import AwesomeComponent from './AwesomeComponent.jsx';
import expect from 'expect';

describe('AwesomeComponent', () => {
    describe('initial state', () => {
        it('should have 0 likes', () => {
            let comp = new AwesomeComponent();

            let likesCount = comp.state.likesCount;
            expect(likesCount).toBe(0);
        });
    });
});
