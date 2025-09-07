// src/services/api.js
const API_URL = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing'

export async function getProperties() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch properties')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching properties:', error)
    throw error
  }
}

export async function getPropertyById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch property')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching property:', error)
    throw error
  }
}