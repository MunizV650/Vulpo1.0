let conn = require('../inc/db');
var express = require('express');
var contacts = require('../inc/contacts');
var emails = require('../inc/emails');
const s = require('connect-redis');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  
  conn.query(
    "SELECT * FROM tb_menus ORDER BY title",
    (err, results, fields) => {

      if (err) {
        console.log(err);
      }

      res.render('index', {
        title: 'Vulpo!',
        menus: results
      });
    });
});

router.get('/contacts', function(req, res, next) {

  contacts.render(req, res);

});

router.post('/contacts', function(req, res, next) {
 
  if (!req.body.name) {
    contacts.render(req, res, "Digite o Nome");
  } else if (!req.body.email) {
    contacts.render(req, res, "Digite o E-mail");
  } else if (!req.body.message) {
    contacts.render(req, res, "Digite a Mensagem");
  } else {

    contacts.save(req.body).then(results => {

      req.body = {};

      contacts.render(req, res, null, "Contato Enviado com Sucesso");
      
    }).catch(err => {

      contacts.render(req, res, err.message);
      
    });

  }

});

router.get('/menus', function (req, res, next) {
  res.render('menus', {
    title: 'Menus - Vulpo!',
    background: 'images/sistema-erp.jpg',
    h1: 'Menu'
  });
});

router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Serviços - Vulpo!',
    background: 'images/sistema-erp.jpg',
    h1: 'Nossos Serviços!'
  });
});


router.post("/menus", function (req, res, next) {

  emails.save(req).then(results => {

    res.send(results);

  }).catch(err => {

    res.send(err);
  });
  
 
});

module.exports = router;
