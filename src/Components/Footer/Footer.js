import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        Designed and developed by 
        <a 
          className="github-link"
          href="https://github.com/silsc/"
          target='_blank'
          rel="noreferrer noopener"
        >
          &nbsp;Silvia Salat
        </a>
      </p>
    </div>
  );
}

export default Footer;