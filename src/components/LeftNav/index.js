import './index.css'

export default function LeftNav(props) {
  const {slide, index, onClick} = props

  return (
    <>
      <li testid="slideNumber">
        <button type="button" className="NewButton" onClick={onClick}>
          <div className="inner">
            <p>{index + 1}</p>
            <div>
              <h1>{slide.heading}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        </button>
      </li>
    </>
  )
}
