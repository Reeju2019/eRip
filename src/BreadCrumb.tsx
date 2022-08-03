import React from 'react'
import { NavLink } from 'react-router-dom'
function BreadCrumb({ data }: any) {
  return (
    <>
      <span className='fs-14'>
        {data?.length > 0 ? (
          data?.map((link: any, idx: any) => {
            return (
              <span key={link?.slug}>
                <NavLink
                  to={`/${link?.path}`}
                  className={`text-black ${idx === data.length - 1 && 'fw-6 fs-16'}`}
                >
                  {link?.slug}
                </NavLink>{' '}
                {idx !== data.length - 1 && '/'}{' '}
              </span>
            )
          })
        ) : (
          <NavLink to='/' className='text-black'>
            Home
          </NavLink>
        )}
      </span>
    </>
  )
}

export default BreadCrumb
