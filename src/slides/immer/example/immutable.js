export const immutable = `import produce from 'immer'

const byId = produce((draft, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach(product => {
        draft[product.id] = product
      })
      return
    })
  }
})`;

export const reduxNoImmer = `const byId = (state, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state
    }
}`;

export const thisProject = `const reducer = produce((draft, action) => {
    switch (action.type) {
      case "increment":
        draft.activeSlide =
          draft.activeSlide + 1 < draft.max
            ? draft.activeSlide + 1
            : draft.activeSlide;
        return;
      case "decrement":
        draft.activeSlide =
          draft.activeSlide - 1 >= 0 ? draft.activeSlide - 1 : draft.activeSlide;
        return;
      case "set":
        draft.activeSlide = action.slide;
        return;
      default:
        throw new Error();
    }
  });`;
