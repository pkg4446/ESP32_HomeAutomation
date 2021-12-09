const express = require('express');
const Hive = require('../models/hive');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const object = await Hive.findAll({
        where: {EQPMN_ESNTL_SN: req.body.eqnum},
        raw : true 
        });
      res.json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const object = await Hive.create({
        EQPMN_ESNTL_SN: req.body.eqnum,
        MESURE_VAL_01: req.body.temp,
        MESURE_VAL_02: req.body.humi,
        MESURE_VAL_03: req.body.weigh,
        MESURE_VAL_04: req.body.sugar,
      });
      console.log(object);
      res.status(201).json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:id', async (req, res, next) => {
    try {
      const object = await Hive.findOne({
        where: {EQPMN_ESNTL_SN: req.params.id},
        order: [['MESURE_DT', 'DESC']],
        limit: 1,
        raw : true 
      });
      console.log(object);
      res.json(object);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
