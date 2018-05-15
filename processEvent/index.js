module.exports = function (context, msg) {
    context.log('Node.js eventhub trigger function processed work item', msg);    
    context.done();
};