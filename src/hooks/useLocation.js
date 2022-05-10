const initialLocationState = {
  isPressed: false,
  data: {
    name: "",
    latitude: "",
    longitude: "",
  },
};

const useLocation = (state, action) => {
  switch (action.type) {
    case "PRESSED": {
      return { ...state, isPressed: true };
    }

    default:
      return state;
  }
};
