import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Party from "./Party";
class App extends Component {
  constructor() {
    super();

    this.state = {
      birthDayDate: "1992-06-21",
      flag: false,
    };
  }

  render() {
    return (
      <div className="app">
        <Form>
          <FormControl
            type="date"
            onChange={(event) => {
              this.setState({ birthDayDate: event.target.value });
            }}
          ></FormControl>
          <Button
            onClick={() => {
              this.setState({ flag: true });
            }}
          >
            Submit
          </Button>
          {this.state.flag ? (
            <div>
              <Party date={this.state.birthDayDate} />
            </div>
          ) : (
            <div></div>
          )}
        </Form>
      </div>
    );
  }
}
export default App;
