const BlockChain = require("./blockchain")

const bitcoin = new BlockChain();
// bitcoin.createNewBlock('22222','sdsadasdasd','asdasdasdasd')
// bitcoin.createNewTransactions(8000, 'john', 'nada')
// bitcoin.createNewTransactions(8000, 'john', 'nada')
// bitcoin.createNewTransactions(8000, 'john', 'nada')
// bitcoin.createNewBlock('22222','sdsadasdasd','asdasdasdasd')

const previousBlockHash = '09898bhjghjghjghjgj'
const currentBlockChain = [
    {
        amount: 10,
        sender: 'nasdsdsadasd32132',
        recipient: '23232324234324324'
    },
    {
        amount: 20,
        sender: 'nasdsdsadasd32132',
        recipient: '23232324234324324'
    },
    {
        amount: 30,
        sender: 'nasdsdsadasd32132',
        recipient: '23232324234324324'
    }
]
// const nonce = 232323232
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockChain))


// console.log(bitcoin.chain[1])
// console.log(bitcoin.hasBlock(previousBlockHash,currentBlockChain,nonce))