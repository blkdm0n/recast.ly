class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  handleClick() {
    console.log('clicked title');
    this.setState({
      playing: !this.state.playing
    });
  }
  render() { 
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.props.videos[0]}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.props.videos} handleClick={this.handleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
