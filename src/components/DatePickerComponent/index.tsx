'use client';
import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {useDate} from "@/context/date";
import { registerLocale } from "react-datepicker";
import {ptBR} from "date-fns/locale/pt-BR";

registerLocale('pt-BR', ptBR);



const DatePickerComponent: React.FC = () => {
  const { selectDate, setSelectedDate } = useDate();

  return (
    <div style={{
      margin: "2em auto",
    }}>
      < DatePicker
        selected={selectDate}
        onChange={setSelectedDate}
        locale="pt-BR"
        dateFormat={"dd/MM/yyyy"}
        className="custom-datepicker"
        placeholderText="DD/MM/AAAA"
      />
    </div>
  )
}

export default DatePickerComponent;