import React from 'react';
// import Toggle from "./ToggleRenderProps";
// import ReactPlayer from "react-player";
// import { FormCheckbox } from "shards-react";
// import { MDBContainer } from "mdbreact";

import { Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles.css';
import Container from 'react-bootstrap/Container';

export function video() {
  return (
    <div>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h2>Videoplaylists Finansøkonom EØ</h2>
                <h6>Løsning af tidligere eksamensopgaver samt lidt teori</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Demo af online beregner</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/9537608/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Eksamensopgaverne brugt i ovenstående videoplaylist</h6>
                <Button size="sm" href="https://www.dropbox.com/s/cd9rf9p7xnc4si1/2022-01-07%20opgave.pdf?dl=1">
                  2022-01-07 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://www.dropbox.com/s/jh2zmhip3qkrm6u/2022-01-07%20VL.pdf?dl=1"
                >
                  2022-01-07 Eksamen Løsningsforslag
                </Button>
                <hr></hr>
                <Button size="sm" href="https://www.dropbox.com/s/coztsh4xud70xnd/2022-02-08%20opgave.pdf?dl=1">
                  2022-02-08 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://www.dropbox.com/s/ga63t1jpoiyiwpd/2022-02-08%20VL.pdf?dl=1"
                >
                  2022-02-08 Eksamen Løsningsforslag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Løsning af eksamensopgave 2023-01-06</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/10423637/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Eksamensopgaven brugt i ovenstående videoplaylist</h6>
                <Button
                  size="sm"
                  href="https://storage.googleapis.com/tepedu/E%C3%98%20Opgaver/2023-01-06%20Opgave.pdf"
                >
                  2023-01-06 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://storage.googleapis.com/tepedu/E%C3%98%20Opgaver/2023-01-06-l%C3%B8sningsforslag.xlsx"
                >
                  2023-01-06 Eksamen Løsningsforslag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Løsning af eksamensopgave 2020-02-26</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/7079949/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Eksamensopgaven brugt i ovenstående videoplaylist</h6>
                <Button
                  size="sm"
                  href="https://www.dropbox.com/s/ady994at6ej941t/2020-02-26%20E%C3%98%202.%20RE.docx?dl=1"
                >
                  2020-02-26 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://www.dropbox.com/s/vv1cacen9cshy2t/2020-02-26-EO-Reeksamen-vejl.docx?dl=1"
                >
                  2020-02-26 Eksamen Løsningsforslag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Løsning af eksamensopgave 2020-02-10</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/7044163/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Eksamensopgaven brugt i ovenstående videoplaylist</h6>
                <Button
                  size="sm"
                  href="https://www.dropbox.com/s/hrthcjzqfb3ntaa/2020-02-10%20EasyRun%20L%C3%B8beudstyr.pdf?dl=1"
                >
                  2020-02-10 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://www.dropbox.com/s/bc478nl0yezogsl/2020-02-10-EasyRun-vejl.docx?dl=1"
                >
                  2020-02-10 Eksamen Løsningsforslag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Løsning af eksamensopgave 2020-01-06</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/6840442/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Eksamensopgaven brugt i ovenstående videoplaylist</h6>
                <Button
                  size="sm"
                  href="https://www.dropbox.com/s/87mmd1ixdl4sjb0/2020-01-06%20GoLe%20Leget%C3%B8j.docx?dl=1"
                >
                  2020-01-06 Eksamen
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  href="https://www.dropbox.com/s/8a42bl9z4q2o2k6/2020-01-06%20GoLe%20Leget%C3%B8jVejledende%20l%C3%B8sning.docx?dl=1"
                >
                  2020-01-06 Eksamen Løsningsforslag
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>EØ Finansøkonom teori fra online timer</h6>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="demo"
                  className="embed-responsive-item"
                  src="https://vimeo.com/showcase/9432450/embed"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="p-0">
        <div class="p-3 mb-2 bg-white text-black">
          <div class="card">
            <div class="card-body">
              <div>
                <h6>Hent alle eksamensopgaver og løsninger</h6>
                <Button size="sm" href="https://www.dropbox.com/sh/7pbxlqnbi0nj16u/AADfRUT2ReQDVM9dsAcoHRcna?dl=1">
                  Alle Eksamensopgaver
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />

      <br />
    </div>
  );
}
