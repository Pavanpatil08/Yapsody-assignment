import React from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { doneTask, clearAllDoneTasks } from "../redux/actions";
class Home extends React.Component {
  renderClearAllDoneTasks = () => {
    const { tasks } = this.props.todos;
    let doneStatus = false;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].status == "done") {
        doneStatus = true;
        break;
      }
    }
    if (doneStatus) {
      return (
        <button
          onClick={() => {
            this.props.clearAllDoneTasks();
          }}
          className="btn btn-outline-primary ml-auto"
        >
          Clear all the doneTasks
        </button>
      );
    } else {
      return null;
    }
  };
  renderTable = () => {
    const { tasks } = this.props.todos;
    if (tasks.length > 0) {
      return (
        <table class="table table-dark mt-3 text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {tasks.map((arr, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{arr.task}</td>
                  <td>
                    {arr.status == "done" ? (
                      <button type="button" class="btn btn-success">
                        {arr.status}
                      </button>
                    ) : (
                      <button type="button" class="btn btn-danger">
                        {arr.status}
                      </button>
                    )}
                  </td>

                  {arr.status == "done" ? (
                    <td>
                      <button
                        type="button"
                        disabled
                        class="btn btn-outline-primary"
                      >
                        Edit
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => {
                          this.props.history.push(`/edit/${index}`);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary ml-2"
                        onClick={() => {
                          this.props.doneTask({ id: index });
                        }}
                      >
                        Done
                      </button>
                    </td>
                  )}
                </tr>
              </tbody>
            );
          })}
        </table>
      );
    } else {
      return <div style={{ borderTop: "2px solid black" }}>No tasks.</div>;
    }
  };
  render() {
    const { todos } = this.props;

    return (
      <div className="px-5 card">
        <div className="row p-4">
          <Link to="/create">
            <button type="button" class="btn btn-primary">
              Add New
            </button>
          </Link>
          {this.renderClearAllDoneTasks()}
        </div>
        <div>{this.renderTable()}</div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    todos: store.todos
  };
};

export default connect(mapStateToProps, { doneTask, clearAllDoneTasks })(Home);
