# Prerequisite:: NodeJS, npm, Docker are pre-installed on the machine.
rm -r ./test11/
mkdir "test11"

# To clean directory
rm -rf ./test11/{*,.*}
echo "test11 directory created"
echo "Cloning Github repository"
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/blockchain ./test11/
echo "###################  Cloned from Github  #####################"
echo "##############################################################"
echo "########  Moving contents from test11 to test12 directory #########"
rm -r ./test12/*
rm -rf ./test12/
mkdir "test12"
mv ./test11/* ./test12
# To clean directory
rm -r ./test11/*
echo "########  Moved contents from test11 to test12 directory #########"
rm -rf ./test11/

npm install -g composer-cli

npm install -g composer-rest-server

npm install -g composer-playground

npm install -g gulp

composer card delete --card admin@ucc

composer-playground </dev/null >/dev/null &

chmod u+x ./test12/hyperledger/UCC/fabric/downloadFabric.sh
chmod u+x ./test12/hyperledger/UCC/fabric/fabric-scripts/hlfv12/downloadFabric.sh
chmod u+x ./test12/hyperledger/UCC/fabric/startFabric.sh
chmod u+x ./test12/hyperledger/UCC/fabric/fabric-scripts/hlfv12/startFabric.sh
chmod u+x ./test12/hyperledger/UCC/fabric/createPeerAdminCard.sh
chmod u+x ./test12/hyperledger/UCC/fabric/fabric-scripts/hlfv12/createPeerAdminCard.sh

./test12/hyperledger/UCC/fabric/./downloadFabric.sh
./test12/hyperledger/UCC/fabric/./startFabric.sh
./test12/hyperledger/UCC/fabric/./createPeerAdminCard.sh

npm install --prefix ./test12/hyperledger/UCC/blockchain/

composer network install --card PeerAdmin@hlfv1 --archiveFile ./test12/hyperledger/UCC/blockchain/ucc@0.0.1.bna

composer network start --networkName ucc --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

composer card import --file networkadmin.card

composer network ping --card admin@ucc

#composer-rest-server -c admin@ucc -n never -y No -a false -w true -t false -p 5000
composer-rest-server -c admin@ucc -n never -p 5000 </dev/null >/dev/null &

