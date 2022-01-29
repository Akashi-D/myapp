import React, {useState, useEffect} from 'react'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchData= async()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  },[])

if(loading){
  return (
    <section className='section loading'>
      <h1>Loading....</h1>
    </section>
  )
}
const {id, title, company, dates, duties} = jobs[value]
  return (
    <section className="section">
      <div className='title'>
      <h1>My Experiences</h1>
      <div className='underline'></div>
      </div>
      <div className='jobs-center'>
      <div className='btn-container'>
        {jobs.map((job, index)=> {
          return(
            <button className={`job-btn ${index === value && 'active-btn'}`} onClick={()=> setValue(index)}>
                {job.company}
            </button>
          )
        })}
      </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) =>{
        return(
          <div key={index} className='job-desc'>
            <p>{duty}</p>
          </div>
        )
      })}
      </article>
      </div>
    </section>
  );
}

export default App;
