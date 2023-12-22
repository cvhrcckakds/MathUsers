import CustomButton from "../Button/CustomButton";
import "./Header.css";
import "../Button/CustomButton";
import { useState } from "react";
import InfoBox from "./../InfoBox/InfoBox";
import Modal from "../Modal/Modal";

const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {
  const[modalGoster, setModalGoster]=useState(false)
  const [basilanButton, setBasilanButton] = useState(null);
  const menuIsimleri = ["Anasayfa", "Hakkımızda", "Ürünler", "İletişim"];
  return (
    <header className="header">
      <div className="header-logo">MATHUSER</div>
      <nav className="navbar">
        {menuIsimleri.map((menuIsmi) => (
          <a> {menuIsmi} </a>
        ))}
      </nav>

      <div className="header-right">
        {basilanButton ? (
          <CustomButton
            buttonTitle={`${basilanButton} olarak Çıkış Yap`}
            buttonColor={"red"}
            onClick={() => {
              if (basilanButton === "Kullanıcı") {
                setAktifKullanici(aktifKullaniciSayisi - 1);
              }
              setBasilanButton(null);
            }}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setAktifKullanici(aktifKullaniciSayisi);
                setBasilanButton("Kullanıcı");
              }}
              buttonTitle={"Kullanıcı Girişi"}
              buttonColor={"cadetblue"}
            />
            <CustomButton
              onClick={() => {
                setBasilanButton("Yönetici");
              }}
              buttonTitle={"Admin Girişi"}
              buttonColor={"orangered"}
            />
            <CustomButton onClick={()=>setModalGoster(true)} buttonTitle={"Kayıt Ol"} buttonColor={"green"} />
          </>
        )}
        {basilanButton === "Yönetici" && (
          <InfoBox
            infoMetin={"Aktif Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}

        {basilanButton === "Kullanıcı" && (
          <InfoBox
            infoMetin={"Sizinle Birlikte Kullanıcı Sayısı"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
      </div>

    {modalGoster===true &&(
  <Modal setModalGoster={setModalGoster} />
    )}
    </header>
  );
};

export default Header;
