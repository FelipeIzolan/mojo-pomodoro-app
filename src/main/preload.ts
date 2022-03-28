if(localStorage.length === 0){
    let template = {
        theme: "tomato",
        workTime: 45,
        restTime: 15
    }

    Object.entries(template).forEach(currValue => {
        const key = currValue[0]
        const value = currValue[1]

        localStorage.setItem(key, JSON.stringify(value))
    })
}