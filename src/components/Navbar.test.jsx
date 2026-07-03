import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the BDOAA brand', () => {
    render(<Navbar />)
    expect(screen.getByText('BDOAA')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('হোম')).toBeInTheDocument()
    expect(screen.getByText('সম্পর্কে')).toBeInTheDocument()
    expect(screen.getByText('পরীক্ষা পদ্ধতি')).toBeInTheDocument()
    expect(screen.getByText('অর্জন')).toBeInTheDocument()
    expect(screen.getByText('IOAA ফলাফল')).toBeInTheDocument()
    expect(screen.getByText('টিম')).toBeInTheDocument()
    expect(screen.getByText('যোগাযোগ')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Navbar />)
    expect(screen.getByText('হোম').closest('a')).toHaveAttribute('href', '#home')
    expect(screen.getByText('সম্পর্কে').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('যোগাযোগ').closest('a')).toHaveAttribute('href', '#contact')
  })

  it('has navigation role', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('toggle button controls menu visibility', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking a nav link closes the menu', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByText('হোম'))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
