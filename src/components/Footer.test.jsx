import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the BDOAA brand', () => {
    render(<Footer />)
    expect(screen.getByText('BDOAA')).toBeInTheDocument()
  })

  it('renders the Bengali name', () => {
    render(<Footer />)
    expect(
      screen.getByText('বাংলাদেশ জ্যোতির্বিদ্যা ও জ্যোতিঃপদার্থবিদ্যা অলিম্পিয়াড'),
    ).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('renders a footer element', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
