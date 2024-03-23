import React from "react";
import { useState } from "react";
import "./DetailsForm.css";

function DetailsForm() {
    const [medications, setMedications] = useState(['']);

    const handleAddMedication = () => {
      setMedications([...medications, '']);
    };
  
    const handleRemoveMedication = (index) => {
      const newMedications = [...medications];
      newMedications.splice(index, 1);
      setMedications(newMedications);
    };
  
    const handleMedicationChange = (index, value) => {
      const newMedications = [...medications];
      newMedications[index] = value;
      setMedications(newMedications);
    };

  return (
    <div className='detailsForm_container'>
    <div className="wrapper">
      <div className="container">
        <header className="left header">
          <div className="title-header">
            <h1 className="title text-center">Survey Form</h1>
            <p className="description text-center">
              Thank you for taking the time to help us improve the platform
            </p>
          </div>
        </header>

        <form id="survey-form" className="right">
          <div class="form-set">
            <label for="time-of-day" class="label">
              Time of Day
            </label>
            <select
              id="time-of-day"
              name="time-of-day"
              class="form-control"
              required
            >
              <option disabled selected>
                Select time of day
              </option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <div class="form-set">
            <label for="alarm-time" class="label">
              Alarm Time
            </label>
            <input
              type="time"
              id="alarm-time"
              name="alarm-time"
              class="form-control"
              style={ {width:"130px", margin:"7px"}}
              required
            />
          </div>
          <div className="form-set">
            <label htmlFor="medicine-name" className="label">Medicine Name</label>
            {medications.map((medicine, index) => (
              <div key={index} className="input-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter medicine name"
                  value={medicine}
                  onChange={(e) => handleMedicationChange(index, e.target.value)}
                  required
                />
                {index > 0 && (
                  <button type="button" className="remove-medication-btn" onClick={() => handleRemoveMedication(index)}>-</button>
                )}
                {index === medications.length - 1 && (
                  <button type="button" className="add-medication-btn" onClick={handleAddMedication}>+</button>
                )}
              </div>
            ))}
          </div>
          <div className="form-set">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        
        </form>
      </div>
    </div>
    </div>
  );
}

export default DetailsForm;
