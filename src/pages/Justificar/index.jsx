import { useState } from "react";
import BodyFrame from "@components/body-frame";
import Head from "@components/Head";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./styles.css";

const Justificar = () => {
    const [selectedDate, setSelectedDate] = useState("23 DE NOV DE 2024");
    const [justification, setJustification] = useState("");

    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

    const handleDayClick = (day) => {
    setSelectedDate(`${day} DE NOV DE 2024`);
    };

    const handleJustify = () => {
    if (!justification.trim()) {
        alert("Por favor, insira uma justificativa.");
        return;
    }
    alert("Falta justificada com sucesso!");
    };

    return (
    <BodyFrame>
        <Head title="Justificar" />
        <a href="/home">
        <FaRegCircleXmark className="content-icon" />
        </a>
        <h1 className="center-text">Justificar Faltas</h1>
        <div className="divider">
            <div className="calendar-header">
                <span id="selected-date">{selectedDate}</span>
            </div>
        </div>
        <div className="calendar-container">
        <div className="calendar">
            <div className="weekdays">
            {["D", "S", "T", "Q", "Q", "S", "S"].map((weekday) => (
                <span className="weekday" key={weekday}>{weekday}</span>
            ))}
            </div>
            <div className="divider-thin" />
            <div id="days-container" className="days">
            {daysInMonth.map((day) => (
                <div
                key={day}
                className={`day ${selectedDate.split(" ")[0] === day.toString() ? "selected" : ""}`}
                onClick={() => handleDayClick(day)}
                >
                {day}
                </div>
            ))}
            </div>
        </div>

        <div className="justify-section">
            <h3 className="justify-title">JUSTIFICATIVA</h3>
            <textarea className="justify-textarea"
            id="justification"
            maxLength="250"
            placeholder="Digite sua justificativa..."
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            ></textarea>
            <label htmlFor="file-upload" className="file-label">
            Enviar arquivo
            </label>
            <input type="file" id="file-upload" className="justify-input" style={{ display: "none" }} />
        </div>

        <button className="justify-btn" onClick={handleJustify}>
            Justificar
        </button>
        </div>
    </BodyFrame>
    );
};

export default Justificar;
