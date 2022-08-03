const sha256 = require('sha256')
//constructor
function BlockChain(){
    this.chain = []
    this.pendingTransactions = []

    this.createNewBlock(100, '0','0')
}
/**
 * param nonce, previousBlockHash, hash
 * @param {string} nonce mean number only used once
 * @param {string} previousBlockHash 
 * @param {string} hash encrypted data
 * @returns 
 */

BlockChain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = []
    this.chain.push(newBlock)

    return newBlock

}

BlockChain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1]
}
/**
 * 
 * @param {*} amount 
 * @param {*} sender 
 * @param {*} recipient 
 * @returns 
 */
BlockChain.prototype.createNewTransactions = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount, 
        sender: sender,
        recipient: recipient
    }
    this.pendingTransactions.push(newTransaction)

    return this.getLastBlock()['index'] + 1
}

/**
 * 
 * @param {int}  previousBlockHash
 * @param {int}  currentBlockChain
 * @param {int}  nonce
 */
BlockChain.prototype.hashBlock = function (previousBlockHash, currentBlockChain, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockChain)
    const hash = sha256(dataAsString)
    return hash
}

BlockChain.prototype.proofOfWork = function(previousBlockHash, currentBlockChain){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash,currentBlockChain,nonce)
    while (hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash,currentBlockChain,nonce)
    } 
    return nonce

}


module.exports = BlockChain
