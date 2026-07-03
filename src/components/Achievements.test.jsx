import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Achievements, { getAwardEmoji, getAwardLabelBn } from './Achievements'

describe('getAwardEmoji', () => {
  it('returns correct emoji for each type', () => {
    expect(getAwardEmoji('gold')).toBe('🥇')
    expect(getAwardEmoji('silver')).toBe('🥈')
    expect(getAwardEmoji('bronze')).toBe('🥉')
    expect(getAwardEmoji('honorable')).toBe('🏅')
    expect(getAwardEmoji('special')).toBe('⭐')
  })

  it('returns default emoji for unknown type', () => {
    expect(getAwardEmoji('unknown')).toBe('🏅')
  })
})

describe('getAwardLabelBn', () => {
  it('returns correct Bengali label for each type', () => {
    expect(getAwardLabelBn('gold')).toBe('স্বর্ণ পদক')
    expect(getAwardLabelBn('silver')).toBe('রৌপ্য পদক')
    expect(getAwardLabelBn('bronze')).toBe('ব্রোঞ্জ পদক')
    expect(getAwardLabelBn('honorable')).toBe('সম্মানসূচক উল্লেখ')
    expect(getAwardLabelBn('special')).toBe('বিশেষ পুরস্কার')
  })

  it('returns input for unknown type', () => {
    expect(getAwardLabelBn('unknown')).toBe('unknown')
  })
})

describe('Achievements component', () => {
  it('renders section titles', () => {
    render(<Achievements />)
    expect(screen.getByText('আন্তর্জাতিক অর্জন')).toBeInTheDocument()
    expect(screen.getByText('International Achievements')).toBeInTheDocument()
  })

  it('renders medal summary', () => {
    render(<Achievements />)
    expect(screen.getByText('স্বর্ণ')).toBeInTheDocument()
    expect(screen.getByText('রৌপ্য')).toBeInTheDocument()
    expect(screen.getByText('ব্রোঞ্জ')).toBeInTheDocument()
    expect(screen.getByText('সম্মানসূচক')).toBeInTheDocument()
  })

  it('renders achievement cards for years with awards', () => {
    render(<Achievements />)
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('2023')).toBeInTheDocument()
  })

  it('shows highlight for 2025', () => {
    render(<Achievements />)
    expect(
      screen.getByText('4 out of 4 awards — historic result!'),
    ).toBeInTheDocument()
  })

  it('has the achievements section id', () => {
    const { container } = render(<Achievements />)
    expect(container.querySelector('#achievements')).toBeInTheDocument()
  })
})
