import React from "react"

const JobBoardComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level]

  if (tools) {
    tags.push(...tools)
  }
  if (languages) {
    tags.push(...languages)
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg my-16 mx-10 p-6 rounded ${
        featured && `border-l-4 border-teal-600`
      } lg:my-6 lg:flex-row xl:w-3/4 xl:mx-auto`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 lg:mt-0 lg:w-24 lg:h-24 lg:mt-4 md:w-22 md:h-22"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-600">
          {company}
          {isNew && (
            <span className="text-white text-xs bg-teal-600 font-bold py-1 px-2 m-2 rounded-full">
              NEW!
            </span>
          )}
          {featured && (
            <span className="text-white text-xs bg-teal-900 font-bold py-1 px-2 m-2 rounded-full">
              FEATURED
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-600">
          {postedAt} • {contract} • {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-solid border-teal-400 lg:ml-auto lg:border-none lg:pt-0 lg:mt-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer text-teal-600 bg-teal-50 font-bold p-2 mr-4 mb-4 rounded-xl lg:mb-0"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  )
}
export default JobBoardComponent
