const DoneTable = ({ time, characters, wpm, accuracy }) => (
  <table>
    <tbody>
      <tr>
        <td>Time</td>
        <td>{time.toFixed(0)}s</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Characters</td>
        <td>{characters}</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>WPM</td>
        <td>{wpm}</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Accuracy</td>
        <td>{accuracy.toFixed(0)}%</td>
      </tr>
    </tbody>
  </table>
);

export default DoneTable;
