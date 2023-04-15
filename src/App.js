import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import LeftNav from './components/LeftNav'
import Navbar from './components/Navbar'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

function App() {
  const [slides, setSlides] = useState(initialSlidesList)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const activeSlide = slides[activeSlideIndex]

  const handleTabClick = index => {
    setActiveSlideIndex(index)
  }

  const handleHeadingEdit = event => {
    const newSlides = [...slides]
    newSlides[activeSlideIndex].heading = event.target.innerText
    setSlides(newSlides)
  }

  const handleDescriptionEdit = event => {
    const newSlides = [...slides]
    newSlides[activeSlideIndex].description = event.target.innerText
    setSlides(newSlides)
  }

  const handleNewSlide = () => {
    const newSlide = {
      id: uuid(),
      heading: 'heading',
      description: 'description',
    }
    const newSlides = [
      ...slides.slice(0, activeSlideIndex + 1),
      newSlide,
      ...slides.slice(activeSlideIndex + 1),
    ]
    setActiveSlideIndex(activeSlideIndex + 1)
    setSlides(newSlides)
  }

  return (
    <>
      {' '}
      <Navbar />
      <div>
        <button onClick={handleNewSlide} type="button" className="Button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="image"
          />
          New
        </button>
      </div>
      <div className="main-container">
        <div className="listContainer">
          <ol className="list">
            {slides.map((slide, index) => (
              <LeftNav
                key={slide.id}
                testid="slideTab{slideNumber}"
                slide={slide}
                index={index}
                active={index === activeSlideIndex}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </ol>
        </div>
        <div className="container">
          <h1 contentEditable="true" onBlur={handleHeadingEdit}>
            {activeSlide.heading}
          </h1>
          <p contentEditable="true" onBlur={handleDescriptionEdit}>
            {' '}
            {activeSlide.description}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
