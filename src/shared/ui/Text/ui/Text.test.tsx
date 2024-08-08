import { render, screen } from '@testing-library/react';
import { Text, ThemeText } from './Text';

describe('Text', () => {
    test('Text', () => {
        render(<Text text="Text" />);
        expect(screen.getByText('Text')).toHaveClass('text');
    });

    test('Title', () => {
        render(<Text title="Title" />);
        expect(screen.getByText('Title')).toHaveClass('title');
    });

    test('Title and text', () => {
        render(<Text title="Title" text="Text" />);
        expect(screen.getByText('Title')).toHaveClass('title');
        expect(screen.getByText('Text')).toHaveClass('text');
    });

    test('error', () => {
        render(<Text theme={ThemeText.ERROR} />);
        expect(screen.getByTestId('text')).toHaveClass('error');
    });
});
