import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <form onSubmit={props.addItem}>
        <input
          onChange={props.handleChange}
          type="text"
          value={props.inputText}
          required
        />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
