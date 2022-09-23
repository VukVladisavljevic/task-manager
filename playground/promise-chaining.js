require ('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('632987a3a5cf1f0e14a7033f')
// .then((task) =>  {
//     console.log(task);
//     return Task.countDocuments({
//         complete: false
//     })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => { 
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => { 
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6329939983d49fc71afb7a77').then((count) => { 
    console.log(count);
}).catch((e) => { 
    console.log(e);
})

