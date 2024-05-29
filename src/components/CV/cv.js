
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../Assets/cv.pdf';
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Ensure the workerSrc is set correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Cv() {  // Use an uppercase first letter for the component name
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='resume-section'>
        <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </Button>
            </Row>

            <Row className="resume">
                <Document file={pdf} className="d-flex justify-content-center flex-column align-items-center" onLoadSuccess={onDocumentLoadSuccess}>
                    {/* <Page pageNumber={pageNumber} /> */}
                    {/* <p>
                        Page {pageNumber} of {numPages}
                    </p> */}
                    {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map((page) => {
                        return (
                        <Page
                            pageNumber={page}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            scale={width > 786 ? 1.5 : 0.6}
                        />
                        );
                    })}
                </Document>
            </Row>
            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </Button>
            </Row>
            <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
                <p>Here is my <a href="https://www.overleaf.com/read/gppjcsyjjmzx#82f13c" target="_blank" rel="noopener noreferrer">LaTex Resume template</a></p>
            </Row>
        </Container>
    </div>
  );
}

export default Cv;  // Use an uppercase first letter for the component name
