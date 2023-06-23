import { storageService } from './storage.service'
import axios from 'axios'



export const travelService = {
    getTravels,
    getTravelById,
    deleteTravel,
    savetravel,
    getEmptytravel,
    fetchCountryOptions

}


const travels = storageService.load('travel') || []

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.country.toLocaleLowerCase() < b.country.toLocaleLowerCase()) {
            return -1;
        }
        if (a.country.toLocaleLowerCase() > b.country.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function getTravels(filterBy = null) {
    return new Promise((resolve, reject) => {
        console.log(travels)
        var travelsToReturn = travels;
        if (filterBy && filterBy.term) {
            travelsToReturn = filter(filterBy.term)
        }
        resolve(sort(travelsToReturn))
    })
}

function getTravelById(id) {
    return new Promise((resolve, reject) => {
        const travel = travel.find(travel => travel._id === id)
        travel ? resolve(travel) : reject(`travel id ${id} not found!`)
    })
}

function deleteTravel(id) {
    return new Promise((resolve, reject) => {
      const index = travels.findIndex((travel) => travel._id === id);
      if (index !== -1) {
        travels.splice(index, 1);
      }
  
      // Save the updated travels array to storage
      storageService.store('travel', travels);
  
      resolve(travels);
    });
  }
  

  function _updatetravel(travel) {
    return new Promise((resolve, reject) => {
      const index = travels.findIndex((c) => travel._id === c._id);
      if (index !== -1) {
        travels[index] = travel;
      }
      resolve(travel);
    });
  }
  
  function _addtravel(travel) {
    return new Promise((resolve, reject) => {
      travel._id = _makeId(); // Generate a unique ID for the travel
      travels.push(travel); // Add the travel to the array
  
      storageService.store('travel', travels); // Save the updated array to local storage
  
      resolve(travel);
    });
  }
  

function savetravel(travel) {
    return travel._id ? _updatetravel(travel) : _addtravel(travel);
  }
  

function getEmptytravel() {
    return {

        country: '',
        start: '',
        end: '',
        note: '',
        flag:''
    }
}

function filter(term) {
  term = term.toLocaleLowerCase();
  return travels.filter((travel) => {
    return travel.country.toLocaleLowerCase().includes(term);
    // travel.phone.toLocaleLowerCase().includes(term) ||
    // travel.email.toLocaleLowerCase().includes(term)
  });
}




function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


async function fetchCountryOptions(inputValue) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${inputValue}?fields=name,flags`
      );
  
      const options = response.data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
        flag: country.flags.svg,
      }));
  
      return options;
    } catch (error) {
      console.error('Error fetching country options:', error);
      return [];
    }
  }
  
  
