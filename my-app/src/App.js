import { connect } from "react-redux";

const App = (props) => {
  console.log(props.testStore);
  return (
    <div>
      <input type="text" name="" />
      <button>Add track</button>
      <ul>
        {props.testStore.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
    </div>
  );
};

// connect is a decorator
export default connect(
  // accepts function 'mapStateToProps' will pass state as proops to the component
  (state) => ({
    testStore: state, // global state
  }),
  (dispatch) => ({})
)(App);
