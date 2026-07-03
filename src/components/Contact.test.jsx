import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders section titles', () => {
    render(<Contact />)
    expect(screen.getByText('যোগাযোগ')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)
    const emailLink = screen.getByText('bdoaa.official@gmail.com')
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:bdoaa.official@gmail.com',
    )
  })

  it('renders website link', () => {
    render(<Contact />)
    const link = screen.getByText('bdoaa.org')
    expect(link.closest('a')).toHaveAttribute('href', 'https://bdoaa.org')
    expect(link.closest('a')).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Contact />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('YouTube')).toBeInTheDocument()
  })

  it('social links open in new tab', () => {
    render(<Contact />)
    const fbLink = screen.getByText('Facebook').closest('a')
    expect(fbLink).toHaveAttribute('target', '_blank')
    expect(fbLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has the contact section id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })
})
