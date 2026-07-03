import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the full application without crashing', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#home')).toBeInTheDocument()
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#format')).toBeInTheDocument()
    expect(container.querySelector('#achievements')).toBeInTheDocument()
    expect(container.querySelector('#ioaa')).toBeInTheDocument()
    expect(container.querySelector('#team')).toBeInTheDocument()
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('renders navbar and footer', () => {
    const { container } = render(<App />)
    expect(container.querySelector('nav')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders main element', () => {
    const { container } = render(<App />)
    expect(container.querySelector('main')).toBeInTheDocument()
  })
})
