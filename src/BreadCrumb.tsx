import { NavLink } from 'react-router-dom'

interface Data {
  data: {
    path: string
    slug: string
  }[]
}
function BreadCrumb({ data }: Data) {
  return (
    <>
      <span className='fs-14'>
        {data?.length > 0 ? (
          data?.map((link, idx) => {
            return (
              <span key={link?.slug}>
                <NavLink
                  to={`/${link?.path}`}
                  className={`text-black ${idx === data.length - 1 && 'fw-6 fs-16'}`}
                >
                  {link?.slug}
                </NavLink>{' '}
                {idx !== data.length - 1 && '/'}
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
