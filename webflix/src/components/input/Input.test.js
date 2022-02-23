import { render } from '@testing-library/react'
import Genre from './Input'

describe(Genre.name, () => {
    it('renders nothing `id`', () => {
        render(<Genre />)
        expect(container.firstChild).not.toBeInTheDocument()
    })
    it('renders nothing wrong `id`', () => {
        render(<Genre id="9999999" />)
        expect(container.firstChild).not.toBeInTheDocument()
    })
    it('renders `Science Fiction` with `id`', () => {
        render(<Genre id='53' />)
        expect(container.firstChild).toBeInTheDocument()
    })
})