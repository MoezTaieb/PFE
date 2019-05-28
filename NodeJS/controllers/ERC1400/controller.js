const express = require('express');
const Web3 = require('web3');
const fs = require('fs')

const router = express.Router();
var source = fs.readFileSync("/home/moez/ERC1400F/build/contracts/ERC1400.json");
var parseSource = JSON.parse(source)
var contractAddress = "0x282619457e74f3a6d20380994c4cec562aa8ae61";
var contractABI = parseSource.abi;
var gaS = 1000000;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var contractInstance = new web3.eth.Contract(contractABI, contractAddress);//.at(contractAddress);

router.get('/name',async(req,res) =>{
   
    try{
    let data = await contractInstance.methods.name().call()
    res.send(data)
    }catch(e){
        console.log("name"+e)
        res.send("error name")
      }
})
router.get('/symbole',async (req, res) => {    
    try{
        let data = await contractInstance.methods.symbol().call()
        res.send(data)
    }catch(e){
        console.log("symbole"+e)
        res.send("error symbole")
      }

})
router.get('/owner',async(req, res) => {
    try{
        let data = await contractInstance.methods.owner().call()
        res.send(data)
    }catch(e){
        console.log("owner"+e)
        res.send("error owner")
      }
})
router.get('/controllers',async(req,res) => {
    try{
        let data = await contractInstance.methods.controllers().call()
        res.send(data)
    }catch(e){
        console.log("owner"+e)
        res.send("error owner")
    }
})
router.get('/getTokenDefaultPartitions',async(req,res) => {
try{    
    let data = await contractInstance.methods.getTokenDefaultPartitions().call()
    res.send(data)
    }catch(e){
        console.log("getTokenDefaultPartitions"+e)
        res.send("error getTokenDefaultPartitions")
    }
})
router.get('/granularity',async(req,res) => {
    try{
        let data = await contractInstance.methods.granularity().call()
        res.send(data)
    }catch(e){
        console.log("granularity"+e)
        res.send("error granularity")
    }
    
})
router.get('/isContrallable',async(req,res) => {
    try{
        let data = await contractInstance.methods.isContrallable().call()
        res.send(data)
    }catch(e){
        console.log("isContrallable"+e)
        res.send("error isContrallable")
    }
    
})

router.get('/isIssuable',async(req,res) => {
    try{
        let data = await contractInstance.methods.isIssuable().call()
        res.send(data)
    }catch(e){
        console.log("isIssuable"+e)
        res.send("error isIssuable")
    }
    
})
router.get('/isOwner',async(req,res) => {
   try{
    let data = await contractInstance.methods.isOwner().call()
    res.send(data)
   }
   catch(e){
    console.log("isOwner"+e)
    res.send("error isOwner")
}
})
router.get('/totalPartitions',async(req,res) => {
    try{
        let data = await contractInstance.methods.totalPartitions().call()
        res.send(data)
    }
    catch(e){
        console.log("totalPartitions"+e)
        res.send("error totalPartitions")
    }
})
router.get('/totalSupply',async(req,res) => {
    try{
        let data = await contractInstance.methods.totalSupply().call()
        res.send(data)
    }
    catch(e){
        console.log("totalSupply"+e)
        res.send("error totalSupply")
    }
})
router.get('/balanceOf/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOf(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("balanceOf"+e)
        res.send("error balanceOf")
    }
})
router.get('/balanceOfByPartition/:partition/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOfBy(req.params.partition,req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("balanceOfByPartition"+e)
        res.send("error balanceOfByPartition")
    }
})
router.get('/canOperatorTransferByPartition/:partition/:From/:To/:value/:data/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOfByPartition(req.params.partition,req.params.From,req.params.To,req.params.value,req.params.data,req.params.operator).call()
        res.send(data)
    }catch(e){
        console.log("canOperatorTransferByPartition"+e)
        res.send("error canOperatorTransferByPartition")
    }
})
router.get('/canTransferBypartition/:partition/:to/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.canTransferBypartition(req.params.partition,req.params.to,req.params.value,req.params.data).call()
        res.send(data)
    }catch(e){
        console.log("canTransferBypartition"+e)
        res.send("error canTransferBypartition")
    }
})
router.get('/certificateSigner/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.certificateSigner(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("certificateSigner"+e)
        res.send("error certificateSigner")
    }
})
router.get('/checkCount/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.checkCount(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("checkCount"+e)
        res.send("error checkCount")
    }
})
router.get('/controllersBypartition/:partition',async(req,res) => {
    try{
        let data = await contractInstance.methods.controllersBypartition(req.params.partition).call()
        res.send(data)
    }catch(e){
        console.log("checkCount"+e)
        res.send("error checkCount")
    }
})
router.get('/getDefaultpartitions/:TokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.getDefaultpartitions(req.params.TokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("getDefaultpartitions"+e)
        res.send("error getDefaultpartitions")
    }
})
router.get('/getDocument/:name',async(req,res) => {
    try{
        let data = await contractInstance.methods.getDocument(req.params.name).call()
        res.send(data)
    }catch(e){
        console.log("getDocument"+e)
        res.send("error getDocument")
    }
})
router.get('/isMinter/:account',async(req,res) => {
    try{
        let data = await contractInstance.methods.isMinter(req.params.account).call()
        res.send(data)
    }catch(e){
        console.log("isMinter"+e)
        res.send("error isMinter")
    }
})
router.get('/isOperatorFor/:operator/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.isOperatorFor(req.params.operator,req.params.tokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("isOperatorFor"+e)
        res.send("error isOperatorFor")
    }
})
router.get('/isOperatorForPartition/:partition/:operator/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.isOperatorForPartition(req.params.partition,req.params.operator,req.params.tokenHolder).call()
    res.send(data)
    }catch(e){
        console.log("isOperatorForPartition"+e)
        res.send("error isOperatorForPartition")
      }
    
})
router.get('/partitionsOf/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.partitionOf(req.params.tokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("partitionsOf"+e)
        res.send("error partitionsOf")
      }
})




console.log("mezmezmeem");


router.get('/addMinter/:account',async(req,res) => {
    try{
        let data = await contractInstance.methods.addMinter(req.params.account).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("addMinter"+e)
        res.send("error ")
    }
})

router.get('/authorizeOperator/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.authorizeOperator(req.params.account).send({from : req.params.operator , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("authorizeOperator"+e)
        res.send("error authorizeOperator")
    }
})

router.get('/authorizeOperatorByPartition/:partition/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.authorizeOperatorByPartition(req.params.partition,req.params.operator).send({from : req.params.operator , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("authorizeOperatorByPartition"+e)
        res.send("error authorizeOperatorByPartition")
    }
})

router.get('/issueBypartition/:partition/:tokenHolder/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.issueBypartition(req.params.partition,req.params.tokenHolder,req.params.value,req.params.data).send({from : req.params.tokenHolder , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("issueBypartition"+e)
        res.send("error issueBypartition")
    }
})

router.get('/operatorRedeemByPartition/:partition/:tokenHolder/:value/:data/:operatorData',async(req,res) => {
    try{
        let data = await contractInstance.methods.operatorRedeemByPartition(req.params.partition,req.params.tokenHolder,req.params.value,req.params.data,req.params.operatorData).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("operatorRedeemByPartition"+e)
        res.send("error operatorRedeemByPartition")
    }
})

router.get('/operatorTransferByPartition/:partition/:from/:to/:value/:data/:operatorData:',async(req,res) => {
    try{
        let data = await contractInstance.methods.operatorTransferByPartition(req.params.partition,req.params.from,req.params.to,req.params.value,req.params.data,req.params.operatorData).send({from : req.params.from , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("operatorTransferByPartition"+e)
        res.send("error operatorTransferByPartition")
    }
})

router.get('/redeem/:value/:data',async(req,res) => {
    try{
        //let data = await contractInstance.methods.redeem(req.params.value,req.params.data).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeem"+e)
        res.send("error redeem")
    }
})

router.get('/redeemByPartition/:partition/:value/:data',async(req,res) => {
    try{
       // let data = await contractInstance.methods.redeemByPartition(req.params.partition,req.params.value,res.params.data).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeemByPartition"+e)
        res.send("error redeemByPartition")
    }
})

router.get('/redeemFrom/:from/:value/:operator/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.redeemFrom(req.params.from,req.params.value,req.params.operator,req.params.data).send({from : req.params.from , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeemFrom"+e)
        res.send("error redeemFrom")
    }
})

router.get('/renounceControl/:',async(req,res) => {
    try{
        //whithout param
        // let data = await contractInstance.methods.renounceControl(req.params.account).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceControl"+e)
        res.send("error renounceControl")
    }
})

router.get('/renounceIssuance/:account',async(req,res) => {
    try{
        //whithout param
        let data = await contractInstance.methods.renounceIssuance().send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceIssuance"+e)
        res.send("error ")
    }
})

router.get('/renounceMinter/:account',async(req,res) => {
    try{
        //whithout param
        //let data = await contractInstance.methods.renounceMinter(req.params.account).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceMinter"+e)
        res.send("error renounceMinter")
    }
})

router.get('/renounceOwnership/:account',async(req,res) => {
    try{
        //whitouht param
        //let data = await contractInstance.methods.renounceOwnership(req.params.account).send({from : req.params.account , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceOwnership"+e)
        res.send("error renounceOwnership")
    }
})

router.get('/revokeOperator/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.revokeOperator(req.params.operator).send({from : req.params.operator , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("revokeOperator"+e)
        res.send("error revokeOperator")
    }
})

router.get('/revokeOperatorByPartition/:partition/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.revokeOperatorByPartition(req.params.partition,req.params.operator).send({from : req.params.operator , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("revokeOperatorByPartition"+e)
        res.send("error revokeOperatorByPartition")
    }
})

router.get('/setCertificateSigner/:operator/:authorized',async(req,res) => {
    try{
        let data = await contractInstance.methods.setCertificateSigner(req.params.operator,req.params.authorized).send({from : req.params.operator , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("setCertificateSigner"+e)
        res.send("error setCertificateSigner")
    }
})
router.get('/setControllers/:operators',async(req,res) => {
    try {
        let data = await contractInstance.methods.setControllers(req.params.operators).send({from : req.params.operatorss , gas:gaS})
        res.send(data)
    } catch (e) {
        console.log("setControllers"+e)
        res.send("error setControllers")
        
    }
    
})
router.get('setDefaultPartitions/:partitions',async(req,res) => {
    try {
        let data = await contractInstance.methods.setDefaultpartitions(req.params.partitions).send({from : req.params , gas:gaS})
        
    } catch (e) {
        console.log("setDefaultPartitions"+e)
        res.send("error setDefaultpartitions")
        
    }
})








module.exports = router;
