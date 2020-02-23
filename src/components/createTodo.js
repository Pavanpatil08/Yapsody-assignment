import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      date: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onCreate = () => {
      let data=this.state;
      data.status="undone"
    this.props.addTodo(data);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container mt-3">
        <div class="card">
          <div class="card-body">
            <h4>Add Task</h4>
            <div class="form-group">
              <label for="exampleInputEmail1">Task name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Hello This is my tasks which need to be done or undone"
                onChange={this.handleChange}
                name="task"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Create Date</label>
              <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Date in format DD-MM-YYYY"
                onChange={this.handleChange}
                name="date"
              />
            </div>
            <a
              href="#"
              class="btn btn-secondary"
              onClick={() => this.props.history.push("/")}
            >
              CANCEL
            </a>
            <a href="#" class="btn btn-primary ml-3" onClick={this.onCreate}>
              CREATE
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    todos: store.todos
  };
};

export default connect(mapStateToProps, { addTodo })(Create);
