import {formatDate} from "../blog/utils";
import Link from "next/link";

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function NotFound() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Quellen
            </h1>
            <div>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www2.klett.de/sixcms/media.php/229/wd01_103552_K16_Marktwirtschaft_Planwirtschaft_02.1030682.pdf"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">klett</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321480/zentralverwaltungswirtschaft-planwirtschaft/"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">bpb</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.abipur.de/referate/stat/666681190.html"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">abipur</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://studyflix.de/wirtschaft/wirtschaftsordnung-4342"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">studyflix</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.hanisauland.de/wissen/lexikon/grosses-lexikon/z/zentralverwaltungswirtschaft.html"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">hanisauland</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://knowunity.de/knows/geographie-und-wirtschaftskunde-der-unterschied-zwischen-der-planwirtschaft-der-marktwirtschaft-a3676234-6eae-4c7d-9075-88f227c7d2ce"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">knowunity</p>
                </a>
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://simpleclub.com/lessons/industriekaufmann-frau-wirtschaftsordnungen---definition-unterscheidung"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">simpleclub</p>
                </a>
            </div>
        </section>
    )
}
