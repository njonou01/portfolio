import React from 'react'

const Resume = () => {
  return (
      <section className="py-16">
      <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">My Career Journey</h2>
          <h3 className="text-4xl font-bold mb-12 text-center">My CV <span className="text-blue-600">Resume</span></h3>
          <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                  <h4 className="font-bold text-xl mb-6">Education</h4>
                  <div className="mb-6">
                      <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600">2015 - 2016</span>
                      </div>
                      <h5 className="font-semibold mb-1">Oxford University</h5>
                      <p className="text-gray-600">MSc in Computer Science</p>
                  </div>
                  <div>
                      <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600">2010 - 2014</span>
                      </div>
                      <h5 className="font-semibold mb-1">Higher School Graduation</h5>
                      <p className="text-gray-600">Bachelor of Computer Science</p>
                  </div>
              </div>
              <div className="md:w-1/2">
                  <h4 className="font-bold text-xl mb-6">Experience</h4>
                  <div className="mb-6">
                      <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600">2020 - Now</span>
                      </div>
                      <h5 className="font-semibold mb-1">Web Designer - Fiverr</h5>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                      <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600">2018 - 2020</span>
                      </div>
                      <h5 className="font-semibold mb-1">Developer - XYZ Studio</h5>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Resume