import React from "react";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import CardFasilitas from "../components/cardfasilitas";
import CardRumah from "../components/cardrumah";
import { Container, Row, Col } from "react-bootstrap";
import Carosel from "../components/carosel";

function Perumahanpage() {
  return (
    <>
      <CustomNavbar />
      <Carosel  />
      
      {/* Fasilitas Section */}
      <section className="text-center my-5">
        <h1 style={{ color: "#211951" }}>Fasilitas</h1>
      </section>
      <Container className="my-5">
        <CardFasilitas />
      </Container>

      {/* Tipe Rumah Section */}
      <section className="text-center my-5">
        <h1 style={{ color: "#211951" }}>Tipe Rumah</h1>
      </section>
      
      {/* Centering the CardRumah components */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <CardRumah 
              image="https://awsimages.detik.net.id/community/media/visual/2023/07/13/rumah-murahdok-sikumbang-kementerian-pupr-4_169.jpeg?w=600&q=90" 
              city="Madiun" 
              project="Perumahan Citraland" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Col>
          <Col md={4} className="mb-4">
            <CardRumah 
              image="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/28/2023/09/26/IMG_4270-2734807404.jpeg" 
              city="Solo" 
              project="Perumahan Persis" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Col>
          <Col md={4} className="mb-4">
            <CardRumah 
              image="https://events.rumah123.com/wp-content/uploads/sites/38/2023/08/15120948/perumahan-residence-1024x614.jpg" 
              city="Madiun" 
              project="Perumahan Arema" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Perumahanpage;
