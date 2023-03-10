// https://www.npmjs.com/package/express

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import hbs from 'hbs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const express = require('express')
//const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');      // handlebars necesita una carpeta llamada views, que es donde buscara por defecto si se le pide renderizar una vista

hbs.registerPartials(  __dirname +'/views/partials');


// Servir contenido estático
app.use( express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {            // Aqui envio información desde el controlador a la vista en html
        nombre: 'Christian Concha',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {            // Aqui envio información desde el controlador a la vista en html
        nombre: 'Christian Concha',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {            // Aqui envio información desde el controlador a la vista en html
        nombre: 'Christian Concha',
        titulo: 'Curso de Node'
    });
})

app.get('*', function (req, res) {
    res.render('404');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//app.listen(8080)
