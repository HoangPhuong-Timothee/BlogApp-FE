const reducer = (state, action)=>{
    switch(action.type){
        case "START_LOGIN":
           return {
                user: null,
                isFetching: true,
                error: false
            }
        break;
        case "SUCCESS_LOGIN":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            }
        break;
        case "FAIL_LOGIN":
            return{
                user: null,
                isFetching: false,
                error: true
            }
        default: 
            return state
    }
}