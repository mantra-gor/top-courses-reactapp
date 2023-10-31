import Header from "./components/Header"
import Filter from "./components/Filter"
import CardContainer from "./components/CardContainer"
import { apiUrl, filterData } from "./data"
import { useState, useEffect } from "react"
import Spinner from "./components/Spinner"
import { toast } from "react-toastify"

function App() {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("All")

  const errorVal = 0

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(apiUrl)
      const output = await response.json()
      setCourses(output.data)
    }
    catch (error) {
      console.log(errorVal+1)
      // toast.error("Something Went Wrong!")
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col">
      <Header />

      <Filter category={category} setCategory={setCategory}
        filterData={filterData} />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center
          min-h-[80vh]">
        {
          loading ? (<Spinner />) : (<CardContainer courses={courses} category={category} />)
        }
      </div>

    </div>
  )
}

export default App
