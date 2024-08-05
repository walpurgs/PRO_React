import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered clickable';
        expect(classNames('someClass', { hovered: true, clickable: true }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mod false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, clickable: false }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mod "" and mod undefined', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', { hovered: '', clickable: undefined }, ['class1', 'class2']))
            .toBe(expected);
    });
});
