import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="p-4">

            <h1 className="text-3xl text-center font-bold mb-5">{t("main")}</h1>

            <div className="relative w-full max-w-4xl mx-auto">
                <video
                    src="/videos/burabai.mp4"
                    controls
                    autoPlay={false}
                    loop={false}
                    muted={false}
                    className="w-full rounded-lg shadow-lg"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="text-xl text-justify font-bold mb-4 mt-5">{t("mainTitle")}</p>
        </div>
    );
}
