var arrsttview = []
//var arrsttlike = []

for (var i = 0; i < 100; i++) {
     //arrLike[i] = 10
     arrsttview[i] = 20
     //view[i] = 2
}


const Arrview = (state = arrsttview, action) => {
     switch (action.type) {
          case "INCREASE-VIEW":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Arrview