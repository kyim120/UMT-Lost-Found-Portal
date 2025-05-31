import { prisma } from '../config/db'
import stringSimilarity from 'string-similarity'

export const findMatchesForLostItem = async (lostItemId: string) => {
  const lostItem = await prisma.lostItem.findUnique({
    where: { id: lostItemId }
  })

  if (!lostItem) return []

  const foundItems = await prisma.foundItem.findMany({
    where: {
      category: lostItem.category,
      location: {
        contains: lostItem.location,
        mode: 'insensitive'
      }
    }
  })

  const matches = foundItems.filter(found => {
    const similarity = stringSimilarity.compareTwoStrings(
      lostItem.description.toLowerCase(),
      found.description.toLowerCase()
    )
    return similarity > 0.4 // Adjust similarity threshold if needed
  })

  return matches
}
