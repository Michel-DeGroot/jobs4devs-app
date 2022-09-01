import React from "react"
import JobBoardComponent from "./components/JobBoardComponent"
import data from "./API/data.json"
import { useEffect, useState } from "react"

import NaviBar from "./NaviBar"

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setJobs(data), [])

  // the code below creates the tag filters.
  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true
    }

    const tags = [role, level]

    if (tools) {
      tags.push(...tools)
    }
    if (languages) {
      tags.push(...languages)
    }

    return filters.every((filter) => tags.includes(filter))
  }

  const handleTagClick = (tag) => {
    // to avoid re-adding the tag.
    if (filters.includes(tag)) return
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter))
  }

  const filteredJobs = jobs.filter(filterFunc)

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div>
      <header className="bg-cyan-600 mb-12">
        {/* start NavBar section */}
        <span className="bg-transparent z-10 mt-40 xl:z-10 xl:-mt-40">
          <NaviBar />
        </span>
        {/* End NavBar section */}
        {/* <img
          className="w-full mb-40 z-0 xl:z-0"
          src="/images/bg-header-desktop.svg"
          alt="background"
        /> */}
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex flex-wrap bg-white shadow-lg my-16 mx-10 p-6 rounded -mt-5 lg:-mt-20 z-10 relative xl:w-3/4 xl:mx-auto">
            {filters.map((filter) => (
              <span
                className="cursor-pointer bg-cyan-100 mr-4 mb-4 p-1 pl-2 pr-0  font-bold space-x-4"
                onClick={() => handleFilterClick(filter)}
              >
                <span text-cyan-600 bg-cyan-200>
                  {filter}
                </span>

                <span
                  className=" text-xl bg-cyan-600 text-white px-2 py-1 "
                  border
                >
                  ✕
                </span>
              </span>
            ))}
            <button
              type="button"
              onClick={clearFilters}
              className="font bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-auto"
            >
              Clear Filters
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p> Vacatures worden geladen...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App

// TODOS
// 1. Study the design & API (Json) ✅
// 2. Create Job Board component (w/ Json using UseEffect) ✅
// 3. get the data from the Json ✅
// 4. pass down the data to the Job Board component ✅
// 5. Style the design
// 5a. Style mobile
// 5b. Style desktop ✅
// 6. filter component
// 7. filter the data
