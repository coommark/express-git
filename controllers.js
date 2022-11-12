//This is a sample controller

const logger = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
};

const printer = () => {};

const doublePrinter = () => {
    console.log("Double Printer");
};

module.exports = {
    logger,
};
