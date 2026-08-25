import { describe, expect, it } from 'vitest'
import { headingId } from './headingId'

describe('headingId', () => {
  it('normaliza títulos de secciones para enlaces únicos y estables', () => {
    expect(headingId('0.1 Herramientas necesarias')).toBe('0-1-herramientas-necesarias')
    expect(headingId('Seguridad y tratamiento de datos')).toBe('seguridad-y-tratamiento-de-datos')
  })
})
