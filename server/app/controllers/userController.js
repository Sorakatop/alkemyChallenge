const bcrypt = require('bcrypt');
const { Users } = require('../database/models')


const authConfig= require('../../config/auth')
const { createTokens, validateToken } = require("../../JWT");


module.exports = {
  test: (req, res) => {
    Users.findAll().then(a => { res.send(a) })
  }, 
  register:  (req, res) => {
    console.log(req.body);   
    //crypt pw 
    let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);

    // Crear un usuario
    Users.create(
       {
        name: req.body.name,
        email: req.body.email,
        password: password,        
       }
    ).then(user => {
        // Creamos el token
        let token = createTokens({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        console.log(token)
        user({
            user: user,
            token: token
        });

    }).catch(err => {      
      console.log(err)
        res.status(500).json(err);
    });
  
  },
  login: async (req, res) => {
    let { email, password } = req.body

    const user = await Users.findOne({ 
      where: { email },
      include: [{
      association: 'Operation'
    }] 
  })

    if (!user) return res.status(400).json({ error: "User Doesn't Exist" })

    const dbPassword = user.password;

    bcrypt.compare(password, dbPassword).then((match)=>{
      if(!match) {
        res
        .status(400)
        .json({error: "Credenciales invalidas"})
      }else{
        const accessToken = createTokens(user)
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true,
        });
        
        res.json({
          user: user,
          token: accessToken
      })
      }
    })  
  },
  changepw: (req, res) => {
    const { password, newPassword } = req.body
    Users.update(
      { password: bcrypt.hashSync(newPassword, 10) },
      { where: { id: req.body.id } }
    ).then(() => {
      Users.findByPk(req.params.id)
        .then(user => { res.send(user) })
    })
  }
}
