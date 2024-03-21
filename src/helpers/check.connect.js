'use strict';

const { default: mongoose } = require("mongoose");
const { set } = require("../app");

// count the number of connections
const countConnect = () => {    
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections: ${numConnections}`);
}

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length;
        const numbCores = require('os').cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // Maximum number of connections based on the number of cores (5)
        const maxConnections = numbCores * 5;

        console.log(`Active connections: ${numConnections}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnections > maxConnections) {
            console.log('Overload');
        }
    }, 5000);
}

module.exports = {
    countConnect,
    checkOverload
}; 