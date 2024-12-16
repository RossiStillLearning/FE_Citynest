import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Kalimat() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span style={{ color: "#211951", fontSize: "3rem", fontWeight: "bold" }}>
            Apa Itu CityNest?
          </span>
        </Accordion.Header>
        <Accordion.Body style={{ fontSize: "1.5rem" }}>
          "CityNest" adalah nama yang menggabungkan dua kata: "City" yang berarti kota, dan
          "Nest" yang berarti sarang atau tempat tinggal. Nama ini mencerminkan konsep sebuah
          kota yang menyediakan tempat tinggal yang aman, nyaman, dan inklusif bagi semua
          penghuninya. "Nest" melambangkan lingkungan yang hangat dan ramah, seperti sarang
          bagi burung, di mana penghuni kota dapat menemukan perumahan layak dan fasilitas
          yang mendukung kesejahteraan mereka. Sementara itu, "City" mencerminkan skala yang
          lebih besar—sebuah ruang urban yang dinamis, modern, dan terus berkembang, sejalan
          dengan prinsip keberlanjutan. CityNest dengan demikian menjadi simbol harapan bagi
          masa depan perkotaan yang lebih baik, di mana setiap orang memiliki akses ke hunian
          yang layak dan lingkungan yang lestari.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span style={{ color: "#211951", fontSize: "3rem", fontWeight: "bold" }}>
            Apa Manfaat CityNest
          </span>
        </Accordion.Header>
        <Accordion.Body style={{ fontSize: "1.5rem" }}>
          CityNest adalah sebuah platform digital inovatif yang dirancang untuk mengintegrasikan
          berbagai inisiatif guna memastikan akses yang merata bagi semua lapisan masyarakat
          terhadap perumahan yang layak, aman, dan terjangkau, sambil memberikan perhatian
          khusus pada pelestarian warisan budaya dan alam dunia. Platform ini juga bertujuan
          untuk mendorong urbanisasi yang inklusif dan berkelanjutan melalui partisipasi aktif
          dari masyarakat serta perencanaan kota yang terintegrasi dan holistik. Dengan menyediakan
          alat yang mendukung transparansi, keterlibatan publik, serta pengelolaan data yang cerdas,
          CityNest berfungsi sebagai pusat kolaborasi antara pemerintah, lembaga swasta, komunitas
          lokal, dan pemangku kepentingan lainnya untuk menciptakan lingkungan perkotaan yang ramah,
          lestari, dan mendukung kesejahteraan seluruh penghuninya.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Kalimat;
