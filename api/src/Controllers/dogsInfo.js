require('dotenv').config();
const { Dog, Temperament } = require('../db')
const axios = require('axios');
const e = require('express');
const { API_KEY } = process.env;

//Calculo altura promedio del dog
const avgHeight = height => {
  const auxArr = height.split(' - ');

  const minHeight = Number(auxArr[0]);
  const maxHeight = Number(auxArr[1]);

  const avg = (minHeight + maxHeight) / 2
  
  if(minHeight && !maxHeight) return minHeight.toFixed(2);
  if(maxHeight && !minHeight) return maxHeight.toFixed(2);
  return avg.toFixed(2)
};

//Calculo peso promedio del dog
const avgWeight = weight => {
  if(weight === 'NaN') return 15.00;
  const auxArr = weight.trim().split(' - ');
  
  const minWeight = Number(auxArr[0]);
  const maxWeight = Number(auxArr[1]);

  const avg = (minWeight + maxWeight) / 2;

  if(minWeight && !maxWeight) return minWeight.toFixed(2);
  if(maxWeight && !minWeight) return maxWeight.toFixed(2);

  return avg.toFixed(2)
};

//Traemos las razas desde la API
const apiDogs = async() => {

    try{
      const dogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
      const infoDogs = await dogs.data.map(el => {

        let temperament = []
        if(el.temperament) {
          temperament = el.temperament.split(", ")
        }
      // console.log(el.temperament);
      return {
        id: el.id,
        name: el.name, 
        height: avgHeight(el.height.metric),
        weight: avgWeight(el.weight.metric),
        life_span: el.life_span,
        image: el.image.url
            ? el.image.url
            : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
        temperaments: temperament
        ,
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