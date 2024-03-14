export function Footer() {
    const currentYear = new Date().getFullYear();
    return <div className="footer">Copyright (c) 2015-{currentYear} Belleve Invis.<br/>MIGRATION TEST 01</div>;
}
