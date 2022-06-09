const Footer = ({ t }) => (
  <div>
    <div>{t('footer.date', { date: new Date() })}</div>
  </div>
);

export default Footer;