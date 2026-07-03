import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import IOAAHistory, { formatTeamList } from './IOAAHistory'

describe('formatTeamList', () => {
  it('joins members with commas', () => {
    expect(formatTeamList(['Alice', 'Bob', 'Charlie'])).toBe('Alice, Bob, Charlie')
  })

  it('returns single name without comma', () => {
    expect(formatTeamList(['Alice'])).toBe('Alice')
  })

  it('returns empty string for empty array', () => {
    expect(formatTeamList([])).toBe('')
  })
})

describe('IOAAHistory component', () => {
  it('renders section titles', () => {
    render(<IOAAHistory />)
    expect(screen.getByText('IOAA-তে বাংলাদেশ')).toBeInTheDocument()
    expect(screen.getByText('Bangladesh in IOAA')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<IOAAHistory />)
    expect(screen.getByText(/২০০৭ সাল থেকে/)).toBeInTheDocument()
  })

  it('displays team member names', () => {
    render(<IOAAHistory />)
    const matches = screen.getAllByText(/Pritom Mozumdar/)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('has the ioaa section id', () => {
    const { container } = render(<IOAAHistory />)
    expect(container.querySelector('#ioaa')).toBeInTheDocument()
  })

  it('shows both IOAA and IOAAjr entries', () => {
    render(<IOAAHistory />)
    expect(screen.getByText(/3rd IOAAjr/)).toBeInTheDocument()
  })
})
