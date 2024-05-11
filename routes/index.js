const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const Transaction = require('../app/schema/data.js');

const newTransaction = new Transaction({
    txHash: '0x123456789abcdef', // Esempio di hash univoco della transazione
    sender: '0xabcdef123456789', // Esempio di indirizzo del mittente
    gasUsed: '21000', // Esempio di gas utilizzato
    activity: 'transfer', // Esempio di tipo di attività
    timestamp: new Date(), // Esempio di timestamp
    inputs: [{
        name: 'amount', // Esempio di nome dell'input
        type: 'uint256', // Esempio di tipo dell'input
        value: 100 // Esempio di valore dell'input (può essere di diversi tipi)
    }],
    storageState: [{
        name: 'balance', // Esempio di nome dello stato di storage
        type: 'uint256', // Esempio di tipo dello stato di storage
        value: 1000 // Esempio di valore dello stato di storage (può essere di diversi tipi)
    }],
    internalTxs: [{
        type: 'call', // Esempio di tipo di transazione interna
        to: '0x987654321fedcba' // Esempio di destinatario della transazione interna
        // Altri campi se necessario
    }],
    events: [{
        name: 'Transfer', // Esempio di nome dell'evento
        values: {from: '0xabcdef123456789', to: '0xfedcba987654321', amount: 100} // Esempio di valori dell'evento
    }]
});

// Salvataggio dell'oggetto transazione nel database
newTransaction.save()
    .then(transaction => {
        console.log('Transazione salvata con successo:', transaction);
    })
    .catch(error => {
        console.error('Errore durante il salvataggio della transazione:', error);
    });

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
