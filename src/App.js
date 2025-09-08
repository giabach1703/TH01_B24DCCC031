import React, { useState, useEffect } from "react";

// ================== BÀI 1: ỨNG DỤNG ĐẾM SỐ ==================
function DisplayNumber({ value }) {
  return <h2>Giá trị hiện tại: {value}</h2>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>Bài 1: Ứng dụng Đếm số</h3>
      <DisplayNumber value={count} />
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginRight: "10px" }}
      >
        -
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// ================== BÀI 2: DANH SÁCH CÔNG VIỆC ==================
function Task({ name }) {
  return <li>{name}</li>;
}

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>Bài 2: Danh sách công việc</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, index) => (
          <Task key={index} name={t} />
        ))}
      </ul>
    </div>
  );
}

// ================== BÀI 3: ỨNG DỤNG ĐỔI MÀU NỀN ==================
function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        marginTop: "20px",
      }}
    />
  );
}

function ColorApp() {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>Bài 3: Ứng dụng đổi màu nền</h3>
      <button onClick={() => setColor("red")} style={{ marginRight: "10px" }}>
        red
      </button>
      <button onClick={() => setColor("green")} style={{ marginRight: "10px" }}>
        green
      </button>
      <button onClick={() => setColor("blue")} style={{ marginRight: "10px" }}>
        blue
      </button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <ColorBox color={color} />
    </div>
  );
}

// ================== BÀI 4: THẺ THÔNG TIN SINH VIÊN ==================
function StudentCard({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h4>{name}</h4>
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {showDetail && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

function StudentList() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
    { name: "Trần Thị B", age: 21, className: "CNTT2" },
    { name: "Lê Văn C", age: 22, className: "CNTT3" },
  ];

  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>Bài 4: Thẻ thông tin sinh viên</h3>
      {students.map((s, index) => (
        <StudentCard
          key={index}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

// ================== BÀI 5: ĐỒNG HỒ ==================
function TimeDisplay({ time }) {
  return <h2>{time}</h2>;
}

function ClockApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginBottom: "40px" }}>
      <h3>Bài 5: Đồng hồ</h3>
      <TimeDisplay time={time} />
    </div>
  );
}

// ================== APP CHÍNH ==================
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <CounterApp />
      <TodoApp />
      <ColorApp />
      <StudentList />
      <ClockApp />
    </div>
  );
}

export default App;
