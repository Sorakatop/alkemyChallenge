const { Operation } = require('../database/models/')
  
  const operationController = {
    list: async (req, res) => {
      const list = await Operation.findAll({
        include: [{
            association: 'categories'
          },
          {
            association: 'users'
          }
        ]
      })
      res.json(list)
    },
    userOperation: async (req, res) => {
      const id = req.params.id
      
      const data = await Operation.findOne({
        where: {
          id
        },
        include: [{
            association: 'categories'
          },
          {
            association: 'users'
          }
        ]
      })
      console.log(data)
      res.json(data)
    },
    addOperation: async (req, res) => {
      try {
        const create = await Operation.create(req.body)
        res.json(create)
      } catch (err) {
        err => res.status(400).json(err)
      }
    },
    editOperation: async (req, res) => {
      const id = req.params.id
      try {
        const edit = await Operation.findOne({
          where: {
            id
          }
        })
        await edit.update(req.body)
        res.status(200).json({
          message: 'edit'
        })
      } catch (err) {
        err => res.status(400).json(err)
      }
    },
    deleteOperation: async (req, res) => {
      const id = req.params.id
      await Operation.destroy({
        where: {
          id
        }
      })
      res.status(200).json({
        message: 'delete'
      })
    }
  
  }
  
  module.exports = operationController