export default function pageReducer(state = {pageNumber: 1}, action) {
    /*
    This reducer is very simple. Its sole job is to mark which page you're on. This will allow things like buttons that take you
    to pages other than the one before or after as well as will serve as the means of the buttons taking you to the next page.
    */
    switch (action.type) {
      //Number 2 from above are accomplished through LOADING and SUCCESS
        case "PAGE_FORWARD":
            //Will be what the basic page forward button uses to go forward one page
            return{
                ...state, 
                pageNumber: state.pageNumber + 1
            }
        case "PAGE_BACK":
            //Will be what the basic page back button uses to go back one page
        return{
            ...state, 
            pageNumber: state.pageNumber - 1
        }
        case "GO_TO_CERTAIN_PAGE":
            //For cases where we need to link to a certain page rather than just one in either direction
          return{
              ...state, 
              pageNumber: action.payload
          }
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

