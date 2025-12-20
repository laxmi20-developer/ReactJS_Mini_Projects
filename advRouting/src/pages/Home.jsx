import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/login">Go to Login page</Link>
    </div>
  )
}
