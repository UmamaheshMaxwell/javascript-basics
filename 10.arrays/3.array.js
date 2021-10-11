var data = [
            1,
            "Uma",
            true,
            null,
            undefined,
            {name: "uma"},
            function(name){
                return name
            },
            ["Red", "Blue", "Yellow"]
           ]

console.log(data[6](data[5].name))

console.log(data[6](data[7][1]))


