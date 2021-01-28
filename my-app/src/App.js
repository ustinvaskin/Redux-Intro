import { connect } from "react-redux";

const App = (props) => {
  console.log(props);
  let trackInput = ''
  const addTrack= () =>{
    if ( trackInput.value)  {
      console.log('add track', trackInput.value);
      props.onAddTrack(trackInput.value);
      trackInput = '' 
    } else 
 alert('Empty')
  }
  return (
    <div>
      <input type="text" name="" ref={(input)=> trackInput = input} />
      <button onClick={addTrack}>Add track</button>
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
  // this will accept method 
  dispatch => ({
    onAddTrack: (trackName) => {
    // this will accept object with type and payload
     dispatch({type: 'ADD_TRACK', payload: trackName})
    }
  })
)(App);
