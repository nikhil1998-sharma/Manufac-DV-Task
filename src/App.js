import "./App.css";
import { findMean, findMedian, findMode } from "./utils/calculateMMM";
import { segregateClassData, segregateGammaClassData } from "./data/classData";

function App() {
  const { class1, class2, class3 } = segregateClassData();
  const { class1Gamma, class2Gamma, class3Gamma } = segregateGammaClassData();

  return (
    <div className="App">
      <div className="table1">
        <table>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
          <tr>
            <th>Flavanoids Mean</th>
            <td>{findMean(class1)}</td>
            <td>{findMean(class2)}</td>
            <td>{findMean(class3)}</td>
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            <td>{findMedian(class1)}</td>
            <td>{findMedian(class2)}</td>
            <td>{findMedian(class3)}</td>
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            <td>{findMode(class1)}</td>
            <td>{findMode(class2)}</td>
            <td>{findMode(class3)}</td>
          </tr>
        </table>
      </div>

      <div className="table2">
        <table>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
          <tr>
            <th>Gamma Mean</th>
            <td>{findMean(class1Gamma)}</td>
            <td>{findMean(class2Gamma)}</td>
            <td>{findMean(class3Gamma)}</td>
          </tr>
          <tr>
            <th>Gamma Median</th>
            <td>{findMedian(class1Gamma)}</td>
            <td>{findMedian(class2Gamma)}</td>
            <td>{findMedian(class3Gamma)}</td>
          </tr>
          <tr>
            <th>Gamma Mode</th>
            <td>{findMode(class1Gamma)}</td>
            <td>{findMode(class2Gamma)}</td>
            <td>{findMode(class3Gamma)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
