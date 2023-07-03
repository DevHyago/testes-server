import express, { response } from 'express';

const app = express();

app.get('/', function(request, response){
  console.log('Chamou o express');
  return response.send('<h1>Hello Word</h1>')
})

app.listen(5050, function(){console.log('Server started on port 5050')})