//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../connection.js');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('UCC', () => {
    /*beforeEach((done) => { //Before each test we empty the database
        
    });*/

  describe('/GET debtor', () => {
      it('it should GET all the debtor', (done) => {
        chai.request('http://52.172.13.43:3333')
            .get('/getdebtor')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(3);
              done();
            });
      });
  });

describe('/GET states', () => {
      it('it should GET all the states', (done) => {
        chai.request('http://52.172.13.43:3333')
            .get('/getstates')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(4);
              done();
            });
      });
  });


  describe('/POST Get Jurisdictions', () => {
      it('it should get all Jurisdictions for a given state', (done) => {
          let stateObj = { "state": "california" }
        chai.request('http://52.172.13.43:3333')
            .post('/getjurisdictions')
            .send(stateObj)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('jurisdiction');
                  //res.body.errors.should.have.property('pages');
                  res.body[0].should.have.property('jurisdiction').eql('Civil appeals');
              done();
            });
      });
});

describe('/GET collaterol', () => {
      it('it should GET all the collaterol', (done) => {
        chai.request('http://52.172.13.43:3333')
            .get('/getcollaterol')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(3);
              done();
            });
      });
  });

describe('/GET secured parties', () => {
      it('it should GET all the secured parties', (done) => {
        chai.request('http://52.172.13.43:3333')
            .get('/getsecuredparties')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(3);
              done();
            });
      });
  });

describe('/GET show Fillings', () => {
      it('it should GET all the Fillings', (done) => {
        chai.request('http://52.172.13.43:3333')
            .get('/showFilling')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(3);
              done();
            });
      });
  });

describe('/GET Get Transaction details', () => {
      it('it should GET Transaction details', (done) => {
        chai.request('http://52.172.13.43:5000')
            .get('/api/org.example.mynetwork.StoreHash/2bd572af5dc071262f1a634d8879c2ae957c5401c3621068e4d549882a77988a')
            .end((err, res) => {
                  //res.should.have.status(200);
                  //res.body.should.be.a('array');
                  //res.body.length.should.be.eql(3);
              done();
            });
      });
  });




/*describe('/POST Submit NewFilling doc', () => {
      it('it should NewFilling doc', (done) => {
          let stateObj = {
              "New_Filling_State": "california", 
              "New_Filling_Jurisdiction": "Civil appeals", 
              "Filling_Form_Type": "UCC1", 
              "Billing_ref_1": "12344455ty", 
              "Debtor_Type": "Jp Morgan", 
              "Debtor_Party_type": "Business", 
              "Debtor_Organisation_Name": "ABCD", 
              "Debtor_Mailing_Address": "sample@gg.com", 
              "Debtor_City": "Test", 
              "Debtor_State": "CityTest", 
              "Debtor_Postal_Code": "23231",
              "Secured_Party_Type": "CITI", 
              "Party_Type": "Business", 
              "Secured_Party_Organisation_Name": "TestOrg123", 
              "Secured_Party_Mailing_Address": "sample1@gg.com", 
              "Secured_Party_City": "Test1", 
              "Secured_Party_State": "california", 
              "Secured_Party_Postal_Code": "234242",
              "Collateral_Type": "Home", 
              "Type_of_Attachment": "Pdf", 
              "Collateral_Is": "None"
            }
        chai.request('http://52.172.13.43:3333')
            .post('/submitdoc')
            .send(stateObj)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('jurisdiction');
                  //res.body.errors.should.have.property('pages');
                  res.body[0].should.have.property('jurisdiction').eql('Civil appeals');
              done();
            });
      });
});


describe('/POST Submit NewFilling Hash to Hyperledger', () => {
      it('it should Submit NewFilling Hash to Hyperledger', (done) => {
          let stateObj = {
            "$class": "org.example.mynetwork.NewFilling",
            "hashId": "a5a820d5a3119923ed7360ffbf45b72a07c602e64fd2d3ac032e1f58e48bce66"
        }
        chai.request('http://52.172.13.43:5000')
            .post('/api/org.example.mynetwork.NewFilling')
            .send(stateObj)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('jurisdiction');
                  //res.body.errors.should.have.property('pages');
                  res.body[0].should.have.property('jurisdiction').eql('Civil appeals');
              done();
            });
      });
});

describe('/GET Get NewFilling Asset Hash from Hyperledger', () => {
      it('it should GET NewFilling Asset Hash from Hyperledger', (done) => {
        chai.request('http://52.172.13.43:5000')
            .get('/api/org.example.mynetwork.NewFilling/a5a820d5a3119923ed7360ffbf45b72a07c602e64fd2d3ac032e1f58e48bce66')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(3);
              done();
            });
      });
  });

describe('/POST Store NewFilling Asset Hash to Hyperledger', () => {
      it('it should Store NewFilling Asset Hash to Hyperledger', (done) => {
          let stateObj = {
            "$class": "org.example.mynetwork.StoreHash",
            "newFilling": "resource:org.example.mynetwork.NewFilling#a5a820d5a3119923ed7360ffbf45b72a07c602e64fd2d3ac032e1f58e48bce66",
            "transactionId": "",
            "timestamp": "Mon Aug 27 2018 17:00:00 GMT-0700 (PDT)"
        }
        chai.request('http://52.172.13.43:5000')
            .post('/api/org.example.mynetwork.StoreHash')
            .send(stateObj)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('jurisdiction');
                  //res.body.errors.should.have.property('pages');
                  res.body[0].should.have.property('jurisdiction').eql('Civil appeals');
              done();
            });
      });
});

describe('/POST Store TransactionId from Hyperledger to MySQL', () => {
      it('it should Store TransactionId from Hyperledger to MySQL', (done) => {
          let stateObj = { "transactionId": "e1bc74d135e7e66a9d125de237da8bf17ca719d41ddcde768ffe1b7e974391b4" }
        chai.request('http://52.172.13.43:3333')
            .post('/postTransactionId')
            .send(stateObj)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('jurisdiction');
                  //res.body.errors.should.have.property('pages');
                  res.body[0].should.have.property('jurisdiction').eql('Civil appeals');
              done();
            });
      });
});*/


});