import { useState, useRef, useEffect } from "react"

function AddKitty(props) {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0
  })

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

	return (
		<>
			<h1>Add Kitty</h1>
			<form autoComplete="off" ref={formElement}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Kitty's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Kitty's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
            value={formData.breed}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Kitty's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
            value={formData.age}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Kitty
					</button>
				</div>
			</form>
		</>
	)
}

export default AddKitty