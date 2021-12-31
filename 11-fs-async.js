const {readFile, writeFile} = require('fs');
//utf8 for read file in utf8 formate
console.log('start');
readFile('./content/first.txt','utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt','utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`
            ,(err,result) => {
                if(err){
                    console.log(err);
                    return
                }
                console.log('Done with this Task');
            }
        )
    })
})

console.log('Starting next task');