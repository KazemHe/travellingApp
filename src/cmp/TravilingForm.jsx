import React, { useState } from 'react';
import { travelService } from '../services/travel.service';
import AsyncSelect from 'react-select/async';
import { navigate, useNavigate } from 'react-router-dom';
import '../style/TravilingForm.css';






export default function TravilingForm() {
    const [formValues, setFormValues] = useState({
        country: '',
        start: '',
        end: '',
        note: '',
        flag: ''
    });


    const navigate = useNavigate()



    async function onSubmitForm(ev) {
        ev.preventDefault();
      
        try {
          // Access the form values from the state
          const { country, start, end, note, flag } = formValues;
      
          // Create a travel object using the form values
          const travel = {
            country,
            start,
            end,
            note,
            flag, // Include the flag property with the SVG path
          };
      
          // Save the travel using the travelService
          await travelService.savetravel(travel);
          navigate('/table');
        } catch (error) {
          console.log('error:', error);
        }
      }
      

    function handleInputChange(ev) {
        // Update the form values in the state based on the input changes
        const { name, value } = ev.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));


    }
    function handleCountryChange(selectedOption) {
        setFormValues((prevValues) => ({
          ...prevValues,
          country: selectedOption ? selectedOption.value : '',
          flag: selectedOption ? selectedOption.flag : '',
        }));
      }
      

    return (
        <>
            <div className="title">TravilingForm</div>
            <form action="" className="form" onSubmit={onSubmitForm}>
                <label htmlFor="country"> country:</label>


                <AsyncSelect
                    loadOptions={travelService.fetchCountryOptions}
                    onChange={handleCountryChange}
                    isSearchable
                    isClearable
                />




                <label htmlFor="start">start date:</label>
                <input type="date" name="start" id="start" onChange={handleInputChange} />
                <label htmlFor="end">End date:</label>
                <input type="date" name="end" id="end" onChange={handleInputChange} />
                <label htmlFor="note">note:</label>
                <input type="text" name="note" id="note" onChange={handleInputChange} />
                <button type="submit">submit</button>
            </form>
        </>
    );
}
