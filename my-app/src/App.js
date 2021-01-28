import { connect } from "react-redux";

const App = (props) => {
  console.log(props);
  let trackInput = ''
  const addTrack= () =>{
    if ( trackInput.value)  {
      console.log('add track', trackInput.value);
      let idx= Date.now()
      props.onAddTrack(trackInput.value , idx);
      trackInput = '' 
    } else 
 alert('Empty')
  }

  const deleteTrack = (e)=>{
    console.log(e.target.innerText)
     props.onDeleteTrack(e.target.innerText)
  }
  return (
    <div>
      <input type="text" name="" ref={(input)=> trackInput = input} />
      <button onClick={addTrack}>Add track</button>
      <ul>
        {props.tracks.map((track, index) => (
          <li key={index} onClick = { deleteTrack}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

// connect is a decorator
export default connect(
  // accepts function 'mapStateToProps' will pass state as proops to the component
  state => ({
    tracks: state.tracks, // global state
  }),
  // this will accept method 
  dispatch => ({
    onAddTrack: (trackName, idx) => {
    // this will accept object with type and payload
     dispatch({type: 'ADD_TRACK', payload: {name: trackName , id: idx}})
    },
    onDeleteTrack: (trackName) => {
      // this will accept object with type and payload
       dispatch({type: 'DELETE_TRACK', payload: trackName})
      }
  })
)(App);
