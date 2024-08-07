import "./Contact.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact anim-apear" id="contact">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">Kontakt</h2>
          <div className="row">
            <div className="col-6 mb-4">
              <a
                href="https://www.facebook.com/dawid.uniowski/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BsFacebook size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a
                href="https://www.instagram.com/dejvit_ok/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <AiFillInstagram size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a
                href="https://www.linkedin.com/in/dawid-uniowski-673b43287/"
                target=""
                rel="noreferrer"
              >
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BsLinkedin size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a
                href="https://github.com/dejvitxc9?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <FaGithubSquare size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <a href="mailto:dawid.uniowski@gmail.com">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BiLogoGmail size={30} className="primary-font-color" />
                    <p className="m-0 primary-font-color link">
                      dawid.uniowski@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <a href="tel:+48793070996">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <AiFillPhone size={30} className="primary-font-color" />
                    <p className="m-0 primary-font-color">+48 793 070 996</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">Formularz</h2>
          <form name="contact" action="/contact" method="post">
            <div className="mb-3">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name" className="form-label primary-font-color">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Imie i nazwisko"
                className="form-control"
                required
              />
              <label htmlFor="email" className="form-label primary-font-color">
                Adres e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@exp.com"
                className="form-control"
                required
              />
              <label
                htmlFor="message"
                className="form-label primary-font-color"
              >
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Wiadomość..."
                className="form-control"
                required
              />
              <button type="submit" className="btn btn-info primary-font-color">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
