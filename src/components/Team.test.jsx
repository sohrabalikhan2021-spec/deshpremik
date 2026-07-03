import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Team, { getMemberInitials } from './Team'

describe('getMemberInitials', () => {
  it('returns first and last initials for multi-word names', () => {
    expect(getMemberInitials('Fahim Rajit Hossain')).toBe('FH')
  })

  it('returns single initial for single-word names', () => {
    expect(getMemberInitials('Alice')).toBe('A')
  })

  it('handles names with Dr. prefix', () => {
    expect(getMemberInitials('Dr. Khan Asad')).toBe('DA')
  })

  it('returns ? for empty string', () => {
    expect(getMemberInitials('')).toBe('?')
  })

  it('handles two-word names', () => {
    expect(getMemberInitials('Turja Roy')).toBe('TR')
  })
})

describe('Team component', () => {
  it('renders section titles', () => {
    render(<Team />)
    expect(screen.getByText('আমাদের টিম')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all committee sections', () => {
    render(<Team />)
    expect(screen.getByText('কার্যনির্বাহী কমিটি')).toBeInTheDocument()
    expect(screen.getByText('একাডেমিক কমিটি')).toBeInTheDocument()
    expect(screen.getByText('সংগঠন কমিটি')).toBeInTheDocument()
    expect(screen.getByText('উপদেষ্টা কমিটি')).toBeInTheDocument()
  })

  it('renders executive committee members', () => {
    render(<Team />)
    expect(screen.getByText('Dr. M Arshad Momen')).toBeInTheDocument()
    expect(screen.getByText('Dr. Khan Asad')).toBeInTheDocument()
  })

  it('renders member avatars with initials', () => {
    render(<Team />)
    expect(screen.getByText('DM')).toBeInTheDocument()
    expect(screen.getAllByText('DA').length).toBeGreaterThanOrEqual(1)
  })

  it('has the team section id', () => {
    const { container } = render(<Team />)
    expect(container.querySelector('#team')).toBeInTheDocument()
  })
})
