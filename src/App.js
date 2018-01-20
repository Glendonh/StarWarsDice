import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import {rollPool} from './rollFunctions'

class App extends Component {
  constructor () {
    super();
    this.state = {
        abilityDice: 0,
        proficiencyDice: 0,
        boostDice: 0,
        difficultyDice: 0,
        challengeDice: 0,
        setbackDice: 0,

        successCount: 0,
        advantageCount: 0,
        failureCount: 0,
        threatCount: 0,
        triumphCount: 0,
        despairCount: 0,

        showResults: false,
    }
  }

  rollAll = ()=> {
    var diceResult = rollPool(this.state)
    this.setState({
        ...diceResult,
        showResults: true
    })
  }  

  advantageText = ()=> {
    const {advantageCount, threatCount} = this.state
    if (advantageCount > threatCount) {
        return advantageCount - threatCount + ' Advantages';
    } else if (threatCount > advantageCount) {
        return threatCount - advantageCount + ' Threats';
    } else {
        return 0;
    }
  }

  successText = ()=> {
    const {successCount, failureCount} = this.state
    if (successCount > failureCount) {
        return successCount - failureCount + ' Successes';
    } else if (failureCount > successCount) {
        return failureCount - successCount + ' Failures';
    } else {
        return 0;
    }
  }

  showTriumphDespair = ()=> {
      const {triumphCount, despairCount} = this.state
      var badgeResult = [];
      for (var t = 0; t < triumphCount; t++) {
          badgeResult.push(<span key={t} className="badge badge-triumph">Triumph!</span>)
      }
      for (var d = 0; d < despairCount; d++) {
        badgeResult.push(<span key={d} className="badge badge-despair">Despair!</span>)
    }
      return badgeResult
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Dice Roller</h1>
        </header>
        <div className="container sectionBox">
        <div className="form-group">
            <h1>Standard Dice Pool</h1>
            <h3>Select the quantity of each die and press Roll</h3>
            <div className="row">
                <div className="col-sm-6 col-md-2">
                    <div className="dieType ability">Ability</div>
                    <select className="form-control" id="abilityDice" onChange ={(event)=>this.setState({abilityDice: parseInt(event.target.value, 10)})} >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-2">
                    <div className="dieType proficiency">Proficiency</div>
                    <select className="form-control" id="proficiencyDice" onChange ={(event)=>this.setState({proficiencyDice: parseInt(event.target.value, 10)})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-2">
                    <div className="dieType boost">Boost</div>
                    <select className="form-control" id="boostDice" onChange ={(event)=>this.setState({boostDice: parseInt(event.target.value, 10)})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-2">
                    <div className="dieType difficulty">Difficulty</div>
                    <select className="form-control" id="difficultyDice" onChange ={(event)=>this.setState({difficultyDice: parseInt(event.target.value, 10)})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-2">
                    <div className="dieType challenge">Challenge</div>
                    <select className="form-control" id="challengeDice" onChange ={(event)=>this.setState({challengeDice: parseInt(event.target.value, 10)})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-2">
                    <div className="dieType setback">Setback</div>
                    <select className="form-control" id="setbackDice" onChange ={(event)=>this.setState({setbackDice: parseInt(event.target.value, 10)})}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 centerButton">
                <Button bsSize="large" onClick={this.rollAll} bsStyle="info">Roll</Button>
                </div>
            </div>
        </div>
        {this.state.showResults ? (
          <div className="row">
          <div className="col-md-12 resultBox">
              <table className="table">
                  <thead>
                      <tr>
                          <th scope="col-2">Success</th>
                          <th scope="col-2">Failure</th>
                          <th scope="col-2">Net</th>
                          <th scope="col-2">Advantage</th>
                          <th scope="col-2">Threat</th>
                          <th scope="col-2">Net</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td id="successResult">
                          {this.state.successCount}
                          </td>
                          <td id="failureResult">
                          {this.state.failureCount}
                          </td>
                          <td id="netSuccess">
                          {this.successText()}
                          </td>
                          <td id="advantageResult">
                          {this.state.advantageCount}
                          </td>
                          <td id="threatResult">
                          {this.state.threatCount}
                          </td>
                          <td id="netAdvantage">
                          {
                            this.advantageText()
                          }
                          </td>
                      </tr>
                  </tbody>
              </table>
              
              {this.showTriumphDespair()}
              
          </div>
      </div>
        ) : null

        }
        
    </div>
        
      </div>
    );
  }
}

export default App;
