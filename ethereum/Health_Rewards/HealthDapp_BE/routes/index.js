var express = require('express');
const app = express();
const fs = require('fs');
var cors = require('cors')
app.use(cors())
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var models = require('../models');
var claimUtils = require('../claimUtils');



var GOOGLE_CLIENT_ID = "932164338587-4nhithmu2l1ojltl90ptcdkom2g1up5k.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET = "xfef7HpI05jJjMOmxhAIX0lg",
  GOOGLE_CALLBACK_URL = "https://blockchain.evokeapps.io:7000/auth/google/callback";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    //NOTE :
    //Carefull ! and avoid usage of Private IP, otherwise you will get the device_id device_name issue for Private IP during authentication
    //The workaround is to set up thru the google cloud console a fully qualified domain name such as http://mydomain:3000/ 
    //then edit your /etc/hosts local file to point on your private IP. 
    //Also both sign-in button + callbackURL has to be share the same url, otherwise two cookies will be created and lead to lost your session
    //if you use it.
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallback: true
  },
  function (request, accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.

      return done(null, profile);
    });
    console.log(profile.emails)
    models.User.findOne({
      where: {
        username: profile.displayName
      }
    }).then(user => {
      if (!user) {
        models.User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          accessToken: accessToken,
          refreshToken: refreshToken
        })

      } else {
        updateCondition = {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
        user.update(updateCondition).then(() => {
          console.log('Updated User tokens');
        }).catch(error => {
          console.log(error);
        })
      }
    }).catch(error => {
      console.log(error);
    });
  }
));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Email config
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'demo90111@gmail.com',
    pass: 'hari3296so'
  }
})

//

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read', 'https://www.googleapis.com/auth/fitness.activity.read'
    ],
    accessType: 'offline',
    prompt: 'consent'
  }))

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.


app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // res.status(200).send({"username": req.user.displayName});
    //  var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
    //      responseHTML = responseHTML.replace('%value%', JSON.stringify({
    //          user: req.user.displayName
    //      }));
    //      res.status(200).send(responseHTML); 
    res.redirect('http://52.172.13.43:7200/Dashboard?username=' + req.user.emails[0].value)
  });

//Async/await config

var async = require('asyncawait/async');
var await = require('asyncawait/await');

//web3 config

var Web3 = require('web3');
var web3 = new Web3(
  new Web3.providers.HttpProvider('https://rinkeby.infura.io/01430c533dcd4c42bd9cc98cff3eb0a4')
);
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;

//wallet config

var address = '0x2Bf6D47F1b1Dbe57430Fcd121903bb8FdB240eA9';
var key = 'F9E619B6EF3DB1F094580F62608DF9F21C025605F62FAA9E5AC2D8133F26A1D6';

//DB Config

// db = require('../connection.js');

//contract config
var ABI = [{
  "constant": false,
  "inputs": [{
    "name": "tokens",
    "type": "uint256"
  }],
  "name": "deposit",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "reciever",
    "type": "address"
  }, {
    "name": "t",
    "type": "uint256"
  }],
  "name": "returnTokens",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }, {
    "name": "_age",
    "type": "uint256"
  }, {
    "name": "_goal",
    "type": "uint256"
  }, {
    "name": "_status",
    "type": "uint256"
  }],
  "name": "setInstructor",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "afs",
    "type": "address"
  }, {
    "name": "st",
    "type": "uint256"
  }],
  "name": "up",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "personaddr",
    "type": "address"
  }, {
    "name": "steps",
    "type": "uint256"
  }],
  "name": "updatestatus",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "balances",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "contractbalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "countInstructors",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "getInstructor",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getInstructors",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "personAccts",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}]
var contractAddress = '0xed423d75703c3b9a680fa62527981d8aaec188da';
var contract = new web3.eth.Contract(ABI, contractAddress);
var store;


//sendSignedTRansaction method

function sendRaw(rawTx, callback) {
  console.log("In method")
  var privateKey = new Buffer(key, 'hex');
  var transaction = new tx(rawTx);
  transaction.sign(privateKey);
  var serializedTx = transaction.serialize();

  console.log(serializedTx);
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function (err, result) {
    if (err) {
      console.log(err);
    } else {
      store = result;
      console.log(store);
      callback(result);
    }
  }).then((result) => {
    console.log(result);

  })
}


app.post('/me', function (req, res) {
  let email = req.body.email;
  models.User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    res.send(user);
  })

});


app.post('/setGoal', async (req, res, next) => {



  let contact = req.body.contact;
  let walletId = req.body.walletAddress;
  let goal = req.body.goal;
  let age = req.body.age;
  let email = req.body.email;


  console.log(walletId,typeof(walletId),'printing wallet id');
  
  models.User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if (!user) {
      res.send({
        "message": "User not found"
      })
    } else {
      var updateCondition = {
        contact: contact,
        walletId: walletId,
        goal: goal,
        age: age,
      } //walletId
      user.update(updateCondition).then(user => {
        console.log(updateCondition);
        console.log('Updated user data');
    
        models.Goal.create({
          email: email,
          goal: goal,
          status: "In Progress"
        })

        var n = async function m() {
          var x = await web3.eth.getTransactionCount(address)
          txOptions = {
            chainId: 4,
            nonce: await web3.utils.toHex(x),
            gasLimit: await web3.utils.toHex(5000000),
            gasPrice: await web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            to: contractAddress
          }


          var rawTx = txutils.functionTx(ABI, 'setInstructor', [req.body.walletAddress, req.body.age, req.body.goal, 0], txOptions);
          console.log(rawTx);
          var s = await sendRaw(rawTx, async (result, err) => {
            if (err) {
              res.send(err);
            } else {
              console.log(result);
              //mail sent to the user regarding successfull registration
              var mailoptions = {
                from: 'dummytest471@gmail.com',
                to: req.body.email,
                subject: 'Succesfully Registered',
                text: 'Hi You are succesfully registered with E-Fit Thank you for registering with us.....!!!!!!! :) And please save this reference no for future purpose  ' + result

              }

              await transporter.sendMail(mailoptions, function (err, info) {
                if (err) {
                  console.log(err);
                  res.send({
                    "status": "0",
                    "message": "failed.....!"
                  });
                } else {
                  res.send({
                    "status": "1",
                    "message": "Successfully Registered"
                  });
                }
              })
            }
          });
        }

        n();

      })
    }
  })

});


app.get('/updateData', async (req, res) => {
  models.User.update({
    stepsReached: 0
  }, {
    where: {}
  }).then(user => {
    console.log('Users updated successfully')
    res.send("Ok")
  })
})


app.post('/goals', async (req, res) => {

  models.Goal.findAll({
    where: {
      email: req.body.email
    }
  }).then(user => {
    console.log('User from goals');
    res.send(user)
  })

});

app.post('/claim', async (req, res) => {


  let username = req.body.username;
  await models.User.findOne({
    where: {
      username: username
    }
  }).then(async (user) => {
    if (!user) {
      res.send('User not present!')
    } else {
      try {
  
      


        //get data from google fit api
        console.log(user.accessToken)
        var stepsReached = await claimUtils.getStepsFromGoogleFit(user.accessToken);
        //var stepsReached = 2000;
        var updateCondition = {
          stepsReached: stepsReached,
        }
        await user.update(updateCondition).then(user => {
          console.log('steps updated');

          var m = async function m() {
            var x = await web3.eth.getTransactionCount(address)
            txOptions = {
              chainId: 4,
              nonce: await web3.utils.toHex(x),
              gasLimit: await web3.utils.toHex(5000000),
              gasPrice: await web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
              to: contractAddress
            }
            console.log(req.body.status + " status from postman ");
            var rawTx = txutils.functionTx(ABI, 'updatestatus', [req.body.walletAddress, stepsReached], txOptions);
            console.log(rawTx);
            var s = await sendRaw(rawTx, async (rev, err) => {
              if (err) {
                res.send(err);
              } else {

                console.log(rev + "transaction Hash");

                var hash = rev;

                // check status and goal
                if (user.stepsReached >= user.goal) {

                 
                    //updating Goals table
        
                                  await models.Goal.findOne({
                                    where: {
                                      email: user.email,
                                      goal:user.goal
                                    }
                                  }).then(async(up)=>{
                                    
                                    var upc = {
                                      status : "completed"
                                    }

                                    await up.update(upc).then(us =>{
                                      console.log("goals table updated");
                                    })

                                  })



                  //mail sent to the user regarding Token
                  var mailoptions = {
                    from: 'dummytest471@gmail.com',
                    to: req.body.email,
                    subject: 'Token Recieved',
                    text: 'For the successfull completion of GOal you have recieved a EToken Please Check your Wallet For More Information   ' + hash

                  }

                  await transporter.sendMail(mailoptions, function (err, info) {
                    if (err) {
                      console.log(err);
                      res.send({
                        "status": "0",
                        "message": "failed.....!"
                      });
                    } else {

                      res.send({
                        "status": "1",
                        "message": "Successfully Claimed"
                      });

                    }
                  })

                } else {

                  res.send({
                    "message": "Goal not reached!"
                  });
                }
              }

            });

          }
          m();
        })
      } catch (error) {
        console.log(error);
      }
      res.status(200).send({
        "steps": result
      });
    }
  })



})

module.exports = app;
