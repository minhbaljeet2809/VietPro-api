var arrsttlike = []
//var arrsttlike = []

for (var i = 0; i < 100; i++) {
     //arrLike[i] = 10
     arrsttlike[i] = false
     //view[i] = 2
}


const Arrsttlike = (state = arrsttlike, action) => {
     switch (action.type) {
          case "LIKE":
               return [...state,action.payload]
          case "NOT-LIKE":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Arrsttlike