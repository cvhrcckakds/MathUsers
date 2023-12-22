import {useState} from "react";
import "./App.css";
import Card from "./componenets/Card/Card";
import Header from "./componenets/Header/Header";
import { personList } from "./constants/fakeData";

function App() {

  const [aktifKullanici,setAktifKullanici]= useState(15)
  return (
    <div>
      <Header aktifKullaniciSayisi={aktifKullanici} setAktifKullanici={setAktifKullanici} />
      <div className="card-container">
      {personList.map((person) => (
        <Card personInfo={person}/>
      ))}
      </div>
   
    </div>
  );
}

export default App;
