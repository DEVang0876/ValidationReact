import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: Todo.readFromStorage(),
    };
  }

  static readFromStorage() {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      try {
        localStorage.setItem("todos_v1", JSON.stringify(this.state.todos));
      } catch (e) {
        // ignore
      }
    }
  }

  handleChange = (e) => this.setState({ value: e.target.value });

  handleAdd = (e) => {
    e && e.preventDefault();
    const text = this.state.value.trim();
    if (!text) return;
    const newTodo = { id: Date.now(), text, done: false };
    this.setState((s) => ({ todos: [newTodo, ...s.todos], value: "" }));
  };

  toggle = (id) => {
    this.setState((s) => ({ todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) }));
  };

  remove = (id) => {
    this.setState((s) => ({ todos: s.todos.filter((t) => t.id !== id) }));
  };

  clearAll = () => this.setState({ todos: [] });

  render() {
    const { value, todos } = this.state;
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Todo (class)</h2>

        <form onSubmit={this.handleAdd} style={styles.form}>
          <input
            aria-label="New todo"
            value={value}
            onChange={this.handleChange}
            placeholder="Add a todo and press Enter"
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>

        <div style={styles.actions}>
          <span>{todos.length} items</span>
          <button onClick={this.clearAll} style={styles.clearButton} disabled={todos.length === 0}>
            Clear All
          </button>
        </div>

        <ul style={styles.list}>
          {todos.map((t) => (
            <li key={t.id} style={styles.listItem}>
              <label style={styles.label}>
                <input type="checkbox" checked={t.done} onChange={() => this.toggle(t.id)} />
                <span style={{ marginLeft: 8, textDecoration: t.done ? "line-through" : "none" }}>{t.text}</span>
              </label>
              <button onClick={() => this.remove(t.id)} style={styles.removeButton} aria-label={`Remove ${t.text}`}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "16px auto",
    padding: 16,
    background: "#fff",
    color: "#111",
    borderRadius: 8,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    fontFamily: "system-ui, sans-serif",
  },
  heading: { margin: "0 0 12px 0" },
  form: { display: "flex", gap: 8, marginBottom: 12 },
  input: { flex: 1, padding: "8px 10px", fontSize: 16, borderRadius: 6, border: "1px solid #ddd" },
  addButton: { padding: "8px 12px", borderRadius: 6, cursor: "pointer" },
  actions: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  clearButton: { padding: "6px 10px", borderRadius: 6, cursor: "pointer" },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #eee" },
  label: { display: "flex", alignItems: "center" },
  removeButton: { background: "transparent", border: "none", color: "#c00", cursor: "pointer" },
};

export default Todo;
