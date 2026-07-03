import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders section titles', () => {
    render(<About />)
    expect(screen.getByText('সম্পর্কে')).toBeInTheDocument()
    expect(screen.getByText('About BDOAA')).toBeInTheDocument()
  })

  it('renders all four info cards', () => {
    render(<About />)
    expect(screen.getByText('আমাদের সম্পর্কে')).toBeInTheDocument()
    expect(screen.getByText('আমাদের লক্ষ্য')).toBeInTheDocument()
    expect(screen.getByText('ইতিহাস')).toBeInTheDocument()
    expect(screen.getByText('আন্তর্জাতিক সংযোগ')).toBeInTheDocument()
  })

  it('shows Bengali description', () => {
    render(<About />)
    expect(
      screen.getByText(/BDOAA একটি অলাভজনক সংগঠন/),
    ).toBeInTheDocument()
  })

  it('shows English description', () => {
    render(<About />)
    expect(
      screen.getByText(/BDOAA is a non-profit organization/),
    ).toBeInTheDocument()
  })

  it('has the about section id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })

  it('mentions 2007 founding year in history card', () => {
    render(<About />)
    expect(screen.getByText(/2007 সালে শুরু/)).toBeInTheDocument()
  })
})
