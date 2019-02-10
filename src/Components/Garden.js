import React, { Component } from 'react';
import Plot from './Plot'
import Profile from './Profile'
import Task from './Task'

class Garden extends Component {

    render() {
      let data = this.props.data;
      console.log(data);
      let plots
      if(data.gardens[0].plots){
        plots = data.gardens[0].plots.map(plot => {
          return (
              <Plot key={plot.id} params={plot} />
          );
        });
      }
      let users
      if(data.users){
        users = data.users.map(user => {
          return (
              <Profile key={user.name} params={user} />
          );
        });
      }
      let tasks
      if(data.tasks){
        tasks = data.tasks.map(task => {
          return (
              <Task key={task.name} params={task} />
          );
        });
      }
      return (
        <div className="Garden">
          <h1>{data.gardens[0].name}</h1>

          <h2>Plots</h2>
          <div className="Plots">
            {plots}
          </div>

          <h2>Tasks</h2>
          <div className="Tasks">
            {tasks}
          </div>

          <h2>People</h2>
          <div className="People">
            {users}
          </div>
                    <h2>People</h2>
                    <div className="People">
                      {users}
                    </div>
        </div>
      );
    }
}
export default Garden;
