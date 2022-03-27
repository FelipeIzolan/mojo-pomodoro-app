if(localStorage.length === 0){
    let template = {
        theme: "purpleman",
        timer: { restTime: 15, workTime: 45 }
    }

    Object.entries(template).forEach(currValue => {
        const key = currValue[0]
        const value = currValue[1]

        localStorage.setItem(key, JSON.stringify(value))
    })
}