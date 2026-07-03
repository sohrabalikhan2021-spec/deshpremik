import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the Bengali title', () => {
    render(<Hero />)
    expect(
      screen.getByText('বাংলাদেশ জ্যোতির্বিদ্যা ও জ্যোতিঃপদার্থবিদ্যা অলিম্পিয়াড'),
    ).toBeInTheDocument()
  })

  it('renders the English title', () => {
    render(<Hero />)
    expect(
      screen.getByText('Bangladesh Olympiad on Astronomy and Astrophysics'),
    ).toBeInTheDocument()
  })

  it('displays founding year 2007', () => {
    render(<Hero />)
    expect(screen.getByText('2007')).toBeInTheDocument()
  })

  it('displays stats section with labels', () => {
    render(<Hero />)
    expect(screen.getByText('প্রতিষ্ঠিত')).toBeInTheDocument()
    expect(screen.getByText('বার IOAA অংশগ্রহণ')).toBeInTheDocument()
    expect(screen.getByText('আন্তর্জাতিক পুরস্কার')).toBeInTheDocument()
    expect(screen.getByText('রৌপ্য পদক')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    const learnMore = screen.getByText('আরো জানুন')
    const viewAchievements = screen.getByText('অর্জনসমূহ দেখুন')
    expect(learnMore.closest('a')).toHaveAttribute('href', '#about')
    expect(viewAchievements.closest('a')).toHaveAttribute('href', '#achievements')
  })

  it('has the hero section with correct id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })
})
