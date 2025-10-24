import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <div>
        <img className="max-w-full object-cover" src={assets.error} alt="" />
      </div>
          <div className="flex flex-col gap-1 text-center">
        <h1 className="font-bold text-4xl">Error 404</h1>
        <p className="font-semibold text-2xl">Opps! Page not Found</p>
      </div>
      <div>
              <Link to='/' className="btn btn-secondary">Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage
