/* {
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
} */

const toDoList = [];

let nextId = 1;

const getAll = () => {
    return toDoList;
}
const addOne = (task, completed, dueDate) => {
    if (!task || !dueDate || typeof completed !== 'boolean') {
        return false;
    }

    toDoList.push({
        id: nextId++,
        task,
        completed,
        dueDate
    });
}
const findById = (id) => {
    if (!id) {
        return false
    }
    const numberId = Number(id);
    const toDo = toDoList.find(task => task.id === numberId);
    return toDo;
}
const updateOneById = (id, updatedData) => {
    if (!id) {
        return false
    }
    const toDo = findById(id)
    if (toDo) {
        if (updatedData.task) toDo.task = updatedData.task;
        if (updatedData.completed) toDo.completed = updatedData.completed;
        if (updatedData.dueDate) toDo.dueDate = updatedData.dueDate;
        return toDo;
    }
    return false
}
const deleteOneById = (id) => {
    if (!id) {
        return false;
    }
    const toDoIndex = toDoList.findIndex(toDo => toDo.id === id);
    if (toDoIndex) {
        toDoList.splice(toDoIndex, 1);
        return true;
    }
    return false; 
}

if (require.main === module) {
    console.log("addOne called: ", addOne("Study more", true, "2025-01-31"));
    console.log("addOne called: ", addOne("Code more", false, "2025-02-10"));
    console.log("findById called:", findById(2));
    console.log("updatedOneById called:", updateOneById(2, {completed: true}));
    console.log("getAll called:", getAll());
    console.log("deleteOneById called:", deleteOneById(2));
    console.log("getAll called:", getAll());
}


module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};