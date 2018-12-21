
class NinjaGoldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      golds: 40,
      log:[]
    }
    this.process = this.process.bind(this);



  }
  process(activity, min, max) {
    let amt = Math.floor(Math.random()*(max-min+1))+min;
    let msg = `You went to the ${activity} and ${amt>=0?'gained':'lost'} ${amt} gold!`;
    console.log(msg);
    this.setState({
      log: this.state.log.concat([msg]),
      gold: this.static.gold + amt
    })
  }
  render(){
    let acts = this.state.log.map(el=><li>(el)</li>);
    return <div>
      <header>
        <h1>Welcome to Ninja Gold</h1>
        <span>You have: {this.state.golds} gold!</span>
      </header>
      <section id="acts">
        <div id="inline">
          <h4>Farm</h4>
          <span>+10 Gold / +20 Gold</span>
          <button onClick={this.process.bind(this, "Farm", 10, 20)}>Play!</button>
        </div>
        <div>
          <h4>Cave</h4>
          <span>+5 Gold / +10 Gold</span>
          <button onClick={this.process.bind(this, "Cave", 5, 10)}>Play!</button>
        </div>
        <div>
          <h4>House</h4>
          <span>+2 Gold / +5 Gold</span>
          <button onClick={this.process.bind(this, "House", 2, 5)}>Play!</button>
        </div>
        <div>
          <h4>Mine</h4>
          <span>-50 Gold / +50</span>
          <button onClick={this.process.bind(this, "Mine", -50, 50)}>Play!</button>
        </div>
      </section>
      <section id="log">
        <h3>Activities</h3>
        <ul>
          {acts}
        </ul>
      </section>

    </div>
  }


};
let container = document.getElementById('root');
let NGC = <NinjaGoldComponent />

ReactDOM.render(NGC, container);
//let bob = new NinjaGoldComponent();
