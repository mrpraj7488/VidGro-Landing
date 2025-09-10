import { NextResponse } from 'next/server'

// Simulate live stats for demo purposes
export async function GET() {
  const baseStats = {
    activeUsers: 1234,
    coinsEarned: 45678,
    viewsDelivered: 2345678,
    creatorsJoined: 48500
  }

  // Add some randomness to simulate live updates
  const liveStats = {
    activeUsers: baseStats.activeUsers + Math.floor(Math.random() * 100),
    coinsEarned: baseStats.coinsEarned + Math.floor(Math.random() * 1000),
    viewsDelivered: baseStats.viewsDelivered + Math.floor(Math.random() * 10000),
    creatorsJoined: baseStats.creatorsJoined + Math.floor(Math.random() * 10)
  }

  return NextResponse.json(liveStats)
}