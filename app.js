console.log("hello")

const poster = document.querySelector('.text-area')
const postButton = document.querySelector('.post-button')
const taskContainer = document.getElementById('task-container')

console.log(postButton)


function appender(){
    // let item = poster.value
    let task = document.createElement('div')
    task.classList.add('task')
    
    let li = document.createElement('li')
    li.innerText = poster.value
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = 'check'
    checkButton.classList.add('liBut')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    deleteButton.classList.add('liBut')
    task.appendChild(deleteButton) 

    if(poster.value === ''){
        alert("Please enter something")
    }else{
        taskContainer.appendChild(task)
    }
    
    poster.value = ''

    checkButton.addEventListener('click', function(){
        console.log(checkButton.parentElement.classList)
        if (checkButton.parentElement.classList.contains('li-dash')){
            checkButton.parentElement.classList.remove('li-dash')
        } else{
            checkButton.parentElement.classList.add('li-dash')
        }
        // checkButton.parentElement.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener('click', function(e){
        let targ = e.target
        console.log(targ.parentElement.remove())
    })
    // console.log(task)
}

postButton.addEventListener('click', appender)


