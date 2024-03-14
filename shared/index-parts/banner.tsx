import { Section } from "../components/section";
import { StaticStat } from "../components/stat";
import { FontPackageVersion } from "../data-import/version";
import { joinCls } from "../utils/join-classes";

export function Banner() {
    return (
        <Section className="banner">
            <h1 className={joinCls("banner-title")}>Iosevka</h1>
            <div className="functional-button-row banner-stats">
                <StaticStat quantity={FontPackageVersion} description="Version" />
                <a
                    className="main-button install-button"
                    href="https://github.com/be5invis/Iosevka/releases"
                >
                    <span className="label">📦 Download Fonts</span>
                </a>
                <a className="main-button install-button" href="customizer">
                    <span className="label">Customize</span>
                </a>
                <div className="install-button-split">
                    <a className="sub-button" href="https://github.com/be5invis/Iosevka">
                        <span className="label">Repository</span>
                    </a>
                    <a className="sub-button" href="specimen">
                        <span className="label">Specimen</span>
                    </a>
                </div>
            </div>
            <div className="banner-scroll-down-arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Section>
    );
}
