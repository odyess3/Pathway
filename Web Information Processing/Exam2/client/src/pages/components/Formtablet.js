import React from 'react'
import "../tenant.css"

const Formtablet = ({handleSubmit,handleChange,handleclose,rest}) => {
        return (

        <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="btn btn-danger close-btn" onClick={handleclose}>close</div>


            <label htmlFor="title">Title:</label>
            <select id="title" name="title" onChange={handleChange} value={rest.title} required>
                <option value="">Select...</option>
                <option value="Mx">Mx</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
                <option value="Other">Other</option>
            </select>
            
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={rest.name} required></input>

            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" onChange={handleChange} value={rest.surname} required></input>

            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" onChange={handleChange} value={rest.phone} required></input>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={rest.email} required></input>

            <label htmlFor="address1">Address Line 1:</label>
            <input type="text" id="address1" name="address1" onChange={handleChange} value={rest.address1} required></input>

            <label htmlFor="address2">Address Line 2:</label>
            <input type="text" id="address2" name="address2" onChange={handleChange} value={rest.address2} ></input>

            <label htmlFor="town">Town:</label>
            <input type="text" id="town" name="town" onChange={handleChange} value={rest.town} required></input>

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" onChange={handleChange} value={rest.city} required></input>

            <label htmlFor="eircode">Eircode:</label>
            <input type="text" id="eircode" name="eircode" onChange={handleChange} value={rest.eircode} ></input>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    </div>

    
    ) 
}

export default Formtablet