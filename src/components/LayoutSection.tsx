import React from 'react'

const LayoutSection = ({ children, title,id }: { children: React.ReactNode, title: string ,id: string }) => {
      return (
            <section id={id} className="container mx-auto my-16">
                  <div className='opacity-100 text-center transform-none'>
                        <div className="mb-16">
                              <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight capitalize">{title}</h2>
                        </div>
                  </div>
                  {children}
            </section>
      )
}

export default LayoutSection