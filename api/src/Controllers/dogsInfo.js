require('dotenv').config();
const { Dog, Temperament } = require('../db')
const axios = require('axios');
const e = require('express');
const { API_KEY } = process.env;


//Traemos las razas desde la API
const apiDogs = async() => {

    try{
      const dogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
      const infoDogs = await dogs.data.map(el => {

        let temperament = []
        if(el.temperament) {
          temperament = el.temperament.split(", ");
        }
      // console.log(el.temperament);
      return {
        id: el.id,
        name: el.name, 
        height: el.height.metric,
        weight: el.weight.metric,
        life_span: el.life_span,
        image: el.image.url
            ? el.image.url
            : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        temperaments: temperament
      }
    })
      return infoDogs;

    } catch (error){
      res.status(400).send("Error fetching data from API")
      
    }
  }
  // console.log(apiDogs());
  
  //Traemos las razas desde la DB
  const dbDogs = async() => {
    try{
      const dogs =  await Dog.findAll({
        include: {
          model: Temperament,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }
      });
      return dogs

    } catch(error) {
      res.status(400).send("Error fetching data from DB")
      
    }
  }

  module.exports = {
    apiDogs,
    dbDogs
  }