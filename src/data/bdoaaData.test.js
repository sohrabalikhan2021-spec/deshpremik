import { describe, it, expect } from 'vitest'
import {
  aboutInfo,
  olympiadFormat,
  committees,
  ioaaResults,
  ioaaJuniorResults,
  owaoResults,
  getTotalMedals,
  getYearsOfParticipation,
  getAchievementsByType,
  getAllCommitteeMembers,
  getResultsByYear,
} from './bdoaaData'

describe('aboutInfo', () => {
  it('has correct founding year', () => {
    expect(aboutInfo.founded).toBe(2007)
  })

  it('has all required fields', () => {
    expect(aboutInfo.name).toBe('Bangladesh Olympiad on Astronomy and Astrophysics')
    expect(aboutInfo.shortName).toBe('BDOAA')
    expect(aboutInfo.website).toBe('https://bdoaa.org')
    expect(aboutInfo.email).toBe('bdoaa.official@gmail.com')
  })

  it('has Bengali translations', () => {
    expect(aboutInfo.nameBn).toBeTruthy()
    expect(aboutInfo.descriptionBn).toBeTruthy()
    expect(aboutInfo.missionBn).toBeTruthy()
  })

  it('has English descriptions', () => {
    expect(aboutInfo.description).toContain('non-profit')
    expect(aboutInfo.mission).toContain('astronomy')
  })
})

describe('olympiadFormat', () => {
  it('has 4 rounds', () => {
    expect(olympiadFormat.rounds).toHaveLength(4)
  })

  it('rounds are in correct order', () => {
    expect(olympiadFormat.rounds[0].name).toBe('Regional Round')
    expect(olympiadFormat.rounds[1].name).toBe('National Round')
    expect(olympiadFormat.rounds[2].name).toBe('National Camp')
    expect(olympiadFormat.rounds[3].name).toBe('IOAA Representation')
  })

  it('each round has required fields', () => {
    for (const round of olympiadFormat.rounds) {
      expect(round.name).toBeTruthy()
      expect(round.nameBn).toBeTruthy()
      expect(round.description).toBeTruthy()
      expect(round.descriptionBn).toBeTruthy()
      expect(round.icon).toBeTruthy()
    }
  })

  it('has 3 exam types', () => {
    expect(olympiadFormat.examTypes).toHaveLength(3)
  })

  it('exam types include Theory, Observation, Data Analysis', () => {
    const names = olympiadFormat.examTypes.map((e) => e.name)
    expect(names).toContain('Theory')
    expect(names).toContain('Observation')
    expect(names).toContain('Data Analysis')
  })
})

describe('committees', () => {
  it('has all 4 committee types', () => {
    expect(committees.executive).toBeDefined()
    expect(committees.academic).toBeDefined()
    expect(committees.organizing).toBeDefined()
    expect(committees.advisory).toBeDefined()
  })

  it('executive committee has Dr. M Arshad Momen and Dr. Khan Asad', () => {
    const names = committees.executive.members.map((m) => m.name)
    expect(names).toContain('Dr. M Arshad Momen')
    expect(names).toContain('Dr. Khan Asad')
  })

  it('academic committee includes Fahim Rajit Hossain', () => {
    const names = committees.academic.members.map((m) => m.name)
    expect(names).toContain('Fahim Rajit Hossain')
  })

  it('each committee has Bengali title', () => {
    for (const key of Object.keys(committees)) {
      expect(committees[key].titleBn).toBeTruthy()
    }
  })

  it('each member has name and role', () => {
    for (const key of Object.keys(committees)) {
      for (const member of committees[key].members) {
        expect(member.name).toBeTruthy()
        expect(member.role).toBeTruthy()
      }
    }
  })
})

describe('ioaaResults', () => {
  it('has entries from 2007 to 2025', () => {
    const years = ioaaResults.map((r) => r.year)
    expect(years).toContain(2007)
    expect(years).toContain(2025)
  })

  it('first IOAA was in Chiang Mai, Thailand', () => {
    const first = ioaaResults.find((r) => r.year === 2007)
    expect(first.location).toBe('Chiang Mai, Thailand')
    expect(first.edition).toBe('1st')
  })

  it('2025 result has silver medal for Tasdik Ahmed', () => {
    const r2025 = ioaaResults.find((r) => r.year === 2025)
    const silver = r2025.achievements.find((a) => a.type === 'silver')
    expect(silver.name).toBe('Tasdik Ahmed')
  })

  it('2023 has 2 silver and 1 bronze', () => {
    const r2023 = ioaaResults.find((r) => r.year === 2023)
    const silvers = r2023.achievements.filter((a) => a.type === 'silver')
    const bronzes = r2023.achievements.filter((a) => a.type === 'bronze')
    expect(silvers).toHaveLength(2)
    expect(bronzes).toHaveLength(1)
  })

  it('each result has required fields', () => {
    for (const result of ioaaResults) {
      expect(result.year).toBeGreaterThanOrEqual(2007)
      expect(result.edition).toBeTruthy()
      expect(result.location).toBeTruthy()
      expect(Array.isArray(result.teamMembers)).toBe(true)
      expect(Array.isArray(result.teamLeaders)).toBe(true)
      expect(Array.isArray(result.achievements)).toBe(true)
    }
  })

  it('results are sorted by year descending', () => {
    for (let i = 1; i < ioaaResults.length; i++) {
      expect(ioaaResults[i - 1].year).toBeGreaterThan(ioaaResults[i].year)
    }
  })
})

describe('ioaaJuniorResults', () => {
  it('has at least one entry', () => {
    expect(ioaaJuniorResults.length).toBeGreaterThanOrEqual(1)
  })

  it('3rd IOAAjr was in Kathmandu, Nepal', () => {
    const entry = ioaaJuniorResults[0]
    expect(entry.location).toBe('Kathmandu, Nepal')
    expect(entry.year).toBe(2024)
  })
})

describe('owaoResults', () => {
  it('has at least one entry', () => {
    expect(owaoResults.length).toBeGreaterThanOrEqual(1)
  })

  it('1st OWAO was in Russia', () => {
    const entry = owaoResults[0]
    expect(entry.location).toBe('Mordovia, Russia')
    expect(entry.year).toBe(2022)
  })
})

describe('getTotalMedals', () => {
  it('returns object with all medal types', () => {
    const medals = getTotalMedals()
    expect(medals).toHaveProperty('gold')
    expect(medals).toHaveProperty('silver')
    expect(medals).toHaveProperty('bronze')
    expect(medals).toHaveProperty('honorable')
    expect(medals).toHaveProperty('special')
  })

  it('has correct silver count', () => {
    const medals = getTotalMedals()
    const expectedSilver = ioaaResults.reduce(
      (count, r) => count + r.achievements.filter((a) => a.type === 'silver').length,
      0,
    )
    expect(medals.silver).toBe(expectedSilver)
  })

  it('has correct bronze count', () => {
    const medals = getTotalMedals()
    const expectedBronze = ioaaResults.reduce(
      (count, r) => count + r.achievements.filter((a) => a.type === 'bronze').length,
      0,
    )
    expect(medals.bronze).toBe(expectedBronze)
  })

  it('total awards are non-negative', () => {
    const medals = getTotalMedals()
    const total = medals.gold + medals.silver + medals.bronze + medals.honorable + medals.special
    expect(total).toBeGreaterThan(0)
  })
})

describe('getYearsOfParticipation', () => {
  it('returns count matching ioaaResults length', () => {
    expect(getYearsOfParticipation()).toBe(ioaaResults.length)
  })

  it('returns a positive number', () => {
    expect(getYearsOfParticipation()).toBeGreaterThan(0)
  })
})

describe('getAchievementsByType', () => {
  it('returns silver achievements with year and location', () => {
    const silvers = getAchievementsByType('silver')
    expect(silvers.length).toBeGreaterThan(0)
    for (const s of silvers) {
      expect(s.type).toBe('silver')
      expect(s.year).toBeTruthy()
      expect(s.location).toBeTruthy()
    }
  })

  it('returns empty array for non-existent type', () => {
    const none = getAchievementsByType('platinum')
    expect(none).toEqual([])
  })

  it('returns bronze achievements correctly', () => {
    const bronzes = getAchievementsByType('bronze')
    for (const b of bronzes) {
      expect(b.type).toBe('bronze')
    }
  })
})

describe('getAllCommitteeMembers', () => {
  it('returns all members from all committees', () => {
    const all = getAllCommitteeMembers()
    let expectedTotal = 0
    for (const key of Object.keys(committees)) {
      expectedTotal += committees[key].members.length
    }
    expect(all).toHaveLength(expectedTotal)
  })

  it('each member has committee field', () => {
    const all = getAllCommitteeMembers()
    for (const m of all) {
      expect(m.committee).toBeTruthy()
      expect(m.name).toBeTruthy()
    }
  })
})

describe('getResultsByYear', () => {
  it('returns result for valid year', () => {
    const result = getResultsByYear(2025)
    expect(result).not.toBeNull()
    expect(result.year).toBe(2025)
    expect(result.location).toBe('Mumbai, India')
  })

  it('returns null for invalid year', () => {
    expect(getResultsByYear(1999)).toBeNull()
  })

  it('returns correct data for 2007', () => {
    const result = getResultsByYear(2007)
    expect(result.edition).toBe('1st')
    expect(result.teamMembers).toContain('Pritom Mozumdar')
  })
})
