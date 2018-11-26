// TODO
// var App = () => (
//   <div>
//     <div>
//       hello
//     </div>
//   </div>
// )
var glist = ['a','b','c','d'];

var Grocerylist = (props) => {
  // <ul>
  //   <li>{props.todos[0]}</li>
  //   <li>{props.todos[1]}</li>
  //   <li>{props.todos[2]}</li>
  // </ul>
  let groceries = props.groceries.map( (item, key) => <GrocerylistItem value={item} key={key}/> )
  return (
    <div>
      <h1> grocery list</h1>
      <ul> {groceries} </ul>
    </div>
  )
}

class GrocerylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }

  onItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  
  render() {
    let style = { fontWeight: this.state.done ? 'bold' : 'normal'};

    return (<li style={style} 
      onMouseEnter={this.onItemClick.bind(this)} 
      onMouseLeave={this.onItemClick.bind(this)}>
      {this.props.value}
      </li>);
  }
}

// var App = () => (
//   <div>
//     <h2>grocery list</h2>
//     < Grocerylist groceries = {glist}/>

//   </div>
// );
ReactDOM.render( <Grocerylist groceries = {glist}/>, document.getElementById('app'))

