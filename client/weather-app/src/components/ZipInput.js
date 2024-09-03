import "../App.css";

function ZipInput() {
  return (
    <form className="App-body">
      <label style={{ paddingRight: "10px" }}>
        Zip Code:
        <input type="text" name="zip" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ZipInput;
