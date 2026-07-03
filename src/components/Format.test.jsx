import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Format from './Format'

describe('Format', () => {
  it('renders section titles', () => {
    render(<Format />)
    expect(screen.getByText('পরীক্ষা পদ্ধতি')).toBeInTheDocument()
    expect(screen.getByText('Olympiad Format')).toBeInTheDocument()
  })

  it('renders all 4 round steps', () => {
    render(<Format />)
    expect(screen.getByText('আঞ্চলিক রাউন্ড')).toBeInTheDocument()
    expect(screen.getByText('জাতীয় রাউন্ড')).toBeInTheDocument()
    expect(screen.getByText('জাতীয় ক্যাম্প')).toBeInTheDocument()
    expect(screen.getByText('IOAA প্রতিনিধিত্ব')).toBeInTheDocument()
  })

  it('renders English round names', () => {
    render(<Format />)
    expect(screen.getByText('Regional Round')).toBeInTheDocument()
    expect(screen.getByText('National Round')).toBeInTheDocument()
    expect(screen.getByText('National Camp')).toBeInTheDocument()
    expect(screen.getByText('IOAA Representation')).toBeInTheDocument()
  })

  it('renders exam types section', () => {
    render(<Format />)
    expect(screen.getByText('IOAA পরীক্ষার ধরন')).toBeInTheDocument()
    expect(screen.getByText('তত্ত্ব')).toBeInTheDocument()
    expect(screen.getByText('পর্যবেক্ষণ')).toBeInTheDocument()
    expect(screen.getByText('ডেটা বিশ্লেষণ')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<Format />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('has the format section id', () => {
    const { container } = render(<Format />)
    expect(container.querySelector('#format')).toBeInTheDocument()
  })
})
