const Like = (state = 53, action) => {
     switch (action.type) {
          case "INCREASE-LIKE":
               return state + 1
          case "REDUCE-LIKE":
               return state - 1
          default:
               return state

     }
}

export default Like