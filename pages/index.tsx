import Head from "next/head";

import { Banner } from "../shared/index-parts/banner";
import { CharacterVariantSampler } from "../shared/index-parts/character-variant-sampler";
import { Footer } from "../shared/index-parts/footer";
import { GrandIntro } from "../shared/index-parts/grand-intro";
import { LigationSampler } from "../shared/index-parts/ligature-sampler";
import { ProportionalSampler } from "../shared/index-parts/proportional";
import { StatDashboard } from "../shared/index-parts/stat-dashboard";
import { SupportedLanguagesList } from "../shared/index-parts/supported-languages-list";
import { TerminalSampler } from "../shared/index-parts/terminal-sampler";
import { WidthSampler } from "../shared/index-parts/width-sampler";

export default function Index() {
    return (
        <div className="page">
            <Head>
                <title>Iosevka</title>
            </Head>
            <Banner />
            <GrandIntro />
            <StatDashboard />
            <WidthSampler />
            <TerminalSampler />
            <CharacterVariantSampler />
            <LigationSampler />
            <ProportionalSampler />
            <SupportedLanguagesList />
            <Footer />
        </div>
    );
}
